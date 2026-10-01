import SectionHead from "./SectionHead";
import Icon from "./Icons";
import { process } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="band relative border-t border-line bg-panel/40">
      <div className="grid-bg opacity-60" style={{ maskImage: "radial-gradient(90% 50% at 50% 50%, #000, transparent 75%)", WebkitMaskImage: "radial-gradient(90% 50% at 50% 50%, #000, transparent 75%)" }} />
      <div className="wrap wrap-wide relative">
        <SectionHead
          align="center"
          eyebrow="Day 0 to launch, and beyond"
          title={
            <>
              Five steps. No mystery weeks.
            </>
          }
          copy="You get a staging link on day one of the build and a short demo every week. If you ever have to ask “what is happening with my project?”, we have done it wrong."
        />

        <ol className="relative grid lg:grid-cols-5 gap-8 lg:gap-5 list-none m-0 p-0">
          <span className="step-line hidden lg:block" aria-hidden="true" />
          {process.map((s, i) => (
            <li key={s.n} className="relative" data-reveal style={{ "--d": `${i * 90}ms` }}>
              <div className="flex lg:block items-center gap-4">
                <span className="relative z-10 grid place-items-center w-14 h-14 rounded-2xl border border-line bg-panel font-display font-bold text-[1.05rem] tracking-tight shadow-[var(--shadow-s)]">
                  {s.n}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-accent opacity-70" />
                </span>
                <span className="mono text-[.68rem] uppercase tracking-[.14em] text-mute lg:hidden">{s.time}</span>
              </div>
              <h3 className="h3 mt-5 lg:mt-6">{s.title}</h3>
              <p className="mono text-[.68rem] uppercase tracking-[.14em] text-accent mt-1.5 hidden lg:block">{s.time}</p>
              <p className="text-[.89rem] text-mute mt-3 leading-relaxed">{s.desc}</p>
              <ul className="grid gap-1.5 mt-4 p-0 list-none">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[.82rem] text-soft">
                    <Icon name="check" size={13} strokeWidth={2.6} className="text-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="card card-pad mt-14 flex flex-col md:flex-row items-center gap-6 md:gap-10" data-reveal>
          <span className="svc-ico" style={{ width: 48, height: 48 }}>
            <Icon name="refresh" size={22} />
          </span>
          <p className="flex-1 text-[.95rem] text-soft leading-relaxed m-0">
            <b className="text-ink">Already have something half-built?</b> We take over existing
            repos and neglected WordPress installs regularly. A one-week audit tells you whether to
            repair or rebuild — and the audit fee is credited if you continue with us.
          </p>
          <a href="#contact" className="btn btn-primary btn-sm shrink-0">
            Book an audit
          </a>
        </div>
      </div>
    </section>
  );
}
