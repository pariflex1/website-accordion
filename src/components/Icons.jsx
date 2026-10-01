/* Line icon set — single source so stroke weight and size stay consistent. */
const P = {
  browser: (
    <>
      <rect x="2.75" y="4.25" width="18.5" height="15.5" rx="3" />
      <path d="M2.75 9h18.5M6.5 6.6h.01M9.4 6.6h.01" />
      <path d="M7 12.6h6.4M7 16h4.2" />
    </>
  ),
  terminal: (
    <>
      <rect x="2.75" y="4.25" width="18.5" height="15.5" rx="3" />
      <path d="M6.6 9.6l2.6 2.4-2.6 2.4M12 14.6h5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2.8l1.9 4.7 4.7 1.9-4.7 1.9L12 16l-1.9-4.7-4.7-1.9 4.7-1.9L12 2.8z" />
      <path d="M18.6 15.4l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.4" />
      <path d="M12 3.4V1M12 23v-2.4M3.4 12H1M23 12h-2.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.6 17.4a9 9 0 1116.8 0" />
      <path d="M12 12.8l4-4" />
      <circle cx="12" cy="14" r="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.9l7.4 2.8v5.6c0 4.4-3 7.9-7.4 9.2-4.4-1.3-7.4-4.8-7.4-9.2V5.7L12 2.9z" />
      <path d="M8.9 12.1l2.2 2.2 4-4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5v-6.2M11 20.5V8.4M15.5 20.5v-4.2M20 20.5V5" />
    </>
  ),
  bolt: (
    <>
      <path d="M13.4 2.6L5.8 13.4h4.6l-1 8 7.6-10.8h-4.6l1-8z" />
    </>
  ),
  arrowUR: <path d="M7 17L17 7M9.2 7H17v7.8" />,
  arrowR: <path d="M4 12h15.5M14 6.5l5.5 5.5L14 17.5" />,
  arrowD: <path d="M12 4.5v15M6.5 14l5.5 5.5L17.5 14" />,
  arrowU: <path d="M12 19.5v-15M6.5 10L12 4.5 17.5 10" />,
  check: <path d="M4.8 12.6l4.6 4.6L19.4 7" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  phone: <path d="M6.4 3.5h3l1.5 3.7-2 1.5a10.5 10.5 0 005.4 5.4l1.5-2 3.7 1.5v3a2 2 0 01-2.2 2A16.4 16.4 0 014.4 5.7a2 2 0 012-2.2z" />,
  mail: (
    <>
      <rect x="2.9" y="5" width="18.2" height="14" rx="3" />
      <path d="M3.6 7.2l8.4 5.6 8.4-5.6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.6 20.4l1.2-4.2A8.4 8.4 0 118 19.3l-4.4 1.1z" />
      <path d="M9 9.2c.2 1.6 2.4 4 4.2 4.5l1.1-1.2 1.8.9c-.3 1.3-1.6 1.8-3 1.4a7.2 7.2 0 01-4.9-5.2c-.3-1.3.3-2.5 1.5-2.8l.8 1.7L9 9.2z" fill="currentColor" stroke="none" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 7.2V12l3.4 2.1" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.7 6.1.7-4.6 4.2 1.3 6.1L12 17.2l-5.4 3 1.3-6.1L3.3 9.9l6.1-.7L12 3.5z" fill="currentColor" stroke="none" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.4 5.4l1.4 1.4M17.2 17.2l1.4 1.4M18.6 5.4l-1.4 1.4M6.8 17.2l-1.4 1.4" />
    </>
  ),
  moon: <path d="M20 14.4A8.6 8.6 0 019.6 4a8.8 8.8 0 1010.4 10.4z" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h11" />,
  close: <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />,
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="M15.8 15.8l4.2 4.2" />
    </>
  ),
  layers: <path d="M12 2.9L2.8 7.6 12 12.3l9.2-4.7L12 2.9zM2.8 12.6L12 17.3l9.2-4.7M2.8 16.9L12 21.6l9.2-4.7" />,
  users: (
    <>
      <circle cx="9.2" cy="8.4" r="3.6" />
      <path d="M2.9 19.8a6.4 6.4 0 0112.6 0M16.4 5.2a3.6 3.6 0 010 6.6M18 19.8a6.6 6.6 0 00-1.7-4.4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M3.2 12h2.2M18.6 12h2.2M5.8 5.8l1.6 1.6M16.6 16.6l1.6 1.6M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7.6" ry="3.1" />
      <path d="M4.4 6v12c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1V6M4.4 12c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6.4" r="2.9" />
      <circle cx="18" cy="17.6" r="2.9" />
      <path d="M8.9 6.4h4.6a3.9 3.9 0 010 7.8H10a3.9 3.9 0 000 3.4h5.1" />
    </>
  ),
  chevron: <path d="M9 5.5l7 6.5-7 6.5" />,
  refresh: (
    <>
      <path d="M20 12a8 8 0 11-2.6-5.9" />
      <path d="M20.4 3.6v4.2h-4.2" />
    </>
  ),
  sparkle: <path d="M12 3.2l1.6 5.2 5.2 1.6-5.2 1.6L12 16.8l-1.6-5.2-5.2-1.6 5.2-1.6L12 3.2z" />,
};

export default function Icon({ name, size = 24, className = "", strokeWidth = 1.6, fill = "none" }) {
  const d = P[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {d}
    </svg>
  );
}

export const PlusMark = ({ small = false }) => (
  <span className={`mark ${small ? "mark-sm" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M4 12h16" />
      <path className="v" d="M12 4v16" />
    </svg>
  </span>
);

export const Logo = ({ size = 30, gid = "lg" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="0.6" y="0.6" width="30.8" height="30.8" rx="9" fill={`url(#${gid})`} />
    <path d="M6.8 12.2 16 7.4l9.2 4.8L16 17 6.8 12.2Z" fill="#fff" fillOpacity=".95" />
    <path d="M6.8 17.4 16 22.2l9.2-4.8" stroke="#fff" strokeOpacity=".78" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.8 22.4 16 27.2l9.2-4.8" stroke="#fff" strokeOpacity=".4" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id={gid} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2440ea" />
        <stop offset=".55" stopColor="#5a4cf0" />
        <stop offset="1" stopColor="#0bb5d6" />
      </linearGradient>
    </defs>
  </svg>
);
