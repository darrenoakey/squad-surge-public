import "./ui/fonts.css";
import "./style.css";
import { App } from "./ui/app";

const root = document.getElementById("root");
if (!root) throw new Error("Squad Surge: #root element is missing from index.html");

try {
  new App(root);
} catch (err) {
  // Boot failures must be visible, never a blank page or a fake demo.
  const message = err instanceof Error ? err.message : String(err);
  root.innerHTML = "";
  const box = document.createElement("div");
  box.className = "boot-error";
  box.setAttribute("role", "alert");
  box.dataset.testid = "fatal-error";
  const h = document.createElement("h1");
  h.textContent = "Squad Surge could not start";
  const p = document.createElement("p");
  p.textContent = message;
  box.append(h, p);
  root.append(box);
  console.error("[squad-surge] boot", err);
}
