/* ==========================================================================
   Request a service — application script
   Structure:
     1. Configuration / data   (EDIT EVERYTHING HERE)
     2. Icons (monochrome SVG)
     3. State & DOM references
     4. Utilities
     5. Category icon bar
     6. Dropdown component
     7. Modal manager
     8. Category services modal (accordion)
     9. Details modal (tabs + validation + review)
    10. Form submission (webhook)
    11. Inquiry modal (call / WhatsApp)
    12. Resource carousel
    13. Init
   ========================================================================== */

/* ==========================================================================
   1. CONFIGURATION
   - Replace categories, services, resources, form fields, webhook and
     contact details here. No other part of the app needs to change.
   - Google Sheets: the webhook endpoint receives the JSON payload and
     appends a row. Suggested columns: Timestamp, Category, Service,
     Name, Mobile, Email, Company, Budget.
   ========================================================================== */

const APP_CONFIG = {

  /* ---- Top categories (icon bar + Category dropdown) ------------------ */
  categories: [
    { id: "websites",    label: "Websites", navLabel: "Website", icon: "Icon/website.png", svg: "laptop" },
    { id: "apps",        label: "Apps",     navLabel: "Apps",    icon: "Icon/apps.png",    svg: "phone" },
    { id: "aiAutomation",label: "AI",       navLabel: "AI",      icon: "Icon/ai.png",      svg: "robot" },
    { id: "metaAds",     label: "Meta Ads", navLabel: "Meta Ads",icon: "Icon/meta.png",    svg: "meta" }
    // `icon` = image path/URL. Falls back to the built-in monochrome SVG if missing.
  ],

  /* ---- Services per category ------------------------------------------
     Used by: the Category "Select service" dropdown
              and the full-screen accordion popup.
     Add / remove / rename freely: { id, name, description }              */
  services: {
    websites: [
      { id: "business-corporate", name: "Business & Corporate Websites", description: "A professional multi-page site that presents your company, services, team and contact details clearly and builds trust with new customers." },
      { id: "landing-pages", name: "Landing Pages", description: "A focused single page built for one goal, such as collecting leads for a campaign, with a clear offer, short form and fast loading." },
      { id: "ecommerce", name: "E-commerce Websites", description: "Online stores with product catalogues, cart, secure checkout, payment gateway setup and order management so you can sell around the clock." },
      { id: "real-estate", name: "Real Estate Websites", description: "Project and property showcases with galleries, floor plans, location maps, enquiry forms and WhatsApp call buttons to capture buyer leads." },
      { id: "hotel-restaurant", name: "Hotel & Restaurant Websites", description: "Menus, room details, photo galleries, table or room enquiry forms and Google Maps links to bring in more bookings and walk-ins." },
      { id: "portfolio", name: "Portfolio Websites", description: "A clean showcase of your work, skills and client results for professionals, studios and creators who want to be found and hired." },
      { id: "education", name: "Educational Websites", description: "Engaging websites for schools, colleges, coaching centres and course providers, with programme details, admissions information, enquiry forms and resource pages." },
      { id: "wordpress", name: "WordPress Websites", description: "Easy-to-manage WordPress sites with a custom theme, so your team can update pages and blog posts without technical help." },
      { id: "cms", name: "CMS Websites", description: "Content-managed websites that let your team add, edit and publish pages, articles, media and updates without depending on a developer." },
      { id: "custom-websites", name: "Custom Websites", description: "Fully custom design and features built around your process, for needs that ready-made templates cannot meet." },
      { id: "redesign", name: "Website Redesign", description: "We refresh outdated sites with a modern look, better navigation and faster speed, while keeping your content and search rankings safe." },
      { id: "seo-ready", name: "SEO-ready Websites", description: "Clean code, fast loading, proper headings, meta tags, sitemap and schema so search engines can read your site and rank it." }
    ],
    apps: [
      { id: "react-vite", name: "React & Vite Applications", description: "Fast, app-like interfaces built with React and Vite, including installable progressive web apps that work well on phones." },
      { id: "nextjs", name: "Next.js Applications", description: "Server-rendered apps with excellent speed and SEO, ideal for public websites that also need logins, dashboards or dynamic content." },
      { id: "nodejs", name: "Node.js Backend Development", description: "Secure servers and APIs that handle your data, user accounts, payments and business logic reliably as you grow." },
      { id: "custom-web-apps", name: "Custom Web Applications", description: "Browser-based tools designed around your exact workflow, from booking systems to internal portals for staff and customers." },
      { id: "crm-erp", name: "CRM & ERP Systems", description: "Track leads, customers, sales, inventory and accounts in one system, with roles, reports and follow-up reminders for your team." },
      { id: "saas", name: "SaaS Platforms", description: "Subscription-based products with multi-tenant accounts, billing, plans and admin controls, ready to serve many customers at once." },
      { id: "dashboards", name: "Admin Dashboards", description: "Clear dashboards with charts, tables, filters and exports so owners can see sales, team activity and key numbers at a glance." },
      { id: "business-systems", name: "Business Management Systems", description: "Digital tools for attendance, payroll, project progress, payments and approvals that replace paperwork and manual follow-ups." },
      { id: "integrations", name: "API & Third-party Integrations", description: "Connect your software with payment gateways, WhatsApp, SMS, email, maps and other services so data flows without re-entry." },
      { id: "webhooks", name: "Webhook Integrations", description: "Set up reliable webhook connections that instantly send and receive events between your website, apps and third-party tools without manual updates." },
      { id: "cross-platform", name: "Mobile & Cross-platform Applications", description: "One codebase that runs on Android, iOS and the web, including GPS and camera features for field teams and customers." }
    ],
    aiAutomation: [
      { id: "ai-chatbots", name: "Custom AI Chatbots", description: "Chatbots trained on your business that answer questions, qualify visitors and hand over to your team when a human is needed." },
      { id: "website-assistants", name: "Website AI Assistants", description: "A smart assistant on your site that guides visitors, explains services or projects and captures their contact details around the clock." },
      { id: "whatsapp-chatbots", name: "WhatsApp AI Chatbots", description: "Automated WhatsApp replies in Hindi, English or Hinglish that share details, answer queries and book site visits or calls." },
      { id: "knowledge-base", name: "AI Knowledge-base Chatbots", description: "Upload your brochures, price lists and FAQs, and the bot answers from that material accurately instead of guessing." },
      { id: "ai-agents", name: "AI Agents", description: "Agents that complete multi-step tasks for you, such as researching, updating records, sending messages and reporting back." },
      { id: "workflow-automation", name: "Workflow Automation", description: "Connect your apps with tools like n8n so repetitive jobs, notifications and approvals run automatically without manual effort." },
      { id: "n8n-automation", name: "n8n Workflow Automation", description: "Custom n8n workflows that connect your forms, CRM, WhatsApp, email and business tools so routine tasks run automatically and reliably." },
      { id: "lead-automation", name: "Lead Automation", description: "Capture leads from forms, ads and calls, send them to your CRM, notify your team and trigger timely follow-ups automatically." },
      { id: "ai-crm", name: "AI-powered CRM", description: "A CRM that scores leads, suggests next actions, summarises conversations and reminds your team who to call and when." },
      { id: "document-automation", name: "Document & Data Automation", description: "Extract data from PDFs, invoices and forms, fill templates and generate reports or quotations automatically and accurately." },
      { id: "ai-api", name: "Custom AI API Integration", description: "Add AI features such as chat, summaries, translation or image reading into your own software through secure API connections." }
    ],
    metaAds: [
      { id: "meta-strategy", name: "Meta Ads Strategy", description: "A clear plan covering goals, budget, audience, offer and funnel, so every rupee you spend is aimed at measurable results." },
      { id: "fb-ig-campaigns", name: "Facebook & Instagram Campaigns", description: "We set up, launch and manage campaigns across feeds, stories and reels with the right structure, placements and schedule." },
      { id: "lead-generation", name: "Lead Generation", description: "Lead form and landing page campaigns that bring in genuine enquiries with names and phone numbers, ready for your sales team." },
      { id: "conversion", name: "Conversion Campaigns", description: "Campaigns optimised for actions that matter, such as purchases, calls, messages or site visit bookings, not just clicks." },
      { id: "audience-targeting", name: "Audience Targeting", description: "Reach people by location, age, interests and behaviour, plus custom and lookalike audiences built from your existing customers." },
      { id: "retargeting", name: "Retargeting", description: "Show ads again to people who visited your site, watched your videos or messaged you, and bring them back to take action." },
      { id: "ad-creative", name: "Ad Creative & Copy", description: "Eye-catching images, videos and persuasive Hindi or English copy designed to stop the scroll and drive a response." },
      { id: "pixel-capi", name: "Pixel & Conversion API", description: "Correct Meta Pixel and Conversion API setup so leads and sales are tracked accurately, even with browser privacy limits." },
      { id: "optimization", name: "Campaign Optimization", description: "Ongoing testing of audiences, creatives and budgets to lower your cost per lead and scale the ads that perform best." },
      { id: "reporting", name: "Performance Reporting", description: "Simple regular reports showing spend, leads, cost per result and what we will improve next, in plain language." }
    ]
  },

  /* ---- Stack resources (infinite carousel) ----------------------------
     `logo`  = built-in brand logo key (wordpress, supabase, n8n, github,
               rag) · `icon` = optional image URL · `mark` = fallback letter */
  resources: [
    { name: "WordPress", logo: "wordpress", icon: "", mark: "W" },
    { name: "Supabase",  logo: "supabase",  icon: "", mark: "S" },
    { name: "n8n",       logo: "n8n",       icon: "", mark: "n" },
    { name: "RAG",       logo: "rag",       icon: "", mark: "R" },
    { name: "GitHub",    logo: "github",    icon: "", mark: "G" }
  ],

  /* ---- "Fill your details" form ---------------------------------------
     Tabs and fields are fully configurable.
     Field shape: { id, label, type, required, placeholder, autocomplete,
                    options?, hint?, minlength?, maxlength? }
     Types: text | email | tel | url | textarea | select                */
  form: {
    tabs: [
      {
        id: "personal",
        label: "Personal",
        title: "Personal Details",
        fields: [
          { id: "name",    label: "Name",  type: "text", required: true, placeholder: "Your full name",   autocomplete: "name" },
          { id: "mobile",  label: "Mobile", type: "tel", required: true, placeholder: "9876543210", autocomplete: "tel", inputmode: "tel", hint: "Enter a 10-digit mobile number." },
          { id: "email",   label: "Email", type: "email", required: false, placeholder: "you@company.com", autocomplete: "email" }
        ]
      },
      {
        id: "company",
        label: "Company",
        title: "Company Details & Budget",
        fields: [
          { id: "company",     label: "Company name", type: "text", required: true, placeholder: "Your company", autocomplete: "organization" },
          { id: "website",     label: "Website",      type: "url",  required: false, placeholder: "https://",    autocomplete: "url" },
          { id: "budget",      label: "Budget",       type: "select", required: true,
            options: [
              "Under \u20B950,000",
              "\u20B950,000 \u2013 \u20B91,00,000",
              "\u20B91,00,000 \u2013 \u20B95,00,000",
              "\u20B95,00,000+",
              "Not sure yet"
            ] },
          { id: "notes",       label: "Project notes", type: "textarea", required: false, placeholder: "Tell us about your project…" }
        ]
      }
    ]
  },

  /* ---- Submission endpoint ---------------------------------------------
     Replace with your real webhook (Google Apps Script / n8n / backend).
     While it is the placeholder, submissions are simulated so the UI can
     be tested end to end.                                                */
  webhook: {
    url: "YOUR_WEBHOOK_URL"
  },

  /* ---- Submission channel ----------------------------------------------
     "whatsapp" → Submit opens WhatsApp with a prefilled message containing
     the details, category and service, addressed to contact.whatsapp.
     "webhook"  → Submit POSTs the JSON payload to webhook.url above.       */
  submit: {
    via: "whatsapp"
  },

  /* ---- Contact (Inquiry modal) ----------------------------------------- */
  contact: {
    phone: "916394172884",
    whatsapp: "916394172884"
  },

  /* ---- Header status button -------------------------------------------- */
  status: {
    label: "Status",
    message: "All systems operational."
  },

  /* ---- Misc UI strings / timing ---------------------------------------- */
  ui: {
    toastDuration: 5000,
    carouselSpeed: 34
  }
};

/* ==========================================================================
   2. ICONS — monochrome, currentColor only (Uber black & white)
   ========================================================================== */

const ICONS = {
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/>
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><circle cx="17" cy="17" r="3.7"/></svg>`,

  chip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
    <rect x="7.5" y="7.5" width="9" height="9" rx="1.5"/><rect x="10.5" y="10.5" width="3" height="3" rx=".5"/>
    <path d="M10 7.5V4M14 7.5V4M10 20v-3.5M14 20v-3.5M7.5 10H4M7.5 14H4M20 10h-3.5M20 14h-3.5"/></svg>`,

  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
    <rect x="4.5" y="5" width="15" height="16.5" rx="2.5"/><rect x="9" y="2.8" width="6" height="4.4" rx="1.6"/>
    <path d="M8.5 11.5h7M8.5 15h7M8.5 18.5h4.5"/></svg>`,

  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5.5 9l6.5 6.5L18.5 9"/></svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4.5 12.5l5 5 10-11"/></svg>`,

  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
    <path d="M4 12h16"/><path class="v-line" d="M12 4v16"/></svg>`,

  alert: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" fill="currentColor"/>
    <path d="M12 7.2v5.6" class="ic-hole-stroke" stroke-width="2.1" stroke-linecap="round"/>
    <circle cx="12" cy="16.4" r="1.3" class="ic-hole"/></svg>`,

  successToast: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" class="ic-bg"/>
    <path d="M7.6 12.3l3 3 5.8-6.3" fill="none" class="ic-fg" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  errorToast: `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" class="ic-bg"/>
    <path d="M12 7.2v5.6" class="ic-fg" stroke-width="2.1" stroke-linecap="round"/>
    <circle cx="12" cy="16.4" r="1.3" class="ic-fg-fill"/></svg>`,

  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M20.8 14.6A8.7 8.7 0 0 1 9.4 3.2a8.7 8.7 0 1 0 11.4 11.4z"/></svg>`,

  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3L19 19M19 5l-1.7 1.7M6.7 17.3L5 19"/></svg>`,

  call: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6"/></svg>`,

  /* Category icons (used when no image URL is configured) */
  laptop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="11.5" rx="1.6"/><path d="M1.8 19.5h20.4"/></svg>`,

  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.6"/><path d="M10.5 18.6h3"/></svg>`,

  robot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="4" y="8.5" width="16" height="10.5" rx="3"/><path d="M12 8.5V5.6"/>
    <circle cx="12" cy="4.2" r="1.4"/><path d="M2.6 12v3M21.4 12v3"/><path d="M9.5 16.5h5"/>
    <circle cx="9" cy="13.6" r="1.15" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="13.6" r="1.15" fill="currentColor" stroke="none"/></svg>`,

  meta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"/></svg>`
};

/* ==========================================================================
   3. STATE & DOM REFERENCES
   ========================================================================== */

const state = {
  category: null,          // { id, label }
  service: null,           // { id, name }
  formData: {},            // saved details values
  detailsComplete: false,
  submitting: false,
  activeStep: 0
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const dom = {
  categoryBar: $("#categoryBar"),
  form: $("#requestForm"),
  categoryDropdown: $("#categoryDropdown"),
  categoryToggle: $("#categoryToggle"),
  categoryMenu: $("#categoryMenu"),
  categoryError: $("#categoryError"),
  serviceDropdown: $("#serviceDropdown"),
  serviceToggle: $("#serviceToggle"),
  serviceMenu: $("#serviceMenu"),
  serviceError: $("#serviceError"),
  detailsBtn: $("#detailsBtn"),
  detailsDone: $("#detailsDone"),
  detailsError: $("#detailsError"),
  submitBtn: $("#submitBtn"),
  formNote: $("#formNote"),
  carousel: $("#resourceCarousel"),
  track: $("#resourceTrack"),
  inquiryBtn: $("#inquiryBtn"),
  inquiryChoices: $("#inquiryChoices"),
  categoryModal: $("#categoryModal"),
  categoryModalTitle: $("#categoryModalTitle"),
  accordion: $("#serviceAccordion"),
  detailsModal: $("#detailsModal"),
  detailsTabs: $("#detailsTabs"),
  detailsPanels: $("#detailsPanels"),
  detailsFoot: $("#detailsFoot"),
  inquiryModal: $("#inquiryModal"),
  toast: $("#toast"),
  themeToggle: $("#themeToggle"),
  themeIcon: $("#themeToggle .theme-icon"),
  statusBtn: $("#statusBtn"),
  previewCat: $("#previewCat"),
  previewSvc: $("#previewSvc"),
  previewSummary: $("#previewSummary"),
  previewScene: $("#previewScene"),
  previewHighlight: $("#previewHighlight")
};

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const MODAL_ANIM = REDUCED_MOTION ? 0 : 340;

/* ==========================================================================
   4. UTILITIES
   ========================================================================== */

function icon(name) {
  return ICONS[name] || "";
}

/* Fill every static [data-icon] placeholder in the document */
function hydrateIcons(root = document) {
  $$("[data-icon]", root).forEach(el => {
    if (!el.firstElementChild) el.innerHTML = icon(el.dataset.icon);
  });
}

function showInlineError(el, message) {
  if (!el) return;
  el.innerHTML = `<span data-icon="alert">${icon("alert")}</span><span></span>`;
  el.lastElementChild.textContent = message;
  el.hidden = false;
}

function clearInlineError(el) {
  if (el) el.hidden = true;
}

let toastTimer = null;

function toast(type, message) {
  const t = dom.toast;
  $(".toast-icon", t).innerHTML = type === "success" ? icon("successToast") : icon("errorToast");
  $(".toast-text", t).textContent = message;
  t.classList.remove("is-visible");
  requestAnimationFrame(() => t.classList.add("is-visible"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, APP_CONFIG.ui.toastDuration);
}

function hideToast() {
  dom.toast.classList.remove("is-visible");
}

/* ==========================================================================
   5. CATEGORY ICON BAR
   ========================================================================== */

function renderCategoryBar() {
  dom.categoryBar.innerHTML = "";

  APP_CONFIG.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-item";
    btn.setAttribute("aria-haspopup", "dialog");

    const iconWrap = document.createElement("span");
    iconWrap.className = "cat-icon";
    iconWrap.setAttribute("aria-hidden", "true");

    if (cat.icon) {
      const img = document.createElement("img");
      img.src = cat.icon;
      img.alt = "";
      img.loading = "lazy";
      iconWrap.appendChild(img);
    } else {
      iconWrap.innerHTML = icon(cat.svg);
    }

    const label = document.createElement("span");
    label.className = "cat-label";
    label.textContent = cat.navLabel || cat.label;

    btn.append(iconWrap, label);
    btn.setAttribute("aria-label", `Open ${(cat.navLabel || cat.label)} services`);
    btn.addEventListener("click", () => openCategoryModal(cat));

    dom.categoryBar.appendChild(btn);
  });
}

/* ==========================================================================
   6. DROPDOWN COMPONENT (keyboard accessible listbox)
   ========================================================================== */

function createDropdown({ root, toggle, menu, placeholder, onSelect, onDisabledClick }) {
  let options = [];
  let selected = null;
  let open = false;
  let focusIndex = -1;

  function optionEls() {
    return $$(".dropdown-option:not(.is-note)", menu);
  }

  function renderOptions() {
    menu.innerHTML = "";

    if (!options.length) {
      const note = document.createElement("li");
      note.className = "dropdown-option is-note";
      note.setAttribute("role", "option");
      note.setAttribute("aria-disabled", "true");
      note.textContent = "Select a category first";
      menu.appendChild(note);
      return;
    }

    options.forEach((opt, i) => {
      const li = document.createElement("li");
      li.className = "dropdown-option";
      li.setAttribute("role", "option");
      li.id = `${root.id}-opt-${i}`;
      li.tabIndex = -1;
      li.dataset.value = opt.value;
      li.setAttribute("aria-selected", String(selected && selected.value === opt.value));

      const text = document.createElement("span");
      text.textContent = opt.label;

      const check = document.createElement("span");
      check.className = "opt-check";
      check.setAttribute("aria-hidden", "true");
      check.innerHTML = icon("check");

      li.append(text, check);
      li.addEventListener("click", () => choose(i));
      menu.appendChild(li);
    });
  }

  function openMenu() {
    if (open) return;
    open = true;
    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    renderOptions();
    requestAnimationFrame(() => root.classList.add("is-open"));

    const els = optionEls();
    const idx = selected ? options.findIndex(o => o.value === selected.value) : -1;
    focusIndex = idx >= 0 ? idx : 0;
    if (els[focusIndex]) els[focusIndex].focus();
  }

  function closeMenu(refocus = true) {
    if (!open) return;
    open = false;
    root.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    setTimeout(() => { if (!open) menu.hidden = true; }, REDUCED_MOTION ? 0 : 180);
    if (refocus) toggle.focus();
  }

  function choose(i) {
    const opt = options[i];
    if (!opt) return;
    selected = opt;
    toggle.querySelector(".dropdown-text").textContent = opt.label;
    toggle.setAttribute("aria-label", `${placeholder}: ${opt.label}`);
    closeMenu(true);
    if (onSelect) onSelect(opt);
  }

  function moveFocus(delta) {
    const els = optionEls();
    if (!els.length) return;
    focusIndex = (focusIndex + delta + els.length) % els.length;
    els[focusIndex].focus();
  }

  toggle.addEventListener("click", () => {
    if (toggle.getAttribute("aria-disabled") === "true") {
      if (onDisabledClick) onDisabledClick();
      return;
    }
    open ? closeMenu(true) : openMenu();
  });

  toggle.addEventListener("keydown", e => {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      if (toggle.getAttribute("aria-disabled") === "true") {
        if (onDisabledClick) onDisabledClick();
        return;
      }
      if (!open) openMenu();
    }
  });

  menu.addEventListener("keydown", e => {
    switch (e.key) {
      case "ArrowDown": e.preventDefault(); moveFocus(1); break;
      case "ArrowUp":   e.preventDefault(); moveFocus(-1); break;
      case "Home":      e.preventDefault(); if (optionEls()[0]) optionEls()[0].focus(); break;
      case "End": {
        e.preventDefault();
        const els = optionEls();
        if (els.length) els[els.length - 1].focus();
        break;
      }
      case "Enter":
      case " ": {
        e.preventDefault();
        const active = document.activeElement;
        const els = optionEls();
        const i = els.indexOf(active);
        if (i >= 0) choose(i);
        break;
      }
      case "Escape": e.preventDefault(); closeMenu(true); break;
      case "Tab": closeMenu(false); break;
    }
  });

  document.addEventListener("pointerdown", e => {
    if (open && !root.contains(e.target)) closeMenu(false);
  });

  return {
    setOptions(list, keepValue = false) {
      options = list;
      if (!keepValue) {
        selected = null;
        toggle.querySelector(".dropdown-text").textContent = placeholder;
        toggle.setAttribute("aria-label", placeholder);
      }
      renderOptions();
    },
    setDisabled(isDisabled) {
      toggle.setAttribute("aria-disabled", String(isDisabled));
      if (isDisabled) closeMenu(false);
    },
    clear() {
      selected = null;
      toggle.querySelector(".dropdown-text").textContent = placeholder;
      toggle.setAttribute("aria-label", placeholder);
      renderOptions();
    },
    get value() { return selected; }
  };
}

/* ==========================================================================
   7. MODAL MANAGER (focus trap, ESC, scroll lock)
   ========================================================================== */

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const modalStack = [];
let savedScrollPad = "";

function lockScroll() {
  const sbw = window.innerWidth - document.documentElement.clientWidth;
  savedScrollPad = sbw > 0 ? `${sbw}px` : "";
  document.body.style.paddingRight = savedScrollPad;
  document.body.classList.add("no-scroll");
}

function unlockScroll() {
  document.body.classList.remove("no-scroll");
  document.body.style.paddingRight = "";
}

function openModal(modal) {
  if (modalStack.some(s => s.el === modal)) return;

  modalStack.push({ el: modal, opener: document.activeElement });
  modal.hidden = false;
  lockScroll();

  requestAnimationFrame(() => modal.classList.add("is-open"));

  setTimeout(() => {
    const target = modal.querySelector("[data-autofocus]") ||
      Array.from(modal.querySelectorAll(FOCUSABLE)).find(el => el.offsetParent !== null) ||
      modal;
    target.focus();
  }, REDUCED_MOTION ? 0 : 80);
}

function closeModal(modal) {
  const i = modalStack.findIndex(s => s.el === modal);
  if (i < 0) return;

  const [entry] = modalStack.splice(i, 1);
  modal.classList.remove("is-open");
  setTimeout(() => { modal.hidden = true; }, MODAL_ANIM);

  if (!modalStack.length) unlockScroll();
  if (entry.opener && document.contains(entry.opener)) entry.opener.focus();
}

function topModal() {
  return modalStack[modalStack.length - 1];
}

document.addEventListener("keydown", e => {
  const top = topModal();
  if (!top) return;

  if (e.key === "Escape") {
    e.preventDefault();
    closeModal(top.el);
    return;
  }

  if (e.key === "Tab") {
    const focusables = Array.from(top.el.querySelectorAll(FOCUSABLE))
      .filter(el => el.offsetParent !== null || el === document.activeElement);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (!top.el.contains(document.activeElement)) {
      e.preventDefault();
      first.focus();
    }
  }
});

/* Close buttons + backdrop click (card modals only) */
document.addEventListener("click", e => {
  const closeBtn = e.target.closest("[data-close]");
  if (closeBtn) {
    const modal = closeBtn.closest(".modal");
    if (modal) closeModal(modal);
  }
});

$$(".modal--card").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal(modal);
  });
});

/* ==========================================================================
   8. CATEGORY SERVICES MODAL (full-screen accordion)
   ========================================================================== */

function openCategoryModal(cat) {
  dom.categoryModalTitle.textContent = cat.navLabel || cat.label;
  buildAccordion(cat);
  openModal(dom.categoryModal);
}

function buildAccordion(cat) {
  const list = APP_CONFIG.services[cat.id] || [];
  dom.accordion.innerHTML = "";

  if (!list.length) {
    const p = document.createElement("p");
    p.className = "acc-empty";
    p.textContent = "Services for this category are coming soon.";
    dom.accordion.appendChild(p);
    return;
  }

  list.forEach((svc, i) => {
    const triggerId = `acc-t-${cat.id}-${i}`;
    const panelId = `acc-p-${cat.id}-${i}`;

    const item = document.createElement("div");
    item.className = "acc-item";

    const h = document.createElement("h3");
    h.className = "acc-h";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "acc-trigger";
    trigger.id = triggerId;
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", panelId);

    const title = document.createElement("span");
    title.className = "acc-title";
    title.textContent = svc.name;

    const plus = document.createElement("span");
    plus.className = "acc-plus";
    plus.setAttribute("aria-hidden", "true");
    plus.innerHTML = icon("plus");

    trigger.append(title, plus);

    const panel = document.createElement("div");
    panel.className = "acc-panel";
    panel.id = panelId;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", triggerId);

    const inner = document.createElement("div");
    inner.className = "acc-inner";

    const desc = document.createElement("p");
    desc.className = "acc-desc";
    desc.textContent = svc.description || "";

    inner.appendChild(desc);
    panel.appendChild(inner);
    h.appendChild(trigger);
    item.append(h, panel);
    dom.accordion.appendChild(item);

trigger.addEventListener("click", () => {
  const isOpen = trigger.getAttribute("aria-expanded") === "true";
  if (!isOpen) {
    dom.accordion.querySelectorAll(".acc-item.is-open").forEach(other => {
      other.classList.remove("is-open");
      const otr = other.querySelector(".acc-trigger");
      if (otr) otr.setAttribute("aria-expanded", "false");
    });
  }
  trigger.setAttribute("aria-expanded", String(!isOpen));
  item.classList.toggle("is-open", !isOpen);
});
  });
}

/* ==========================================================================
   9. DETAILS MODAL (tabs + validation + review)
   ========================================================================== */

function allFields() {
  return APP_CONFIG.form.tabs.flatMap(tab => tab.fields.map(f => ({ ...f, tabId: tab.id })));
}

function buildDetailsModal() {
  const tabs = APP_CONFIG.form.tabs;
  dom.detailsTabs.innerHTML = "";
  dom.detailsPanels.innerHTML = "";

  tabs.forEach((tab, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tab";
    btn.id = `tab-${tab.id}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-controls", `panel-${tab.id}`);
    btn.setAttribute("aria-selected", String(i === 0));
    btn.tabIndex = i === 0 ? 0 : -1;
    btn.textContent = tab.label;
    btn.addEventListener("click", () => goToStep(i));
    dom.detailsTabs.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "tab-panel";
    panel.id = `panel-${tab.id}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `tab-${tab.id}`);
    panel.hidden = i !== 0;

    const title = document.createElement("h3");
    title.className = "panel-title";
    title.textContent = tab.title;
    panel.appendChild(title);

    tab.fields.forEach(f => panel.appendChild(buildField(f)));
    dom.detailsPanels.appendChild(panel);
  });

  /* review "tab" panel (rendered on entry) */
  const reviewPanel = document.createElement("div");
  reviewPanel.className = "tab-panel";
  reviewPanel.id = "panel-review";
  reviewPanel.setAttribute("role", "tabpanel");
  reviewPanel.setAttribute("aria-labelledby", "tab-review");
  reviewPanel.hidden = true;
  dom.detailsPanels.appendChild(reviewPanel);

  const reviewTab = document.createElement("button");
  reviewTab.type = "button";
  reviewTab.className = "tab";
  reviewTab.id = "tab-review";
  reviewTab.setAttribute("role", "tab");
  reviewTab.setAttribute("aria-controls", "panel-review");
  reviewTab.setAttribute("aria-selected", "false");
  reviewTab.tabIndex = -1;
  reviewTab.textContent = "Review";
  reviewTab.addEventListener("click", () => goToStep(tabs.length));
  dom.detailsTabs.appendChild(reviewTab);

  /* keyboard: arrow navigation across tabs */
  dom.detailsTabs.addEventListener("keydown", e => {
    const tabsEls = $$(".tab", dom.detailsTabs);
    const i = tabsEls.indexOf(document.activeElement);
    if (i < 0) return;

    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % tabsEls.length;
    if (e.key === "ArrowLeft") next = (i - 1 + tabsEls.length) % tabsEls.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabsEls.length - 1;

    if (next !== null) {
      e.preventDefault();
      tabsEls[next].focus();
      tabsEls[next].click();
    }
  });

  renderFooter();
}

function buildField(f) {
  const wrap = document.createElement("div");
  wrap.className = "field";

  const label = document.createElement("label");
  label.className = "field-label";
  label.htmlFor = `f-${f.id}`;
  label.textContent = f.label;

  if (f.required) {
    const req = document.createElement("span");
    req.className = "req";
    req.textContent = " *";
    req.setAttribute("aria-hidden", "true");
    label.appendChild(req);
  }

  wrap.appendChild(label);

  if (f.hint) {
    const hint = document.createElement("span");
    hint.className = "field-hint";
    hint.id = `hint-${f.id}`;
    hint.textContent = f.hint;
    wrap.appendChild(hint);
  }

  let control;

  if (f.type === "select") {
    const selectWrap = document.createElement("div");
    selectWrap.className = "select-wrap";

    control = document.createElement("select");
    control.className = "select";

    const blank = document.createElement("option");
    blank.value = "";
    blank.textContent = "Select…";
    control.appendChild(blank);

    (f.options || []).forEach(opt => {
      const o = document.createElement("option");
      o.value = opt;
      o.textContent = opt;
      control.appendChild(o);
    });

    const arrow = document.createElement("span");
    arrow.className = "select-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = icon("chevron");

    selectWrap.append(control, arrow);
    wrap.appendChild(selectWrap);
  } else if (f.type === "textarea") {
    control = document.createElement("textarea");
    control.className = "textarea";
    control.rows = 3;
    if (f.placeholder) control.placeholder = f.placeholder;
    wrap.appendChild(control);
  } else {
    control = document.createElement("input");
    control.className = "input";
    control.type = f.type || "text";
    if (f.placeholder) control.placeholder = f.placeholder;
    if (f.inputmode) control.inputMode = f.inputmode;
    wrap.appendChild(control);
  }

  control.id = `f-${f.id}`;
  control.name = f.id;
  if (f.required) control.setAttribute("aria-required", "true");
  if (f.autocomplete) control.autocomplete = f.autocomplete;
  if (f.minlength) control.minLength = f.minlength;
  if (f.maxlength) control.maxLength = f.maxlength;
  if (f.hint) control.setAttribute("aria-describedby", `hint-${f.id}`);

  const err = document.createElement("p");
  err.className = "field-error";
  err.id = `err-${f.id}`;
  err.hidden = true;
  wrap.appendChild(err);

  control.addEventListener("input", () => clearFieldError(control));
  control.addEventListener("change", () => clearFieldError(control));

  return wrap;
}

function validateValue(f, raw) {
  const v = (raw || "").trim();

  if (f.required && !v) {
    return f.type === "select" ? `Please select ${article(f.label)} ${f.label.toLowerCase()}.` : `${f.label} is required.`;
  }
  if (!v) return "";

  if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
    return "Enter a valid email address.";
  }
  if (f.type === "tel") {
    let digits = v.replace(/\D/g, "");
    if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
    if (!/^[6-9]\d{9}$/.test(digits)) {
      return "Enter a valid 10-digit Indian mobile number.";
    }
  }
  if (f.type === "url" && !/^https?:\/\/.+\..+/i.test(v)) {
    return "Enter a valid URL, starting with https://";
  }
  if (f.minlength && v.length < f.minlength) {
    return `${f.label} must be at least ${f.minlength} characters.`;
  }
  if (f.maxlength && v.length > f.maxlength) {
    return `${f.label} must be at most ${f.maxlength} characters.`;
  }
  return "";
}

function article(label) {
  return /^[AEIOU]/i.test(label) ? "an" : "a";
}

function setFieldError(control, message) {
  const err = document.getElementById(`err-${control.name}`);
  if (!err) return;
  control.classList.add("is-invalid");
  control.setAttribute("aria-invalid", "true");
  control.setAttribute("aria-describedby", err.id);
  err.innerHTML = `<span data-icon="alert">${icon("alert")}</span><span></span>`;
  err.lastElementChild.textContent = message;
  err.hidden = false;
}

function clearFieldError(control) {
  const err = document.getElementById(`err-${control.name}`);
  control.classList.remove("is-invalid");
  control.removeAttribute("aria-invalid");
  if (err) err.hidden = true;
}

function stepFields(step) {
  const tabs = APP_CONFIG.form.tabs;
  if (step < tabs.length) return tabs[step].fields;
  return allFields();
}

function validateStep(step, shouldFocus = true) {
  let firstInvalid = null;

  stepFields(step).forEach(f => {
    const control = document.getElementById(`f-${f.id}`);
    if (!control) return;
    const msg = validateValue(f, control.value);
    if (msg) {
      setFieldError(control, msg);
      if (!firstInvalid) firstInvalid = control;
    } else {
      clearFieldError(control);
    }
  });

  if (firstInvalid && shouldFocus) {
    firstInvalid.focus();
    firstInvalid.scrollIntoView({ block: "center", behavior: REDUCED_MOTION ? "auto" : "smooth" });
  }
  return !firstInvalid;
}

function goToStep(step) {
  const tabs = APP_CONFIG.form.tabs;
  const totalSteps = tabs.length + 1; // + review

  /* Entering review requires every earlier step to be valid */
  if (step === tabs.length) {
    for (let i = 0; i < tabs.length; i++) {
      if (!validateStep(i, false)) {
        switchStep(i);
        validateStep(i, true);
        return;
      }
    }
    renderReview();
  }

  /* Jumping forward from a tab click validates the current step */
  if (step > state.activeStep && step < tabs.length && state.activeStep < tabs.length) {
    if (!validateStep(state.activeStep)) return;
  }

  switchStep(Math.min(step, totalSteps - 1));
}

function switchStep(step) {
  state.activeStep = step;

  $$(".tab", dom.detailsTabs).forEach((t, i) => {
    const on = i === step;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
  });

  $$(".tab-panel", dom.detailsPanels).forEach((p, i) => {
    p.hidden = i !== step;
  });

  renderFooter();
}

function renderFooter() {
  const tabs = APP_CONFIG.form.tabs;
  const step = state.activeStep;
  dom.detailsFoot.innerHTML = "";

  const makeBtn = (label, kind, onClick) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `btn ${kind}`;
    b.textContent = label;
    b.addEventListener("click", onClick);
    return b;
  };

  if (step > 0) {
    dom.detailsFoot.appendChild(makeBtn("Back", "btn--ghost", () => goToStep(step - 1)));
  }

  if (step < tabs.length - 1) {
    dom.detailsFoot.appendChild(makeBtn("Continue", "btn--primary", () => {
      if (validateStep(step)) goToStep(step + 1);
    }));
  } else if (step === tabs.length - 1) {
    dom.detailsFoot.appendChild(makeBtn("Review", "btn--primary", () => goToStep(tabs.length)));
  } else {
    dom.detailsFoot.appendChild(makeBtn("Save details", "btn--primary", saveDetails));
  }
}

function renderReview() {
  const panel = document.getElementById("panel-review");
  panel.innerHTML = "";

  APP_CONFIG.form.tabs.forEach((tab, tabIndex) => {
    const group = document.createElement("div");
    group.className = "review-group";

    const head = document.createElement("div");
    head.className = "review-group-head";

    const titleText = document.createElement("span");
    titleText.textContent = tab.title;

    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "review-edit";
    edit.textContent = "Edit";
    edit.setAttribute("aria-label", `Edit ${tab.title}`);
    edit.addEventListener("click", () => goToStep(tabIndex));

    head.append(titleText, edit);
    group.appendChild(head);

    const dl = document.createElement("dl");

    tab.fields.forEach(f => {
      const row = document.createElement("div");
      row.className = "review-row";

      const dt = document.createElement("dt");
      dt.textContent = f.label;

      const dd = document.createElement("dd");
      const control = document.getElementById(`f-${f.id}`);
      const value = control ? control.value.trim() : "";
      dd.textContent = value || "\u2014";

      row.append(dt, dd);
      dl.appendChild(row);
    });

    group.appendChild(dl);
    panel.appendChild(group);
  });
}

function saveDetails() {
  for (let i = 0; i < APP_CONFIG.form.tabs.length; i++) {
    if (!validateStep(i, false)) {
      switchStep(i);
      validateStep(i, true);
      return;
    }
  }

  allFields().forEach(f => {
    const control = document.getElementById(`f-${f.id}`);
    state.formData[f.id] = control ? control.value.trim() : "";
  });

  state.detailsComplete = true;
  dom.detailsDone.hidden = false;
  dom.detailsBtn.setAttribute("aria-label", "Fill your details — completed, edit");
  clearInlineError(dom.detailsError);
  closeModal(dom.detailsModal);
  toast("success", "Details saved. You can edit them any time.");
}

function openDetailsModal() {
  openModal(dom.detailsModal);
}

function resetDetails() {
  state.formData = {};
  state.detailsComplete = false;
  dom.detailsDone.hidden = true;
  dom.detailsBtn.setAttribute("aria-label", "Fill your details");
  $$(".input, .select, .textarea", dom.detailsPanels).forEach(el => {
    el.value = "";
    clearFieldError(el);
  });
  switchStep(0);
}

/* ==========================================================================
   10. FORM SUBMISSION (webhook)
   ========================================================================== */

function setSubmitting(isBusy) {
  state.submitting = isBusy;
  const btn = dom.submitBtn;
  const label = $(".btn-label", btn);
  const spinner = $(".spinner", btn);

  btn.disabled = isBusy;
  btn.setAttribute("aria-busy", String(isBusy));
  spinner.hidden = !isBusy;
  label.textContent = isBusy ? "Submitting…" : "Submit";
}

async function sendToWebhook(payload) {
  const url = (APP_CONFIG.webhook.url || "").trim();

  /* Demo mode: no endpoint configured yet → simulate a round trip */
  if (!url || url === "YOUR_WEBHOOK_URL") {
    console.warn("[service-request] WEBHOOK_URL is not configured — submission simulated.", payload);
    await new Promise(r => setTimeout(r, 900));
    return { ok: true, simulated: true };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw new Error(`Server responded with ${res.status}`);
  return { ok: true };
}

function resetForm() {
  state.category = null;
  state.service = null;
  categoryDropdown.clear();
  serviceDropdown.clear();
  serviceDropdown.setOptions([]);
  serviceDropdown.setDisabled(true);
  resetDetails();
  clearInlineError(dom.categoryError);
  clearInlineError(dom.serviceError);
  clearInlineError(dom.detailsError);
  dom.formNote.hidden = true;
  updatePreview();
}

async function handleSubmit(e) {
  e.preventDefault();
  if (state.submitting) return;

  dom.formNote.hidden = true;
  clearInlineError(dom.categoryError);
  clearInlineError(dom.serviceError);
  clearInlineError(dom.detailsError);

  if (!state.category) {
    showInlineError(dom.categoryError, "Please select a category.");
    dom.categoryToggle.focus();
    return;
  }

  if (!state.service) {
    showInlineError(dom.serviceError, "Please select a service.");
    dom.serviceToggle.focus();
    return;
  }

  if (!state.detailsComplete) {
    showInlineError(dom.detailsError, "Please fill your details before submitting.");
    openDetailsModal();
    return;
  }

  const payload = {
    category: state.category.label,
    service: state.service.name,
    ...state.formData,
    timestamp: new Date().toISOString()
  };

  const via = (APP_CONFIG.submit && APP_CONFIG.submit.via) || "whatsapp";

  setSubmitting(true);

  try {
    if (via === "whatsapp") {
      const opened = openWhatsAppSubmit(payload);
      if (!opened) throw new Error("WhatsApp window was blocked");
      await new Promise(r => setTimeout(r, 700));
      toast("success", "Details sent to WhatsApp \u2014 press send there to complete your request.");
      resetForm();
    } else {
      await sendToWebhook(payload);
      toast("success", "Request submitted \u2014 we\u2019ll get back to you shortly.");
      resetForm();
    }
  } catch (err) {
    console.error(err);
    toast("error", "Couldn\u2019t open WhatsApp. Please allow pop-ups for this site and try again.");
    showFormNote("We couldn\u2019t open WhatsApp. Your details are saved \u2014 please try Submit again.");
  } finally {
    setSubmitting(false);
  }
}

function buildWhatsAppMessage(payload) {
  const lines = [
    "New service request",
    "",
    `Category: ${payload.category}`,
    `Service: ${payload.service}`
  ];
  allFields().forEach(f => {
    const v = (payload[f.id] || "").trim();
    if (v) lines.push(`${f.label}: ${v}`);
  });
  return lines.join("\n");
}

function openWhatsAppSubmit(payload) {
  const num = APP_CONFIG.contact.whatsapp;
  const text = buildWhatsAppMessage(payload);
  const url = `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  const win = window.open(url, "_blank", "noopener");
  if (win) return true;
  window.location.href = url;
  return true;
}

function showFormNote(message) {
  dom.formNote.innerHTML = `<span data-icon="alert">${icon("alert")}</span><span></span>`;
  dom.formNote.lastElementChild.textContent = message;
  dom.formNote.hidden = false;
}

/* ==========================================================================
   11. INQUIRY MODAL (call / WhatsApp)
   ========================================================================== */

function buildInquiry() {
  const { phone, whatsapp } = APP_CONFIG.contact;
  dom.inquiryChoices.innerHTML = "";

  const choices = [
    {
      iconName: "call",
      title: "Call us",
      sub: phone,
      href: `tel:${phone}`,
      label: `Call ${phone}`
    },
    {
      iconName: "whatsapp",
      title: "WhatsApp",
      sub: "Chat with us on WhatsApp",
      href: `https://wa.me/${whatsapp}`,
      label: `Chat on WhatsApp at ${whatsapp}`
    }
  ];

  choices.forEach(c => {
    const a = document.createElement("a");
    a.className = "choice";
    a.href = c.href;
    if (c.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.setAttribute("aria-label", c.label);

    const iconWrap = document.createElement("span");
    iconWrap.className = "choice-icon";
    iconWrap.setAttribute("aria-hidden", "true");
    iconWrap.innerHTML = icon(c.iconName);

    const text = document.createElement("span");
    text.className = "choice-text";
    const strong = document.createElement("strong");
    strong.textContent = c.title;
    const small = document.createElement("small");
    small.textContent = c.sub;
    text.append(strong, small);

    const arrow = document.createElement("span");
    arrow.className = "choice-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = icon("arrowRight");

    a.append(iconWrap, text, arrow);
    a.addEventListener("click", () => closeModal(dom.inquiryModal));
    dom.inquiryChoices.appendChild(a);
  });
}

/* ==========================================================================
   12. RESOURCE CAROUSEL (JS marquee + finger/mouse drag)
   ========================================================================== */

/* Inline brand marks — monochrome via CSS `fill: currentColor` */
const RESOURCE_LOGOS = {
  wordpress: `<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/></svg>`,
  supabase: `<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/></svg>`,
  n8n: `<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/></svg>`,
  github: `<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  /* RAG — custom document + retrieval magnifier (no brand icon exists) */
  rag: `<svg viewBox="0 0 24 24" style="fill:none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true"><path d="M6 2.75h7.6L18.6 7.7V15"/><path d="M13.6 2.75V7.7h5"/><path d="M8.7 11.4h4.6M8.7 14.4h3"/><circle cx="14.9" cy="16.4" r="3.5"/><path d="M17.5 19l2.6 2.6"/></svg>`
};

const mq = { groupW: 0, offset: 0, speed: 0, paused: false, dragging: false, last: 0 };

function buildCarousel() {
  const group = document.createElement("div");
  group.className = "rc-group";

  APP_CONFIG.resources.forEach(r => {
    const item = document.createElement("div");
    item.className = "rc-item";

    const mark = document.createElement("div");
    mark.className = "rc-mark";

    if (r.icon) {
      const img = document.createElement("img");
      img.src = r.icon;
      img.alt = "";
      img.loading = "lazy";
      mark.appendChild(img);
    } else if (r.logo && RESOURCE_LOGOS[r.logo]) {
      mark.innerHTML = RESOURCE_LOGOS[r.logo];
    } else {
      mark.textContent = r.mark || r.name.charAt(0);
    }
    mark.setAttribute("aria-hidden", "true");

    const name = document.createElement("div");
    name.className = "rc-name";
    name.textContent = r.name;

    item.append(mark, name);
    group.appendChild(item);
  });

  dom.track.innerHTML = "";
  dom.track.appendChild(group);

  const clone = group.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  dom.track.appendChild(clone);

  const measure = () => {
    mq.groupW = group.offsetWidth;
    mq.speed = mq.groupW / (APP_CONFIG.ui.carouselSpeed || 34); /* px per second */
    wrapOffset();
    applyTransform();
  };
  measure();
  window.addEventListener("resize", measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  /* ---- Drag (mouse + finger) ---------------------------------------- */
  let startX = 0;
  let startOffset = 0;

  dom.carousel.addEventListener("pointerdown", e => {
    mq.dragging = true;
    startX = e.clientX;
    startOffset = mq.offset;
    dom.carousel.classList.add("is-dragging");
    try { dom.carousel.setPointerCapture(e.pointerId); } catch (_) {}
  });

  dom.carousel.addEventListener("pointermove", e => {
    if (!mq.dragging) return;
    mq.offset = startOffset + (e.clientX - startX);
    wrapOffset();
    applyTransform();
  });

  const endDrag = e => {
    if (!mq.dragging) return;
    mq.dragging = false;
    dom.carousel.classList.remove("is-dragging");
    try { dom.carousel.releasePointerCapture(e.pointerId); } catch (_) {}
  };
  dom.carousel.addEventListener("pointerup", endDrag);
  dom.carousel.addEventListener("pointercancel", endDrag);

  /* ---- Auto-scroll loop (paused on hover / while dragging) ---------- */
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  function wrapOffset() {
    if (!mq.groupW) return;
    while (mq.offset <= -mq.groupW) mq.offset += mq.groupW;
    while (mq.offset > 0) mq.offset -= mq.groupW;
  }

  function applyTransform() {
    dom.track.style.transform = `translate3d(${mq.offset}px,0,0)`;
  }

  function tick(t) {
    if (!mq.last) mq.last = t;
    const dt = Math.min((t - mq.last) / 1000, 0.1);
    mq.last = t;
    if (!mq.paused && !mq.dragging && mq.groupW && !reduced.matches) {
      mq.offset -= mq.speed * dt;
      wrapOffset();
      applyTransform();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  dom.carousel.addEventListener("mouseenter", () => { mq.paused = true; });
  dom.carousel.addEventListener("mouseleave", () => { mq.paused = false; });
}

/* ==========================================================================
   12b. SERVICE PREVIEW (left summary + right mockup scene)
   ========================================================================== */

/* Mockup scenes, viewBox 0 0 400 300. `badge` marks where the category
   icon sits inside the scene so the highlight box can frame it. */
const PREVIEW_SCENES = {
  websites: {
    badge: { x: 328, y: 224, r: 36 },
    body: `<rect x="28" y="30" width="344" height="240" rx="14" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M28 70H372" stroke="currentColor" stroke-width="3"/>
      <circle cx="50" cy="50" r="5" fill="currentColor"/><circle cx="70" cy="50" r="5" fill="currentColor"/><circle cx="90" cy="50" r="5" fill="currentColor"/>
      <rect x="48" y="92" width="150" height="16" rx="8" fill="currentColor" opacity=".8"/>
      <rect x="48" y="124" width="220" height="10" rx="5" fill="currentColor" opacity=".3"/>
      <rect x="48" y="144" width="190" height="10" rx="5" fill="currentColor" opacity=".3"/>
      <rect x="48" y="176" width="96" height="32" rx="16" fill="currentColor"/>
      <rect x="230" y="92" width="110" height="80" rx="10" fill="currentColor" opacity=".18"/>`
  },
  apps: {
    badge: { x: 272, y: 62, r: 34 },
    body: `<rect x="138" y="24" width="124" height="252" rx="20" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M186 40h28" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
      <rect x="156" y="64" width="40" height="40" rx="9" fill="currentColor" opacity=".3"/>
      <rect x="206" y="64" width="40" height="40" rx="9" fill="currentColor" opacity=".3"/>
      <rect x="156" y="114" width="40" height="40" rx="9" fill="currentColor" opacity=".3"/>
      <rect x="206" y="114" width="40" height="40" rx="9" fill="currentColor" opacity=".18"/>
      <rect x="156" y="164" width="40" height="40" rx="9" fill="currentColor" opacity=".18"/>
      <rect x="206" y="164" width="40" height="40" rx="9" fill="currentColor" opacity=".3"/>
      <rect x="156" y="222" width="90" height="24" rx="12" fill="currentColor"/>`
  },
  aiAutomation: {
    badge: { x: 332, y: 66, r: 34 },
    body: `<rect x="44" y="46" width="184" height="66" rx="18" fill="currentColor" opacity=".14"/>
      <rect x="64" y="66" width="130" height="9" rx="4.5" fill="currentColor" opacity=".5"/>
      <rect x="64" y="84" width="90" height="9" rx="4.5" fill="currentColor" opacity=".35"/>
      <rect x="170" y="130" width="196" height="66" rx="18" fill="currentColor" opacity=".3"/>
      <rect x="190" y="150" width="150" height="9" rx="4.5" fill="currentColor" opacity=".85"/>
      <rect x="190" y="168" width="110" height="9" rx="4.5" fill="currentColor" opacity=".7"/>
      <rect x="44" y="234" width="312" height="38" rx="19" fill="none" stroke="currentColor" stroke-width="3"/>
      <circle cx="336" cy="253" r="12" fill="currentColor"/>`
  },
  metaAds: {
    badge: { x: 322, y: 236, r: 34 },
    body: `<rect x="56" y="36" width="288" height="228" rx="16" fill="none" stroke="currentColor" stroke-width="3"/>
      <rect x="76" y="56" width="248" height="106" rx="10" fill="currentColor" opacity=".18"/>
      <rect x="76" y="180" width="150" height="14" rx="7" fill="currentColor" opacity=".8"/>
      <rect x="76" y="204" width="110" height="10" rx="5" fill="currentColor" opacity=".3"/>
      <rect x="76" y="226" width="96" height="26" rx="13" fill="currentColor"/>`
  }
};

function glyphAt(name, x, y, size) {
  const src = ICONS[name];
  if (!src) return "";
  const m = src.match(/^<svg([^>]*)>/);
  const attrs = m ? m[1] : "";
  const inner = src.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}"${attrs}>${inner}</svg>`;
}

function renderPreviewScene(cat) {
  if (!cat) {
    return `<svg class="scene-svg" viewBox="0 0 400 300" role="img" aria-label="Select a category to preview">
      <rect x="28" y="30" width="344" height="240" rx="14" fill="none" stroke="currentColor" stroke-width="3" opacity=".4" stroke-dasharray="10 8"/>
      <g opacity=".45">${glyphAt("grid", 176, 126, 48)}</g>
    </svg>`;
  }
  const p = PREVIEW_SCENES[cat.id];
  if (!p) return "";
  const b = p.badge;
  const badge = `<circle cx="${b.x}" cy="${b.y}" r="${b.r}" style="fill:var(--chip)" stroke="currentColor" stroke-width="3"/>` +
    glyphAt(cat.svg, b.x - b.r, b.y - b.r, b.r * 2);
  return `<svg class="scene-svg" viewBox="0 0 400 300" role="img" aria-label="${cat.label} preview">${p.body}${badge}</svg>`;
}

function updatePreview() {
  const cat = state.category;
  const svc = state.service;

  dom.previewCat.textContent = cat ? cat.label : "Preview";
  dom.previewSvc.textContent = svc ? svc.name : (cat ? "Choose a service" : "Choose a category and service");

  let summary = "Pick a category, then a service, and the preview will update here.";
  if (cat && svc) {
    const found = (APP_CONFIG.services[cat.id] || []).find(s => s.id === svc.id);
    summary = (found && found.description) || `Our ${cat.label.toLowerCase()} services.`;
  } else if (cat) {
    summary = `Explore our ${cat.label.toLowerCase()} services — select one to preview it.`;
  }
  dom.previewSummary.textContent = summary;

  dom.previewScene.innerHTML = renderPreviewScene(cat);

  const hl = dom.previewHighlight;
  const scene = cat && PREVIEW_SCENES[cat.id];
  if (scene) {
    const b = scene.badge;
    const pad = 8;
    hl.style.left = (((b.x - b.r - pad) / 400) * 100) + "%";
    hl.style.top = (((b.y - b.r - pad) / 300) * 100) + "%";
    hl.style.width = (((b.r * 2 + pad * 2) / 400) * 100) + "%";
    hl.style.height = (((b.r * 2 + pad * 2) / 300) * 100) + "%";
    hl.hidden = false;
  } else {
    hl.hidden = true;
  }
}

/* ==========================================================================
   13. INIT
   ========================================================================== */

let categoryDropdown;
let serviceDropdown;

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (_) {}
  dom.themeToggle.setAttribute("aria-pressed", String(dark));
  dom.themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  dom.themeIcon.innerHTML = dark ? icon("sun") : icon("moon");
}

function initHeader() {
  const stored = (() => { try { return localStorage.getItem("theme"); } catch (_) { return null; } })();
  applyTheme(stored === "dark" ? "dark" : "light");

  dom.themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });

  const status = APP_CONFIG.status || {};
  $(".status-label", dom.statusBtn).textContent = status.label || "Status";
  dom.statusBtn.addEventListener("click", () => {
    toast("success", status.message || "All systems operational.");
  });
}

function init() {
  hydrateIcons();

  initHeader();

  /* Category bar */
  renderCategoryBar();

  /* Dropdowns */
  categoryDropdown = createDropdown({
    root: dom.categoryDropdown,
    toggle: dom.categoryToggle,
    menu: dom.categoryMenu,
    placeholder: "Category",
    onSelect: opt => {
      clearInlineError(dom.categoryError);
      state.category = APP_CONFIG.categories.find(c => c.id === opt.value) || null;

      const services = (APP_CONFIG.services[opt.value] || []).map(s => ({ value: s.id, label: s.name }));
      serviceDropdown.setOptions(services, false);
      serviceDropdown.setDisabled(services.length === 0);
      state.service = null;
      clearInlineError(dom.serviceError);
      updatePreview();
    },
    onDisabledClick: () => showInlineError(dom.serviceError, "Select a category first.")
  });

  categoryDropdown.setOptions(APP_CONFIG.categories.map(c => ({ value: c.id, label: c.label })));

  serviceDropdown = createDropdown({
    root: dom.serviceDropdown,
    toggle: dom.serviceToggle,
    menu: dom.serviceMenu,
    placeholder: "Select service",
    onSelect: opt => {
      clearInlineError(dom.serviceError);
      state.service = { id: opt.value, name: opt.label };
      updatePreview();
    },
    onDisabledClick: () => showInlineError(dom.serviceError, "Select a category first.")
  });
  serviceDropdown.setOptions([]);
  serviceDropdown.setDisabled(true);

  /* Details modal */
  buildDetailsModal();
  dom.detailsBtn.addEventListener("click", openDetailsModal);

  /* Submit */
  dom.form.addEventListener("submit", handleSubmit);

  /* Inquiry */
  buildInquiry();
  dom.inquiryBtn.addEventListener("click", () => openModal(dom.inquiryModal));

  /* Carousel */
  buildCarousel();

  /* Toast close */
  $(".toast-close", dom.toast).addEventListener("click", hideToast);

  /* Preview section */
  updatePreview();
}

init();
