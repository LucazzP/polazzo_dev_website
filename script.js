/**
 * Polazzo Dev website JS
 * - Mobile nav toggle
 * - Header elevation on scroll
 * - Reveal-on-scroll animations
 * - Static contact form -> mailto
 */

const CONTACT_EMAIL = "hello@polazzodev.com";

function qs(sel, parent = document) {
  return parent.querySelector(sel);
}

function qsa(sel, parent = document) {
  return Array.from(parent.querySelectorAll(sel));
}

function setYear() {
  const el = qs("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupHeaderElevation() {
  const header = qs("[data-elevate]");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-elevated", window.scrollY > 6);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupNav() {
  const btn = qs("[data-nav-toggle]");
  const nav = qs("[data-nav]");
  if (!btn || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
  };

  const open = () => {
    nav.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
  };

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) close();
    else open();
  });

  // Close menu after click on a link (mobile)
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.tagName.toLowerCase() !== "a") return;
    close();
  });

  // Close on escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) close();
  });
}

function setupReveal() {
  const items = qsa("[data-reveal]");
  if (!items.length) return;

  const revealNow = (el) => el.classList.add("is-visible");

  // Prefer reduced motion
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (prefersReduced) {
    items.forEach(revealNow);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealNow(entry.target);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.12 }
  );

  for (const el of items) io.observe(el);
}

function setupContactForm() {
  const form = qs("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const subject = encodeURIComponent(`Project inquiry — ${service || "Polazzo Dev"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        message,
        "",
        "--",
        "Sent from polazzodev.com",
      ].join("\n")
    );

    // Use location.href to open user's default email client.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

setYear();
setupHeaderElevation();
setupNav();
setupReveal();
setupContactForm();

