'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function ToyDragon() {
  return (
    <Float floatIntensity={1.2} rotationIntensity={0.8} speed={2}>
      <group rotation={[0, Math.PI / 4, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="#7b2cbf" metalness={0.3} roughness={0.35} />
        </mesh>
        <mesh position={[0, 1.25, -0.95]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.18, 1.1, 24]} />
          <meshStandardMaterial color="#00d4ff" metalness={0.2} roughness={0.45} />
        </mesh>
        <mesh position={[-0.65, 0.4, 0.4]}>
          <boxGeometry args={[0.45, 0.25, 0.25]} />
          <meshStandardMaterial color="#faff00" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[0.65, 0.4, 0.4]}>
          <boxGeometry args={[0.45, 0.25, 0.25]} />
          <meshStandardMaterial color="#faff00" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.05, 1.0]} rotation={[Math.PI / 8, 0, 0]}>
          <coneGeometry args={[0.18, 0.55, 24]} />
          <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [2.5, 1.75, 3.5], fov: 45 }}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, 2, -4]} color="#7b2cbf" intensity={0.6} />
      <ToyDragon />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}> 
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#111827" roughness={0.8} metalness={0.1} />
      </mesh>
      <OrbitControls enablePan={false} enableZoom={true} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  );
}
