"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

/* ── shared scroll state (written by homepage, read by 3D scene) ── */
export const scrollState = { progress: 0, velocity: 0 }

/* ── Particle field that drifts & reacts to scroll ── */
function ParticleField({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const basePositions = useRef<Float32Array | null>(null)

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    const navy = new THREE.Color("#1B3A5C")
    const gold = new THREE.Color("#C5A55A")
    const dim = new THREE.Color("#2a3444")
    const bright = new THREE.Color("#4a6a8c")

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 22
      pos[i3 + 1] = (Math.random() - 0.5) * 22
      pos[i3 + 2] = (Math.random() - 0.5) * 14
      const r = Math.random()
      const c = r < 0.08 ? gold : r < 0.3 ? navy : r < 0.55 ? bright : dim
      col[i3] = c.r
      col[i3 + 1] = c.g
      col[i3 + 2] = c.b
      sz[i] = Math.random() * 0.03 + 0.01
    }
    basePositions.current = new Float32Array(pos)
    return { positions: pos, colors: col, sizes: sz }
  }, [count])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
    return geo
  }, [positions, colors])

  useFrame((state) => {
    if (!ref.current || !basePositions.current) return
    const t = state.clock.elapsedTime
    const sp = scrollState.progress
    const sv = scrollState.velocity

    ref.current.rotation.y = t * 0.015 + sp * 1.2
    ref.current.rotation.x = Math.sin(t * 0.008) * 0.15 + sp * 0.4

    const posArr = ref.current.geometry.attributes.position.array as Float32Array
    const base = basePositions.current
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const wave = Math.sin(t * 0.3 + base[i3] * 0.5) * 0.15
      const breathe = Math.sin(t * 0.15 + i * 0.01) * 0.08
      posArr[i3] = base[i3] + wave + sv * base[i3] * 0.3
      posArr[i3 + 1] = base[i3 + 1] + breathe + sv * 0.5
      posArr[i3 + 2] = base[i3 + 2] + Math.cos(t * 0.2 + base[i3 + 1] * 0.3) * 0.1
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.65} sizeAttenuation />
    </points>
  )
}

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

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(maxConnections * 6)
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3))
    return geo
  }, [])

  useFrame((state) => {
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
function Scene({ particleCount }: { particleCount: number }) {
  return (
    <>
      <CameraRig />

      <ambientLight intensity={0.2} />
      <pointLight position={[6, 6, 6]} intensity={0.6} color="#C5A55A" distance={20} />
      <pointLight position={[-6, -4, 4]} intensity={0.4} color="#1B3A5C" distance={18} />
      <pointLight position={[0, 8, -3]} intensity={0.2} color="#4a6a8c" distance={15} />

      <ParticleField count={particleCount} />
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

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

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
        <Scene particleCount={mobile ? 120 : 280} />
      </Canvas>
    </div>
  )
}
