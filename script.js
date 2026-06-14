const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeMenu = () => {
  nav?.classList.remove("is-open");
  header?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Åpne meny");
};

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  header?.classList.toggle("is-open", Boolean(isOpen));
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
  menuButton.setAttribute("aria-label", isOpen ? "Lukk meny" : "Åpne meny");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name")?.toString().trim() || "";
  const phone = data.get("phone")?.toString().trim() || "";
  const type = data.get("type")?.toString().trim() || "";
  const message = data.get("message")?.toString().trim() || "";

  const body = [
    `Navn: ${name}`,
    `Telefon: ${phone}`,
    `Prosjekttype: ${type}`,
    "",
    "Kort beskrivelse:",
    message
  ].join("\n");

  const mailto = new URL("mailto:askil.selboe@norgeshus.no");
  mailto.searchParams.set("subject", `Forespørsel om ${type || "byggeprosjekt"}`);
  mailto.searchParams.set("body", body);

  if (formNote) {
    formNote.textContent = "E-postklienten åpnes med forespørselen ferdig utfylt.";
  }

  window.location.href = mailto.toString();
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
