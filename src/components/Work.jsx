import SectionHead from "./SectionHead";
import Icon from "./Icons";
import { work } from "@/data/site";

export default function Work() {
  return (
    <section id="work" className="band relative border-t border-line">
      <div className="wrap wrap-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <SectionHead
              eyebrow="Selected work — numbers, not vibes"
              title={
                <>
                  Three builds, three
                  <br />
                  <span className="grad-text">measurable</span> outcomes.
                </>
              }
              copy="Client names are used with permission. Metrics compare the 90 days before our work with the 90 days after it, pulled from the client's own analytics and ad accounts."
            />
          </div>
          <a href="#contact" className="btn btn-secondary btn-sm lg:mb-16 shrink-0">
            Ask for the full case studies
            <Icon name="arrowUR" size={15} strokeWidth={2} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {work.map((w, i) => (
            <article
              key={w.name}
              className="card overflow-hidden flex flex-col card-hover group"
              data-reveal
              style={{ "--d": `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-panel2">
                <img
                  src={w.image}
                  alt={w.alt}
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.045]"
                />
                <span className="absolute left-3.5 top-3.5 pill glass text-[.72rem] py-1">{w.sector}</span>
                <span className="absolute right-3.5 top-3.5 grid place-items-center w-9 h-9 rounded-full bg-panel border border-line opacity-0 translate-y-1.5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <Icon name="arrowUR" size={15} strokeWidth={2.2} />
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="font-display text-[1.35rem] font-semibold tracking-[-.03em] leading-tight">{w.name}</h3>
                <p className="text-[.9rem] text-mute mt-2.5 leading-relaxed flex-1">{w.blurb}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {w.tags.map((t) => (
                    <span key={t} className="chip text-[.72rem]">
                      {t}
                    </span>
                  ))}
                </div>

                <dl className="grid grid-cols-3 mt-5 pt-4 border-t border-line gap-2 m-0">
                  {w.metrics.map(([v, l]) => (
                    <div key={l}>
                      <dt className="sr-only">{l}</dt>
                      <dd className="m-0">
                        <span className="block font-display font-bold text-[1.22rem] tracking-[-.035em] leading-none">{v}</span>
                        <span className="block text-[.72rem] text-mute mt-1.5 leading-tight">{l}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10" data-reveal>
          {[
            ["browser", "Sites", "31 launched"],
            ["terminal", "Apps", "12 shipped"],
            ["spark", "Automations", "86 live flows"],
            ["target", "Ad spend", "₹4.1Cr managed"],
          ].map(([ic, k, v]) => (
            <div key={k} className="card card-pad flex items-center gap-4 bg-panel2/50">
              <span className="text-accent">
                <Icon name={ic} size={22} />
              </span>
              <span>
                <span className="block text-[.72rem] uppercase tracking-[.12em] text-mute">{k}</span>
                <span className="block font-display font-semibold text-[1.05rem] tracking-[-.02em] mt-0.5">{v}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
