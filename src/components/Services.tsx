import { motion } from "framer-motion";
import { services } from "../data/content";
import ServiceOrb from "./three/ServiceOrb";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Services engineered for the next dimension of the web"
          description="From foundational engineering to fully immersive 3D storytelling, we cover the full stack of modern digital product development."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="relative h-36 w-full">
                <ServiceOrb type={service.shape} color={service.color} />
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
