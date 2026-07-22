import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 sm:px-8 ${
          scrolled
            ? "border border-white/10 bg-[#050818]/80 backdrop-blur-xl shadow-lg shadow-black/20"
            : "border border-transparent bg-transparent"
        }`}
        style={{ marginInline: scrolled ? "1rem" : "0" }}
      >
        <a href="#top" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); handleNav("#top"); }}>
          <span className="relative flex h-9 w-9 items-center justify-center">
            <svg viewBox="0 0 40 40" className="h-9 w-9">
              <polygon
                points="20,3 35,12 35,28 20,37 5,28 5,12"
                fill="none"
                stroke="url(#navGrad)"
                strokeWidth="1.6"
              />
              <circle cx="20" cy="20" r="5" fill="url(#navGrad)" />
              <defs>
                <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5be3ff" />
                  <stop offset="100%" stopColor="#9b8cff" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Ether<span className="text-cyan-300">Node</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => handleNav("#contact")}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
          >
            Start a Project
          </button>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#050818]/95 p-4 backdrop-blur-xl md:hidden"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950"
          >
            Start a Project
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
