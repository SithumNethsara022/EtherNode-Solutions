import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

interface NetworkCoreProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

export default function NetworkCore({ mouse }: NetworkCoreProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const ringGeom = useMemo(() => new THREE.TorusGeometry(2.6, 0.008, 8, 128), []);
  const ringGeom2 = useMemo(() => new THREE.TorusGeometry(3.1, 0.006, 8, 128), []);

  useFrame((_state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.15;
      coreRef.current.rotation.x += delta * 0.05;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.08;
      wireRef.current.rotation.z += delta * 0.03;
    }
    if (groupRef.current) {
      const targetX = mouse.current.y * 0.3;
      const targetY = mouse.current.x * 0.3;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.03);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.03);
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron ref={coreRef} args={[1.35, 4]}>
        <MeshDistortMaterial
          color="#5b8cff"
          emissive="#1d3fa8"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.7}
          distort={0.35}
          speed={1.6}
        />
      </Icosahedron>

      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.85, 1]} />
        <meshBasicMaterial color="#7bdcff" wireframe transparent opacity={0.22} />
      </mesh>

      <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
        <primitive object={ringGeom} attach="geometry" />
        <meshBasicMaterial color="#9b8cff" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 1.6, -0.6, 0.3]}>
        <primitive object={ringGeom2} attach="geometry" />
        <meshBasicMaterial color="#5be3ff" transparent opacity={0.25} />
      </mesh>

      <pointLight color="#6ea8ff" intensity={8} distance={6} />
    </group>
  );
}
