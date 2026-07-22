import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 60;
const RADIUS = 6.5;

function randomOnSphere(radius: number) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  const r = radius * (0.55 + Math.random() * 0.6);
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta) * 0.6,
    r * Math.cos(phi)
  );
}

export default function NodesField() {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push(randomOnSphere(RADIUS));
    }
    return arr;
  }, []);

  const lineSegments = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < 2.6) {
          positions.push(points[i].x, points[i].y, points[i].z);
          positions.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }
    return new Float32Array(positions);
  }, [points]);

  const pointPositions = useMemo(() => {
    const positions = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    });
    return positions;
  }, [points]);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lineSegments, 3]}
            count={lineSegments.length / 3}
            array={lineSegments}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4a6fe0" transparent opacity={0.18} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
            count={pointPositions.length / 3}
            array={pointPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#8fd7ff" size={0.06} sizeAttenuation transparent opacity={0.85} />
      </points>
    </group>
  );
}
