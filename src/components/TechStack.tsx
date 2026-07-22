import { motion } from "framer-motion";
import { techStack } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  const loopedStack = [...techStack, ...techStack];

  return (
    <section id="tech" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Our Toolkit"
          title="Built on tools that scale"
          description="We choose technology deliberately — proven, performant, and future-proof."
        />
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04061a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04061a] to-transparent" />
        <motion.div
          className="flex w-max gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {loopedStack.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-400" />
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
