"use client"

import { Canvas } from "@react-three/fiber"
import { GrowthEngine3D } from "./growth-engine-3d"

type Pillar = { id: string; label: string; summary: string }

export function GrowthEngineCanvas({
  pillars,
  onPillarClick,
}: {
  pillars: Pillar[]
  onPillarClick: (id: string) => void
}) {
  return (
    <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] relative">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 5]} intensity={1} />
        <pointLight position={[-2, -1, 3]} intensity={0.4} color="#C5A55A" />
        <GrowthEngine3D pillars={pillars} onPillarClick={onPillarClick} />
      </Canvas>
    </div>
  )
}
