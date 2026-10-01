"use client";

import { useEffect, useState } from "react";
import Icon from "./Icons";

export default function Extras() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* desktop: back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="hidden sm:grid place-items-center fixed z-50 w-11 h-11 rounded-full border border-line bg-panel text-ink transition-all duration-500 hover:bg-panel2"
        style={{
          right: "max(18px, env(safe-area-inset-right))",
          bottom: 26,
          boxShadow: "var(--shadow-m)",
          opacity: show ? 1 : 0,
          transform: show ? "none" : "translateY(14px)",
          pointerEvents: show ? "auto" : "none",
        }}
      >
        <Icon name="arrowU" size={17} strokeWidth={2} />
      </button>

      {/* mobile: sticky convert bar */}
      <div
        className="sm:hidden fixed inset-x-0 bottom-0 z-50 px-3 pt-2"
        style={{
          paddingBottom: "calc(8px + env(safe-area-inset-bottom))",
          background: "color-mix(in srgb, var(--c-panel) 88%, transparent)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid var(--c-line)",
          transform: show ? "none" : "translateY(110%)",
          transition: "transform .5s cubic-bezier(.2,.7,.2,1)",
        }}
      >
        <div className="flex gap-2">
          <a href="#services" className="btn btn-secondary btn-sm flex-1">
            Services
          </a>
          <a href="#contact" className="btn btn-primary btn-sm flex-1">
            Free consult
            <Icon name="arrowUR" size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </>
  );
}
