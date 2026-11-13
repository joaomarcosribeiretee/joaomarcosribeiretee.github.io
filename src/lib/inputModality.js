// Tracks how the user last interacted, as <html data-input="keyboard|pointer">.
//
// Browsers disagree on whether a script-driven focus() (modal opening, focus restored
// on close) should match :focus-visible after a mouse or touch interaction. This makes
// it deterministic: the focus rules in App.css hide the ring while the last input was a
// pointer, and a single keypress (Tab, Enter, Esc...) brings it back.

let installed = false;

const MODIFIERS = new Set(["Shift", "Control", "Alt", "Meta", "CapsLock"]);

export const installInputModality = () => {
  if (installed || typeof document === "undefined") return;
  installed = true;

  const root = document.documentElement;
  const set = (mode) => {
    if (root.dataset.input !== mode) root.dataset.input = mode;
  };

  set("pointer");
  document.addEventListener("keydown", (e) => !MODIFIERS.has(e.key) && set("keyboard"), true);
  document.addEventListener("pointerdown", () => set("pointer"), true);
};
