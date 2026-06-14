const headerNav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");
const form = document.querySelector("[data-contact-form]");

const closeMenu = () => {
  headerNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Åpne meny");
};

menuButton?.addEventListener("click", () => {
  const open = !headerNav?.classList.contains("is-open");
  headerNav?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Lukk meny" : "Åpne meny");
});

headerNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const type = data.get("type")?.toString().trim() || "byggeprosjekt";
  const body = [
    `Navn: ${data.get("name") || ""}`,
    `Telefon: ${data.get("phone") || ""}`,
    `Prosjekttype: ${type}`,
    "",
    "Kort beskrivelse:",
    data.get("message") || ""
  ].join("\n");

  const mail = new URL("mailto:askil.selboe@norgeshus.no");
  mail.searchParams.set("subject", `Forespørsel om ${type}`);
  mail.searchParams.set("body", body);
  window.location.href = mail.toString();
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
