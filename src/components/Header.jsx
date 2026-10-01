"use client";

import { useCallback, useEffect, useState } from "react";
import Icon, { Logo } from "./Icons";
import { brand, nav } from "@/data/site";

function useTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  }, []);
  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("sw-theme", next);
      } catch {}
      return next;
    });
  }, []);
  return { theme, toggle };
}

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [p, setP] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setStuck(y > 10);
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setP(h > 0 ? Math.min(100, (y / h) * 100) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // highlight the section we are reading
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const secs = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!secs.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`site-head ${stuck || open ? "stuck" : ""}`}>
      <div className="wrap wrap-wide flex items-center gap-6" style={{ height: 74 }}>
        <a href="#top" aria-label={`${brand.name} — home`} className="flex items-center gap-2.5 shrink-0" style={{ letterSpacing: "-.03em" }}>
          <Logo size={32} gid="lgHead" />
          <span className="hidden sm:block font-display text-[1.28rem] font-bold">{brand.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 mx-auto" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="navlink" data-active={active === n.href.slice(1)}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 ml-auto lg:ml-0">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="grid place-items-center w-10 h-10 rounded-full border border-line bg-panel text-ink transition-colors hover:bg-panel2"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <a href="#contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Free consult
            <Icon name="arrowUR" size={15} strokeWidth={2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-line bg-panel"
          >
            <Icon name={open ? "close" : "menu"} size={18} strokeWidth={1.9} />
          </button>
        </div>
      </div>

      <div className="progress" style={{ "--p": `${p}%` }} aria-hidden="true" />

      <div
        id="mobile-nav"
        hidden={!open}
        className="lg:hidden border-t border-line bg-panel"
        style={{ boxShadow: "var(--shadow-m)" }}
      >
        <nav className="wrap grid gap-1 py-5" aria-label="Mobile">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-line/70 font-display text-[1.35rem] font-semibold"
            >
              {n.label}
              <span className="num-badge">0{i + 1}</span>
            </a>
          ))}
          <div className="flex flex-col gap-2.5 pt-4">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
              Book a free consult
            </a>
            <a href={`tel:${brand.phoneHref}`} className="btn btn-secondary">
              <Icon name="phone" size={16} /> {brand.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
