import Icon from "./Icons";
import { testimonials } from "@/data/site";

const initials = (n) =>
  n
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  return (
    <section className="band relative border-t border-line overflow-hidden">
      <div className="wrap wrap-wide">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow" data-reveal>
              Clients on the record
            </p>
            <h2 className="display h2 mt-5" data-reveal style={{ "--d": "60ms" }}>
              They kept the
              <br />
              <span className="grad-text">receipts.</span>
            </h2>
            <p className="lead mt-5" data-reveal style={{ "--d": "120ms" }}>
              Every quote below is from a business we still work with, published with their name and
              permission. Ask us for a reference call before you sign — we will arrange it.
            </p>

            <div className="card card-pad mt-8 flex items-center gap-5" data-reveal style={{ "--d": "180ms" }}>
              <div>
                <p className="kpi !text-[2.4rem]">4.9</p>
                <span className="stars inline-flex mt-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" size={14} />
                  ))}
                </span>
              </div>
              <div className="border-l border-line pl-5">
                <p className="text-[.86rem] text-soft leading-snug m-0">
                  <b className="text-ink">60+ reviews</b> across Google and Clutch.
                </p>
                <p className="m-0 mt-1.5 text-[.78rem] text-mute">96% of projects came from a referral or a repeat client.</p>
              </div>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4 list-none m-0 p-0">
            {testimonials.map((t, i) => (
              <li
                key={t.name}
                className="card card-pad card-hover edge-glow flex flex-col relative"
                data-reveal
                style={{ "--d": `${i * 90}ms` }}
              >
                <span className="quote-mark absolute top-5 right-6 select-none" aria-hidden="true">
                  &rdquo;
                </span>
                <blockquote className="m-0 text-[1rem] leading-[1.65] text-ink font-normal flex-1 relative">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-line">
                  <span
                    className="grid place-items-center w-10 h-10 rounded-full font-display font-bold text-[.82rem] text-white shrink-0"
                    style={{ background: "linear-gradient(140deg,var(--c-accent),var(--c-accent2))" }}
                    aria-hidden="true"
                  >
                    {initials(t.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-[.9rem] tracking-[-.01em]">{t.name}</span>
                    <span className="block text-[.78rem] text-mute truncate">{t.role}</span>
                  </span>
                </figcaption>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
