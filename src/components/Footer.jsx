import Icon, { Logo } from "./Icons";
import { brand, nav, services } from "@/data/site";

const year = 2026;

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-panel/40 overflow-hidden">
      <div className="noise opacity-25" />
      <div className="wrap wrap-wide relative pt-16 sm:pt-20">
        {/* CTA line */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end pb-14 mb-14 border-b border-line">
          <h2 className="display text-[clamp(2rem,5.2vw,3.6rem)] leading-[1.02] max-w-[24ch] m-0">
            Let&apos;s build the thing
            <br />
            <span className="grad-text">your competitors keep putting off.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book a free consult
              <Icon name="arrowUR" size={17} strokeWidth={2} />
            </a>
            <a href={brand.whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-secondary btn-lg">
              <Icon name="whatsapp" size={17} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo size={32} gid="lgFoot" />
              <span className="font-display text-[1.28rem] font-bold tracking-[-.03em]">{brand.name}</span>
            </a>
            <p className="text-[.9rem] text-mute mt-4 max-w-[34ch] leading-relaxed">
              {brand.legal} — a small senior team building websites, software, AI automation and
              performance ads for growing businesses across India.
            </p>
            <ul className="flex gap-2 mt-6 p-0 list-none">
              {[
                ["Instagram", "#"],
                ["LinkedIn", "#"],
                ["X", "#"],
                ["GitHub", "#"],
              ].map(([n, h]) => (
                <li key={n}>
                  <a href={h} aria-label={n} className="grid place-items-center w-9 h-9 rounded-full border border-line bg-panel text-mute hover:text-ink hover:border-accent/50 transition-colors text-[.7rem] font-semibold">
                    {n[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Services</p>
            <ul className="grid gap-2.5 p-0 m-0 list-none">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-[.9rem] text-soft hover:text-accent transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#stack" className="text-[.9rem] text-soft hover:text-accent transition-colors">
                  Infrastructure &amp; stack
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Studio</p>
            <ul className="grid gap-2.5 p-0 m-0 list-none">
              {[...nav, { label: "Contact", href: "#contact" }].map((n, i) => (
                <li key={n.label + i}>
                  <a href={n.href} className="text-[.9rem] text-soft hover:text-accent transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Talk to a human</p>
            <ul className="grid gap-3 p-0 m-0 list-none">
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-2.5 text-[.9rem] text-soft hover:text-accent transition-colors">
                  <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-mute" /> {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phoneHref}`} className="flex items-start gap-2.5 text-[.9rem] text-soft hover:text-accent transition-colors">
                  <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-mute" /> {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[.9rem] text-mute">
                <Icon name="pin" size={16} className="mt-0.5 shrink-0" /> {brand.location}
              </li>
              <li className="flex items-start gap-2.5 text-[.9rem] text-mute">
                <Icon name="clock" size={16} className="mt-0.5 shrink-0" /> {brand.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* oversized wordmark */}
      <div className="relative select-none mt-14 -mb-3 overflow-hidden" aria-hidden="true">
        <p
          className="display text-center font-bold leading-none"
          style={{
            fontSize: "clamp(4.5rem, 20vw, 19rem)",
            letterSpacing: "-.05em",
            color: "transparent",
            WebkitTextStroke: "1px color-mix(in srgb, var(--c-mute) 34%, transparent)",
          }}
        >
          STACKWELL
        </p>
      </div>

      <div className="wrap wrap-wide relative">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between py-6 pb-24 sm:pb-6 text-[.78rem] text-mute border-t border-line">
          <p className="m-0">
            © {year} {brand.legal}. GSTIN on invoice. All rights reserved.
          </p>
          <p className="m-0 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Demo site — brand, clients and metrics are illustrative.</span>
            <a href="#top" className="hover:text-ink transition-colors inline-flex items-center gap-1.5">
              Back to top <Icon name="arrowU" size={12} strokeWidth={2.2} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
