"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icons";

const SCRIPTS = [
  {
    tag: "Website visitor · English",
    q: "Do you build real estate websites with WhatsApp enquiry?",
    a: "Yes — project pages with galleries, floor plans and maps, plus a WhatsApp button on every screen. Enquiries land in your CRM with the page they came from, so your team knows which project a buyer is actually interested in. Typical build: 10–14 days, from ₹89,999.",
    trail: ["Lead saved · Shivalik Estates CRM", "Sales team pinged on WhatsApp", "Follow-up set for day 3"],
  },
  {
    tag: "WhatsApp · Hinglish",
    q: "2BHK ki price aur floor plan bhej sakte ho?",
    a: "Bilkul. 2BHK homes start at ₹64.5L all-inclusive, and the floor plan + cost sheet is on the way. Saturday site visit ke liye 11 AM ya 4 PM — kaunsa better rahega? Main site pe aapka name note kar leta hoon.",
    trail: ["Brochure PDF sent", "Slot preference recorded", "Reminder scheduled · Fri 7 PM"],
  },
  {
    tag: "Invoice · document automation",
    q: "Can it read our PDF invoices?",
    a: "We extract vendor, GSTIN, line items and totals from your PDFs into a structured table, flag anything that does not match the purchase order, and post the confirmed rows to your sheet or ERP. One clinic network cut 19 admin hours a week this way.",
    trail: ["3 invoices parsed · 0 errors", "₹1,24,500 posted to ledger", "Exception queue: empty"],
  },
];

function useTyped(text, reduced) {
  const [n, setN] = useState(reduced ? text.length : 0);
  const timer = useRef(null);
  useEffect(() => {
    if (reduced) {
      setN(text.length);
      return;
    }
    setN(0);
    let i = 0;
    timer.current = setInterval(() => {
      i = Math.min(text.length, i + 3);
      setN(i);
      if (i >= text.length) clearInterval(timer.current);
    }, 16);
    return () => clearInterval(timer.current);
  }, [text, reduced]);
  return n;
}

export default function AiDemo() {
  const [i, setI] = useState(0);
  const [reduced, setReduced] = useState(false);
  const active = SCRIPTS[i];
  const shown = useTyped(active.a, reduced);
  const done = shown >= active.a.length;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative py-[clamp(56px,7vw,92px)]" aria-label="AI assistant demo">
      <div className="wrap wrap-wide">
        <div className="demo-panel relative overflow-hidden rounded-[28px] border border-white/10">
          <div className="demo-grid absolute inset-0 opacity-[.5] pointer-events-none" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-[.85fr_1.15fr] gap-10 p-6 sm:p-10 lg:p-12">
            {/* pitch */}
            <div className="text-white">
              <p className="eyebrow !text-white/55">Live sample</p>
              <h2 className="font-display text-[clamp(1.65rem,3.2vw,2.5rem)] font-semibold tracking-[-.035em] leading-[1.08] mt-4">
                This is the reply your customers get at 2am.
              </h2>
              <p className="text-white/70 mt-5 text-[.98rem] leading-relaxed max-w-[42ch]">
                Trained on your brochure, price list and FAQs — in English, Hindi or Hinglish. Tap a
                question to watch it answer. (Real deployments hand over to a human the moment
                someone asks for a price cut or a legal detail.)
              </p>

              <div className="grid grid-cols-3 gap-4 mt-9 pt-7 border-t border-white/12">
                {[
                  ["0.8s", "median reply"],
                  ["3", "languages"],
                  ["24×7", "no missed lead"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display font-bold text-[1.6rem] tracking-[-.04em] leading-none m-0">{v}</p>
                    <p className="text-white/55 text-[.76rem] mt-2 mb-0 leading-tight">{l}</p>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn btn-secondary btn-sm mt-9" style={{ background: "white", color: "#0a0f1d", borderColor: "transparent" }}>
                Get this on my website
                <Icon name="arrowUR" size={15} strokeWidth={2} />
              </a>
            </div>

            {/* chat */}
            <div className="rounded-2xl border border-white/12 bg-white/[.045] p-4 sm:p-5 flex flex-col min-h-[380px]" style={{ backdropFilter: "blur(6px)" }}>
              <div className="flex flex-wrap gap-1.5 pb-4 mb-4 border-b border-white/10">
                {SCRIPTS.map((s, idx) => (
                  <button
                    key={s.tag}
                    type="button"
                    onClick={() => setI(idx)}
                    aria-pressed={i === idx}
                    className="rounded-full px-3 py-1.5 text-[.74rem] font-medium transition-colors border"
                    style={{
                      color: i === idx ? "#0a0f1d" : "rgba(255,255,255,.72)",
                      background: i === idx ? "#fff" : "transparent",
                      borderColor: i === idx ? "transparent" : "rgba(255,255,255,.16)",
                    }}
                  >
                    {s.q.length > 34 ? `${s.q.slice(0, 34)}…` : s.q}
                  </button>
                ))}
              </div>

              <p className="mono text-[.62rem] uppercase tracking-[.14em] text-white/45 m-0 mb-3">{active.tag}</p>

              <div className="flex-1 grid content-start gap-3">
                <p className="justify-self-end max-w-[86%] rounded-2xl rounded-br-md px-3.5 py-2 text-[.86rem] leading-snug text-white" style={{ background: "rgba(255,255,255,.12)" }}>
                  {active.q}
                </p>
                <p className="justify-self-start max-w-[92%] rounded-2xl rounded-bl-md px-3.5 py-2.5 text-[.88rem] leading-relaxed text-white/95" style={{ background: "linear-gradient(120deg, rgba(108,139,255,.28), rgba(124,92,255,.22))", border: "1px solid rgba(255,255,255,.12)" }}>
                  {active.a.slice(0, shown)}
                  {!done && <span className="inline-block w-[2px] h-[1em] align-[-2px] ml-0.5 bg-white/80 animate-pulse" />}
                </p>
              </div>

              <div className="grid gap-1.5 pt-4 mt-4 border-t border-white/10">
                {active.trail.map((t, idx) => (
                  <p
                    key={t}
                    className="flex items-center gap-2 text-[.76rem] m-0 transition-all duration-500"
                    style={{
                      color: done ? "rgba(255,255,255,.78)" : "rgba(255,255,255,.28)",
                      opacity: done ? 1 : 0.45,
                      transform: done ? "none" : "translateY(4px)",
                      transitionDelay: `${idx * 140}ms`,
                    }}
                  >
                    <span className="grid place-items-center w-4 h-4 rounded-full shrink-0" style={{ background: done ? "#25D366" : "rgba(255,255,255,.18)" }}>
                      <Icon name="check" size={9} strokeWidth={3.4} className="text-white" />
                    </span>
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
