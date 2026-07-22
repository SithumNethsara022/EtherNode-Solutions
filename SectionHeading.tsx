import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left"
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-xl text-base leading-relaxed", light ? "text-slate-300/80" : "text-slate-600")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
