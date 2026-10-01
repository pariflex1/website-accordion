import Icon from "./Icons";
import SectionHead from "./SectionHead";
import { promise } from "@/data/site";

export default function WhyUs() {
  return (
    <section className="band relative border-t border-line">
      <div className="wrap wrap-wide">
        <div className="grid lg:grid-cols-[1fr_.85fr] gap-12 lg:gap-20 items-start">
          <div>
            <SectionHead
              eyebrow="How we work"
              title={
                <>
                  Agencies sell hours.
                  <br />
                  We ship systems that <span className="grad-text">save them.</span>
                </>
              }
              copy="Every engagement is built on four commitments. They are written into the proposal, not hidden in a contract you will never reread."
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {promise.map((p, i) => (
                <article key={p.title} className="card card-pad card-hover edge-glow h-full" data-reveal style={{ "--d": `${i * 80}ms` }}>
                  <span className="svc-ico" style={{ width: 44, height: 44, borderRadius: 13 }}>
                    <Icon name={p.icon} size={21} />
                  </span>
                  <h3 className="h3 mt-4">{p.title}</h3>
                  <p className="text-[.9rem] text-mute mt-2 leading-relaxed">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* guarantee panel */}
          <aside className="lg:sticky lg:top-28" data-reveal style={{ "--d": "120ms" }}>
            <div className="card card-pad overflow-hidden relative">
              <div
                className="absolute inset-x-0 -top-24 h-52 opacity-70 -z-0 pointer-events-none"
                style={{ background: "radial-gradient(50% 60% at 50% 0%, color-mix(in srgb, var(--c-accent) 30%, transparent), transparent 70%)" }}
              />
              <div className="relative">
                <p className="eyebrow">The honest part</p>
                <h3 className="font-display text-[1.6rem] sm:text-[1.85rem] font-semibold tracking-[-.035em] leading-[1.15] mt-4">
                  If we can't make it pay for itself, we say no.
                </h3>
                <p className="text-[.93rem] text-soft mt-4 leading-relaxed">
                  Roughly one in five enquiries gets turned down or scoped smaller. A ₹3 lakh portal
                  for a business with 40 customers a month is a bad idea, and we would rather lose
                  the project than build it.
                </p>

                <dl className="grid gap-0 mt-6 divide-hair">
                  {[
                    ["Reply time", "Same working day, always"],
                    ["Scope changes", "Quoted separately — never quietly added"],
                    ["Handover", "Repo, credentials, docs, training video"],
                    ["Aftercare", "2–30 days of free fixes, then an optional care plan"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-6 py-3">
                      <dt className="text-[.8rem] uppercase tracking-[.1em] text-mute font-medium shrink-0">{k}</dt>
                      <dd className="text-[.9rem] text-ink text-right font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>

                <a href="#contact" className="btn btn-secondary btn-sm mt-6 w-full">
                  Tell us what you're stuck on
                  <Icon name="arrowUR" size={15} strokeWidth={2} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
