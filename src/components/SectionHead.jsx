export default function SectionHead({ eyebrow, title, copy, align = "left", cta, id }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center max-w-3xl" : "max-w-3xl"} mb-12 sm:mb-16`}>
      <p className="eyebrow" data-reveal style={{ "--d": "0ms" }}>
        {eyebrow}
      </p>
      <h2 id={id} className="display h2 mt-5" data-reveal style={{ "--d": "60ms" }}>
        {title}
      </h2>
      {copy && (
        <p className="lead mt-5" data-reveal style={{ "--d": "120ms" }}>
          {copy}
        </p>
      )}
      {cta && (
        <div className={`flex ${center ? "justify-center" : ""} mt-7`} data-reveal style={{ "--d": "180ms" }}>
          <a href={cta.href} className="link-arrow">
            {cta.label}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
