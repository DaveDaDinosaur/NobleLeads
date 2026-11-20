/**
 * The pictures the pre-call dot stage can form. Each shape is a list of dot positions in its own
 * small design space (vb). The stage scales it into the space on screen and morphs between shapes,
 * so the dots from one answer flow on and become the next picture.
 */

export type Flow = { ax: number; ay: number; cx: number; cy: number; bx: number; by: number; speed: number; offset: number }

export type Dot = {
  x: number
  y: number
  /** 1 is gold, 0 is pale. */
  gold?: number
  /** Bigger and fully opaque. Used for the parts the answer just changed. */
  bright?: boolean
  alpha?: number
  /** Travels along a curve instead of sitting still. */
  flow?: Flow
}

export type Shape = { key: string; vb: [number, number]; dots: Dot[] }

/** Seeded random, so every shape looks the same each time. */
function random(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function polyline(points: [number, number][], count: number, closed = false, style: Partial<Dot> = {}): Dot[] {
  const path = closed ? [...points, points[0]] : points
  const lengths = path.slice(1).map((p, i) => Math.hypot(p[0] - path[i][0], p[1] - path[i][1]))
  const total = lengths.reduce((a, b) => a + b, 0)
  const dots: Dot[] = []
  for (let n = 0; n < count; n++) {
    let d = (n / (closed ? count : Math.max(count - 1, 1))) * total
    let i = 0
    while (i < lengths.length - 1 && d > lengths[i]) {
      d -= lengths[i]
      i++
    }
    const t = lengths[i] ? d / lengths[i] : 0
    dots.push({ x: path[i][0] + (path[i + 1][0] - path[i][0]) * t, y: path[i][1] + (path[i + 1][1] - path[i][1]) * t, ...style })
  }
  return dots
}

function ellipse(cx: number, cy: number, rx: number, ry: number, count: number, style: Partial<Dot> = {}, from = 0, to = Math.PI * 2): Dot[] {
  const full = to - from >= Math.PI * 2 - 0.001
  return Array.from({ length: count }, (_, i) => {
    const a = from + ((to - from) * i) / (full ? count : Math.max(count - 1, 1))
    return { x: cx + Math.cos(a) * rx, y: cy + Math.sin(a) * ry, ...style }
  })
}

function rect(x: number, y: number, w: number, h: number, count: number, style: Partial<Dot> = {}) {
  return polyline([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], count, true, style)
}

function quad(f: Omit<Flow, "speed" | "offset">, count: number, style: Partial<Dot> = {}): Dot[] {
  return Array.from({ length: count }, (_, i) => {
    const t = i / Math.max(count - 1, 1)
    const u = 1 - t
    return { x: u * u * f.ax + 2 * u * t * f.cx + t * t * f.bx, y: u * u * f.ay + 2 * u * t * f.cy + t * t * f.by, ...style }
  })
}

const PALE: Partial<Dot> = { gold: 0, alpha: 0.45 }
const GOLD: Partial<Dot> = { gold: 1, alpha: 0.95 }
const LIT: Partial<Dot> = { gold: 1, alpha: 1, bright: true }

/** Welcome: a loose, slowly drifting cloud. Nothing built yet. */
export function cloudShape(): Shape {
  const r = random(7)
  const dots: Dot[] = []
  for (let i = 0; i < 220; i++) {
    const a = r() * Math.PI * 2
    const d = Math.sqrt(r())
    dots.push({ x: 100 + Math.cos(a) * d * 92, y: 50 + Math.sin(a) * d * 40, gold: r() > 0.55 ? 1 : 0, alpha: 0.25 + r() * 0.5 })
  }
  return { key: "cloud", vb: [200, 100], dots }
}

/** Check: a business card with their details on it. */
export function cardShape(): Shape {
  return {
    key: "card",
    vb: [200, 120],
    dots: [
      ...rect(30, 14, 140, 92, 110, PALE),
      ...ellipse(58, 44, 12, 12, 30, GOLD),
      ...polyline([[80, 38], [150, 38]], 24, false, GOLD),
      ...polyline([[80, 50], [132, 50]], 18, false, PALE),
      ...polyline([[44, 76], [156, 76]], 34, false, PALE),
      ...polyline([[44, 90], [120, 90]], 24, false, PALE),
    ],
  }
}

/** Trade: a tidy grid of tiles, one per trade. */
export function tilesShape(): Shape {
  const dots: Dot[] = []
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      dots.push(...rect(55 + col * 32, 12 + row * 34, 26, 26, 20, (row + col) % 3 === 0 ? GOLD : PALE))
    }
  }
  return { key: "tiles", vb: [200, 120], dots }
}

const pinSpots: [number, number][] = [
  [72, 60],
  [128, 52],
  [100, 92],
  [62, 100],
  [140, 98],
]

/** Jobs: a house outline. Each kind of job they pick drops a gold pin onto it. */
export function houseShape(pins: number): Shape {
  const dots: Dot[] = [
    ...polyline([[40, 66], [100, 22], [160, 66]], 64, false, PALE),
    ...polyline([[52, 58], [52, 116], [148, 116], [148, 58]], 76, false, PALE),
    ...polyline([[90, 116], [90, 90], [110, 90], [110, 116]], 22, false, PALE),
    ...rect(62, 70, 18, 16, 16, PALE),
    ...rect(120, 70, 18, 16, 16, PALE),
    ...polyline([[128, 38], [128, 24], [138, 24], [138, 45]], 12, false, PALE),
  ]
  pinSpots.slice(0, pins).forEach(([x, y]) => {
    dots.push(...ellipse(x, y, 4.5, 4.5, 12, LIT), { x, y, ...LIT })
  })
  return { key: "house", vb: [200, 124], dots }
}

const ringRadii = [12, 22, 33, 44, 56]

/** Area: rings around their base. Rings up to the distance they'll travel turn gold. */
export function ringsShape(ringIndex: number): Shape {
  const dots: Dot[] = []
  ringRadii.forEach((r, i) => {
    dots.push(...ellipse(100, 60, r, r, Math.round(r * 2.1), i <= ringIndex ? (i === ringIndex ? LIT : GOLD) : PALE))
  })
  dots.push(...ellipse(100, 60, 3, 3, 8, LIT), { x: 100, y: 60, ...LIT })
  return { key: "rings", vb: [200, 120], dots }
}

/** Job value: a stack of coins that grows with the slider. */
export function coinsShape(level: number): Shape {
  const coins = Math.max(1, Math.min(11, level))
  const dots: Dot[] = [...ellipse(100, 112, 40, 6, 30, { gold: 1, alpha: 0.18 })]
  for (let i = 0; i < coins; i++) {
    const y = 104 - i * 8
    const top = i === coins - 1
    dots.push(...ellipse(100, y, 30, 6, top ? 36 : 22, top ? LIT : GOLD, top ? 0 : 0, top ? Math.PI * 2 : Math.PI))
  }
  return { key: "coins", vb: [200, 120], dots }
}

const capacityFill: Record<string, number> = { "1 or 2": 2, "3 to 5": 5, "6 to 10": 10, "More than 10": 14 }
const fillOrder = [8, 2, 16, 11, 5, 18, 13, 0, 7, 15, 3, 10, 17, 6, 19, 1, 12, 9, 4, 14]

/** Capacity: next month's diary. Days they could fill light up with a booked job. */
export function diaryShape(capacity?: string): Shape {
  const filled = new Set(fillOrder.slice(0, capacity ? capacityFill[capacity] ?? 0 : 0))
  const dots: Dot[] = []
  for (let i = 0; i < 20; i++) {
    const x = 33 + (i % 5) * 28
    const y = 16 + Math.floor(i / 5) * 23
    const on = filled.has(i)
    dots.push(...rect(x, y, 22, 17, 14, on ? GOLD : { gold: 0, alpha: 0.3 }))
    if (on) dots.push(...polyline([[x + 5, y + 8.5], [x + 17, y + 8.5]], 5, false, LIT))
  }
  return { key: "diary", vb: [200, 120], dots }
}

/** Sources: lines feeding into their business. Picked sources light up and carry dots inward. */
export function networkShape(count: number, active: number[]): Shape {
  const cx = 100
  const cy = 104
  const dots: Dot[] = []
  for (let i = 0; i < count; i++) {
    const angle = Math.PI * 1.08 + (i / Math.max(count - 1, 1)) * Math.PI * 0.84
    const x = cx + Math.cos(angle) * 88
    const y = cy - 6 + Math.sin(angle) * 86
    const on = active.includes(i)
    const curve = { ax: x, ay: y, cx: (x + cx) / 2, cy: cy - 4, bx: cx, by: cy - 6 }
    dots.push(...quad(curve, 16, on ? GOLD : { gold: 0, alpha: 0.28 }))
    dots.push(...ellipse(x, y, on ? 4 : 3, on ? 4 : 3, 8, on ? LIT : PALE))
    if (on) {
      for (let k = 0; k < 3; k++) dots.push({ x, y, ...LIT, flow: { ...curve, speed: 0.45, offset: k / 3 } })
    }
  }
  dots.push(...ellipse(cx, cy - 6, 8, 8, 20, GOLD), ...ellipse(cx, cy - 6, 3, 3, 6, LIT))
  return { key: "network", vb: [200, 112], dots }
}

/** Agenda: a speech bubble, waiting for their question. */
export function bubbleShape(): Shape {
  return {
    key: "bubble",
    vb: [200, 120],
    dots: [
      ...polyline([[44, 18], [156, 18], [156, 80], [92, 80], [70, 100], [74, 80], [44, 80]], 150, true, PALE),
      ...ellipse(80, 49, 3.5, 3.5, 8, LIT),
      ...ellipse(100, 49, 3.5, 3.5, 8, LIT),
      ...ellipse(120, 49, 3.5, 3.5, 8, LIT),
    ],
  }
}

/** Done: their plan, as a document, with a gold stamp on it. */
export function documentShape(stamped: boolean): Shape {
  const dots: Dot[] = [
    ...polyline([[56, 10], [128, 10], [148, 30], [148, 112], [56, 112]], 120, true, PALE),
    ...polyline([[128, 10], [128, 30], [148, 30]], 14, false, PALE),
    ...polyline([[70, 42], [120, 42]], 16, false, GOLD),
    ...polyline([[70, 56], [134, 56]], 20, false, PALE),
    ...polyline([[70, 68], [110, 68]], 13, false, PALE),
    ...polyline([[70, 80], [124, 80]], 17, false, PALE),
  ]
  if (stamped) {
    dots.push(...ellipse(140, 92, 17, 17, 40, LIT), ...polyline([[132, 92], [138, 98], [149, 85]], 14, false, LIT))
  }
  return { key: "document", vb: [200, 120], dots }
}
