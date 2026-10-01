"use client";

import { useState } from "react";
import Icon from "./Icons";
import { brand, services } from "@/data/site";

const serviceOptions = [...services.map((s) => s.name), "Not sure yet — advise me"];
const budgets = ["Under ₹50,000", "₹50,000 – ₹1.5 lakh", "₹1.5 – 4 lakh", "₹4 lakh+", "Monthly retainer"];

const channels = [
  { icon: "whatsapp", label: "WhatsApp us", value: "Reply within the hour", href: brand.whatsapp, tone: "#25D366" },
  { icon: "phone", label: "Call the studio", value: brand.phone, href: `tel:${brand.phoneHref}`, tone: "var(--c-accent)" },
  { icon: "mail", label: "Email a brief", value: brand.email, href: `mailto:${brand.email}?subject=Project%20enquiry`, tone: "var(--c-accent2)" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [vals, setVals] = useState({ name: "", phone: "", email: "", company: "", service: serviceOptions[0], budget: budgets[1], msg: "" });
  const [errs, setErrs] = useState({});

  const set = (k) => (e) => {
    const v = e.target.value;
    setVals((s) => ({ ...s, [k]: v }));
    setErrs((s) => (s[k] ? { ...s, [k]: undefined } : s));
  };

  const validate = () => {
    const e = {};
    if (vals.name.trim().length < 2) e.name = "Please tell us your name.";
    const digits = vals.phone.replace(/\D/g, "");
    if (digits.length < 10) e.phone = "A 10-digit number so we can call or WhatsApp you.";
    if (vals.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(vals.email.trim())) e.email = "That email looks incomplete.";
    if (vals.msg.trim().length < 12) e.msg = "A sentence or two about what you need helps us prepare.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (ev.target.elements.honey?.value) return; // bot trap
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length) {
      const first = document.getElementById(`f-${Object.keys(e)[0]}`);
      first?.focus();
      return;
    }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 700);
  };

  return (
    <section id="contact" className="band relative border-t border-line overflow-hidden">
      <div className="blob blob-a" style={{ top: "auto", bottom: "-18%", left: "-12%", opacity: 0.35 }} />
      <div className="blob blob-b" style={{ top: "-20%", bottom: "auto", opacity: 0.3 }} />
      <div className="grid-bg" style={{ maskImage: "radial-gradient(80% 60% at 50% 50%, #000, transparent 75%)", WebkitMaskImage: "radial-gradient(80% 60% at 50% 50%, #000, transparent 75%)" }} />

      <div className="wrap wrap-wide relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* left */}
          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="display h2 mt-5">
              Tell us what&apos;s
              <br />
              <span className="grad-text">slowing you down.</span>
            </h2>
            <p className="lead mt-5 max-w-[46ch]">
              One form, one reply from a person who builds. If we are the right fit we send a
              one-page plan with scope, timeline and a fixed price — usually within two working days.
            </p>

            <ul className="grid gap-3 mt-9 p-0 list-none">
              {channels.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="card card-hover flex items-center gap-4 p-4 group" target={c.icon === "whatsapp" ? "_blank" : undefined} rel={c.icon === "whatsapp" ? "noreferrer noopener" : undefined}>
                    <span className="grid place-items-center w-11 h-11 rounded-xl shrink-0 text-white" style={{ background: c.tone }}>
                      <Icon name={c.icon} size={20} strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display font-semibold text-[.98rem] tracking-[-.02em]">{c.label}</span>
                      <span className="block text-[.85rem] text-mute truncate">{c.value}</span>
                    </span>
                    <Icon name="arrowUR" size={17} strokeWidth={2} className="ml-auto text-mute shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="card mt-4 bg-panel2/60 p-6">
              <p className="eyebrow mb-4">What happens next</p>
              <ol className="grid gap-3.5 p-0 m-0 list-none counter">
                {[
                  ["Within a working day", "A senior builder reads it and replies — not a sales rep with a calendar link."],
                  ["30-minute call", "We ask about numbers and process, then tell you honestly if we can help."],
                  ["One-page plan", "Scope, screens or systems, timeline, fixed price. Yours to keep either way."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-3.5">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-panel border border-line mono text-[.66rem] shrink-0 mt-0.5">{i + 1}</span>
                    <span>
                      <span className="block text-[.82rem] font-semibold text-ink">{t}</span>
                      <span className="block text-[.85rem] text-mute leading-snug mt-0.5">{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* form */}
          <div className="card p-5 sm:p-8 relative" style={{ boxShadow: "var(--shadow-l)" }} data-reveal>
            {sent ? (
              <div className="py-8 sm:py-14 text-center" role="status" aria-live="polite">
                <span className="mx-auto grid place-items-center w-16 h-16 rounded-full text-white" style={{ background: "linear-gradient(140deg,var(--c-accent),var(--c-accent2))", boxShadow: "0 16px 40px -14px color-mix(in srgb, var(--c-accent) 70%, transparent)" }}>
                  <Icon name="check" size={30} strokeWidth={2.6} />
                </span>
                <h3 className="font-display text-[1.65rem] font-semibold tracking-[-.035em] mt-6">Got it, {vals.name.split(" ")[0]}.</h3>
                <p className="text-[.94rem] text-mute mt-3 max-w-[40ch] mx-auto leading-relaxed">
                  Your brief is in. Expect a reply at <b className="text-ink">{vals.email || vals.phone}</b> within one working day —
                  sooner if it&apos;s a WhatsApp ping.
                </p>
                <dl className="grid sm:grid-cols-3 gap-3 mt-8 text-left">
                  {[
                    ["Service", vals.service],
                    ["Budget", vals.budget],
                    ["Reference", `SW-${String(Date.now()).slice(-5)}`],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-line bg-panel2/60 p-3">
                      <dt className="text-[.68rem] uppercase tracking-[.11em] text-mute">{k}</dt>
                      <dd className="m-0 text-[.85rem] font-medium mt-1 leading-snug">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-2.5 justify-center mt-8">
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => setSent(false)}>
                    Send another brief
                  </button>
                  <a className="btn btn-primary btn-sm" href={brand.whatsapp} target="_blank" rel="noreferrer noopener">
                    <Icon name="whatsapp" size={15} /> Continue on WhatsApp
                  </a>
                </div>
                <p className="mono text-[.66rem] text-mute mt-6">
                  Demo site — this form validates locally and does not transmit data anywhere.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid gap-4">
                <div className="flex items-center justify-between gap-4 pb-1">
                  <h3 className="font-display text-[1.2rem] font-semibold tracking-[-.03em] m-0">Project brief</h3>
                  <span className="pill text-[.7rem] py-1">
                    <span className="dot-live" /> 3 slots left this month
                  </span>
                </div>

                <input type="text" name="honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="field">
                    <label className="label" htmlFor="f-name">
                      Your name *
                    </label>
                    <input id="f-name" className="input" value={vals.name} onChange={set("name")} placeholder="Ananya Mehra" aria-invalid={!!errs.name} autoComplete="name" />
                    {errs.name && <span className="err">{errs.name}</span>}
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="f-company">
                      Business
                    </label>
                    <input id="f-company" className="input" value={vals.company} onChange={set("company")} placeholder="Shivalik Estates" autoComplete="organization" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="field">
                    <label className="label" htmlFor="f-phone">
                      Phone / WhatsApp *
                    </label>
                    <input id="f-phone" className="input" value={vals.phone} onChange={set("phone")} placeholder="+91 98765 43210" inputMode="tel" aria-invalid={!!errs.phone} autoComplete="tel" />
                    {errs.phone && <span className="err">{errs.phone}</span>}
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="f-email">
                      Email
                    </label>
                    <input id="f-email" className="input" value={vals.email} onChange={set("email")} placeholder="you@company.in" inputMode="email" aria-invalid={!!errs.email} autoComplete="email" />
                    {errs.email && <span className="err">{errs.email}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="field">
                    <label className="label" htmlFor="f-service">
                      What do you need?
                    </label>
                    <select id="f-service" className="select" value={vals.service} onChange={set("service")}>
                      {serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="f-budget">
                      Budget range
                    </label>
                    <select id="f-budget" className="select" value={vals.budget} onChange={set("budget")}>
                      {budgets.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="f-msg">
                    What are you trying to fix or launch? *
                  </label>
                  <textarea
                    id="f-msg"
                    className="textarea"
                    value={vals.msg}
                    onChange={set("msg")}
                    aria-invalid={!!errs.msg}
                    maxLength={800}
                    placeholder="e.g. We have a WordPress site that takes 6 seconds to open on mobile, and our leads come from a phone number people rarely call. We want enquiries on WhatsApp and ads that we can actually measure."
                  />
                  <div className="flex items-center justify-between">
                    {errs.msg ? <span className="err">{errs.msg}</span> : <span className="text-[.76rem] text-mute">The more specific, the sharper the plan.</span>}
                    <span className="mono text-[.68rem] text-mute">{vals.msg.length}/800</span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-full mt-1" disabled={busy}>
                  {busy ? "Sending…" : "Send my brief"}
                  {!busy && <Icon name="arrowR" size={16} strokeWidth={2} />}
                </button>
                <p className="mono text-[.66rem] text-mute text-center m-0 leading-relaxed">
                  No mailing list, no follow-up sequence. {brand.hours} · {brand.location}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
