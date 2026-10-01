"use client";

import { useState } from "react";
import Icon from "./Icons";
import SectionHead from "./SectionHead";
import { addOns, pricing } from "@/data/site";

export default function Pricing() {
  const [mode, setMode] = useState("oneTime");
  const isProject = mode === "oneTime";

  return (
    <section id="pricing" className="band relative border-t border-line">
      <div className="blob blob-b opacity-30" style={{ top: "auto", bottom: "-10%", right: "-14%" }} />
      <div className="wrap wrap-wide relative">
        <SectionHead
          align="center"
          eyebrow="Transparent pricing"
          title={
            <>
              Priced per outcome,
              <br />
              <span className="grad-text">not per hour.</span>
            </>
          }
          copy="The numbers below are real starting points, quoted before work begins. Choose a one-time build or a monthly plan that keeps it running, growing and tested."
        />

        {/* mode switch */}
        <div className="flex justify-center mb-11" data-reveal>
          <div className="inline-flex relative p-1 rounded-full border border-line bg-panel2" role="group" aria-label="Pricing mode">
            <span
              className="absolute top-1 bottom-1 rounded-full bg-panel shadow-[var(--shadow-s)] transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{ left: 4, width: "calc(50% - 4px)", transform: isProject ? "translateX(0)" : "translateX(100%)" }}
              aria-hidden="true"
            />
            {[
              ["oneTime", "One-time project"],
              ["retainer", "Monthly plan"],
            ].map(([m, l]) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={`relative z-10 px-5 sm:px-7 py-2.5 text-[.85rem] font-semibold rounded-full transition-colors ${mode === m ? "text-ink" : "text-mute hover:text-soft"}`}
                style={{ minWidth: 150 }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          {pricing.map((p, i) => {
            const price = isProject ? p.oneTime : p.retainer;
            return (
              <article
                key={p.name}
                className={`card relative flex flex-col p-6 sm:p-7 ${p.featured ? "lg:-mt-4 lg:-mb-4 lg:pt-9 lg:pb-9" : ""}`}
                data-reveal
                style={{ "--d": `${i * 90}ms`, ...(p.featured ? { borderColor: "color-mix(in srgb, var(--c-accent) 42%, var(--c-line))", boxShadow: "var(--shadow-l)" } : {}) }}
              >
                {p.featured && (
                  <>
                    <span
                      className="absolute inset-x-0 -top-px h-px"
                      style={{ background: "linear-gradient(90deg,transparent,var(--c-accent),transparent)" }}
                      aria-hidden="true"
                    />
                    <span className="absolute top-5 right-5 pill pill-accent text-[.68rem] py-1" style={{ borderRadius: 99 }}>
                      <Icon name="sparkle" size={11} strokeWidth={2} /> Most chosen
                    </span>
                  </>
                )}

                <h3 className="font-display text-[1.3rem] font-semibold tracking-[-.03em] m-0">{p.name}</h3>
                <p className="text-[.82rem] text-mute mt-1.5">{p.best}</p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.6rem)] tracking-[-.045em] leading-none">{price}</span>
                  {isProject ? <span className="text-[.8rem] text-mute pb-1">onwards</span> : <span className="text-[.8rem] text-mute pb-1">/month</span>}
                </div>
                <p className="text-[.9rem] text-soft mt-4 leading-relaxed min-h-[3.1em]">{p.desc}</p>

                <ul className="grid gap-2.5 mt-6 mb-7 p-0 list-none flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[.88rem] leading-snug text-soft">
                      <span className="mt-[3px] grid place-items-center w-4 h-4 rounded-full shrink-0" style={{ background: "color-mix(in srgb, var(--c-accent) 14%, transparent)", color: "var(--c-accent)" }}>
                        <Icon name="check" size={10} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`btn ${p.featured ? "btn-primary" : "btn-secondary"} w-full`}>
                  {p.cta}
                  <Icon name="arrowR" size={16} strokeWidth={2} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_.75fr] gap-5 mt-6">
          <div className="card card-pad" data-reveal>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <h3 className="h3 !m-0">Add-ons, priced upfront</h3>
              <span className="mono text-[.68rem] text-mute ml-auto">any plan · cancel with 30 days' notice</span>
            </div>
            <ul className="grid gap-0 list-none p-0 m-0 divide-hair">
              {addOns.map(([n, price, d]) => (
                <li key={n} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-3.5">
                  <span className="font-display font-semibold text-[.98rem] tracking-[-.02em] w-full sm:w-[220px] shrink-0">{n}</span>
                  <span className="mono text-[.78rem] text-accent sm:w-[112px] shrink-0">{price}</span>
                  <span className="text-[.85rem] text-mute">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card card-pad bg-panel2/60 flex flex-col justify-between" data-reveal style={{ "--d": "80ms" }}>
            <div>
              <p className="eyebrow">Fine print, in full</p>
              <ul className="grid gap-3 mt-4 p-0 list-none">
                {[
                  "Prices exclude 18% GST.",
                  "Payment: 40% to start, 40% at design sign-off, 20% at launch.",
                  "Monthly plans are rolling — leave any month, no exit fee.",
                  "Ad spend is paid by you, directly to Meta, so you keep the account and data.",
                  "Stock imagery and fonts we use are free for commercial use.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[.86rem] text-soft leading-snug">
                    <Icon name="check" size={14} strokeWidth={2.4} className="text-accent mt-[2px] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[.84rem] text-mute mt-5 pt-5 border-t border-line leading-relaxed m-0">
              Bigger scope, multi-city rollout or a funded startup build? We scope those as a milestone plan with a named lead on every phase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
