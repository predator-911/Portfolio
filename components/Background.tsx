"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime()
      meshRef.current.rotation.x = Math.cos(t / 4) / 2
      meshRef.current.rotation.y = Math.sin(t / 4) / 2
      meshRef.current.position.x = (Math.sin(t / 1.5) * viewport.width) / 4
      meshRef.current.position.y = (Math.cos(t / 2) * viewport.height) / 4
      meshRef.current.scale.set(1 + Math.sin(t) * 0.2, 1 + Math.sin(t) * 0.2, 1 + Math.sin(t) * 0.2)
    }
  })

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef}>
      <MeshDistortMaterial color="#0066ff" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-blue-50 to-white">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

