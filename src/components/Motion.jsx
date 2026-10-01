"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One observer for every [data-reveal] node on the page.
 * Cheaper than a wrapper per component and it works with server-rendered markup.
 */
export default function RevealFx() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = () => Array.from(document.querySelectorAll("[data-reveal]"));
    if (reduce) {
      nodes().forEach((n) => n.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    const seen = new WeakSet();
    const scan = () =>
      nodes().forEach((n) => {
        if (!seen.has(n) && !n.classList.contains("in")) {
          seen.add(n);
          io.observe(n);
        }
      });
    scan();
    // catch nodes added later (search filters, accordion contents)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}

/** Animated number that counts up once it scrolls into view. */
export function CountUp({ to, from = 0, dur = 1500, prefix = "", suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(from);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(from + (to - from) * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, from, dur]);
  return (
    <span ref={ref}>
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
}
