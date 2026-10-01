"use client";

import { useState } from "react";
import Icon, { PlusMark } from "./Icons";
import { faqs } from "@/data/site";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="band relative border-t border-line">
      <div className="wrap wrap-wide">
        <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow" data-reveal>
              Questions we get every week
            </p>
            <h2 className="display h2 mt-5" data-reveal style={{ "--d": "60ms" }}>
              Straight answers,
              <br />
              <span className="grad-text">no brochure talk.</span>
            </h2>
            <p className="lead mt-5" data-reveal style={{ "--d": "120ms" }}>
              Still unsure about something specific? Send one line on WhatsApp and you will get a
              real reply from a builder, not a form letter.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-7" data-reveal style={{ "--d": "180ms" }}>
              <a href="#contact" className="btn btn-primary btn-sm">
                Ask your question
                <Icon name="arrowUR" size={15} strokeWidth={2} />
              </a>
              <a href="#services" className="btn btn-secondary btn-sm">
                Browse services
              </a>
            </div>
          </div>

          <div className="grid gap-3" data-reveal>
            {faqs.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="acc-item" data-open={isOpen}>
                  <button type="button" className="acc-head !py-4 sm:!py-5" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="num-badge hidden sm:block">Q{i + 1}</span>
                    <span className="flex-1 font-display font-semibold text-[1.02rem] sm:text-[1.14rem] tracking-[-.025em] leading-snug">
                      {q}
                    </span>
                    <PlusMark small />
                  </button>
                  <div className="acc-panel" id={`faq-${i}`} role="region" aria-label={q}>
                    <div className="acc-inner">
                      <p className="acc-fade text-[.93rem] text-soft leading-relaxed mt-0 mb-5 px-[clamp(18px,2.4vw,26px)] lg:pl-[92px] pr-14">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
