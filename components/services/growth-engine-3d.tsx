"use client"

import { useRef, useMemo, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, useCursor } from "@react-three/drei"
import * as THREE from "three"

const GOLD = "#C5A55A"
const GOLD_DIM = "#8a7348"
const NAVY = "#1B3A5C"

type Pillar = { id: string; label: string; summary: string }

function Node({
  pillar,
  position,
  onClick,
}: {
  pillar: Pillar
  position: [number, number, number]
  onClick: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered, "pointer")

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.position.y = position[1] + Math.sin(t * 0.6 + position[0]) * 0.03
    const mat = meshRef.current.material as THREE.MeshStandardMaterial
    mat.emissiveIntensity = THREE.MathUtils.lerp(0.1, 0.5, hovered ? 1 : 0)
    mat.color.lerpColors(
      mat.color,
      new THREE.Color(hovered ? GOLD : GOLD_DIM),
      0.12
    )
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.55, 0.55, 0.2]} />
        <meshStandardMaterial
          color={GOLD_DIM}
          emissive={new THREE.Color(GOLD)}
          emissiveIntensity={0.1}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
      <Html
        position={[0, 0, 0.15]}
        center
        distanceFactor={4}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          fontSize: "10px",
          fontWeight: 700,
          color: "var(--color-foreground)",
          textShadow: "0 0 8px rgba(0,0,0,0.5)",
          opacity: hovered ? 1 : 0.85,
        }}
      >
        {pillar.label}
      </Html>
    </group>
  )
}

export function GrowthEngine3D({
  pillars,
  onPillarClick,
}: {
  pillars: Pillar[]
  onPillarClick: (id: string) => void
}) {
  const groupRef = useRef<THREE.Group>(null!)

  const { nodePositions, spokeGeometries } = useMemo(() => {
    const r = 1.6
    const positions = pillars.map((_, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180)
      return [r * Math.cos(angle), r * Math.sin(angle), 0] as [number, number, number]
    })
    const geos = positions.map((pos) => {
      const geo = new THREE.BufferGeometry()
      geo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute([0, 0, 0, pos[0], pos[1], pos[2]], 3)
      )
      return geo
    })
    return { nodePositions: positions, spokeGeometries: geos }
  }, [pillars.length])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.08
  })

  return (
    <group ref={groupRef}>
      {/* Central hub */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshStandardMaterial
          color={NAVY}
          emissive={new THREE.Color(GOLD)}
          emissiveIntensity={0.15}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      {/* Spokes */}
      {spokeGeometries.map((geo, i) => (
        <lineSegments key={i} geometry={geo}>
          <lineBasicMaterial color={GOLD} opacity={0.4} transparent />
        </lineSegments>
      ))}
      {/* Nodes */}
      {pillars.map((pillar, i) => (
        <Node
          key={pillar.id}
          pillar={pillar}
          position={nodePositions[i]}
          onClick={() => onPillarClick(pillar.id)}
        />
      ))}
    </group>
  )
}
