/* ------------------------------------------------------------------
   Stackwell — site content.
   Every service line below maps to something we actually deliver.
------------------------------------------------------------------- */

export const brand = {
  name: "Stackwell",
  legal: "Stackwell Digital Studio",
  tagline: "Websites, software & AI that pay for themselves",
  email: "hello@stackwell.studio",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsapp: "https://wa.me/919876543210?text=Hi%20Stackwell%2C%20I%27d%20like%20a%20free%20consult",
  location: "Gorakhpur · remote across India",
  hours: "Mon–Sat, 10am–7pm IST",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats = [
  { value: 140, suffix: "+", label: "Projects shipped" },
  { value: 96, suffix: "/100", label: "Avg. Lighthouse score" },
  { value: 38, suffix: "%", label: "Lower cost per lead" },
  { value: 7, suffix: " days", label: "Typical launch time" },
];

export const marquee = [
  "Next.js", "React", "Vite", "Node.js", "WordPress", "WooCommerce", "Tailwind CSS",
  "shadcn/ui", "Supabase", "PostgreSQL", "Vercel", "Docker", "Cloudflare",
  "GitHub Actions", "n8n", "Make", "Retool", "Appsmith", "Meta Ads", "GA4",
  "Razorpay", "WhatsApp API",
];

export const services = [
  {
    id: "websites",
    short: "Websites",
    name: "Website Development",
    count: "12 website types",
    icon: "browser",
    blurb:
      "From a single landing page to a full online store — fast, mobile-first sites that look professional and turn visitors into enquiries.",
    from: "from ₹34,999",
    time: "7–14 days",
    chips: ["Design + build", "Mobile-first", "SEO-ready", "WhatsApp & forms"],
    items: [
      ["Business & Corporate Websites", "A professional multi-page site that presents your company, services, team and contact details clearly and builds trust with new customers."],
      ["Landing Pages", "A focused single page built for one goal, such as collecting leads for a campaign, with a clear offer, short form and fast loading."],
      ["E-commerce Websites", "Online stores with product catalogues, cart, secure checkout, payment gateway setup and order management so you can sell around the clock."],
      ["Real Estate Websites", "Project and property showcases with galleries, floor plans, location maps, enquiry forms and WhatsApp call buttons to capture buyer leads."],
      ["Hotel & Restaurant Websites", "Menus, room details, photo galleries, table or room enquiry forms and Google Maps links to bring in more bookings and walk-ins."],
      ["Portfolio Websites", "A clean showcase of your work, skills and client results for professionals, studios and creators who want to be found and hired."],
      ["Educational Websites", "Engaging websites for schools, colleges, coaching centres and course providers, with programme details, admissions information, enquiry forms and resource pages."],
      ["WordPress Websites", "Easy-to-manage WordPress sites with a custom theme, so your team can update pages and blog posts without technical help."],
      ["CMS Websites", "Content-managed websites that let your team add, edit and publish pages, articles, media and updates without depending on a developer."],
      ["Custom Websites", "Fully custom design and features built around your process, for needs that ready-made templates cannot meet."],
      ["Website Redesign", "We refresh outdated sites with a modern look, better navigation and faster speed, while keeping your content and search rankings safe."],
      ["SEO-ready Websites", "Clean code, fast loading, proper headings, meta tags, sitemap and schema so search engines can read your site and rank it."],
    ],
  },
  {
    id: "apps",
    short: "Web apps",
    name: "Web & Application Development",
    count: "11 software solutions",
    icon: "terminal",
    blurb:
      "Custom software that replaces spreadsheets and manual work, so your team saves time and your data stays organised in one place.",
    from: "from ₹1,49,999",
    time: "3–8 weeks",
    chips: ["Roles & permissions", "Reports & exports", "APIs", "Secure auth"],
    items: [
      ["React & Vite Applications", "Fast, app-like interfaces built with React and Vite, including installable progressive web apps that work well on phones."],
      ["Next.js Applications", "Server-rendered apps with excellent speed and SEO, ideal for public websites that also need logins, dashboards or dynamic content."],
      ["Node.js Backend Development", "Secure servers and APIs that handle your data, user accounts, payments and business logic reliably as you grow."],
      ["Custom Web Applications", "Browser-based tools designed around your exact workflow, from booking systems to internal portals for staff and customers."],
      ["CRM & ERP Systems", "Track leads, customers, sales, inventory and accounts in one system, with roles, reports and follow-up reminders for your team."],
      ["SaaS Platforms", "Subscription-based products with multi-tenant accounts, billing, plans and admin controls, ready to serve many customers at once."],
      ["Admin Dashboards", "Clear dashboards with charts, tables, filters and exports so owners can see sales, team activity and key numbers at a glance."],
      ["Business Management Systems", "Digital tools for attendance, payroll, project progress, payments and approvals that replace paperwork and manual follow-ups."],
      ["API & Third-party Integrations", "Connect your software with payment gateways, WhatsApp, SMS, email, maps and other services so data flows without re-entry."],
      ["Webhook Integrations", "Reliable webhook connections that instantly send and receive events between your website, apps and third-party tools — no manual updating."],
      ["Mobile & Cross-platform Applications", "One codebase that runs on Android, iOS and the web, including GPS and camera features for field teams and customers."],
    ],
  },
  {
    id: "ai",
    short: "AI & automation",
    name: "AI Solutions & Automation",
    count: "11 AI and automation services",
    icon: "spark",
    blurb:
      "Put AI to work on repetitive tasks: answer customers instantly, follow up on leads automatically and give your team back hours every day.",
    from: "from ₹59,999",
    time: "1–4 weeks",
    chips: ["Hindi · English · Hinglish", "Trained on your data", "24×7 replies", "Human handover"],
    items: [
      ["Custom AI Chatbots", "Chatbots trained on your business that answer questions, qualify visitors and hand over to your team when a human is needed."],
      ["Website AI Assistants", "A smart assistant on your site that guides visitors, explains services or projects and captures their contact details around the clock."],
      ["WhatsApp AI Chatbots", "Automated WhatsApp replies in Hindi, English or Hinglish that share details, answer queries and book site visits or calls."],
      ["AI Knowledge-base Chatbots", "Upload your brochures, price lists and FAQs, and the bot answers from that material accurately instead of guessing."],
      ["AI Agents", "Agents that complete multi-step tasks for you, such as researching, updating records, sending messages and reporting back."],
      ["Workflow Automation", "Connect your apps with tools like n8n so repetitive jobs, notifications and approvals run automatically without manual effort."],
      ["n8n Workflow Automation", "Custom n8n workflows that connect your forms, CRM, WhatsApp, email and business tools so routine tasks run automatically and reliably."],
      ["Lead Automation", "Capture leads from forms, ads and calls, send them to your CRM, notify your team and trigger timely follow-ups automatically."],
      ["AI-powered CRM", "A CRM that scores leads, suggests next actions, summarises conversations and reminds your team who to call and when."],
      ["Document & Data Automation", "Extract data from PDFs, invoices and forms, fill templates and generate reports or quotations automatically and accurately."],
      ["Custom AI API Integration", "Add AI features such as chat, summaries, translation or image reading into your own software through secure API connections."],
    ],
  },
  {
    id: "ads",
    short: "Meta ads",
    name: "Facebook & Instagram Ads",
    count: "10 Meta ads services",
    icon: "target",
    blurb:
      "Reach the right people on Facebook and Instagram, generate quality enquiries and track exactly what your ad budget delivers.",
    from: "₹19,999/mo",
    time: "ongoing",
    chips: ["Pixel + CAPI", "Weekly optimisation", "Plain-language reports", "No lock-in"],
    items: [
      ["Meta Ads Strategy", "A clear plan covering goals, budget, audience, offer and funnel, so every rupee you spend is aimed at measurable results."],
      ["Facebook & Instagram Campaigns", "We set up, launch and manage campaigns across feeds, stories and reels with the right structure, placements and schedule."],
      ["Lead Generation", "Lead form and landing page campaigns that bring in genuine enquiries with names and phone numbers, ready for your sales team."],
      ["Conversion Campaigns", "Campaigns optimised for actions that matter, such as purchases, calls, messages or site visit bookings, not just clicks."],
      ["Audience Targeting", "Reach people by location, age, interests and behaviour, plus custom and lookalike audiences built from your existing customers."],
      ["Retargeting", "Show ads again to people who visited your site, watched your videos or messaged you, and bring them back to take action."],
      ["Ad Creative & Copy", "Eye-catching images, videos and persuasive Hindi or English copy designed to stop the scroll and drive a response."],
      ["Pixel & Conversion API", "Correct Meta Pixel and Conversion API setup so leads and sales are tracked accurately, even with browser privacy limits."],
      ["Campaign Optimization", "Ongoing testing of audiences, creatives and budgets to lower your cost per lead and scale the ads that perform best."],
      ["Performance Reporting", "Simple regular reports showing spend, leads, cost per result and what we will improve next, in plain language."],
    ],
  },
];

export const promise = [
  { icon: "gauge", title: "Fast by default", desc: "Lazy images, lean code and edge hosting. Sub-2s loads on a mid-range Android, not just on your laptop." },
  { icon: "shield", title: "You own everything", desc: "Domain, hosting, ad account, database and code repo stay in your name. Full handover docs with every project." },
  { icon: "chart", title: "Measured, not guessed", desc: "Analytics, call tracking and a monthly scorecard. If something isn't working, you hear it from us first." },
  { icon: "bolt", title: "Live in weeks", desc: "Fixed scope, fixed price, weekly demo. No open-ended retainers that quietly run for half a year." },
];

export const process = [
  { n: "01", title: "Free consult", time: "Day 0", desc: "A 30-minute call to understand the business, the numbers and what is actually slowing you down.", bullets: ["Goal + budget fit", "Rough scope", "Honest yes/no"] },
  { n: "02", title: "Plan & proposal", time: "Day 1–3", desc: "A one-page plan: sitemap or system map, wireframes, deliverable list, timeline and a fixed price.", bullets: ["Sitemap / data model", "Wireframes", "Fixed quote"] },
  { n: "03", title: "Design", time: "Week 1", desc: "Real screens in your brand — not a template recoloured. Two directions, then one refined with your notes.", bullets: ["2 directions", "Component library", "Mobile + desktop"] },
  { n: "04", title: "Build", time: "Week 1–4", desc: "Clean, typed, reviewed code with a staging link that updates daily. You watch it grow instead of waiting.", bullets: ["Daily staging builds", "CMS + automation", "QA on 12 devices"] },
  { n: "05", title: "Launch & grow", time: "Week 4 →", desc: "Redirects, analytics, pixel, training video — then monthly optimisation for speed, rankings and leads.", bullets: ["SEO + tracking setup", "Team training", "Monthly scorecard"] },
];

export const work = [
  {
    name: "Shivalik Estates",
    sector: "Real estate · Lucknow",
    image: "/media/work-realestate.jpg",
    alt: "Real estate website on a laptop screen showing a villa project",
    blurb: "Project microsites with floor plans, a 3D tour link and instant WhatsApp enquiry capture for 6 active projects.",
    tags: ["Next.js", "Supabase", "WhatsApp AI"],
    metrics: [["4.2×", "site enquiries"], ["21s", "avg. call from lead"], ["41%", "lower cost per lead"]],
  },
  {
    name: "Urbandrop",
    sector: "D2C home care · Mumbai",
    image: "/media/work-store.jpg",
    alt: "Mobile e-commerce app screens showing product grid, detail and checkout",
    blurb: "Headless WooCommerce rebuild with subscription boxes, Razorpay autopay and abandoned-cart flows on WhatsApp.",
    tags: ["WooCommerce", "React", "Razorpay"],
    metrics: [["1.4s", "LCP on 4G"], ["+63%", "checkout rate"], ["8.1", "repeat orders/yr"]],
  },
  {
    name: "MediDesk Care",
    sector: "Clinic network · Jaipur",
    image: "/media/work-saas.jpg",
    alt: "Analytics dashboard with charts, KPI tiles and an assistant panel",
    blurb: "Booking, patient records and billing in one internal app, plus a Hinglish AI assistant that answers FAQs at night.",
    tags: ["Node.js", "PostgreSQL", "n8n"],
    metrics: [["−19h", "admin work/week"], ["92%", "calls auto-answered"], ["4.9★", "patient rating"]],
  },
];

export const testimonials = [
  { quote: "We had a website and we had leads — neither connected. Stackwell rebuilt it in three weeks and our cost per lead dropped by nearly half. The monthly report is the first one I actually read.", name: "Ananya Mehra", role: "Marketing Head, Shivalik Estates" },
  { quote: "The WhatsApp bot replies to patients at 2am in Hinglish and books the appointment itself. My front desk stopped playing phone tag and started seeing people.", name: "Dr. R. S. Bisht", role: "Founder, MediDesk Care" },
  { quote: "They replaced four spreadsheets and one very tired Excel macro with one dashboard. Fixed price, shipped on the date they promised, and the code is ours.", name: "Karan Shah", role: "Operations Director, Urbandrop" },
  { quote: "What I liked most is the no. They told me two of the things I asked for were a waste of money, and priced the rest honestly. That is rare.", name: "Priya Nair", role: "Owner, Cedar & Stone Interiors" },
];

export const pricing = [
  {
    name: "Launch",
    oneTime: "₹34,999",
    retainer: "₹7,999",
    best: "Startups & sole professionals",
    desc: "A sharp, fast marketing site that makes you look as good as you are.",
    features: ["Up to 5 pages", "Custom design, no template", "Mobile-first + Core Web Vitals pass", "Contact form + WhatsApp button", "Google Analytics + Search Console", "2 weeks of fixes after launch"],
    cta: "Start a launch",
  },
  {
    name: "Growth",
    oneTime: "₹89,999",
    retainer: "₹24,999",
    best: "Most popular for ₹1–10cr businesses",
    desc: "Site, SEO, CRM and Meta ads running as one lead engine.",
    features: ["Up to 12 pages + blog/CMS", "SEO-ready build, schema + sitemap", "Lead capture into a lightweight CRM", "Meta Pixel + Conversion API + 2 campaigns", "AI website assistant (trained on your docs)", "Monthly scorecard + optimisation call"],
    cta: "Book a growth call",
    featured: true,
  },
  {
    name: "Custom",
    oneTime: "₹1,99,999+",
    retainer: "Scoped",
    best: "SaaS, marketplaces & ops teams",
    desc: "Web apps, automations and AI systems built around your workflow.",
    features: ["Discovery sprint + system design", "React/Next + Node or Supabase backend", "Roles, billing, dashboards, exports", "n8n / Make automation pipelines", "RAG chatbot on your own data", "Handover docs + team training"],
    cta: "Scope a build",
  },
];

export const addOns = [
  ["Care & hosting", "₹2,499/mo", "Updates, backups, uptime monitoring, 1 hour of edits."],
  ["Extra landing page", "₹12,000", "Conversion-focused, matched to one campaign."],
  ["AI chatbot add-on", "₹24,999", "Trained assistant on your site or WhatsApp."],
  ["Meta ads management", "₹19,999/mo", "Setup, creative testing and weekly optimisation."],
];

export const faqs = [
  ["How quickly can you start?", "Usually within 3–5 working days of the proposal being approved. If a launch date is fixed — a new project, a season, a campaign — tell us early and we plan backwards from it."],
  ["Is the price fixed or can it grow?", "Fixed. The approved scope, deliverables and price are written on one page before work starts. If you change your mind mid-build, we quote the change separately instead of adding a surprise invoice."],
  ["Do you work with businesses outside your city?", "Yes. Almost everything runs over shared Figma files, a staging link and short weekly calls. We ship across India and have worked with clients in the UAE and UK."],
  ["Will my team be able to edit the site?", "That is the point. You get WordPress or a clean CMS, a recorded training video for your actual pages, and 30 minutes of live handover. Most clients publish on their own within a week."],
  ["Who owns the code, domain and ad account?", "You do — always. We build inside your accounts where possible, and every project ends with a handover pack: repository, credentials list, architecture notes and restore instructions."],
  ["What do you need from me?", "Logo and brand files if they exist, your content or a rough bullet list, photos, and one decision-maker who can answer messages. We can draft copy and source imagery if you are missing things."],
  ["Do you do SEO and paid ads together?", "Yes, and they should talk to each other. SEO takes 3–6 months to compound; ads bring leads this week. We use ad data to find the keywords worth ranking for, so neither channel works blind."],
  ["What if something breaks after launch?", "Every build includes a fixes window (2 weeks on Launch, 30 days on Growth and Custom). After that, our care plan covers updates, backups, monitoring and small edits, with urgent issues answered the same working day."],
];

export const stackGroups = [
  {
    title: "Web frameworks & content management",
    items: [
      ["WordPress", "Content Management System used for dynamic websites, e-commerce stores (WooCommerce), client portals and headless content delivery via REST API or GraphQL."],
      ["Vercel", "Global edge-hosting platform engineered for Next.js, React and static frameworks — automated CI/CD deploys, instant CDN caching and serverless API functions."],
    ],
  },
  {
    title: "Cloud backend, database & RAG",
    items: [
      ["Supabase", "Open-source Backend-as-a-Service on managed PostgreSQL: OAuth and magic-link auth, Row Level Security, file storage, real-time subscriptions and vector search."],
      ["Retrieval-Augmented Generation (RAG)", "AI search architecture that connects a knowledge base (Supabase Vector / pgvector) to an LLM, so agents answer from your real business data instead of guessing."],
      ["Docker & Cloudflare", "Containerised hosting and edge infrastructure for microservices, SSL/TLS routing, DNS management and global CDN delivery."],
    ],
  },
  {
    title: "Workflow automation & integration engines",
    items: [
      ["n8n", "Self-hosted or cloud workflow automation with native AI agent nodes, custom JavaScript/Python steps, complex branching logic and secure webhook listeners."],
      ["Make (Integromat)", "Visual cloud integration platform for building multi-step automated pipelines across webhooks, CRMs, database tables and communication APIs — no code overhead."],
    ],
  },
];

export const stackTable = {
  caption: "Recommended technologies and primary use cases",
  columns: ["Resource category", "Recommended technologies", "Primary use case"],
  rows: [
    ["AI & LLM services", "Top-ranking AI models", "Chatbots, automated lead qualification, RAG pipelines and smart content processing"],
    ["Internal tools & dashboards", "Retool · Appsmith · Supabase Studio", "Rapid admin panels, internal operational dashboards and database UIs"],
    ["Frontend UI & components", "Tailwind CSS · shadcn/ui · Elementor", "Responsive layouts, custom components and high-converting landing pages"],
    ["Data sync & storage", "Google Sheets API · PostgreSQL · Supabase Storage", "Lead processing, media delivery and structured data retention"],
    ["DevOps & version control", "GitHub · GitHub Actions · Railway", "Automated deployment pipelines, serverless containers and source control"],
  ],
};

export const glossary = [
  ["API (Application Programming Interface)", "A set of rules that lets different software systems communicate and share data with each other automatically."],
  ["BaaS (Backend-as-a-Service)", "A cloud model that gives developers ready-made backend infrastructure — database, auth, storage — so servers don't get built from scratch."],
  ["CDN (Content Delivery Network)", "Servers spread across the world that cache your images and code close to users, so pages load fast everywhere."],
  ["CI/CD", "Automated pipelines where code changes are tested, built and pushed to production the moment they are made."],
  ["CMS (Content Management System)", "Software like WordPress that lets people create and edit website content visually, without writing HTML."],
  ["CRM (Customer Relationship Management)", "Systems used to track and organise every interaction with leads, clients and customers."],
  ["DNS (Domain Name System)", "The internet's address book: it translates a name like example.com into the IP address computers actually use."],
  ["LLM (Large Language Model)", "AI models trained on enormous datasets to understand, generate and reason with human language and code."],
  ["OAuth (Open Authorization)", "The standard behind “Sign in with Google” — apps verify identity without ever seeing your password."],
  ["RAG (Retrieval-Augmented Generation)", "An AI technique where the model looks up factual information in your own database before answering, which prevents hallucinations."],
  ["RLS (Row Level Security)", "Fine-grained database security that controls exactly which rows each user can see or change, based on their role."],
  ["SSL/TLS", "Encryption protocols that secure the connection between a browser and a server — the padlock and the https."],
  ["UI (User Interface)", "The visual layer people touch: layout, buttons, menus and forms on a screen."],
];
