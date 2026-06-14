(function () {
  const icons = {
    "arrow-down": '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    "calendar-check": '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M3 10h18"/><path d="m8 16 2.5 2.5L16 13"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16Z"/><path d="M4 20c4-6 8-9 16-16"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    maximize2: '<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/>',
    "maximize-2": '<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    "message-square": '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
    monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>',
    "mountain-snow": '<path d="m3 20 6-11 4 7 2-3 6 7Z"/><path d="m9 9 2 3 2-2 2 3"/><path d="M8 3h.01"/><path d="M17 6h.01"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/>',
    "phone-call": '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/><path d="M15 3a6 6 0 0 1 6 6"/><path d="M15 7a2 2 0 0 1 2 2"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    "shield-check": '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="m9 12 2 2 4-5"/>',
    shovel: '<path d="M2 22 12 12"/><path d="m14 10-4-4 4-4 8 8-4 4Z"/><path d="m7 17 3 3"/>',
    smartphone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    warehouse: '<path d="M3 21V8l9-5 9 5v13"/><path d="M7 21V11h10v10"/><path d="M7 15h10"/><path d="M7 19h10"/>'
  };

  const normalize = (name) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

  window.lucide = {
    createIcons() {
      document.querySelectorAll("i[data-lucide]").forEach((node) => {
        const name = normalize(node.getAttribute("data-lucide") || "");
        const markup = icons[name];

        if (!markup) {
          return;
        }

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.innerHTML = markup;
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "2.1");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
        node.replaceWith(svg);
      });
    }
  };
})();
