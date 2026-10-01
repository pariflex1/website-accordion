"use client";

import Icon from "./Icons";
import { CountUp } from "./Motion";
import { brand, heroStats } from "@/data/site";

function Ring({ p, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="ring" style={{ "--p": p }}>
        <span>{p}</span>
      </span>
      <span className="mono text-[.62rem] uppercase tracking-[.14em] text-mute">{label}</span>
    </div>
  );
}

function ChatBubble() {
  return (
    <div className="float-card glass hidden lg:block" style={{ left: "-13%", bottom: "14%", width: 268 }}>
      <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-line/80">
        <span className="grid place-items-center w-6 h-6 rounded-full text-white shrink-0" style={{ background: "#25D366" }}>
          <Icon name="whatsapp" size={14} strokeWidth={1.8} />
        </span>
        <span className="text-[.76rem] font-semibold">WhatsApp · auto-reply</span>
        <span className="dot-live ml-auto" />
      </div>
      <div className="grid gap-1.5 text-[.74rem] leading-snug">
        <p className="justify-self-end rounded-2xl rounded-br-md px-3 py-1.5 text-white max-w-[86%]" style={{ background: "linear-gradient(120deg,var(--c-accent),var(--c-accent2))" }}>
          2BHK price aur floor plan bhej sakte ho?
        </p>
        <p className="justify-self-start rounded-2xl rounded-bl-md px-3 py-1.5 bg-panel2 border border-line max-w-[94%]">
          Yes! 2BHK starts at ₹64.5L. Sending the plan + cost sheet now — want a site visit Saturday?
        </p>
      </div>
      <p className="mono text-[.6rem] text-mute pt-2.5 mt-2.5 border-t border-line/80 m-0">answered in 0.8s · lead saved to CRM</p>
    </div>
  );
}

function LeadCard() {
  return (
    <div className="float-card glass delay hidden lg:block" style={{ right: "-11%", top: "12%", width: 232 }}>
      <p className="mono text-[.6rem] uppercase tracking-[.13em] text-mute m-0">cost per lead · 90 days</p>
      <div className="flex items-end gap-2 mt-2">
        <span className="font-display font-bold text-[1.75rem] tracking-[-.04em] leading-none">₹214</span>
        <span className="text-[.76rem] font-semibold mb-0.5" style={{ color: "var(--c-accent)" }}>
          ↓ 41%
        </span>
      </div>
      <svg viewBox="0 0 200 44" className="w-full mt-2.5" height="44" aria-hidden="true">
        <defs>
          <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--c-accent)" stopOpacity=".28" />
            <stop offset="1" stopColor="var(--c-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M2 40 L34 32 L66 35 L98 22 L130 25 L162 12 L198 5 L198 44 L2 44 Z" fill="url(#ar)" />
        <path d="M2 40 L34 32 L66 35 L98 22 L130 25 L162 12 L198 5" fill="none" stroke="var(--c-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="198" cy="5" r="3.4" fill="var(--c-accent)" />
      </svg>
      <p className="text-[.72rem] text-mute m-0 mt-1.5">128 leads · ₹27,400 spent</p>
    </div>
  );
}

function Device() {
  const bars = [42, 58, 36, 71, 49, 84, 62, 95];
  return (
    <div className="relative" data-reveal style={{ "--d": "140ms" }}>
      <div
        className="absolute -inset-x-10 -top-10 -bottom-16 -z-10 rounded-[46px] opacity-80"
        style={{ background: "radial-gradient(60% 60% at 50% 45%, color-mix(in srgb, var(--c-accent) 15%, transparent), transparent 72%)" }}
      />
      <div className="device">
        <div className="device-bar">
          <span className="device-dot" />
          <span className="device-dot" />
          <span className="device-dot" />
          <span className="device-url">stackwell.studio/client/shivalik-estates</span>
          <span className="hidden sm:flex items-center gap-1.5 mono text-[.6rem] text-mute pr-1 shrink-0">
            <span className="dot-live" /> live
          </span>
        </div>

        <div className="p-4 sm:p-5 grid gap-4">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              ["Leads this week", "128", "+34 new"],
              ["Cost per lead", "₹214", "−41%"],
              ["Page load, 4G", "0.9s", "pass"],
            ].map(([k, v, d]) => (
              <div key={k} className="rounded-xl border border-line bg-panel2/60 p-2.5">
                <p className="text-[.6rem] uppercase tracking-[.1em] text-mute leading-none m-0">{k}</p>
                <p className="font-display font-bold text-[clamp(1rem,2.4vw,1.25rem)] mt-2 mb-0 leading-none">{v}</p>
                <p className="mono text-[.6rem] mt-2 mb-0" style={{ color: d === "−41%" ? "var(--c-accent)" : "var(--c-mute)" }}>
                  {d}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-4">
            <div className="rounded-xl border border-line p-3.5" style={{ background: "var(--c-panel)" }}>
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="mono text-[.6rem] uppercase tracking-[.13em] text-mute m-0">lead volume · 8 weeks</p>
                <span className="chip !text-[.62rem] !py-0.5 !px-1.5">Meta + organic</span>
              </div>
              <div className="bars">
                {bars.map((h, i) => (
                  <span key={i} className="bar" style={{ "--h": `${h}%`, transitionDelay: `${i * 60}ms` }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-line p-3.5 flex flex-col justify-between gap-3" style={{ background: "var(--c-panel)" }}>
              <div className="flex items-center justify-around gap-2">
                <Ring p={96} label="Perf" />
                <Ring p={100} label="SEO" />
                <Ring p={98} label="A11y" />
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <span className="text-accent shrink-0">
                  <Icon name="spark" size={15} />
                </span>
                <span className="text-[.74rem] text-soft leading-tight">
                  AI assistant handled <b className="text-ink">1,284</b> chats, booked <b className="text-ink">39</b> visits
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[.72rem]">
            {[
              ["bolt", "12 automations running"],
              ["target", "3 campaigns live"],
              ["shield", "Backups verified today"],
              ["gauge", "Uptime 99.98%"],
            ].map(([ic, t]) => (
              <span key={t} className="chip">
                <Icon name={ic} size={12} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ChatBubble />
      <LeadCard />
    </div>
  );
}

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden" style={{ paddingTop: 74 }}>
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="grid-bg" />
      <div className="noise" />

      <section className="relative" style={{ paddingBlock: "clamp(56px,8vw,104px) clamp(28px,4vw,48px)" }}>
        <div className="wrap wrap-wide">
          <div className="mx-auto text-center max-w-5xl">
            <div className="pill pill-accent" data-reveal>
              <span className="dot-live" />
              <span className="text-[.78rem]">Taking 3 new projects for October 2026</span>
            </div>

            <h1 className="display h1 mx-auto mt-7" data-reveal>
              Websites, software and AI
              <br className="hidden sm:block" />{" "}
              <span className="grad-text">that pay for themselves.</span>
            </h1>

            <p className="lead mx-auto mt-7 max-w-[62ch]" data-reveal>
              Stackwell designs, builds and runs the digital side of growing businesses — fast websites,
              custom apps that retire the spreadsheets, AI that answers customers at 2am, and Meta ads
              tracked down to the rupee. Fixed price, live in weeks, and you own every account.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-9" data-reveal>
              <a href="#contact" className="btn btn-primary btn-lg">
                Book a free 30-min consult
                <Icon name="arrowUR" size={17} strokeWidth={2} />
              </a>
              <a href="#services" className="btn btn-secondary btn-lg">
                Explore all 44 services
                <Icon name="arrowD" size={16} strokeWidth={2} />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-[.84rem] text-mute" data-reveal>
              <span className="inline-flex items-center gap-1.5">
                <span className="stars inline-flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" size={13} />
                  ))}
                </span>
                <b className="text-ink font-semibold">4.9</b> from 60+ reviews
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-line" />
              <span>Fixed price</span>
              <span className="hidden sm:inline">·</span>
              <span>No lock-in</span>
              <span className="hidden sm:inline">·</span>
              <span>GST invoice</span>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 mx-auto" style={{ maxWidth: 1080 }}>
            <Device />
          </div>
        </div>
      </section>

      <section className="band-tight relative">
        <div className="wrap wrap-wide">
          <div className="card card-pad grid sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6" data-reveal>
            {heroStats.map((s, i) => (
              <div key={s.label} className={`lg:px-2 ${i ? "lg:border-l lg:border-line" : ""}`}>
                <p className="kpi m-0">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[.85rem] text-mute mt-2 mb-0">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6 text-[.8rem] text-mute mb-0">
            <span className="inline-flex items-center gap-2">
              <Icon name="pin" size={14} /> {brand.location}
            </span>
            <span className="hidden sm:inline-block w-px h-3.5 bg-line" />
            <span className="inline-flex items-center gap-2">
              <span className="dot-live" />
              {brand.hours}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
