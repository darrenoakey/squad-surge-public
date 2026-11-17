/**
 * Tasteful synthesized sound for Squad Surge — no audio assets.
 * The AudioContext is created lazily inside a user gesture so browsers never
 * log autoplay warnings. Muting is honoured immediately via a master gain.
 */

export type Cue = "fire" | "hit" | "kill" | "gateGood" | "gateBad" | "hurt" | "win" | "lose" | "ui";

export class SoundBoard {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private muted: boolean;
  private lastFire = 0;

  constructor(muted: boolean) {
    this.muted = muted;
  }

  get isMuted(): boolean {
    return this.muted;
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(muted ? 0 : 0.55, this.ctx.currentTime, 0.02);
    }
  }

  /** Must be called from inside a user gesture handler. */
  unlock(): void {
    if (!this.ctx) {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return; // No Web Audio: sound simply unavailable; toggle reflects it.
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.55;
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.ratio.value = 4;
      this.master.connect(comp).connect(this.ctx.destination);
      const len = Math.floor(this.ctx.sampleRate * 0.4);
      this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const ch = this.noise.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
    }
    if (this.ctx.state === "suspended") void this.ctx.resume();
  }

  get available(): boolean {
    return this.ctx !== null;
  }

  play(cue: Cue): void {
    const ctx = this.ctx;
    const out = this.master;
    if (!ctx || !out || this.muted || ctx.state !== "running") return;
    const t = ctx.currentTime;
    switch (cue) {
      case "fire":
        // Squads fire constantly: rate-limit to a soft, tight "tk".
        if (t - this.lastFire < 0.085) return;
        this.lastFire = t;
        this.noiseBurst(t, 0.045, 2600, 0.09, "bandpass");
        this.tone(t, "square", 880, 520, 0.035, 0.025);
        break;
      case "hit":
        this.noiseBurst(t, 0.06, 1400, 0.12, "bandpass");
        break;
      case "kill":
        this.tone(t, "triangle", 420, 160, 0.14, 0.16);
        this.noiseBurst(t, 0.12, 900, 0.14, "lowpass");
        break;
      case "gateGood":
        [523.25, 659.25, 783.99].forEach((f, i) =>
          this.tone(t + i * 0.06, "triangle", f, f, 0.16, 0.14),
        );
        break;
      case "gateBad":
        this.tone(t, "sawtooth", 330, 196, 0.28, 0.08);
        break;
      case "hurt":
        this.tone(t, "square", 180, 90, 0.18, 0.1);
        this.noiseBurst(t, 0.1, 500, 0.12, "lowpass");
        break;
      case "win":
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
          this.tone(t + i * 0.11, "triangle", f, f, 0.35, 0.16),
        );
        break;
      case "lose":
        [392, 330, 262].forEach((f, i) =>
          this.tone(t + i * 0.16, "triangle", f, f * 0.97, 0.3, 0.14),
        );
        break;
      case "ui":
        this.tone(t, "sine", 740, 990, 0.06, 0.08);
        break;
    }
  }

  private tone(
    start: number,
    type: OscillatorType,
    from: number,
    to: number,
    dur: number,
    peak: number,
  ): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(from, start);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(peak, start + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(g).connect(this.master!);
    osc.start(start);
    osc.stop(start + dur + 0.02);
  }

  private noiseBurst(
    start: number,
    dur: number,
    freq: number,
    peak: number,
    type: BiquadFilterType,
  ): void {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(peak, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    src.connect(f).connect(g).connect(this.master!);
    src.start(start);
    src.stop(start + dur + 0.02);
  }
}
