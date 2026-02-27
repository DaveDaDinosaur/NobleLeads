"use client"

import { useRef, useMemo, useState, useEffect } from "react"
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

    meshRef.current.rotation.x = t * speed * 0.3 + sp * scrollInfluence
    meshRef.current.rotation.z = t * speed * 0.2
    meshRef.current.position.y = baseY + Math.sin(t * 0.5) * 0.3 - sp * scrollInfluence * 3
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

/* ── Connection lines between particles ── */
function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null!)
  const maxConnections = 24
  const frameRef = useRef(0)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(maxConnections * 6)
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    return geo
  }, [])

  useFrame((state) => {
    frameRef.current += 1
    if (frameRef.current % 2 !== 0) return

    if (!ref.current) return
    const t = state.clock.elapsedTime
    const posArr = ref.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < maxConnections; i++) {
      const i6 = i * 6
      const angle1 = t * 0.1 + i * 0.4
      const angle2 = t * 0.1 + i * 0.4 + 0.8
      const radius1 = 3 + Math.sin(t * 0.3 + i) * 2
      const radius2 = 3 + Math.cos(t * 0.3 + i) * 2

      posArr[i6] = Math.cos(angle1) * radius1
      posArr[i6 + 1] = Math.sin(angle1 * 0.7) * radius1 * 0.6 - scrollState.progress * 4
      posArr[i6 + 2] = Math.sin(angle1) * radius1 * 0.5
      posArr[i6 + 3] = Math.cos(angle2) * radius2
      posArr[i6 + 4] = Math.sin(angle2 * 0.7) * radius2 * 0.6 - scrollState.progress * 4
      posArr[i6 + 5] = Math.sin(angle2) * radius2 * 0.5
    }
    ref.current.geometry.attributes.position.needsUpdate = true

    const mat = ref.current.material as THREE.LineBasicMaterial
    mat.opacity = THREE.MathUtils.lerp(0.06, 0.02, scrollState.progress)
  })

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#C5A55A" transparent opacity={0.06} />
    </lineSegments>
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
    ref.current.position.y = yOffset + Math.sin(t * 0.4) * 0.5 - scrollState.progress * 5
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
    camera.position.y = 0.5 - sp * 2.5
    camera.position.z = 7 - sp * 1.5

    camera.lookAt(0, -sp * 2, 0)
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

      <ConnectionLines />

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
