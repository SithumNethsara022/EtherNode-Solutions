import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-[#0a1030] via-[#0c1338] to-[#090c22] px-6 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
          Ready when you are
        </span>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Let's build something the internet hasn't seen yet.
        </h2>
        <p className="max-w-xl text-base text-slate-300/85">
          Tell us about your project and we'll get back within one business day with next steps.
        </p>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/25 transition-transform hover:scale-105"
        >
          Get a Free Consultation
        </button>
      </motion.div>
    </section>
  );
}
