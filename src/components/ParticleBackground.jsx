import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './ParticleBackground.css';

function ParticleField({ mousePosition }) {
  const ref = useRef();
  const particlesCount = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ref.current) {
      ref.current.rotation.x = time * 0.05;
      ref.current.rotation.y = time * 0.075;
      
      // React to mouse movement
      ref.current.rotation.x += mousePosition.y * 0.05;
      ref.current.rotation.y += mousePosition.x * 0.05;

      // Wave effect
      const positions = ref.current.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        positions[i3 + 2] = Math.sin(x + time) * Math.cos(y + time) * 0.5;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const ref = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = time * 0.2;
      ref.current.rotation.y = time * 0.3;
      ref.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={[3, 0, -5]}>
      <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
      <meshStandardMaterial
        color="#A78BFA"
        emissive="#8B5CF6"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

function ParticleBackground({ mousePosition }) {
  return (
    <div className="particle-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A78BFA" />
        <ParticleField mousePosition={mousePosition} />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}

export default ParticleBackground;