import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
          Engineering Digital Realities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          We build the
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
            {" "}immersive web{" "}
          </span>
          of tomorrow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-2xl text-lg leading-relaxed text-slate-300/85"
        >
          EtherNode Solutions is a technology studio crafting high-performance websites, cloud
          infrastructure, and real-time 3D web experiences for ambitious brands ready to break the
          screen barrier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/25 transition-transform hover:scale-105"
          >
            Launch Your Project
          </button>
          <button
            onClick={() => scrollTo("#work")}
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-cyan-300/40 hover:bg-white/10"
          >
            Explore Our Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {[
            ["120+", "Projects Shipped"],
            ["98%", "Client Retention"],
            ["12", "Countries"],
            ["9+", "Years Building"],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-semibold text-white sm:text-3xl">{value}</span>
              <span className="text-xs uppercase tracking-wide text-slate-400">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
          <rect x="1" y="1" width="16" height="26" rx="8" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="9" cy="8" r="2.4" fill="currentColor" />
        </svg>
      </motion.button>
    </section>
  );
}
