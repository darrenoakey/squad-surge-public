/**
 * Player input: keyboard (window-level), pointer drag/tap on the 3D stage only,
 * and explicit lane buttons. Interactions that originate on any interactive
 * control never reach the stage lane handler, so touching UI can't move the squad.
 */

export type Lane = 0 | 1 | 2;

export interface InputHandlers {
  move(direction: -1 | 1): void;
  setLane(lane: Lane): void;
  togglePause(): void;
  confirm(): void;
  /** Whether lane input is currently meaningful (a run is active). */
  canSteer(): boolean;
  /** Called on any user gesture so audio can unlock inside it. */
  gesture(): void;
}

const INTERACTIVE = 'button, a, input, select, textarea, [role="button"], [data-no-lane]';
const DRAG_STEP_PX = 36;
const TAP_SLOP_PX = 10;

function fromInteractive(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(INTERACTIVE) !== null;
}

/**
 * True only when the key event targets a control that will natively activate
 * on Space/Enter: an enabled, rendered control. A control hidden or disabled
 * by the action it just performed (e.g. Deploy) still holds focus until the
 * browser's focus fixup, and must not swallow the next shortcut.
 */
function onLiveControl(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const control = target.closest(INTERACTIVE);
  if (!control) return false;
  if (control instanceof HTMLButtonElement && control.disabled) return false;
  if (control.closest("[hidden], [inert]")) return false;
  return control.getClientRects().length > 0;
}

export function bindKeyboard(h: InputHandlers): () => void {
  const onKey = (e: KeyboardEvent): void => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const onControl = onLiveControl(e.target);
    switch (e.code) {
      case "ArrowLeft":
      case "KeyA":
        if (!h.canSteer()) return;
        e.preventDefault();
        h.gesture();
        h.move(-1);
        break;
      case "ArrowRight":
      case "KeyD":
        if (!h.canSteer()) return;
        e.preventDefault();
        h.gesture();
        h.move(1);
        break;
      case "Space":
        // A focused button already activates on Space; don't double-handle.
        if (onControl) return;
        e.preventDefault();
        h.gesture();
        h.togglePause();
        break;
      case "Escape":
      case "KeyP":
        e.preventDefault();
        h.gesture();
        h.togglePause();
        break;
      case "Enter":
        if (onControl) return;
        h.gesture();
        h.confirm();
        break;
      default:
        break;
    }
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}

/**
 * Drag left/right on the stage to step lanes; a short tap jumps straight to the
 * lane under the finger (stage split into thirds, matching the lane guides).
 */
export function bindStagePointer(stage: HTMLElement, h: InputHandlers): () => void {
  let pointerId: number | null = null;
  let startX = 0;
  let anchorX = 0;
  let travelled = 0;

  const down = (e: PointerEvent): void => {
    if (fromInteractive(e.target)) return;
    h.gesture();
    if (!h.canSteer() || pointerId !== null) return;
    pointerId = e.pointerId;
    startX = anchorX = e.clientX;
    travelled = 0;
    stage.setPointerCapture(e.pointerId);
    e.preventDefault();
  };
  const move = (e: PointerEvent): void => {
    if (e.pointerId !== pointerId) return;
    travelled = Math.max(travelled, Math.abs(e.clientX - startX));
    const dx = e.clientX - anchorX;
    if (Math.abs(dx) >= DRAG_STEP_PX) {
      h.move(dx < 0 ? -1 : 1);
      anchorX = e.clientX;
    }
  };
  const up = (e: PointerEvent): void => {
    if (e.pointerId !== pointerId) return;
    pointerId = null;
    if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
    if (travelled <= TAP_SLOP_PX && h.canSteer()) {
      const rect = stage.getBoundingClientRect();
      const t = (e.clientX - rect.left) / rect.width;
      h.setLane(t < 1 / 3 ? 0 : t < 2 / 3 ? 1 : 2);
    }
  };
  const cancel = (e: PointerEvent): void => {
    if (e.pointerId === pointerId) pointerId = null;
  };
  stage.addEventListener("pointerdown", down);
  stage.addEventListener("pointermove", move);
  stage.addEventListener("pointerup", up);
  stage.addEventListener("pointercancel", cancel);
  return () => {
    stage.removeEventListener("pointerdown", down);
    stage.removeEventListener("pointermove", move);
    stage.removeEventListener("pointerup", up);
    stage.removeEventListener("pointercancel", cancel);
  };
}
