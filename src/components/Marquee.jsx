import { marquee } from "@/data/site";

const row = (items) => (
  <div className="marquee">
    <div className={`marquee-track ${items.reverse ? "rev" : ""}`}>
      {[0, 1].map((dup) => (
        <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
          {items.list.map((n) => (
            <span key={n} className="marquee-item">
              {n}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default function Marquee() {
  const a = marquee.slice(0, 11);
  const b = marquee.slice(11);
  return (
    <section className="band-tight relative border-y border-line bg-panel/50" aria-label="Technologies we build with">
      <div className="wrap wrap-wide">
        <p className="eyebrow justify-center w-full mb-6">Stack we build on — nothing exotic, everything production-proven</p>
        <div className="grid gap-1 -mt-1">
          {row({ list: a })}
          {row({ list: b, reverse: true })}
        </div>
      </div>
    </section>
  );
}
