export type ShapeType = "icosahedron" | "torusKnot" | "octahedron" | "torus" | "dodecahedron" | "box";

export interface Service {
  title: string;
  description: string;
  shape: ShapeType;
  color: string;
  tags: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Blazing-fast, pixel-perfect websites and web apps built with modern frameworks, scalable architecture, and clean code.",
    shape: "icosahedron",
    color: "#5b8cff",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "3D & WebGL Experiences",
    description:
      "Immersive, interactive 3D worlds for the browser — product configurators, WebGL showcases, and real-time visualizations.",
    shape: "torusKnot",
    color: "#7bdcff",
    tags: ["Three.js", "WebGPU", "Shaders"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Resilient, auto-scaling cloud infrastructure with CI/CD pipelines that ship faster and sleep better at night.",
    shape: "octahedron",
    color: "#9b8cff",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces that feel inevitable. We craft design systems and prototypes rooted in research and motion.",
    shape: "torus",
    color: "#ff8bd6",
    tags: ["Figma", "Design Systems", "Motion"],
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feeling cross-platform apps that perform beautifully on every device, from prototype to app store.",
    shape: "box",
    color: "#5be3ff",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent pipelines and custom tooling that automate the busywork and unlock insight from your data.",
    shape: "dodecahedron",
    color: "#ffb35b",
    tags: ["LLMs", "Automation", "Data"],
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "Aurora Analytics",
    category: "Web Platform · Data Viz",
    description:
      "A real-time analytics dashboard with 3D data visualizations, helping teams track performance across a live global network.",
    image: "/images/project-aurora.jpg",
    stack: ["React", "Three.js", "Node.js"],
  },
  {
    title: "Nimbus Cloud",
    category: "Cloud Infrastructure",
    description:
      "A distributed cloud orchestration platform visualized as a living node network, scaling to millions of requests.",
    image: "/images/project-nimbus.jpg",
    stack: ["AWS", "Kubernetes", "Go"],
  },
  {
    title: "Pulse Mobile",
    category: "Mobile Experience",
    description:
      "A holographic-inspired fitness companion app with fluid motion design and real-time biometric feedback.",
    image: "/images/project-pulse.jpg",
    stack: ["React Native", "GraphQL", "AI"],
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "", label: "Countries Served" },
  { value: 9, suffix: "+", label: "Years in Orbit" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "We dive into your goals, users, and constraints to map the mission before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    description: "Wireframes evolve into immersive, high-fidelity prototypes validated with real users.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Our engineers build with precision — performant, accessible, and thoroughly tested.",
  },
  {
    step: "04",
    title: "Deploy & Evolve",
    description: "We launch, monitor, and iterate — your product keeps growing long after go-live.",
  },
];

export const techStack = [
  "React", "TypeScript", "Three.js", "Next.js", "Node.js", "Tailwind CSS",
  "WebGL", "GraphQL", "AWS", "Docker", "Kubernetes", "PostgreSQL",
];

export const testimonials = [
  {
    quote:
      "EtherNode didn't just build our website — they built an experience. Our conversion rate doubled within a month of launch.",
    name: "Maya Ferreira",
    role: "CEO, Lumen Retail",
  },
  {
    quote:
      "The 3D product configurator they built feels like magic. Customers spend twice as long exploring our catalog now.",
    name: "Daniel Osei",
    role: "Head of Product, Voltage Gear",
  },
  {
    quote:
      "Professional, fast, and genuinely excited about great engineering. EtherNode is our go-to partner for anything technical.",
    name: "Priya Nandakumar",
    role: "COO, Northwind Labs",
  },
];
