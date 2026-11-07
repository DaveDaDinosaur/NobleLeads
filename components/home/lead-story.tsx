"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/components/motion/gsap"
import { scrollToY } from "@/components/motion/smooth-scroll"

const steps = [
  {
    time: "7:12pm",
    title: "A homeowner needs a new roof.",
    body: "They pick up their phone and search. Right now, in your area.",
  },
  {
    time: "Seconds later",
    title: "You're top of Google.",
    body: "Your ads and your Google profile put you in front of them first.",
  },
  {
    time: "7:13pm",
    title: "They land on your website.",
    body: "Built to win the enquiry. Your work, your reviews, one clear way to get a quote.",
  },
  {
    time: "7:15pm",
    title: "The enquiry comes to you. Only you.",
    body: "Not sold to five firms. The Portal alerts you the second it lands.",
  },
  {
    time: "7:15pm",
    title: "They hear back in seconds.",
    body: "An instant reply from your business, so they stop looking. Even if you're up a ladder.",
  },
  {
    time: "This week",
    title: "Followed up until they decide.",
    body: "Quotes get chased by text and email, automatically. Nothing slips through.",
  },
  {
    time: "Booked",
    title: "The job is in the diary.",
    body: "Done properly, then a review request goes out. Every review helps you win the next search.",
  },
]

const SEG1 = "M230 380 C300 380 300 205 380 205"
const SEG2 = "M560 205 C650 205 660 340 750 340"
const SEG3 = "M940 340 C1030 340 1040 215 1130 215"
const RETURN = "M1130 215 C1040 215 1030 340 940 340 L750 340 C660 340 650 205 560 205 L380 205 C300 205 300 380 230 380"
const LOOP = "M150 206 C150 100 380 56 470 116"

const W = 1400
const H = 560
const FULL_VIEW = `0 0 ${W} ${H}`

type Rect = [number, number, number, number]

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)
const deskView = (cx: number, cy: number, w = 840): Rect => {
  const h = w / 2.5
  return [clamp(cx - w / 2, 0, W - w), clamp(cy - h / 2, 0, H - h), w, h]
}
const mobileView = (cx: number): Rect => [clamp(cx - 240, 0, W - 480), 70, 480, 480]
const FULL: Rect = [0, 0, W, H]

const STAGE = {
  house: [150, 370],
  search: [470, 206],
  site: [845, 340],
  van: [1210, 214],
  diary: [1215, 330],
} as const

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

const motes = (() => {
  const r = rng(7)
  return Array.from({ length: 16 }, () => ({
    x: Math.round(r() * W),
    y: Math.round(r() * H),
    size: 0.8 + r() * 1.6,
    delay: -(r() * 12),
    dur: 10 + r() * 10,
  }))
})()

function star(cx: number, cy: number, r: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2
    const rad = i % 2 === 0 ? r : r * 0.45
    return `${(cx + Math.cos(a) * rad).toFixed(1)},${(cy + Math.sin(a) * rad).toFixed(1)}`
  }).join(" ")
}

const line = "hsl(var(--foreground) / 0.6)"
const faint = "hsl(var(--foreground) / 0.14)"
const gold = "hsl(var(--secondary))"
const bg = "hsl(var(--background))"
const mono = (size: number, weight = 500) => ({
  font: `${weight} ${size}px var(--font-geist-mono), monospace`,
  letterSpacing: "0.14em",
})

function Label({ x, y, stage, n, children }: { x: number; y: number; stage: number; n: string; children: string }) {
  return (
    <text data-label={stage} x={x} y={y} textAnchor="middle" fill="hsl(var(--muted-foreground))" style={mono(13)}>
      <tspan fill={gold}>{n} </tspan>
      {children}
    </text>
  )
}

function Backdrop() {
  return (
    <g aria-hidden>
      <rect width={W} height={H} fill="url(#ls-dots)" />
      <g fill="none" stroke="hsl(var(--foreground) / 0.05)" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M-40 ${90 + i * 80} C 260 ${40 + i * 80}, 420 ${170 + i * 80}, 700 ${100 + i * 80} S 1160 ${30 + i * 80}, 1440 ${110 + i * 80}`}
          />
        ))}
      </g>
      <g fill="hsl(var(--secondary) / 0.55)">
        {motes.map((m, i) => (
          <circle
            key={i}
            className="ls-mote"
            cx={m.x}
            cy={m.y}
            r={m.size}
            style={{ animationDelay: `${m.delay}s`, animationDuration: `${m.dur}s` }}
          />
        ))}
      </g>
    </g>
  )
}

function Scene() {
  return (
    <svg
      data-scene
      viewBox={FULL_VIEW}
      className="h-full w-full"
      role="img"
      aria-label="One lead travelling from a homeowner's search to a booked job"
    >
      <defs>
        <pattern id="ls-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="hsl(var(--foreground) / 0.09)" />
        </pattern>
        <radialGradient id="ls-spot">
          <stop offset="0" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="hsl(var(--secondary))" stopOpacity="0.06" />
          <stop offset="1" stopColor="hsl(var(--secondary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ls-beam" x1="0" x2="1">
          <stop offset="0" stopColor="hsl(var(--secondary))" stopOpacity="0.45" />
          <stop offset="1" stopColor="hsl(var(--secondary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      <Backdrop />
      <circle data-spot cx={STAGE.house[0]} cy={STAGE.house[1]} r="260" fill="url(#ls-spot)" />

      {/* Route */}
      <g fill="none" stroke={faint} strokeWidth="1.5" strokeDasharray="3 7">
        <path d={SEG1} />
        <path d={SEG2} />
        <path d={SEG3} />
        <path d="M1215 270 V360" />
      </g>
      <g fill="none" stroke={gold} strokeLinecap="round">
        {[SEG1, SEG2, SEG3].map((d, i) => (
          <path key={`g${i}`} data-seg={i + 1} d={d} strokeWidth="8" opacity="0.12" />
        ))}
        {[SEG1, SEG2, SEG3].map((d, i) => (
          <path key={`s${i}`} data-seg={i + 1} d={d} strokeWidth="2" />
        ))}
      </g>
      <path data-loop d={LOOP} fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <text data-loop-label x="300" y="78" textAnchor="middle" fill={gold} style={mono(12)}>
        REVIEWS WIN THE NEXT SEARCH
      </text>

      {/* 01 Homeowner */}
      <g data-stage="0">
        <circle data-ripple cx="150" cy="300" r="40" fill="none" stroke={gold} strokeWidth="1.5" opacity="0" />
        <circle data-ripple cx="150" cy="300" r="40" fill="none" stroke={gold} strokeWidth="1.5" opacity="0" />
        <g data-smoke opacity="0">
          {[0, 1, 2].map((i) => (
            <circle key={i} className="ls-smoke" cx="198" cy="262" r="5" fill="hsl(var(--foreground) / 0.18)" style={{ animationDelay: `${i * 1.3}s` }} />
          ))}
        </g>
        <g data-draw="0" fill={bg} stroke={line} strokeWidth="1.5" strokeLinejoin="round">
          <path d="M50 440 H250" />
          <rect x="80" y="330" width="140" height="110" />
          <path d="M190 300 V272 H206 V314" />
          <path d="M66 338 L150 262 L234 338" />
          <rect x="135" y="388" width="30" height="52" />
          <rect x="96" y="352" width="28" height="22" />
          <rect x="176" y="352" width="28" height="22" />
        </g>
        <rect data-window x="97" y="353" width="26" height="20" fill={gold} opacity="0" />
        <rect data-window x="177" y="353" width="26" height="20" fill={gold} opacity="0" />
        <path data-roof d="M66 338 L150 262 L234 338" fill="none" stroke={gold} strokeWidth="3" strokeLinejoin="round" />
        {[110, 130, 150, 170, 190].map((x) => (
          <polygon key={x} data-star points={star(x, 228, 8)} fill={gold} />
        ))}
        <g data-bubble opacity="0">
          <rect x="168" y="214" width="66" height="34" rx="17" fill={gold} />
          {[188, 201, 214].map((x) => (
            <circle key={x} cx={x} cy="231" r="3" fill={bg} />
          ))}
        </g>
        <text data-timer x="168" y="202" opacity="0" fill={gold} style={mono(13)}>
          REPLY · 00:04
        </text>
        <Label x={150} y={478} stage={0} n="01">HOMEOWNER</Label>
      </g>

      {/* 02 Google */}
      <g data-stage="1">
        <g data-draw="1" fill={bg} stroke={line} strokeWidth="1.5">
          <rect x="380" y="120" width="180" height="172" rx="14" />
          <rect x="396" y="136" width="148" height="26" rx="13" />
          <circle cx="412" cy="149" r="5" />
          <path d="M416 153 L420 157" />
          <rect x="396" y="214" width="148" height="28" rx="6" />
          <rect x="396" y="250" width="148" height="28" rx="6" />
        </g>
        <rect data-ad x="396" y="176" width="148" height="30" rx="6" fill="hsl(var(--secondary) / 0.14)" stroke={gold} strokeWidth="1.5" />
        <g data-ad-lines stroke={gold} strokeWidth="3" strokeLinecap="round">
          <path d="M408 187 H480" />
          <path d="M408 196 H520" opacity="0.5" />
        </g>
        <g data-organic stroke="hsl(var(--foreground) / 0.2)" strokeWidth="3" strokeLinecap="round">
          <path d="M408 224 H470" />
          <path d="M408 233 H500" opacity="0.6" />
          <path d="M408 260 H460" />
          <path d="M408 269 H510" opacity="0.6" />
        </g>
        <text data-search-text x="426" y="153" fill="hsl(var(--muted-foreground))" style={{ font: "11px var(--font-geist-mono), monospace" }}>
          roofer near me
        </text>
        <Label x={470} y={326} stage={1} n="02">GOOGLE SEARCH</Label>
      </g>

      {/* 03 Website */}
      <g data-stage="2">
        <g data-draw="2" fill={bg} stroke={line} strokeWidth="1.5">
          <rect x="750" y="250" width="190" height="180" rx="12" />
          <path d="M750 272 H940" />
          <circle cx="764" cy="261" r="3" />
          <circle cx="776" cy="261" r="3" />
          <circle cx="788" cy="261" r="3" />
          <rect x="766" y="286" width="158" height="54" rx="6" />
          <path d="M766 330 L806 304 L834 322 L858 308 L924 340" />
          <rect x="766" y="352" width="158" height="16" rx="4" />
          <rect x="766" y="374" width="158" height="16" rx="4" />
        </g>
        <g data-site-copy stroke={gold} strokeWidth="3" strokeLinecap="round">
          <path d="M778 298 H850" />
          <path d="M778 307 H820" opacity="0.5" />
        </g>
        <rect data-cta x="766" y="400" width="96" height="20" rx="10" fill={gold} />
        <Label x={845} y={466} stage={2} n="03">YOUR WEBSITE</Label>
      </g>

      {/* 04 You */}
      <g data-stage="3">
        <circle data-halo cx="1210" cy="212" r="96" fill="hsl(var(--secondary) / 0.16)" />
        <path data-beam d="M1290 226 L1380 200 L1380 256 Z" fill="url(#ls-beam)" />
        <g data-draw="3" fill={bg} stroke={line} strokeWidth="1.5" strokeLinejoin="round">
          <path d="M1110 268 H1310" />
          <path d="M1130 252 V170 H1250 L1290 206 V252 Z" />
          <path d="M1254 180 L1280 206 H1254 Z" />
          <circle cx="1166" cy="254" r="14" />
          <circle cx="1260" cy="254" r="14" />
        </g>
        <text data-van-text x="1190" y="218" textAnchor="middle" fill={gold} style={mono(12)}>
          YOUR FIRM
        </text>
        <circle data-ping cx="1238" cy="170" r="7" fill={gold} />
        <Label x={1210} y={146} stage={3} n="04">YOU</Label>
      </g>

      <text data-follow-label x="845" y="232" textAnchor="middle" opacity="0" fill={gold} style={mono(12)}>
        TEXT · EMAIL · TEXT
      </text>

      {/* Diary */}
      <g data-stage="5">
        <g data-draw="5" fill={bg} stroke={line} strokeWidth="1.5">
          <rect x="1140" y="360" width="150" height="122" rx="10" />
          <path d="M1140 382 H1290" />
          {[392, 422, 452].flatMap((y) =>
            [1152, 1188, 1224, 1260].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="28" height="22" rx="4" />)
          )}
        </g>
        <rect data-booked x="1188" y="422" width="28" height="22" rx="4" fill={gold} />
        <path data-check d="M1195 433 L1200 438 L1210 427" fill="none" stroke={bg} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <Label x={1215} y={516} stage={5} n="05">DIARY</Label>
      </g>

      {/* The lead */}
      {[3, 4, 5].map((r, i) => (
        <circle key={i} data-trail r={r} fill={gold} opacity="0" />
      ))}
      <g data-lead opacity="0">
        <circle r="18" fill={gold} opacity="0.16" />
        <circle r="7" fill={gold} />
      </g>
      <g data-reply opacity="0">
        <circle r="15" fill={gold} opacity="0.18" />
        <circle r="6" fill={gold} />
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i} data-follow opacity="0">
          <circle r="10" fill={gold} opacity="0.2" />
          <circle r="4.5" fill={gold} />
        </g>
      ))}
    </svg>
  )
}

const LAST = steps.length - 1
const MOVE = 0.85

export function LeadStory() {
  const root = useRef<HTMLElement>(null)
  const cam = useRef<HTMLDivElement>(null)
  const api = useRef({
    goTo: (_i: number) => {},
    next: () => {},
    prev: () => {},
    pause: () => {},
    resume: () => {},
  })
  const [step, setStep] = useState(0)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const viewport = cam.current?.parentElement
      if (!cam.current || !viewport) return

      gsap.set(q("[data-draw] > *, [data-seg], [data-roof], [data-check], [data-loop]"), { drawSVG: "0%" })
      gsap.set(
        q(
          "[data-search-text], [data-ad], [data-ad-lines], [data-organic], [data-site-copy], [data-cta], [data-booked], [data-van-text], [data-halo], [data-beam], [data-ping], [data-label], [data-loop-label]"
        ),
        { autoAlpha: 0 }
      )
      gsap.set(q("[data-star]"), { scale: 0, transformOrigin: "50% 50%" })
      gsap.set(q("[data-bubble]"), { scale: 0.6, transformOrigin: "0% 100%" })

      const lead = q("[data-lead]")
      const trail = q("[data-trail]")
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } })

      const travel = (path: string, at: number, duration = 0.5) => {
        tl.set([...lead, ...trail], { autoAlpha: 1 }, at)
        tl.to(lead, { motionPath: { path }, duration }, at)
        trail.forEach((t, i) => {
          tl.to(t, { motionPath: { path }, duration }, at + 0.03 * (trail.length - i))
          tl.set(t, { opacity: 0.18 + i * 0.14 }, at)
        })
        tl.to([...lead, ...trail], { autoAlpha: 0, duration: 0.08 }, at + duration + 0.1)
      }

      const groups = [0, 1, 2, 3, 5]
      const focus = (at: number, active: number[]) => {
        groups.forEach((g) => {
          tl.to(q(`[data-stage='${g}']`), { opacity: active.includes(g) ? 1 : 0.38, duration: 0.3, ease: "power1.inOut" }, at)
        })
      }
      const spot = (at: number, [cx, cy]: readonly [number, number], duration = 0.5) => {
        tl.to(q("[data-spot]"), { attr: { cx, cy }, duration }, at)
      }

      groups.forEach((g) => tl.to(q(`[data-label='${g}']`), { autoAlpha: 1, duration: 0.25 }, g + 0.3))

      // 01 search
      tl.to(q("[data-draw='0'] > *"), { drawSVG: "100%", duration: 0.6, stagger: 0.05 }, 0)
        .to(q("[data-window]"), { autoAlpha: 0.45, duration: 0.3, stagger: 0.08 }, 0.45)
        .to(q("[data-smoke]"), { autoAlpha: 1, duration: 0.3 }, 0.5)
        .fromTo(
          q("[data-ripple]"),
          { scale: 0.6, autoAlpha: 0.9, transformOrigin: "50% 50%" },
          { scale: 2.6, autoAlpha: 0, duration: 0.5, stagger: 0.2, ease: "power1.out" },
          0.4
        )

      // 02 Google
      focus(1, [1])
      spot(1, STAGE.search)
      tl.to(q("[data-seg='1']"), { drawSVG: "100%", duration: 0.5 }, 1)
      travel(SEG1, 1)
      tl.to(q("[data-draw='1'] > *"), { drawSVG: "100%", duration: 0.5, stagger: 0.04 }, 1.1)
        .to(q("[data-search-text], [data-organic]"), { autoAlpha: 1, duration: 0.2 }, 1.35)
        .fromTo(q("[data-ad]"), { autoAlpha: 0, scaleX: 0.9, transformOrigin: "0% 50%" }, { autoAlpha: 1, scaleX: 1, duration: 0.3 }, 1.5)
        .to(q("[data-ad-lines]"), { autoAlpha: 1, duration: 0.3 }, 1.6)

      // 03 website
      focus(2, [2])
      spot(2, STAGE.site)
      tl.to(q("[data-seg='2']"), { drawSVG: "100%", duration: 0.5 }, 2)
      travel(SEG2, 2)
      tl.to(q("[data-draw='2'] > *"), { drawSVG: "100%", duration: 0.5, stagger: 0.04 }, 2.1)
        .to(q("[data-site-copy]"), { autoAlpha: 1, duration: 0.25 }, 2.45)
        .fromTo(q("[data-cta]"), { autoAlpha: 0, scale: 0.7, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(2)" }, 2.55)

      // 04 you
      focus(3, [3])
      spot(3, STAGE.van)
      tl.to(q("[data-seg='3']"), { drawSVG: "100%", duration: 0.5 }, 3)
      travel(SEG3, 3)
      tl.to(q("[data-draw='3'] > *"), { drawSVG: "100%", duration: 0.5, stagger: 0.05 }, 3.1)
        .to(q("[data-van-text]"), { autoAlpha: 1, duration: 0.2 }, 3.5)
        .to(q("[data-beam]"), { autoAlpha: 1, duration: 0.3 }, 3.5)
        .fromTo(q("[data-halo]"), { autoAlpha: 0, scale: 0.5, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1.1, duration: 0.35, ease: "power2.out" }, 3.55)
        .to(q("[data-halo]"), { autoAlpha: 0, duration: 0.3 }, 3.9)
        .fromTo(q("[data-ping]"), { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 0.2, ease: "back.out(3)" }, 3.6)

      // 05 instant reply
      focus(4, [0, 1, 2, 3])
      spot(4, STAGE.house, 0.6)
      tl.to(q("[data-ping]"), { autoAlpha: 0, duration: 0.15 }, 4)
        .set(q("[data-reply]"), { autoAlpha: 1 }, 4)
        .to(q("[data-reply]"), { motionPath: { path: RETURN }, duration: 0.6, ease: "power3.inOut" }, 4)
        .to(q("[data-reply]"), { autoAlpha: 0, duration: 0.1 }, 4.6)
        .to(q("[data-bubble], [data-timer]"), { autoAlpha: 1, scale: 1, duration: 0.25, ease: "back.out(2)" }, 4.6)

      // 06 follow-up
      focus(5, [3, 5])
      spot(5, STAGE.diary)
      tl.to(q("[data-bubble], [data-timer]"), { autoAlpha: 0, duration: 0.2 }, 5)
        .to(q("[data-follow-label]"), { autoAlpha: 1, duration: 0.2 }, 5)
        .set(q("[data-follow]"), { autoAlpha: 1 }, 5)
        .to(q("[data-follow]"), { motionPath: { path: RETURN }, duration: 0.55, stagger: 0.14, ease: "power1.inOut" }, 5)
        .to(q("[data-follow]"), { autoAlpha: 0, duration: 0.05, stagger: 0.14 }, 5.55)
        .to(q("[data-draw='5'] > *"), { drawSVG: "100%", duration: 0.5, stagger: 0.02 }, 5.15)

      // 07 booked
      tl.to(q("[data-follow-label]"), { autoAlpha: 0, duration: 0.2 }, 6)
        .fromTo(q("[data-booked]"), { autoAlpha: 0, scale: 0.4, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 0.2, ease: "back.out(2)" }, 6)
        .to(q("[data-check]"), { drawSVG: "100%", duration: 0.15 }, 6.12)
      spot(6.15, STAGE.house, 0.3)
      focus(6.15, [0, 5])
      tl.to(q("[data-smoke]"), { autoAlpha: 0, duration: 0.15 }, 6.3)
        .to(q("[data-roof]"), { drawSVG: "100%", duration: 0.35 }, 6.4)
        .to(q("[data-star]"), { scale: 1, duration: 0.22, stagger: 0.04, ease: "back.out(3)" }, 6.58)
      focus(6.7, groups)
      tl.to(q("[data-spot]"), { attr: { r: 520, cx: W / 2, cy: H / 2 }, opacity: 0.7, duration: 0.3 }, 6.7)
        .to(q("[data-loop]"), { drawSVG: "100%", duration: 0.25 }, 6.75)
        .to(q("[data-loop-label]"), { autoAlpha: 1, duration: 0.15 }, 6.85)
        .to({}, { duration: 0.01 }, 6.99)

      const reduced = prefersReducedMotion()
      const desktop = () => window.matchMedia("(min-width: 1024px)").matches
      const views = (): Rect[] =>
        desktop()
          ? [deskView(...STAGE.house), deskView(...STAGE.search), deskView(...STAGE.site), deskView(...STAGE.van), FULL, deskView(1000, 360, 1000), FULL]
          : [mobileView(150), mobileView(470), mobileView(845), mobileView(1215), mobileView(150), mobileView(1215), mobileView(150)]

      const cameraFor = ([vx, vy, vw, vh]: Rect) => {
        const cw = viewport.clientWidth
        const ch = viewport.clientHeight
        const k = Math.min(cw / W, ch / H)
        const ox = (cw - W * k) / 2
        const oy = (ch - H * k) / 2
        const scale = Math.max(1, Math.min(cw / (vw * k), ch / (vh * k)))
        const px = ox + k * (vx + vw / 2)
        const py = oy + k * (vy + vh / 2)
        return { x: cw / 2 - scale * px, y: ch / 2 - scale * py, scale }
      }

      let current = -1
      let locked = false
      let unlock: gsap.core.Tween | undefined
      let seek: gsap.core.Tween | undefined

      const goTo = (next: number, instant = false) => {
        next = Math.max(0, Math.min(LAST, next))
        if (next === current && current >= 0) return
        seek?.kill()

        const adjacent = current < 0 ? next === 0 : Math.abs(next - current) === 1
        const snap = instant || reduced || !adjacent

        current = next
        setStep(next)

        if (snap) {
          tl.time(next + 1)
          gsap.to(cam.current, {
            ...cameraFor(views()[next]),
            duration: instant || reduced ? 0 : 0.55,
            ease: "power3.inOut",
            overwrite: true,
          })
          return
        }

        seek = tl.tweenTo(next + 1, { duration: MOVE, ease: "none" })
        gsap.to(cam.current, {
          ...cameraFor(views()[next]),
          duration: MOVE,
          ease: "power3.inOut",
          overwrite: true,
        })
      }

      const scrollToStep = (i: number) => {
        const el = root.current
        if (!el) return
        locked = true
        unlock?.kill()
        goTo(i)
        const top = el.getBoundingClientRect().top + window.scrollY
        const y = top + (i / LAST) * (el.offsetHeight - window.innerHeight)
        scrollToY(y)
        unlock = gsap.delayedCall(1.2, () => {
          locked = false
        })
      }

      gsap.set(cam.current, { ...cameraFor(views()[0]), transformOrigin: "0 0" })

      api.current = {
        goTo: (i) => scrollToStep(i),
        next: () => scrollToStep(Math.min(LAST, Math.max(current, 0) + 1)),
        prev: () => scrollToStep(Math.max(0, Math.max(current, 0) - 1)),
        pause: () => {},
        resume: () => {},
      }

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom bottom",
        snap: reduced
          ? undefined
          : {
              snapTo: (value: number) => Math.round(value * LAST) / LAST,
              duration: { min: 0.18, max: 0.4 },
              ease: "power2.out",
              inertia: false,
            },
        onUpdate: (self) => {
          if (locked) return
          const next = Math.round(self.progress * LAST)
          if (next !== current) goTo(next)
        },
        onEnter: () => {
          if (current < 0) goTo(0, reduced)
        },
      })

      const ro = new ResizeObserver(() => {
        if (cam.current) gsap.set(cam.current, cameraFor(views()[Math.max(current, 0)]))
      })
      ro.observe(viewport)
      return () => {
        ro.disconnect()
        unlock?.kill()
        seek?.kill()
      }
    },
    { scope: root }
  )

  return (
    <section
      ref={root}
      id="lead-story"
      className="relative h-[500vh]"
      aria-label="How one lead becomes a booked job"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(60%_80%_at_50%_100%,hsl(var(--secondary)/0.07),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 pb-6 pt-24 sm:px-6 lg:px-10 lg:pt-28">
        <div className="flex items-baseline justify-between gap-4">
          <p className="label-mono text-muted-foreground">
            <span className="mr-2 text-secondary">(04)</span>One lead<span className="max-sm:hidden">, start to finish</span>
          </p>
          <div className="flex items-center gap-3">
            <p className="label-mono whitespace-nowrap tabular-nums text-secondary" aria-live="polite">
              {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")} · {steps[step].time}
            </p>
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                onClick={() => api.current.prev()}
                aria-label="Previous step"
                className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-secondary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => api.current.next()}
                aria-label="Next step"
                className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-secondary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-6 min-h-[170px] sm:min-h-[150px] lg:min-h-[130px]">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 grid grid-cols-1 gap-3 transition-[opacity,transform,filter] duration-500 ease-out lg:grid-cols-12 lg:gap-10 ${
                i === step
                  ? "translate-y-0 opacity-100 blur-0"
                  : i < step
                    ? "-translate-y-4 opacity-0 blur-[4px]"
                    : "translate-y-4 opacity-0 blur-[4px]"
              }`}
              aria-hidden={i !== step}
            >
              <h2 className="display text-4xl text-foreground sm:text-5xl lg:col-span-7 xl:text-6xl">{s.title}</h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-4 lg:col-start-9 lg:pt-2">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="ls-feather relative mt-4 min-h-[240px] flex-1 overflow-hidden sm:min-h-[320px]">
          <div ref={cam} className="absolute inset-0 will-change-transform">
            <Scene />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-6">
          <div className="relative h-px flex-1 bg-border">
            <div
              className="h-px origin-left bg-secondary transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `scaleX(${(step + 1) / steps.length})` }}
            />
            {steps.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => api.current.goTo(i)}
                aria-label={`Step ${i + 1}: ${s.title}`}
                aria-current={i === step ? "step" : undefined}
                className="group absolute top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                style={{ left: `${((i + 0.5) / steps.length) * 100}%` }}
              >
                <span
                  className={`block rounded-full transition-all duration-500 group-hover:scale-150 ${
                    i === step ? "h-2.5 w-2.5 bg-secondary" : i < step ? "h-1.5 w-1.5 bg-secondary" : "h-1.5 w-1.5 bg-muted-foreground/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="hidden text-[11px] text-muted-foreground/70 sm:block">Scroll to move through each stage.</p>
        </div>
      </div>
      </div>
    </section>
  )
}
