import { motion } from "framer-motion";
import { process } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear path from concept to launch"
          description="Every engagement follows a transparent process designed to reduce risk and maximize momentum."
        />

        <div className="relative mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent lg:block" />
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col gap-4"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#080b24] text-xl font-semibold text-cyan-300 shadow-lg shadow-cyan-500/10">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
