import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ShapeType = "icosahedron" | "torusKnot" | "octahedron" | "torus" | "dodecahedron" | "box";

function Shape({ type, color }: { type: ShapeType; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.35;
      ref.current.rotation.y += delta * 0.5;
    }
  });

  const geometry = () => {
    switch (type) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.68, 0.22, 100, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[1.05, 0]} />;
      case "torus":
        return <torusGeometry args={[0.75, 0.28, 16, 48]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
      case "box":
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <mesh ref={ref}>
      {geometry()}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.5}
        wireframe={type === "torus" || type === "box"}
      />
    </mesh>
  );
}

export default function ServiceOrb({ type, color = "#6ea8ff" }: { type: ShapeType; color?: string }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 2.6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="!touch-none"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={20} color={color} />
      <pointLight position={[-2, -1, -2]} intensity={8} color="#ffffff" />
      <Shape type={type} color={color} />
    </Canvas>
  );
}
