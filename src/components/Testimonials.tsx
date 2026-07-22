import { motion } from "framer-motion";
import { testimonials } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by teams who demand more"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-cyan-400/40">
                <path
                  d="M0 24V14.4C0 6.4 5.6 0.8 13.6 0L14.4 3.2C9.6 4.8 6.4 8 6.4 12.8H13.6V24H0ZM17.6 24V14.4C17.6 6.4 23.2 0.8 31.2 0L32 3.2C27.2 4.8 24 8 24 12.8H31.2V24H17.6Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-sm leading-relaxed text-slate-200/90">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-semibold text-slate-950">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
