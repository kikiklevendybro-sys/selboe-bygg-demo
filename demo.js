const stage = document.querySelector("[data-preview-stage]");
const deviceButtons = document.querySelectorAll("[data-device]");
const fullscreenButton = document.querySelector("[data-fullscreen]");

const setDevice = (device) => {
  deviceButtons.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.device === device);
  });

  stage?.classList.toggle("is-mobile", device === "mobile");
  stage?.classList.toggle("is-desktop", device !== "mobile");
};

deviceButtons.forEach((button) => {
  button.addEventListener("click", () => setDevice(button.dataset.device));
});

fullscreenButton?.addEventListener("click", async () => {
  const target = document.querySelector(".preview-panel");

  if (!target || !document.fullscreenEnabled) {
    return;
  }

  if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    await target.requestFullscreen();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 720) {
    setDevice("mobile");
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
