"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

/* Shared materials (tip 33: share materials between meshes) */
function useSharedMaterials() {
  const matBlue = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1B3A5C",
        emissive: "#C5A55A",
        emissiveIntensity: 0.15,
        roughness: 0.4,
        metalness: 0.9,
        transparent: true,
        opacity: 0.35,
        wireframe: true,
      }),
    []
  )
  const matGold = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#C5A55A",
        emissive: "#C5A55A",
        emissiveIntensity: 0.15,
        roughness: 0.4,
        metalness: 0.9,
        transparent: true,
        opacity: 0.35,
        wireframe: true,
      }),
    []
  )
  const matRing = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1B3A5C",
        transparent: true,
        opacity: 0.15,
        wireframe: true,
        emissive: "#1B3A5C",
        emissiveIntensity: 0.08,
      }),
    []
  )
  useEffect(() => {
    return () => {
      matBlue.dispose()
      matGold.dispose()
      matRing.dispose()
    }
  }, [matBlue, matGold, matRing])
  return { matBlue, matGold, matRing }
}

/* Wireframe orb — no Float wrapper; single useFrame; delta for frame-rate independence */
function WireframeOrb({
  position,
  material,
  size,
  speed,
  floatSpeed,
  detail = 3,
}: {
  position: [number, number, number]
  material: THREE.MeshStandardMaterial
  size: number
  speed: number
  floatSpeed: number
  detail?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const baseY = position[1]

  useFrame((_, delta) => {
    if (!meshRef.current) return
    let t = (meshRef.current.userData.time as number) ?? 0
    t += delta
    meshRef.current.userData.time = t

    const sv = Math.sin(t * 0.4)
    meshRef.current.rotation.x = t * speed * 0.3
    meshRef.current.rotation.z = t * speed * 0.2
    meshRef.current.position.y = baseY + Math.sin(t * floatSpeed * 0.4) * 0.4
    meshRef.current.scale.setScalar(1 + Math.abs(sv) * 0.25 + Math.sin(t * 0.8) * 0.04)
    ;(meshRef.current.material as THREE.MeshStandardMaterial).opacity = 0.28
  })

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <icosahedronGeometry args={[size, detail]} />
    </mesh>
  )
}

/* Floating ring — shared material; reduced segments for fewer triangles */
function FloatingRing({
  radius,
  tubeRadius,
  material,
  rotSpeed,
  yOffset,
  segments = 12,
  tubularSegments = 48,
}: {
  radius: number
  tubeRadius: number
  material: THREE.MeshStandardMaterial
  rotSpeed: number
  yOffset: number
  segments?: number
  tubularSegments?: number
}) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if (!ref.current) return
    let t = (ref.current.userData.time as number) ?? 0
    t += delta
    ref.current.userData.time = t
    ref.current.rotation.x = t * rotSpeed
    ref.current.rotation.y = t * rotSpeed * 0.6
    ref.current.position.y = yOffset + Math.sin(t * 0.4) * 0.5
    ;(ref.current.material as THREE.MeshStandardMaterial).opacity = 0.12
  })

  return (
    <mesh ref={ref} material={material}>
      <torusGeometry args={[radius, tubeRadius, segments, tubularSegments]} />
    </mesh>
  )
}

/* Camera rig — delta-based for frame-rate independence */
function CameraRig() {
  const { camera } = useThree()
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    timeRef.current += delta
    const t = timeRef.current
    camera.position.x = Math.sin(t * 0.1) * 0.3
    camera.position.y = 0.5 + Math.sin(t * 0.03) * 0.1
    camera.position.z = 7
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* Scene — limit lights to 3 (ambient + 2 point); shared materials */
function Scene() {
  const { matBlue, matGold, matRing } = useSharedMaterials()

  return (
    <>
      <CameraRig />

      <ambientLight intensity={0.25} />
      <pointLight position={[6, 6, 6]} intensity={0.65} color="#C5A55A" distance={20} />
      <pointLight position={[-6, -4, 4]} intensity={0.45} color="#1B3A5C" distance={18} />

      <WireframeOrb
        position={[3.5, 1, -2]}
        material={matBlue}
        size={2}
        speed={0.4}
        floatSpeed={1.2}
        detail={3}
      />
      <WireframeOrb
        position={[-3.5, -1, -3]}
        material={matGold}
        size={0.9}
        speed={0.7}
        floatSpeed={1.8}
        detail={2}
      />
      <WireframeOrb
        position={[-1.5, 2.5, -4]}
        material={matBlue}
        size={0.6}
        speed={0.9}
        floatSpeed={2.2}
        detail={2}
      />

      <FloatingRing
        radius={4.5}
        tubeRadius={0.015}
        material={matRing}
        rotSpeed={0.08}
        yOffset={0}
        segments={12}
        tubularSegments={48}
      />
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
        dpr={mobile ? [1, 1] : [1, 1.5]}
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
