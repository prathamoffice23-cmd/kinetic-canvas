import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function PointerRig() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    const smoothing = 1 - Math.exp(-2.4 * Math.min(delta, 0.05));
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.16, smoothing);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.1, smoothing);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.45, smoothing);
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.55} floatIntensity={1.1}>
        <mesh position={[3.8, 1.4, -1.5]} rotation={[0.5, 0.2, 0.5]}>
          <torusGeometry args={[1.25, 0.12, 24, 96]} />
          <meshStandardMaterial color="#ff5c35" metalness={0.88} roughness={0.16} emissive="#ff3b18" emissiveIntensity={0.18} />
        </mesh>
      </Float>
      <Float speed={0.75} rotationIntensity={0.35} floatIntensity={0.8}>
        <mesh position={[-4, -1.5, -2]} rotation={[0.3, 0.7, 0.1]}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshTransmissionMaterial thickness={0.7} roughness={0.12} transmission={0.92} ior={1.25} chromaticAberration={0.04} color="#6ce7e1" />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.7} floatIntensity={0.65}>
        <mesh position={[-2.6, 2.8, -4]} rotation={[0.4, 0.2, 0.9]}>
          <octahedronGeometry args={[0.62, 0]} />
          <meshStandardMaterial color="#e4ff5f" wireframe emissive="#b9ff46" emissiveIntensity={0.32} />
        </mesh>
      </Float>
      <Float speed={1.25} rotationIntensity={0.25} floatIntensity={0.9}>
        <mesh position={[2.1, -2.7, -3]}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial color="#efeff5" metalness={1} roughness={0.05} />
        </mesh>
      </Float>
    </group>
  );
}

function StarField() {
  const points = useRef<THREE.Points>(null);
  const positions = new Float32Array(72 * 3);
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = Math.sin(i * 12.9898) * 8;
    positions[i + 1] = Math.cos(i * 7.233) * 6;
    positions[i + 2] = -2 - Math.abs(Math.sin(i * 3.17) * 7);
  }
  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += Math.min(delta, 0.05) * 0.012;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#d8e8ff" size={0.028} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function AmbientScene() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 9], fov: 46 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.42} />
        <pointLight position={[4, 4, 4]} intensity={20} color="#ff6b45" />
        <pointLight position={[-4, -2, 3]} intensity={16} color="#54d9d2" />
        <Environment>
          <Lightformer intensity={2.4} position={[0, 5, 1]} scale={[10, 2, 1]} />
          <Lightformer intensity={1.4} color="#6ce7e1" position={[-5, 0, 0]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
        </Environment>
        <StarField />
        <PointerRig />
      </Canvas>
    </div>
  );
}
