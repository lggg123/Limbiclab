"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

type BrainRegion = {
  name: string;
  definition: string;
  role: string;
  whyItMatters: string;
  artisticCue: string;
  family: string;
  // spherical coords: theta = horizontal angle (0-2π), phi = vertical angle (0-π)
  theta: number;
  phi: number;
  color: string;
  hexColor: string;
};

const BRAIN_REGIONS: BrainRegion[] = [
  {
    name: "Prefrontal Cortex",
    definition:
      "The most anterior part of the frontal lobes, supporting top-down control of thought and behavior.",
    role: "Planning, decision-making, impulse control, and future-oriented thinking.",
    whyItMatters:
      "Helps regulate emotion and behavior, especially under stress and uncertainty.",
    artisticCue: "The Conductor",
    family: "Control",
    theta: Math.PI * 0.9,
    phi: Math.PI * 0.38,
    color: "from-sky-400/80 to-cyan-300/80",
    hexColor: "#38bdf8",
  },
  {
    name: "Frontal Lobe",
    definition:
      "The front region of the cerebral cortex involved in executive processes, motor planning, and speech production.",
    role: "Executive function, language output, and voluntary motor planning.",
    whyItMatters: "Supports goal pursuit and flexible adaptation in daily life.",
    artisticCue: "The Strategist",
    family: "Cortical",
    theta: Math.PI * 0.85,
    phi: Math.PI * 0.45,
    color: "from-blue-400/80 to-indigo-300/80",
    hexColor: "#60a5fa",
  },
  {
    name: "Parietal Lobe",
    definition:
      "A cortical region integrating touch, body position, and spatial information.",
    role: "Body awareness, sensory integration, and spatial attention.",
    whyItMatters: "Builds a moment-to-moment map of where you are in space.",
    artisticCue: "The Cartographer",
    family: "Cortical",
    theta: Math.PI * 1.1,
    phi: Math.PI * 0.35,
    color: "from-teal-400/80 to-emerald-300/80",
    hexColor: "#2dd4bf",
  },
  {
    name: "Temporal Lobe",
    definition:
      "A lateral cortical region important for hearing, language comprehension, and memory-related processing.",
    role: "Auditory processing, language comprehension, and memory linkage.",
    whyItMatters: "Helps convert sensory experience into meaningful memories.",
    artisticCue: "The Story Weaver",
    family: "Cortical",
    theta: Math.PI * 0.75,
    phi: Math.PI * 0.62,
    color: "from-amber-300/80 to-orange-300/80",
    hexColor: "#fbbf24",
  },
  {
    name: "Occipital Lobe",
    definition:
      "The posterior cortical lobe primarily dedicated to visual processing.",
    role: "Primary visual processing and visual pattern interpretation.",
    whyItMatters: "Transforms light into recognizable scenes and symbols.",
    artisticCue: "The Lens",
    family: "Cortical",
    theta: Math.PI * 1.3,
    phi: Math.PI * 0.42,
    color: "from-fuchsia-400/80 to-pink-300/80",
    hexColor: "#e879f9",
  },
  {
    name: "Hippocampus",
    definition:
      "A medial temporal lobe structure essential for forming new declarative and contextual memories.",
    role: "Memory formation, contextual learning, and navigation through time/place.",
    whyItMatters:
      "Critical for turning short experiences into longer-term autobiographical memory.",
    artisticCue: "The Archivist",
    family: "Limbic",
    theta: Math.PI * 1.05,
    phi: Math.PI * 0.58,
    color: "from-violet-400/80 to-purple-300/80",
    hexColor: "#a78bfa",
  },
  {
    name: "Amygdala",
    definition:
      "An almond-shaped limbic structure that rapidly evaluates emotional salience, especially threat-relevant cues.",
    role: "Threat salience, emotional tagging, and rapid affective response.",
    whyItMatters:
      "Shapes fear learning and emotional intensity during high-stakes moments.",
    artisticCue: "The Alarm Bell",
    family: "Limbic",
    theta: Math.PI * 0.95,
    phi: Math.PI * 0.60,
    color: "from-rose-400/80 to-red-300/80",
    hexColor: "#fb7185",
  },
  {
    name: "Thalamus",
    definition:
      "A deep diencephalic relay center routing sensory and motor signals to cortical targets.",
    role: "Relay hub routing sensory and motor signals to cortex.",
    whyItMatters: "Coordinates information flow so perception stays coherent.",
    artisticCue: "The Switchboard",
    family: "Subcortical",
    theta: Math.PI * 1.02,
    phi: Math.PI * 0.50,
    color: "from-lime-300/80 to-green-300/80",
    hexColor: "#a3e635",
  },
  {
    name: "Hypothalamus",
    definition:
      "A small diencephalic control center linking neural activity to endocrine and autonomic regulation.",
    role: "Homeostasis control for hunger, sleep, temperature, and stress hormones.",
    whyItMatters: "Links brain state to endocrine and autonomic body regulation.",
    artisticCue: "The Thermostat",
    family: "Regulatory",
    theta: Math.PI * 0.98,
    phi: Math.PI * 0.55,
    color: "from-yellow-300/80 to-amber-300/80",
    hexColor: "#fde047",
  },
  {
    name: "Basal Ganglia",
    definition:
      "A set of subcortical nuclei that modulate movement, action selection, and habit learning.",
    role: "Action selection, habit circuits, and reward-guided movement.",
    whyItMatters: "Supports smooth initiation and inhibition of behavior.",
    artisticCue: "The Gatekeeper",
    family: "Subcortical",
    theta: Math.PI * 0.88,
    phi: Math.PI * 0.52,
    color: "from-cyan-400/80 to-sky-300/80",
    hexColor: "#22d3ee",
  },
  {
    name: "Nucleus Accumbens",
    definition:
      "A ventral striatal hub integrating dopamine and cortical input during reward and motivation processing.",
    role: "Reward anticipation, reinforcement learning, and motivation drive.",
    whyItMatters:
      "Plays a central role in craving, reinforcement, and effort investment.",
    artisticCue: "The Spark",
    family: "Subcortical",
    theta: Math.PI * 0.92,
    phi: Math.PI * 0.57,
    color: "from-orange-400/80 to-rose-300/80",
    hexColor: "#fb923c",
  },
  {
    name: "Insula",
    definition:
      "A cortical region buried within the lateral sulcus that represents internal bodily states.",
    role: "Interoception, body-state awareness, and subjective feeling tone.",
    whyItMatters:
      "Helps convert heartbeat, breath, and gut signals into conscious experience.",
    artisticCue: "The Inner Mirror",
    family: "Regulatory",
    theta: Math.PI * 0.82,
    phi: Math.PI * 0.54,
    color: "from-emerald-400/80 to-teal-300/80",
    hexColor: "#34d399",
  },
  {
    name: "Cerebellum",
    definition:
      "A hindbrain structure that fine-tunes movement timing and contributes to predictive coordination.",
    role: "Fine motor calibration, timing, and error correction.",
    whyItMatters: "Improves movement precision and contributes to cognitive timing.",
    artisticCue: "The Metronome",
    family: "Support",
    theta: Math.PI * 1.2,
    phi: Math.PI * 0.70,
    color: "from-indigo-400/80 to-blue-300/80",
    hexColor: "#818cf8",
  },
  {
    name: "Brainstem",
    definition:
      "The midbrain, pons, and medulla complex connecting brain and spinal cord while controlling vital functions.",
    role: "Core life support: breathing, heart rate, arousal, and sleep-wake regulation.",
    whyItMatters: "Maintains fundamental survival functions beneath conscious control.",
    artisticCue: "The Lifeline",
    family: "Support",
    theta: Math.PI * 1.1,
    phi: Math.PI * 0.78,
    color: "from-slate-400/80 to-zinc-300/80",
    hexColor: "#94a3b8",
  },
  {
    name: "Corpus Callosum",
    definition:
      "The largest white-matter commissure connecting homologous areas of the two cerebral hemispheres.",
    role: "Major fiber tract connecting left and right hemispheres.",
    whyItMatters:
      "Enables cross-hemisphere integration of language, perception, and motor plans.",
    artisticCue: "The Bridge",
    family: "Subcortical",
    theta: Math.PI * 1.0,
    phi: Math.PI * 0.42,
    color: "from-neutral-300/80 to-stone-200/80",
    hexColor: "#d4d4d4",
  },
];

const REGION_FAMILIES = ["Control", "Cortical", "Limbic", "Subcortical", "Regulatory", "Support"];

const toRegionId = (name: string) =>
  `region-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

const BRAIN_RADIUS = 1.6;

function sphericalToCartesian(theta: number, phi: number, r: number): THREE.Vector3 {
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

export function BrainAtlasClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameRef = useRef<number>(0);
  const dotsRef = useRef<{ mesh: THREE.Mesh; regionId: string }[]>([]);
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const brainGroupRef = useRef<THREE.Group | null>(null);
  const rotVelRef = useRef({ x: 0, y: 0 });

  const initialId = useMemo(() => toRegionId(BRAIN_REGIONS[0].name), []);
  const [activeRegionId, setActiveRegionId] = useState(initialId);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeRegion = useMemo(
    () => BRAIN_REGIONS.find((r) => toRegionId(r.name) === activeRegionId) ?? BRAIN_REGIONS[0],
    [activeRegionId]
  );

  // Build Three.js scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    // Ambient + directional lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dir = new THREE.DirectionalLight(0xa5b4fc, 1.2);
    dir.position.set(3, 4, 5);
    scene.add(dir);
    const dir2 = new THREE.DirectionalLight(0x67e8f9, 0.6);
    dir2.position.set(-4, -2, 2);
    scene.add(dir2);

    const group = new THREE.Group();
    brainGroupRef.current = group;
    scene.add(group);

    // Brain sphere — translucent with wireframe overlay
    const brainGeo = new THREE.SphereGeometry(BRAIN_RADIUS, 64, 48);

    // Custom egg-shape: squish vertically to look more brain-like
    const pos = brainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      // Widen top, narrow bottom slightly
      const scaleFactor = 1 + 0.15 * (y / BRAIN_RADIUS);
      pos.setX(i, x * scaleFactor);
      pos.setZ(i, pos.getZ(i) * scaleFactor);
      pos.setY(i, y * 0.88);
    }
    pos.needsUpdate = true;
    brainGeo.computeVertexNormals();

    const brainMat = new THREE.MeshPhongMaterial({
      color: 0x3b4080,
      emissive: 0x1a1f5c,
      transparent: true,
      opacity: 0.38,
      side: THREE.FrontSide,
      shininess: 80,
      specular: 0x6366f1,
    });
    group.add(new THREE.Mesh(brainGeo, brainMat));

    // Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    group.add(new THREE.Mesh(brainGeo.clone(), wireMat));

    // Midline fissure ring
    const fissureGeo = new THREE.TorusGeometry(BRAIN_RADIUS * 0.98, 0.012, 8, 80);
    const fissureMat = new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.45 });
    const fissure = new THREE.Mesh(fissureGeo, fissureMat);
    fissure.rotation.x = Math.PI / 2;
    group.add(fissure);

    // Region dots
    const dots: { mesh: THREE.Mesh; regionId: string }[] = [];
    for (const region of BRAIN_REGIONS) {
      const pos3 = sphericalToCartesian(region.theta, region.phi, BRAIN_RADIUS * 1.02);
      const dotGeo = new THREE.SphereGeometry(0.072, 16, 16);
      const color = new THREE.Color(region.hexColor);
      const dotMat = new THREE.MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.92,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos3);
      group.add(dot);
      dots.push({ mesh: dot, regionId: toRegionId(region.name) });

      // Glow ring around each dot
      const ringGeo = new THREE.RingGeometry(0.10, 0.15, 24);
      const ringMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos3);
      ring.lookAt(0, 0, 0);
      group.add(ring);

      // Connection line to center
      const points = [new THREE.Vector3(0, 0, 0), pos3.clone()];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.12 });
      group.add(new THREE.Line(lineGeo, lineMat));
    }
    dotsRef.current = dots;

    // Particle field (background stars)
    const starCount = 320;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 6 + Math.random() * 8;
      const t = Math.random() * Math.PI * 2;
      const p = Math.random() * Math.PI;
      starPositions[i * 3] = r * Math.sin(p) * Math.cos(t);
      starPositions[i * 3 + 1] = r * Math.cos(p);
      starPositions[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xc7d2fe, size: 0.04, transparent: true, opacity: 0.55 });
    scene.add(new THREE.Points(starGeo, starMat));

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!isDraggingRef.current) {
        group.rotation.y += 0.0028 + rotVelRef.current.y;
        group.rotation.x += rotVelRef.current.x;
        rotVelRef.current.x *= 0.92;
        rotVelRef.current.y *= 0.92;
      }

      // Pulse active dot
      for (const { mesh, regionId } of dotsRef.current) {
        const mat = mesh.material as THREE.MeshPhongMaterial;
        if (regionId === activeRegionIdRef.current) {
          const pulse = 1 + 0.45 * Math.sin(elapsed * 3.5);
          mesh.scale.setScalar(pulse * 1.6);
          mat.emissiveIntensity = 1.2 + 0.6 * Math.sin(elapsed * 3.5);
        } else if (regionId === hoveredIdRef.current) {
          mesh.scale.setScalar(1.4);
          mat.emissiveIntensity = 1.0;
        } else {
          mesh.scale.setScalar(1.0);
          mat.emissiveIntensity = 0.7;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      if (!canvas) return;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  // Keep refs in sync with state (avoids stale closure in animation loop)
  const activeRegionIdRef = useRef(activeRegionId);
  useEffect(() => { activeRegionIdRef.current = activeRegionId; }, [activeRegionId]);
  const hoveredIdRef = useRef(hoveredId);
  useEffect(() => { hoveredIdRef.current = hoveredId; }, [hoveredId]);

  // Pointer interaction — drag to rotate, click to select
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDraggingRef.current && brainGroupRef.current) {
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      brainGroupRef.current.rotation.y += dx * 0.012;
      brainGroupRef.current.rotation.x += dy * 0.012;
      rotVelRef.current = { x: dy * 0.0015, y: dx * 0.0015 };
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      return;
    }

    // Hover detection via raycasting
    if (!cameraRef.current || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);
    const hits = raycaster.intersectObjects(dotsRef.current.map((d) => d.mesh));
    if (hits.length > 0) {
      const hit = dotsRef.current.find((d) => d.mesh === hits[0].object);
      setHoveredId(hit?.regionId ?? null);
      canvasRef.current.style.cursor = "pointer";
    } else {
      setHoveredId(null);
      canvasRef.current.style.cursor = isDraggingRef.current ? "grabbing" : "grab";
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const wasDragging = isDraggingRef.current;
    isDraggingRef.current = false;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";

    if (!wasDragging || (Math.abs(e.movementX) < 3 && Math.abs(e.movementY) < 3)) {
      // Treat as click — check raycaster
      if (!cameraRef.current || !canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, cameraRef.current);
      const hits = raycaster.intersectObjects(dotsRef.current.map((d) => d.mesh));
      if (hits.length > 0) {
        const hit = dotsRef.current.find((d) => d.mesh === hits[0].object);
        if (hit) {
          setActiveRegionId(hit.regionId);
          window.location.hash = hit.regionId;
        }
      }
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 scroll-smooth">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.24),transparent_35%),radial-gradient(circle_at_80%_15%,hsl(var(--primary)/0.2),transparent_30%),radial-gradient(circle_at_50%_80%,hsl(var(--secondary)/0.35),transparent_40%)]"
      />

      <div className="mx-auto mb-10 max-w-6xl">
        <Link href="/" className="mb-4 inline-block text-sm text-muted-foreground hover:text-foreground">
          ← Back to home
        </Link>

        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>Creative Atlas</Badge>
          <Badge variant="outline">Neuroanatomy</Badge>
          <Badge variant="outline">Plain Language</Badge>
        </div>

        <h1 className="mb-4 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Brain Atlas: An Artistic Tour
        </h1>
        <p className="max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A creative 3D map of major brain regions. Drag to rotate, click a dot to explore.
        </p>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 xl:grid-cols-[1.2fr_0.9fr]">
        <Card className="relative overflow-hidden border-primary/30 bg-card/60 backdrop-blur">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <CardTitle>3D Brain Globe</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Drag to rotate · Click a region dot to select
                </p>
              </div>
              <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Active: {activeRegion.name}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Three.js canvas */}
            <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-border/50 bg-[linear-gradient(180deg,rgba(10,16,31,0.96),rgba(9,14,26,0.99))] sm:h-[580px]">
              <canvas
                ref={canvasRef}
                className="h-full w-full cursor-grab"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
              />

              {/* Region label overlay */}
              {hoveredId && (() => {
                const r = BRAIN_REGIONS.find((reg) => toRegionId(reg.name) === hoveredId);
                return r ? (
                  <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-primary/30 bg-background/90 px-4 py-1 text-xs font-semibold text-foreground shadow-lg backdrop-blur">
                    {r.name}
                  </div>
                ) : null;
              })()}

              {/* Bottom info bar */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/50 bg-background/80 p-4 backdrop-blur">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {activeRegion.artisticCue}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{activeRegion.name}</h3>
                  </div>
                  <div className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                    {activeRegion.family}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{activeRegion.role}</p>
              </div>
            </div>

            {/* Region family browser */}
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Browse by region family
              </p>
              <div className="space-y-3">
                {REGION_FAMILIES.map((family) => {
                  const regions = BRAIN_REGIONS.filter((r) => r.family === family);
                  return (
                    <div key={family} className="rounded-xl border border-border/50 bg-background/30 p-3">
                      <p className="mb-3 text-sm font-semibold text-foreground">{family}</p>
                      <div className="flex flex-wrap gap-2">
                        {regions.map((region) => {
                          const regionId = toRegionId(region.name);
                          const isActive = regionId === activeRegionId;
                          return (
                            <button
                              key={region.name}
                              type="button"
                              onClick={() => {
                                setActiveRegionId(regionId);
                                window.location.hash = regionId;
                              }}
                              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                                isActive
                                  ? "border-primary/50 bg-primary/10 text-primary"
                                  : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                              }`}
                            >
                              {region.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detail panel */}
        <Card className="border-border/70 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle>Region Notes</CardTitle>
            <p className="text-sm text-muted-foreground">
              One focused detail card, followed by a compact explorer for the full atlas.
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            <article id={activeRegionId} className="rounded-2xl border border-primary/40 bg-primary/10 p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{activeRegion.name}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {activeRegion.artisticCue}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                <span className="font-semibold text-foreground">Definition: </span>
                {activeRegion.definition}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{activeRegion.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activeRegion.whyItMatters}</p>
            </article>

            <div className="max-h-[720px] space-y-3 overflow-auto pr-1">
              {BRAIN_REGIONS.filter((r) => toRegionId(r.name) !== activeRegionId).map((region) => {
                const regionId = toRegionId(region.name);
                return (
                  <article
                    key={region.name}
                    id={regionId}
                    className="rounded-lg border border-border/50 bg-background/40 p-4 transition-colors hover:border-border/80"
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-foreground">{region.name}</h3>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {region.artisticCue}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/90">
                      <span className="font-semibold text-foreground">Definition: </span>
                      {region.definition}
                    </p>
                    <p className="mt-2 text-sm text-foreground/90">{region.role}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{region.whyItMatters}</p>
                  </article>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground">
        Educational illustration only. Neuroanatomy is more complex than a single static map,
        and functions emerge from distributed circuits.
      </p>
    </main>
  );
}
