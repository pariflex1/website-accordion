"use client";

import { useMemo, useState } from "react";
import Icon, { PlusMark } from "./Icons";
import SectionHead from "./SectionHead";
import { services } from "@/data/site";

function ServiceRow({ item, isOpen, onToggle, id }) {
  const [name, desc] = item;
  return (
    <div className="svc-item" data-open={isOpen}>
      <button type="button" className="svc-q" aria-expanded={isOpen} aria-controls={`svc-a-${id}`} onClick={onToggle}>
        <span className="flex-1">{name}</span>
        <PlusMark small />
      </button>
      <div className="acc-panel" id={`svc-a-${id}`} role="region">
        <div className="acc-inner">
          <p className="svc-a">{desc}</p>
        </div>
      </div>
    </div>
  );
}

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function mark(text, q) {
  if (!q) return escapeHtml(text);
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return escapeHtml(text);
  return `${escapeHtml(text.slice(0, i))}<mark>${escapeHtml(text.slice(i, i + q.length))}</mark>${escapeHtml(text.slice(i + q.length))}`;
}

export default function Services() {
  const [openCat, setOpenCat] = useState("websites");
  const [openItem, setOpenItem] = useState("websites_0");
  const [q, setQ] = useState("");

  const query = q.trim();
  const results = useMemo(() => {
    if (query.length < 2) return null;
    const t = query.toLowerCase();
    return services
      .map((s) => ({
        cat: s,
        hits: s.items
          .map((it, i) => ({ it, i }))
          .filter(({ it }) => `${it[0]} ${it[1]}`.toLowerCase().includes(t)),
      }))
      .filter((r) => r.hits.length)
      .sort((a, b) => b.hits.length - a.hits.length);
  }, [query]);

  const total = services.reduce((n, s) => n + s.items.length, 0);

  const jump = (id) => {
    setOpenCat(id);
    setOpenItem("");
    setQ("");
    requestAnimationFrame(() => {
      const el = document.getElementById(`catsec-${id}`);
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
  };

  return (
    <section id="services" className="band relative">
      <div className="blob blob-c opacity-40" />
      <div className="wrap wrap-wide relative">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-10">
          <div className="flex-1">
            <SectionHead
              eyebrow="What we do — 44 services across 4 disciplines"
              title={
                <>
                  Every service, in plain English.
                  <br />
                  <span className="muted">No jargon, no upsell traps.</span>
                </>
              }
              copy="Tap any line to see exactly what you get. Everything below is something we have built and run for a real business this year — search for a word like “hotel”, “CRM”, “Hindi” or “pixel” to jump straight to it."
            />
          </div>

          <div className="lg:pb-16 lg:w-[320px] shrink-0">
            <label htmlFor="svc-search" className="label sr-only">
              Search services
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mute pointer-events-none">
                <Icon name="search" size={17} />
              </span>
              <input
                id="svc-search"
                className="input"
                style={{ paddingLeft: 42 }}
                placeholder="Search 44 services…"
                value={q}
                autoComplete="off"
                onChange={(e) => setQ(e.target.value)}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-7 h-7 rounded-full bg-panel2 hover:bg-line transition-colors"
                  aria-label="Clear search"
                >
                  <Icon name="close" size={13} strokeWidth={2} />
                </button>
              )}
            </div>
            <p className="mono text-[.68rem] text-mute mt-2.5 pl-1">
              {results ? `${results.reduce((n, r) => n + r.hits.length, 0)} of ${total} services match` : `${total} services across ${services.length} disciplines`}
            </p>
          </div>
        </div>

        {/* ---------- search results ---------- */}
        {results ? (
          <div className="grid md:grid-cols-2 gap-4">
            {results.length === 0 && (
              <div className="card card-pad md:col-span-2 text-center py-14">
                <p className="h3">Nothing matches “{query}”.</p>
                <p className="muted mt-2 text-[.92rem]">We still probably do it — tell us what you need and we will answer honestly.</p>
                <a href="#contact" className="btn btn-primary btn-sm mt-6 inline-flex">
                  Ask us directly
                </a>
              </div>
            )}
            {results.map(({ cat, hits }) =>
              hits.map(({ it, i }) => (
                <article key={`${cat.id}-${i}`} className="card card-pad card-hover edge-glow">
                  <p className="eyebrow mb-3">{cat.name}</p>
                  <h3 className="h3" dangerouslySetInnerHTML={{ __html: mark(it[0], query) }} />
                  <p className="text-[.9rem] text-soft mt-2 leading-relaxed">{it[1]}</p>
                  <a href="#contact" className="link-arrow text-[.85rem] mt-4 inline-flex">
                    Enquire <Icon name="arrowUR" size={14} strokeWidth={2.2} />
                  </a>
                </article>
              ))
            )}
          </div>
        ) : (
          <>
          {/* ---------- quick jump ---------- */}
          <div className="flex flex-wrap gap-2 mb-6" data-reveal>
            {services.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => jump(s.id)}
                className={`pill cursor-pointer transition-colors ${openCat === s.id ? "pill-accent" : "hover:text-ink"}`}
                aria-pressed={openCat === s.id}
              >
                <span className="num-badge">0{i + 1}</span>
                {s.short}
                <span className="mono text-[.68rem] opacity-70">{s.items.length}</span>
              </button>
            ))}
          </div>

          <div className="grid gap-3.5">
            {services.map((s, idx) => {
              const open = openCat === s.id;
              return (
                <section key={s.id} id={`catsec-${s.id}`} className="acc-item" data-open={open}>
                  <button
                    type="button"
                    className="acc-head"
                    aria-expanded={open}
                    aria-controls={`cat-${s.id}`}
                    onClick={() => {
                      setOpenCat(open ? "" : s.id);
                      setOpenItem("");
                    }}
                  >
                    <span className="num-badge hidden md:block w-6">0{idx + 1}</span>
                    <span className="svc-ico">
                      <Icon name={s.icon} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-display text-[clamp(1.25rem,2.5vw,1.7rem)] font-semibold tracking-[-.03em] leading-tight">
                        {s.name}
                      </span>
                      <span className="block mt-1.5 text-[.85rem] text-mute">
                        {s.count} · <span className="text-ink font-medium">{s.from}</span> · {s.time}
                      </span>
                    </span>
                    <PlusMark />
                  </button>

                  <div className="acc-panel" id={`cat-${s.id}`} role="region" aria-label={`${s.name} details`}>
                    <div className="acc-inner">
                      <div className="acc-fade grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 px-[clamp(18px,2.4vw,26px)] pb-7 pt-1 border-t border-line/70">
                        <div>
                          <p className="text-[.98rem] text-soft leading-relaxed">{s.blurb}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {s.chips.map((c) => (
                              <span key={c} className="chip">
                                <Icon name="check" size={11} strokeWidth={2.6} />
                                {c}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-col gap-2.5 mt-6 sm:flex-row lg:flex-col">
                            <a href="#contact" className="btn btn-primary btn-sm">
                              Enquire about this
                              <Icon name="arrowR" size={15} strokeWidth={2} />
                            </a>
                            <a
                              href={
                                s.id === "ads"
                                  ? "#pricing"
                                  : s.id === "ai"
                                  ? "#stack"
                                  : "#work"
                              }
                              className="btn btn-ghost btn-sm justify-start px-3"
                            >
                              {s.id === "ads" ? "See what it costs →" : s.id === "ai" ? "See the stack behind it →" : "See related work →"}
                            </a>
                          </div>
                        </div>

                        <div className="border-line lg:border-l lg:pl-8 min-w-0">
                          {s.items.map((it, i) => {
                            const key = `${s.id}_${i}`;
                            return (
                              <ServiceRow
                                key={key}
                                id={key}
                                item={it}
                                isOpen={openItem === key}
                                onToggle={() => setOpenItem(openItem === key ? "" : key)}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          </>
        )}

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[
            ["Not sure which you need?", "That is what the free consult is for. 30 minutes, one senior person, no proposal unless you ask."],
            ["Everything includes", "Design, build, QA on real devices, analytics, training video and a fixes window."],
            ["Also handy", "We happily work as the technical partner behind your existing agency or marketing team."],
          ].map(([t, d]) => (
            <div key={t} className="card card-pad bg-panel2/60" data-reveal>
              <h3 className="font-display font-semibold text-[1.02rem] tracking-[-.02em]">{t}</h3>
              <p className="text-[.88rem] text-mute mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
