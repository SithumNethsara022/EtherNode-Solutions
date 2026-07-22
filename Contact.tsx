import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const services = [
  "Web Development",
  "3D / WebGL Experience",
  "Cloud & DevOps",
  "UI/UX Design",
  "Mobile App",
  "AI & Automation",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's start building your next project"
          description="Fill out the form and our team will reach out to schedule a discovery call."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-2"
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-300">Email</p>
                <p className="mt-1 text-lg text-white">hello@ethernode.solutions</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-300">Phone</p>
                <p className="mt-1 text-lg text-white">+1 (415) 555-0182</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-300">Studio</p>
                <p className="mt-1 text-lg text-white">San Francisco · Remote-first</p>
              </div>
            </div>

            <div className="flex gap-3">
              {["X", "in", "gh", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-3"
          >
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Message received!</h3>
                <p className="max-w-sm text-sm text-slate-300/80">
                  Thanks for reaching out. A member of the EtherNode team will contact you within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="rounded-xl border border-white/10 bg-[#050818] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="rounded-xl border border-white/10 bg-[#050818] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Service of interest
                  </label>
                  <select className="rounded-xl border border-white/10 bg-[#050818] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50">
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Project details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="resize-none rounded-xl border border-white/10 bg-[#050818] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] sm:w-fit"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
