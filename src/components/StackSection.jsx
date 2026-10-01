"use client";

import { useState } from "react";
import Icon, { PlusMark } from "./Icons";
import { glossary, stackGroups, stackTable } from "@/data/site";

export default function StackSection() {
  const [term, setTerm] = useState("RAG (Retrieval-Augmented Generation)");

  return (
    <section id="stack" className="band relative border-t border-line bg-panel/40">
      <div className="wrap wrap-wide">
        <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-12 lg:gap-16 items-start">
          {/* left rail */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow" data-reveal>
              Core infrastructure &amp; stack
            </p>
            <h2 className="display h2 mt-5" data-reveal style={{ "--d": "60ms" }}>
              Boring technology,
              <br />
              <span className="grad-text">chosen on purpose.</span>
            </h2>
            <p className="lead mt-5" data-reveal style={{ "--d": "120ms" }}>
              The platforms behind every build are ones your next developer will already know — and
              ones you can leave without losing anything. No proprietary CMS, no hostage data.
            </p>

            <div className="card card-pad mt-8" data-reveal style={{ "--d": "180ms" }}>
              <p className="eyebrow mb-4">Plain-English glossary</p>
              <div className="grid gap-0">
                {glossary.map(([t, d], gi) => {
                  const open = term === t;
                  return (
                    <div key={t} className="svc-item" data-open={open}>
                      <button type="button" className="svc-q py-2.5 text-[.88rem]" aria-expanded={open} aria-controls={`gl-${gi}`} onClick={() => setTerm(open ? "" : t)}>
                        <span className="flex-1">{t}</span>
                        <PlusMark small />
                      </button>
                      <div className="acc-panel" id={`gl-${gi}`} role="region" aria-label={t}>
                        <div className="acc-inner">
                          <p className="svc-a !text-[.85rem] !mb-3.5">{d}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right content */}
          <div className="min-w-0 grid gap-5">
            {stackGroups.map((g, i) => (
              <article key={g.title} className="card card-pad card-hover edge-glow" data-reveal style={{ "--d": `${i * 80}ms` }}>
                <div className="flex items-center gap-3.5 mb-5">
                  <span className="svc-ico" style={{ width: 40, height: 40, borderRadius: 12 }}>
                    <Icon name={["layers", "db", "route"][i]} size={19} />
                  </span>
                  <h3 className="h3 !mt-0">{g.title}</h3>
                  <span className="num-badge ml-auto hidden sm:block">0{i + 1}</span>
                </div>
                <dl className="grid gap-5 m-0 sm:grid-cols-2">
                  {g.items.map(([name, desc]) => (
                    <div key={name}>
                      <dt className="font-display font-semibold text-[1.02rem] tracking-[-.02em]">{name}</dt>
                      <dd className="m-0 mt-1.5 text-[.89rem] text-mute leading-relaxed">{desc}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}

            <div className="tbl-wrap" data-reveal>
              <table className="tbl">
                <caption>{stackTable.caption}</caption>
                <thead>
                  <tr>
                    {stackTable.columns.map((c) => (
                      <th key={c} scope="col">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stackTable.rows.map((r) => (
                    <tr key={r[0]}>
                      <th scope="row">{r[0]}</th>
                      <td className="text-soft">{r[1]}</td>
                      <td className="text-mute">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card grid sm:grid-cols-3 gap-6 bg-panel2/60" data-reveal>
              {[
                ["shield", "Data residency", "Indian clients default to Mumbai-region hosting with daily encrypted backups."],
                ["gear", "You keep the keys", "Accounts, repos and billing run in your name from day one. We just hold the wrench."],
                ["chart", "No black boxes", "Every automation gets a written flow map so anyone competent can pick it up."],
              ].map(([ic, t, d]) => (
                <div key={t}>
                  <span className="text-accent">
                    <Icon name={ic} size={20} />
                  </span>
                  <h4 className="font-display font-semibold text-[.98rem] mt-3 tracking-[-.02em]">{t}</h4>
                  <p className="text-[.85rem] text-mute mt-1.5 leading-relaxed m-0">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
