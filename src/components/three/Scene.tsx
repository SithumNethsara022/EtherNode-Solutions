import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import NetworkCore from "./NetworkCore";
import NodesField from "./NodesField";

function ScrollRig({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  useFrame((state) => {
    const t = scrollRef.current;
    state.camera.position.z = 6 - t * 1.6;
    state.camera.position.y = -t * 2.2;
    state.camera.rotation.x = -t * 0.12;
  });
  return null;
}

export default function Scene() {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen bg-[#040611]">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#04061a"]} />
        <fog attach="fog" args={["#050818", 6, 16]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 3]} intensity={0.6} color="#8fb4ff" />
        <Suspense fallback={null}>
          <Stars radius={60} depth={40} count={2200} factor={2.2} saturation={0} fade speed={0.6} />
          <NetworkCore mouse={mouse} />
          <NodesField />
        </Suspense>
        <ScrollRig scrollRef={scrollRef} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#04061a_78%)]" />
    </div>
  );
}
