"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

import { gsap, prefersReducedMotion } from "@/components/motion/gsap"

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uProgress;
  uniform float uScroll;
  uniform float uPixelRatio;
  attribute vec3 aScatter;
  attribute vec3 aTarget;
  attribute float aDelay;
  attribute float aSize;
  attribute float aTone;
  varying float vTone;
  varying float vAlpha;

  mat3 rotY(float a) {
    float c = cos(a); float s = sin(a);
    return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
  }

  void main() {
    float p = clamp((uProgress * 1.5) - aDelay * 0.5, 0.0, 1.0);
    p = p * p * (3.0 - 2.0 * p);

    vec3 target = rotY(uTime * 0.07) * aTarget;
    target *= 1.0 + uScroll * 0.35;

    vec3 drift = vec3(
      sin(uTime * 0.6 + aDelay * 40.0),
      cos(uTime * 0.5 + aDelay * 25.0),
      sin(uTime * 0.4 + aDelay * 60.0)
    ) * mix(0.18, 0.02, p);

    vec3 pos = mix(aScatter, target, p) + drift;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * (34.0 / -mv.z);

    vTone = aTone;
    vAlpha = mix(0.35, 1.0, p) * (1.0 - uScroll * 0.6);
  }
`

const fragmentShader = /* glsl */ `
  varying float vTone;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float glow = smoothstep(0.5, 0.0, d);
    vec3 gold = vec3(0.84, 0.69, 0.40);
    vec3 pale = vec3(0.86, 0.88, 0.94);
    vec3 col = mix(gold, pale, vTone);
    gl_FragColor = vec4(col, glow * glow * vAlpha * 0.9);
  }
`

function buildGeometry(count: number, centre: THREE.Vector3, radius: number) {
  const scatter = new Float32Array(count * 3)
  const target = new Float32Array(count * 3)
  const delay = new Float32Array(count)
  const size = new Float32Array(count)
  const tone = new Float32Array(count)

  const clusters = [
    new THREE.Vector3(-7, 3.2, -3),
    new THREE.Vector3(-4.5, -3.4, -2),
    new THREE.Vector3(1.5, 4.2, -5),
    new THREE.Vector3(7.5, -3, -4),
    new THREE.Vector3(8.5, 3.6, -6),
  ]
  const golden = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const c = clusters[i % clusters.length]
    const spread = 1.6 + Math.random() * 1.4
    scatter[i * 3] = c.x + (Math.random() - 0.5) * spread * 2
    scatter[i * 3 + 1] = c.y + (Math.random() - 0.5) * spread * 2
    scatter[i * 3 + 2] = c.z + (Math.random() - 0.5) * spread * 2

    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    const shell = radius * (0.92 + Math.random() * 0.16)
    target[i * 3] = centre.x + Math.cos(theta) * r * shell
    target[i * 3 + 1] = centre.y + y * shell
    target[i * 3 + 2] = centre.z + Math.sin(theta) * r * shell

    delay[i] = Math.random()
    size[i] = 1.2 + Math.random() * 2.6
    tone[i] = Math.random() < 0.18 ? 1 : 0
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(target.slice(), 3))
  geometry.setAttribute("aScatter", new THREE.BufferAttribute(scatter, 3))
  geometry.setAttribute("aTarget", new THREE.BufferAttribute(target, 3))
  geometry.setAttribute("aDelay", new THREE.BufferAttribute(delay, 1))
  geometry.setAttribute("aSize", new THREE.BufferAttribute(size, 1))
  geometry.setAttribute("aTone", new THREE.BufferAttribute(tone, 1))
  return geometry
}

function Field({ mobile, scroll }: { mobile: boolean; scroll: React.MutableRefObject<number> }) {
  const { gl } = useThree()
  const pointer = useRef({ x: 0, y: 0 })
  const group = useRef<THREE.Group>(null)

  const geometry = useMemo(
    () =>
      buildGeometry(
        mobile ? 1400 : 2600,
        mobile ? new THREE.Vector3(0, 0.6, 0) : new THREE.Vector3(3.1, 0.1, 0),
        mobile ? 2.1 : 2.5
      ),
    [mobile]
  )

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uProgress: { value: 0 },
          uScroll: { value: 0 },
          uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
        },
      }),
    [gl]
  )

  useEffect(() => {
    const tween = gsap.to(material.uniforms.uProgress, {
      value: 1,
      duration: 3.6,
      delay: 0.3,
      ease: "power3.inOut",
    })
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      tween.kill()
      window.removeEventListener("pointermove", onMove)
      geometry.dispose()
      material.dispose()
    }
  }, [geometry, material])

  useFrame((_, delta) => {
    material.uniforms.uTime.value += delta
    material.uniforms.uScroll.value += (scroll.current - material.uniforms.uScroll.value) * 0.1
    if (group.current) {
      group.current.rotation.y += (pointer.current.x * 0.12 - group.current.rotation.y) * 0.04
      group.current.rotation.x += (pointer.current.y * 0.08 - group.current.rotation.x) * 0.04
    }
  })

  return (
    <group ref={group}>
      <points geometry={geometry} material={material} />
    </group>
  )
}

export function LeadField() {
  const [mobile, setMobile] = useState<boolean | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [inView, setInView] = useState(true)
  const scroll = useRef(0)
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobile(window.innerWidth < 1024)
    setEnabled(!prefersReducedMotion())
    const el = wrapper.current
    const onScroll = () => {
      const h = el?.offsetHeight || window.innerHeight
      scroll.current = Math.min(1, Math.max(0, window.scrollY / h))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    const io = el
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "20% 0px" })
      : null
    if (el && io) io.observe(el)
    return () => {
      window.removeEventListener("scroll", onScroll)
      io?.disconnect()
    }
  }, [])

  return (
    <div ref={wrapper} className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute top-1/2 h-[60vmin] w-[60vmin] -translate-y-1/2 rounded-full bg-secondary/[0.07] blur-[90px] max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-[8%]"
      />
      {enabled && mobile !== null ? (
        <Canvas
          camera={{ position: [0, 0, 9], fov: 50 }}
          dpr={mobile ? [1, 1.25] : [1, 1.5]}
          frameloop={inView ? "always" : "never"}
          gl={{ antialias: false, alpha: true, powerPreference: "high-performance", stencil: false }}
          className={mobile ? "opacity-50" : ""}
        >
          <Field mobile={mobile} scroll={scroll} />
        </Canvas>
      ) : null}
    </div>
  )
}
