(() => {
  "use strict";

  const root = document.documentElement;
  const header = document.getElementById("site-header");
  const nav = document.getElementById("site-nav");

  /* ---- Theme toggle (saved per browser) ---- */
  const themeBtn = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
    if (themeColor) themeColor.content = theme === "dark" ? "#0E1815" : "#F0F3EE";
  }

  applyTheme(root.dataset.theme === "dark" ? "dark" : "light");

  themeBtn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: theme still switches */ }
  });

  /* ---- Mobile menu ---- */
  const menuBtn = document.querySelector(".menu-toggle");

  function setMenu(open) {
    header.dataset.open = String(open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Close" : "Menu";
  }

  menuBtn.addEventListener("click", () => setMenu(header.dataset.open !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.dataset.open === "true") {
      setMenu(false);
      menuBtn.focus();
    }
  });

  /* ---- Highlight the nav link for the section in view ---- */
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => {
            if (a.getAttribute("href") === "#" + entry.target.id) {
              a.setAttribute("aria-current", "true");
            } else {
              a.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---- Copy email address ---- */
  const copyBtn = document.getElementById("copy-email");
  const status = document.getElementById("copy-status");
  const emailLink = document.querySelector(".email");
  let timer;

  copyBtn.addEventListener("click", async () => {
    const address = emailLink.textContent.trim();
    let ok = false;
    try {
      await navigator.clipboard.writeText(address);
      ok = true;
    } catch (e) {
      ok = false;
    }
    status.textContent = ok ? "Email address copied." : "Copy failed. Select the address above and copy it.";
    clearTimeout(timer);
    timer = setTimeout(() => { status.textContent = ""; }, 3000);
  });

  /* ---- Start the contour animation once the page has painted ---- */
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("ready")));
})();
