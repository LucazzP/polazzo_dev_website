/**
 * Polazzo Dev website JS
 * - Mobile nav toggle
 * - Header elevation on scroll
 * - Reveal-on-scroll animations
 * - Static contact form -> mailto
 */

const CONTACT_EMAIL = "lucas@polazzo.dev";

const I18N = {
  en: {
    "meta.title": "Polazzo Dev — Software on demand",
    "meta.description":
      "Polazzo Dev builds custom software on demand: mobile apps, websites, desktop apps, WhatsApp bots, and automation for startups and growing companies.",
    "meta.ogTitle": "Polazzo Dev — Software on demand",
    "meta.ogDescription":
      "Mobile apps, websites, desktop apps, WhatsApp bots, and automation. We design, build, and ship the right solution for your business.",
    "meta.ogLocale": "en_US",
    skip: "Skip to content",
    "header.tagline": "Software on demand",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.about": "About",
    "nav.quote": "Get a quote",
    "nav.toggle.open": "Open menu",
    "nav.toggle.close": "Close menu",

    "hero.eyebrow": "Polazzo Dev · Software house",
    "hero.title": "Build software that automates your business — and ships on time.",
    "hero.subtitle":
      "We design and develop custom solutions for startups and growing companies: mobile apps, websites, desktop apps, WhatsApp bots, and internal automation.",
    "hero.cta.primary": "Request a quote",
    "hero.cta.secondary": "Explore services",
    "hero.trust.fast.kpi": "Fast",
    "hero.trust.fast.label": "MVPs & iterations",
    "hero.trust.clean.kpi": "Clean",
    "hero.trust.clean.label": "Code + UI/UX",
    "hero.trust.reliable.kpi": "Reliable",
    "hero.trust.reliable.label": "Support & maintenance",
    "hero.card.chip.primary": "What we build",
    "hero.card.chip.secondary": "End-to-end delivery",
    "hero.card.list.mobile": "Mobile apps (Android/iOS)",
    "hero.card.list.flutter": "Flutter performance audit & coaching",
    "hero.card.list.desktop": "Desktop apps & tools",
    "hero.card.list.whatsapp": "WhatsApp bots & workflows",
    "hero.card.list.integrations": "Integrations (payments, CRM, APIs)",
    "hero.card.list.automation": "Automation & data pipelines",
    "hero.card.bottom": "Have an idea? We’ll help you shape scope, timeline, and the best stack for your budget.",
    "hero.card.link": "Tell us what you need →",

    "services.title": "Services",
    "services.lead": "Pick a single deliverable or a full product build. We collaborate with you from discovery to launch and beyond.",
    "services.mobile.title": "Mobile apps",
    "services.mobile.desc":
      "Android/iOS apps with great UX, fast performance, and analytics. Perfect for MVPs and long-term products.",
    "services.mobile.b1": "Flutter / React Native",
    "services.mobile.b2": "Push notifications",
    "services.mobile.b3": "App Store / Play Store release",

    "services.flutter.title": "Flutter performance audit & coaching",
    "services.flutter.desc":
      "We review your existing Flutter app, profile bottlenecks, and apply performance best practices to reduce jank and improve responsiveness. We can also mentor your team while implementing improvements.",
    "services.flutter.b1": "Profiling & bottleneck analysis",
    "services.flutter.b2": "Jank / startup improvements",
    "services.flutter.b3": "Team mentoring & best practices",

    "services.whatsapp.title": "WhatsApp bots",
    "services.whatsapp.desc":
      "Customer support, lead capture, reminders, and internal workflows — integrated with your systems.",
    "services.whatsapp.b1": "Flows + templates",
    "services.whatsapp.b2": "CRM / Google Sheets",
    "services.whatsapp.b3": "Human handoff",

    "services.desktop.title": "Desktop apps",
    "services.desktop.desc":
      "Internal tools and desktop products built for stability and speed — with secure data handling.",
    "services.desktop.b1": "Electron / .NET",
    "services.desktop.b2": "Offline-first options",
    "services.desktop.b3": "Auto updates",

    "services.automation.title": "Automation & integrations",
    "services.automation.desc": "Connect tools, remove manual work, and build reliable integrations across your stack.",
    "services.automation.b1": "APIs & webhooks",
    "services.automation.b2": "Payments & invoices",
    "services.automation.b3": "Dashboards & reports",

    "services.mvp.title": "MVPs for startups",
    "services.mvp.desc":
      "Validate your idea quickly with a focused MVP. We help you ship the smallest product that creates real value.",
    "services.mvp.b1": "Scope & roadmap",
    "services.mvp.b2": "Rapid iterations",
    "services.mvp.b3": "Metrics that matter",

    "process.title": "How we work",
    "process.lead": "Clear communication, predictable delivery, and quality you can build on.",
    "process.steps.discovery.title": "Discovery",
    "process.steps.discovery.desc": "We align on goals, users, success metrics, and constraints. You get a plan you can trust.",
    "process.steps.design.title": "Design",
    "process.steps.design.desc": "UX flows, UI screens, and a shared understanding of what we’re building before writing code.",
    "process.steps.build.title": "Build",
    "process.steps.build.desc": "We deliver in milestones with demos, reviews, and QA. You always know where the project stands.",
    "process.steps.launch.title": "Launch & support",
    "process.steps.launch.desc":
      "Deploy, monitor, and iterate. We can stay on for maintenance, improvements, and new features.",
    "process.stack.title": "Common tech stacks",
    "process.stack.ariaLabel": "Technology badges",

    "about.title": "About Polazzo Dev",
    "about.lead":
      "We’re a software house focused on shipping pragmatic solutions: beautiful interfaces, solid engineering, and measurable impact.",
    "about.body":
      "Whether you need a product from scratch or want to automate a process inside your company, we’ll help you choose the right approach and deliver with clarity.",
    "about.points.product.title": "Product mindset",
    "about.points.product.desc": "We care about outcomes: adoption, retention, and ROI.",
    "about.points.transparent.title": "Transparent delivery",
    "about.points.transparent.desc": "Milestones, demos, and documentation built into the process.",
    "about.points.support.title": "Long-term support",
    "about.points.support.desc": "Maintenance, improvements, and new features after launch.",
    "about.panel.title": "Typical engagement",
    "about.panel.timeline": "<strong>Timeline:</strong> 2–12+ weeks",
    "about.panel.model": "<strong>Model:</strong> fixed scope or monthly retainer",
    "about.panel.communication": "<strong>Communication:</strong> async + weekly check-in",
    "about.panel.deliverables": "<strong>Deliverables:</strong> code, docs, deployment",
    "about.panel.cta.primary": "Start a project",
    "about.panel.cta.secondary": "See capabilities",

    "contact.title": "Contact",
    "contact.lead": "Tell us what you want to build. We’ll reply with questions, suggestions, and a clear next step.",
    "contact.form.title": "Send a message",
    "contact.form.name.label": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "you@company.com",
    "contact.form.service.label": "What do you need?",
    "contact.form.service.choose": "Choose one",
    "contact.form.service.mobile": "Mobile app",
    "contact.form.service.flutter": "Flutter performance audit & coaching",
    "contact.form.service.desktop": "Desktop app",
    "contact.form.service.whatsapp": "WhatsApp bot",
    "contact.form.service.automation": "Automation / Integration",
    "contact.form.service.mvp": "MVP for startup",
    "contact.form.service.unsure": "Not sure yet",
    "contact.form.details.label": "Details",
    "contact.form.details.placeholder": "Goals, timeline, links, and any constraints…",
    "contact.form.submit": "Open email",
    "contact.form.note": "Default email target: <code>lucas@polazzo.dev</code> (edit in <code>script.js</code>).",

    "contact.quick.title": "Prefer quick details?",
    "contact.quick.desc": "Share a short brief and we’ll suggest the fastest path to value.",
    "contact.quick.email.label": "Email",
    "contact.quick.response.label": "Response time",
    "contact.quick.response.value": "Typically within 1 business day",
    "contact.quick.include.label": "What to include",
    "contact.quick.include.value":
      "Your goal, users, deadline, budget range (optional), and any examples you like.",
    "contact.quick.tip":
      "<strong>Tip:</strong> If you want a WhatsApp link here, tell me the number and country code and I’ll wire it up.",

    "footer.tagline": "Custom software on demand",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",

    "mail.subject": "Project inquiry",
    "mail.body.name": "Name",
    "mail.body.email": "Email",
    "mail.body.service": "Service",
    "mail.body.sentFrom": "Sent from polazzodev.com",
  },
  "pt-BR": {
    "meta.title": "Polazzo Dev — Software sob demanda",
    "meta.description":
      "Polazzo Dev cria software sob demanda: apps mobile, auditoria de performance Flutter + coaching, apps desktop, bots de WhatsApp e automação para startups e empresas em crescimento.",
    "meta.ogTitle": "Polazzo Dev — Software sob demanda",
    "meta.ogDescription":
      "Apps mobile, auditoria de performance Flutter + coaching, apps desktop, bots de WhatsApp e automação. Desenhamos, construímos e entregamos a solução certa para o seu negócio.",
    "meta.ogLocale": "pt_BR",
    skip: "Pular para o conteúdo",
    "header.tagline": "Software sob demanda",
    "nav.services": "Serviços",
    "nav.process": "Processo",
    "nav.about": "Sobre",
    "nav.quote": "Pedir orçamento",
    "nav.toggle.open": "Abrir menu",
    "nav.toggle.close": "Fechar menu",

    "hero.eyebrow": "Polazzo Dev · Software house",
    "hero.title": "Construa software que automatiza seu negócio — e entrega no prazo.",
    "hero.subtitle":
      "Desenhamos e desenvolvemos soluções sob medida para startups e empresas em crescimento: apps mobile, websites, apps desktop, bots de WhatsApp e automações internas.",
    "hero.cta.primary": "Pedir orçamento",
    "hero.cta.secondary": "Ver serviços",
    "hero.trust.fast.kpi": "Rápido",
    "hero.trust.fast.label": "MVPs e iterações",
    "hero.trust.clean.kpi": "Limpo",
    "hero.trust.clean.label": "Código + UI/UX",
    "hero.trust.reliable.kpi": "Confiável",
    "hero.trust.reliable.label": "Suporte e manutenção",
    "hero.card.chip.primary": "O que entregamos",
    "hero.card.chip.secondary": "Do início ao fim",
    "hero.card.list.mobile": "Apps mobile (Android/iOS)",
    "hero.card.list.flutter": "Auditoria de performance Flutter + coaching",
    "hero.card.list.desktop": "Apps e ferramentas desktop",
    "hero.card.list.whatsapp": "Bots e fluxos de WhatsApp",
    "hero.card.list.integrations": "Integrações (pagamentos, CRM, APIs)",
    "hero.card.list.automation": "Automação e pipelines de dados",
    "hero.card.bottom":
      "Tem uma ideia? Ajudamos você a definir escopo, timeline e a melhor stack para o seu orçamento.",
    "hero.card.link": "Conte o que você precisa →",

    "services.title": "Serviços",
    "services.lead":
      "Escolha uma entrega pontual ou a construção completa do produto. Colaboramos com você da descoberta ao lançamento — e além.",
    "services.mobile.title": "Apps mobile",
    "services.mobile.desc":
      "Apps Android/iOS com ótima UX, performance e analytics. Ideal para MVPs e produtos de longo prazo.",
    "services.mobile.b1": "Flutter / React Native",
    "services.mobile.b2": "Notificações push",
    "services.mobile.b3": "Publicação na App Store / Play Store",

    "services.flutter.title": "Auditoria de performance Flutter + coaching",
    "services.flutter.desc":
      "Analisamos seu app Flutter existente, identificamos gargalos com profiling e aplicamos boas práticas de performance para reduzir travamentos e melhorar a responsividade. Também podemos mentorar o time durante as melhorias.",
    "services.flutter.b1": "Profiling e análise de gargalos",
    "services.flutter.b2": "Melhorias de jank / startup",
    "services.flutter.b3": "Mentoria de time e boas práticas",

    "services.whatsapp.title": "Bots de WhatsApp",
    "services.whatsapp.desc":
      "Suporte ao cliente, captação de leads, lembretes e fluxos internos — integrados aos seus sistemas.",
    "services.whatsapp.b1": "Fluxos e templates",
    "services.whatsapp.b2": "CRM / Google Sheets",
    "services.whatsapp.b3": "Handoff para humano",

    "services.desktop.title": "Apps desktop",
    "services.desktop.desc":
      "Ferramentas internas e produtos desktop feitos para estabilidade e velocidade — com dados tratados com segurança.",
    "services.desktop.b1": "Electron / .NET",
    "services.desktop.b2": "Opções offline-first",
    "services.desktop.b3": "Atualizações automáticas",

    "services.automation.title": "Automação e integrações",
    "services.automation.desc": "Conecte ferramentas, reduza trabalho manual e construa integrações confiáveis na sua stack.",
    "services.automation.b1": "APIs e webhooks",
    "services.automation.b2": "Pagamentos e faturas",
    "services.automation.b3": "Dashboards e relatórios",

    "services.mvp.title": "MVPs para startups",
    "services.mvp.desc":
      "Valide sua ideia com um MVP objetivo. Ajudamos você a entregar o menor produto que gera valor de verdade.",
    "services.mvp.b1": "Escopo e roadmap",
    "services.mvp.b2": "Iterações rápidas",
    "services.mvp.b3": "Métricas que importam",

    "process.title": "Como trabalhamos",
    "process.lead": "Comunicação clara, entrega previsível e qualidade para evoluir.",
    "process.steps.discovery.title": "Descoberta",
    "process.steps.discovery.desc":
      "Alinhamos objetivos, usuários, métricas de sucesso e restrições. Você recebe um plano em que pode confiar.",
    "process.steps.design.title": "Design",
    "process.steps.design.desc":
      "Fluxos de UX, telas e entendimento compartilhado do que vamos construir antes de escrever código.",
    "process.steps.build.title": "Construção",
    "process.steps.build.desc":
      "Entregamos por marcos com demos, revisões e QA. Você sempre sabe como o projeto está.",
    "process.steps.launch.title": "Lançamento e suporte",
    "process.steps.launch.desc":
      "Deploy, monitoramento e iteração. Podemos ficar com manutenção, melhorias e novas features.",
    "process.stack.title": "Stacks mais comuns",
    "process.stack.ariaLabel": "Tecnologias",

    "about.title": "Sobre a Polazzo Dev",
    "about.lead":
      "Somos uma software house focada em entregar soluções pragmáticas: interfaces bonitas, engenharia sólida e impacto mensurável.",
    "about.body":
      "Seja para criar um produto do zero ou automatizar processos dentro da sua empresa, ajudamos você a escolher a melhor abordagem e entregar com clareza.",
    "about.points.product.title": "Mentalidade de produto",
    "about.points.product.desc": "Focamos em resultado: adoção, retenção e ROI.",
    "about.points.transparent.title": "Entrega transparente",
    "about.points.transparent.desc": "Marcos, demos e documentação fazem parte do processo.",
    "about.points.support.title": "Suporte de longo prazo",
    "about.points.support.desc": "Manutenção, melhorias e novas features após o lançamento.",
    "about.panel.title": "Engajamento típico",
    "about.panel.timeline": "<strong>Prazo:</strong> 2–12+ semanas",
    "about.panel.model": "<strong>Modelo:</strong> escopo fechado ou retainer mensal",
    "about.panel.communication": "<strong>Comunicação:</strong> assíncrona + check-in semanal",
    "about.panel.deliverables": "<strong>Entregáveis:</strong> código, docs, deploy",
    "about.panel.cta.primary": "Começar um projeto",
    "about.panel.cta.secondary": "Ver capacidades",

    "contact.title": "Contato",
    "contact.lead":
      "Conte o que você quer construir. Vamos responder com perguntas, sugestões e um próximo passo claro.",
    "contact.form.title": "Enviar mensagem",
    "contact.form.name.label": "Nome",
    "contact.form.name.placeholder": "Seu nome",
    "contact.form.email.label": "Email",
    "contact.form.email.placeholder": "voce@empresa.com",
    "contact.form.service.label": "O que você precisa?",
    "contact.form.service.choose": "Escolha uma opção",
    "contact.form.service.mobile": "App mobile",
    "contact.form.service.flutter": "Auditoria de performance Flutter + coaching",
    "contact.form.service.desktop": "App desktop",
    "contact.form.service.whatsapp": "Bot de WhatsApp",
    "contact.form.service.automation": "Automação / Integração",
    "contact.form.service.mvp": "MVP para startup",
    "contact.form.service.unsure": "Ainda não sei",
    "contact.form.details.label": "Detalhes",
    "contact.form.details.placeholder": "Objetivos, prazo, links e quaisquer restrições…",
    "contact.form.submit": "Abrir email",
    "contact.form.note": "Email padrão: <code>lucas@polazzo.dev</code> (edite em <code>script.js</code>).",

    "contact.quick.title": "Prefere algo rápido?",
    "contact.quick.desc": "Envie um briefing curto e sugerimos o caminho mais rápido para gerar valor.",
    "contact.quick.email.label": "Email",
    "contact.quick.response.label": "Tempo de resposta",
    "contact.quick.response.value": "Normalmente em até 1 dia útil",
    "contact.quick.include.label": "O que incluir",
    "contact.quick.include.value":
      "Seu objetivo, usuários, prazo, faixa de orçamento (opcional) e exemplos que você gosta.",
    "contact.quick.tip":
      "<strong>Dica:</strong> Se você quiser um link do WhatsApp aqui, me passe o número com DDI e eu configuro.",

    "footer.tagline": "Software sob demanda",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",

    "mail.subject": "Pedido de projeto",
    "mail.body.name": "Nome",
    "mail.body.email": "Email",
    "mail.body.service": "Serviço",
    "mail.body.sentFrom": "Enviado via polazzodev.com",
  },
};

function qs(sel, parent = document) {
  return parent.querySelector(sel);
}

function qsa(sel, parent = document) {
  return Array.from(parent.querySelectorAll(sel));
}

let CURRENT_LANG = "en";

function detectLanguage() {
  const raw = []
    .concat(navigator.languages || [])
    .concat(navigator.language || [])
    .filter(Boolean)
    .map((l) => String(l).toLowerCase());

  // If browser settings are Portuguese (pt-PT, pt-BR, etc), use pt-BR.
  if (raw.some((l) => l === "pt-br" || l.startsWith("pt"))) return "pt-BR";
  return "en";
}

function t(key) {
  return I18N[CURRENT_LANG]?.[key] ?? I18N.en?.[key] ?? "";
}

function applyI18n(lang) {
  CURRENT_LANG = I18N[lang] ? lang : "en";
  document.documentElement.lang = CURRENT_LANG;

  const title = t("meta.title");
  if (title) document.title = title;

  const setMeta = (selector, value) => {
    if (!value) return;
    const el = qs(selector);
    if (!el) return;
    el.setAttribute("content", value);
  };

  setMeta('meta[name="description"]', t("meta.description"));
  setMeta('meta[property="og:title"]', t("meta.ogTitle"));
  setMeta('meta[property="og:description"]', t("meta.ogDescription"));
  setMeta('meta[property="og:locale"]', t("meta.ogLocale"));

  for (const el of qsa("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    if (!key) continue;
    const value = t(key);
    if (!value) continue;
    el.textContent = value;
  }

  for (const el of qsa("[data-i18n-html]")) {
    const key = el.getAttribute("data-i18n-html");
    if (!key) continue;
    const value = t(key);
    if (!value) continue;
    el.innerHTML = value;
  }

  for (const el of qsa("[data-i18n-placeholder]")) {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) continue;
    const value = t(key);
    if (!value) continue;
    el.setAttribute("placeholder", value);
  }

  for (const el of qsa("[data-i18n-aria-label]")) {
    const key = el.getAttribute("data-i18n-aria-label");
    if (!key) continue;
    const value = t(key);
    if (!value) continue;
    el.setAttribute("aria-label", value);
  }
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
    btn.setAttribute("aria-label", t("nav.toggle.open") || "Open menu");
  };

  const open = () => {
    nav.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", t("nav.toggle.close") || "Close menu");
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

    const subject = encodeURIComponent(`${t("mail.subject") || "Project inquiry"} — ${service || "Polazzo Dev"}`);
    const body = encodeURIComponent(
      [
        `${t("mail.body.name") || "Name"}: ${name}`,
        `${t("mail.body.email") || "Email"}: ${email}`,
        `${t("mail.body.service") || "Service"}: ${service}`,
        "",
        message,
        "",
        "--",
        t("mail.body.sentFrom") || "Sent from polazzodev.com",
      ].join("\n")
    );

    // Use location.href to open user's default email client.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

applyI18n(detectLanguage());
setYear();
setupHeaderElevation();
setupNav();
setupReveal();
setupContactForm();

