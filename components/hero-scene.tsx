"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

/* ── shared scroll state (written by homepage, read by 3D scene) ── */
export const scrollState = { progress: 0, velocity: 0 }

/* ── Wireframe orb that floats and distorts on scroll ── */
function WireframeOrb({
  position,
  color,
  emissive,
  size,
  speed,
  floatSpeed,
  scrollInfluence = 1,
}: {
  position: [number, number, number]
  color: string
  emissive: string
  size: number
  speed: number
  floatSpeed: number
  scrollInfluence?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const baseY = position[1]

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    const sp = scrollState.progress
    const sv = scrollState.velocity

    meshRef.current.rotation.x = t * speed * 0.3 + sp * scrollInfluence * 0.6
    meshRef.current.rotation.z = t * speed * 0.2
    meshRef.current.position.y = baseY + Math.sin(t * 0.5) * 0.3 - sp * scrollInfluence * 2
    meshRef.current.scale.setScalar(1 + Math.abs(sv) * 0.4 + Math.sin(t * 0.8) * 0.05)

    const mat = meshRef.current.material as THREE.MeshStandardMaterial
    mat.opacity = THREE.MathUtils.lerp(0.35, 0.12, sp)
  })

  return (
    <Float speed={floatSpeed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 4]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.15}
          roughness={0.4}
          metalness={0.9}
          transparent
          opacity={0.35}
          wireframe
        />
      </mesh>
    </Float>
  )
}

/* ── Ambient floating ring ── */
function FloatingRing({ radius, tubeRadius, color, rotSpeed, yOffset }: {
  radius: number
  tubeRadius: number
  color: string
  rotSpeed: number
  yOffset: number
}) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * rotSpeed
    ref.current.rotation.y = t * rotSpeed * 0.6
    ref.current.position.y = yOffset + Math.sin(t * 0.4) * 0.5 - scrollState.progress * 3
    const mat = ref.current.material as THREE.MeshStandardMaterial
    mat.opacity = THREE.MathUtils.lerp(0.15, 0.04, scrollState.progress)
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tubeRadius, 16, 60]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
        emissive={color}
        emissiveIntensity={0.08}
      />
    </mesh>
  )
}

/* ── Camera rig that drifts based on scroll ── */
function CameraRig() {
  const { camera } = useThree()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const sp = scrollState.progress

    camera.position.x = Math.sin(t * 0.1) * 0.3
    camera.position.y = 0.5 - sp * 1.6
    camera.position.z = 7 - sp * 1.2

    camera.lookAt(0, -sp * 1.4, 0)
  })

  return null
}

/* ── Scene ── */
function Scene() {
  return (
    <>
      <CameraRig />

      <ambientLight intensity={0.2} />
      <pointLight position={[6, 6, 6]} intensity={0.6} color="#C5A55A" distance={20} />
      <pointLight position={[-6, -4, 4]} intensity={0.4} color="#1B3A5C" distance={18} />
      <pointLight position={[0, 8, -3]} intensity={0.2} color="#4a6a8c" distance={15} />

      <WireframeOrb
        position={[3.5, 1, -2]}
        color="#1B3A5C"
        emissive="#C5A55A"
        size={2}
        speed={0.4}
        floatSpeed={1.2}
        scrollInfluence={1.5}
      />
      <WireframeOrb
        position={[-3.5, -1, -3]}
        color="#C5A55A"
        emissive="#C5A55A"
        size={0.9}
        speed={0.7}
        floatSpeed={1.8}
        scrollInfluence={0.8}
      />
      <WireframeOrb
        position={[-1.5, 2.5, -4]}
        color="#1B3A5C"
        emissive="#1B3A5C"
        size={0.6}
        speed={0.9}
        floatSpeed={2.2}
        scrollInfluence={1.2}
      />

      <FloatingRing radius={4.5} tubeRadius={0.015} color="#1B3A5C" rotSpeed={0.08} yOffset={0} />
    </>
  )
}

export function HeroScene() {
  const [mobile, setMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotion = () => setReducedMotion(mq.matches)
    updateMotion()
    mq.addEventListener("change", updateMotion)

    return () => {
      window.removeEventListener("resize", check)
      mq.removeEventListener("change", updateMotion)
    }
  }, [])

  if (reducedMotion) {
    return null
  }

  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 55 }}
        dpr={mobile ? [1, 1] : [1, 2]}
        gl={{
          antialias: !mobile,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
