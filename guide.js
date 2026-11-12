document.querySelectorAll("[data-motion-toggle]").forEach((button) => {
  const flow = document.getElementById(button.getAttribute("aria-controls"));
  if (!flow) return;

  button.addEventListener("click", () => {
    const paused = flow.classList.toggle("paused");
    button.setAttribute("aria-pressed", String(paused));
    button.textContent = paused ? "Play animation" : "Pause animation";
  });
});
