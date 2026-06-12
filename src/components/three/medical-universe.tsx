"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Points, PointMaterial, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function BodyCore() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.35;
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshStandardMaterial color="#a5f3fc" emissive="#22d3ee" emissiveIntensity={0.45} transparent opacity={0.64} wireframe />
      </mesh>
      <mesh position={[0, 0.18, 0]} scale={[0.72, 1.35, 0.36]}>
        <sphereGeometry args={[0.72, 64, 64]} />
        <meshStandardMaterial color="#38bdf8" emissive="#2563eb" emissiveIntensity={0.32} transparent opacity={0.32} wireframe />
      </mesh>
      <mesh position={[-0.24, 0.3, 0.13]} scale={[0.28, 0.42, 0.16]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={0.75} transparent opacity={0.68} />
      </mesh>
      <mesh position={[0.23, 0.28, 0.14]} scale={[0.25, 0.38, 0.16]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#bfdbfe" emissive="#2563eb" emissiveIntensity={0.72} transparent opacity={0.58} />
      </mesh>
      <mesh position={[0, -0.15, 0.16]} scale={[0.22, 0.26, 0.18]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f8fafc" emissive="#22d3ee" emissiveIntensity={0.9} transparent opacity={0.82} />
      </mesh>
      {[-0.56, 0.56].map((x) => (
        <mesh key={x} position={[x, 0.05, 0]} rotation={[0, 0, x > 0 ? -0.36 : 0.36]} scale={[0.13, 1.05, 0.13]}>
          <capsuleGeometry args={[0.16, 1.5, 8, 18]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#22d3ee" emissiveIntensity={0.35} transparent opacity={0.38} wireframe />
        </mesh>
      ))}
      {[-0.24, 0.24].map((x) => (
        <mesh key={x} position={[x, -1.22, 0]} rotation={[0, 0, x > 0 ? -0.12 : 0.12]} scale={[0.15, 1.14, 0.15]}>
          <capsuleGeometry args={[0.16, 1.75, 8, 18]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#2563eb" emissiveIntensity={0.3} transparent opacity={0.34} wireframe />
        </mesh>
      ))}
    </group>
  );
}

function NeuralWeb() {
  const points = useMemo(() => {
    return Array.from({ length: 56 }, (_, i) => {
      const angle = (i / 56) * Math.PI * 2;
      const radius = 1.8 + Math.sin(i) * 0.45;
      return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(i * 0.7) * 1.2, Math.sin(angle) * radius);
    });
  }, []);

  return (
    <group>
      {points.slice(0, 22).map((point, index) => (
        <Line
          key={index}
          points={[point, points[(index * 5 + 7) % points.length]]}
          color="#22d3ee"
          transparent
          opacity={0.32}
          lineWidth={1}
        />
      ))}
      {points.map((point, index) => (
        <Sphere key={index} position={point} args={[0.025, 10, 10]}>
          <meshBasicMaterial color={index % 3 === 0 ? "#ffffff" : "#22d3ee"} />
        </Sphere>
      ))}
    </group>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const coords = new Float32Array(900);
    for (let i = 0; i < coords.length; i += 3) {
      coords[i] = (Math.random() - 0.5) * 7;
      coords[i + 1] = (Math.random() - 0.5) * 5;
      coords[i + 2] = (Math.random() - 0.5) * 6;
    }
    return coords;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial transparent color="#7dd3fc" size={0.018} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function MedicalUniverse() {
  return (
    <div className="h-[520px] w-full overflow-hidden rounded-lg border border-cyan-200/10 bg-slate-950/20 lg:h-[680px]">
      <Canvas camera={{ position: [0, 0.4, 5], fov: 48 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <pointLight position={[2, 3, 4]} intensity={28} color="#22d3ee" />
          <pointLight position={[-3, -1, 2]} intensity={16} color="#2563eb" />
          <Float speed={2.2} rotationIntensity={0.25} floatIntensity={0.8}>
            <BodyCore />
          </Float>
          <NeuralWeb />
          <ParticleField />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.55} />
          <EffectComposer>
            <Bloom intensity={1.55} luminanceThreshold={0.08} mipmapBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
