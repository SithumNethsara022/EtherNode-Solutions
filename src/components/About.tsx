import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(value, isInView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 border-l border-white/10 px-6 py-2 first:border-l-0 sm:first:border-l">
      <span className="text-3xl font-semibold text-white sm:text-4xl">
        {count}
        {suffix}
      </span>
      <span className="text-center text-xs uppercase tracking-wide text-slate-400">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <img
              src="/images/about-studio.jpg"
              alt="EtherNode Solutions studio"
              className="h-[420px] w-full object-cover sm:h-[480px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04061a] via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden w-56 rounded-2xl border border-cyan-400/20 bg-[#080b24]/90 p-4 backdrop-blur-xl sm:block">
            <p className="text-xs uppercase tracking-widest text-cyan-300">Since 2016</p>
            <p className="mt-1 text-sm text-slate-300">
              Turning ambitious ideas into shipped, high-performance digital products.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            About EtherNode
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            A studio obsessed with the intersection of design, code, and dimension.
          </h2>
          <p className="text-base leading-relaxed text-slate-300/85">
            EtherNode Solutions is a full-stack technology studio. We partner with startups and
            enterprises to design, engineer, and ship products that feel alive — from lightning-fast
            marketing sites to real-time 3D web experiences that redefine what a browser can do.
            Our multidisciplinary team of engineers, designers, and 3D artists work as one node
            network, obsessed with craft and performance in equal measure.
          </p>
          <ul className="grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
            {[
              "Full-stack web engineering",
              "Real-time 3D / WebGL experiences",
              "Cloud-native infrastructure",
              "Design systems & motion",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5l2.5 2.5L9 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-y-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-4 sm:gap-0">
            {stats.map((s) => (
              <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
