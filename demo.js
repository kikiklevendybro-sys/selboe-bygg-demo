const stage = document.querySelector("[data-preview-stage]");
const deviceButtons = document.querySelectorAll("[data-device]");
const fullscreenButton = document.querySelector("[data-fullscreen]");
const conceptButtons = document.querySelectorAll("[data-concept]");
const previewFrame = document.querySelector("[data-preview-frame]");
const previewTitle = document.querySelector("[data-preview-title]");
const openCurrent = document.querySelector("[data-open-current]");

const conceptTitles = {
  "variant-a.html": "Utgave A · Arkitekt",
  "variant-b.html": "Utgave B · Lokal varme",
  "variant-c.html": "Utgave C · Premium mørk"
};

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

conceptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.concept;

    conceptButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    if (previewFrame && target) {
      previewFrame.src = target;
    }

    if (previewTitle && target) {
      previewTitle.textContent = conceptTitles[target] || "Valgt utgave";
    }

    if (openCurrent && target) {
      openCurrent.href = target;
    }
  });
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
