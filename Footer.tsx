const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Services",
    links: ["Web Development", "3D Experiences", "Cloud & DevOps", "UI/UX Design"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Documentation", "Support", "Privacy Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-8 w-8">
                <polygon points="20,3 35,12 35,28 20,37 5,28 5,12" fill="none" stroke="url(#footGrad)" strokeWidth="1.6" />
                <circle cx="20" cy="20" r="5" fill="url(#footGrad)" />
                <defs>
                  <linearGradient id="footGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5be3ff" />
                    <stop offset="100%" stopColor="#9b8cff" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-semibold tracking-tight text-white">
                Ether<span className="text-cyan-300">Node</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              A technology studio engineering immersive websites, cloud platforms, and 3D web
              experiences for forward-thinking brands.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 transition-colors hover:text-cyan-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} EtherNode Solutions. All rights reserved.</p>
          <p>Designed &amp; engineered with Three.js, React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
