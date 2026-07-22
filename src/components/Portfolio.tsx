import { motion } from "framer-motion";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Portfolio() {
  return (
    <section id="work" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products we've engineered into reality"
          description="A glimpse at the platforms, dashboards, and experiences we've shipped for our partners."
        />

        <div className="mt-16 flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 lg:grid-cols-2 lg:gap-0 lg:p-0 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl lg:rounded-none lg:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[380px]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 p-2 lg:p-12">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300/80">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-2 flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
