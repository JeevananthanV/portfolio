"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Sparkles, Layers, RefreshCw, Eye } from "lucide-react"
import { motion } from "motion/react"

export type GeometryMode = "icosahedron" | "torusKnot" | "cubeGrid" | "particles"

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeMode, setActiveMode] = useState<GeometryMode>("icosahedron")
  const [wireframe, setWireframe] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [autoRotate, setAutoRotate] = useState(true)

  const modeRef = useRef(activeMode)
  const wireframeRef = useRef(wireframe)
  const speedRef = useRef(speed)
  const autoRotateRef = useRef(autoRotate)

  useEffect(() => {
    modeRef.current = activeMode
  }, [activeMode])

  useEffect(() => {
    wireframeRef.current = wireframe
  }, [wireframe])

  useEffect(() => {
    speedRef.current = speed
  }, [speed])

  useEffect(() => {
    autoRotateRef.current = autoRotate
  }, [autoRotate])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene Setup
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5.5

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const mainLight = new THREE.PointLight(0xff3e00, 3, 20)
    mainLight.position.set(3, 3, 4)
    scene.add(mainLight)

    const accentLight = new THREE.PointLight(0xd4af37, 2, 20)
    accentLight.position.set(-3, -2, 3)
    scene.add(accentLight)

    // Main Mesh Container Group
    const meshGroup = new THREE.Group()
    scene.add(meshGroup)

    // Helper to build geometries based on current mode
    let currentMainMesh: THREE.Object3D | null = null

    const createGeometries = () => {
      // Remove old meshes
      while (meshGroup.children.length > 0) {
        const obj = meshGroup.children[0]
        meshGroup.remove(obj)
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.geometry.dispose()
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose())
          } else {
            obj.material.dispose()
          }
        }
      }

      const isWire = wireframeRef.current
      const currentMode = modeRef.current

      if (currentMode === "icosahedron") {
        const geo = new THREE.IcosahedronGeometry(1.8, 2)
        const mat = new THREE.MeshStandardMaterial({
          color: 0xff3e00,
          wireframe: isWire,
          metalness: 0.6,
          roughness: 0.2,
          emissive: 0x330c00,
        })
        currentMainMesh = new THREE.Mesh(geo, mat)
        meshGroup.add(currentMainMesh)
      } else if (currentMode === "torusKnot") {
        const geo = new THREE.TorusKnotGeometry(1.2, 0.4, 128, 32)
        const mat = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          wireframe: isWire,
          metalness: 0.8,
          roughness: 0.1,
          emissive: 0x221a00,
        })
        currentMainMesh = new THREE.Mesh(geo, mat)
        meshGroup.add(currentMainMesh)
      } else if (currentMode === "cubeGrid") {
        const gridGroup = new THREE.Group()
        const count = 3
        const spacing = 0.9
        const size = 0.6
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
              if (x === 0 && y === 0 && z === 0) continue
              const geo = new THREE.BoxGeometry(size, size, size)
              const mat = new THREE.MeshStandardMaterial({
                color: (x + y + z) % 2 === 0 ? 0xff3e00 : 0xd4af37,
                wireframe: isWire,
                roughness: 0.3,
              })
              const mesh = new THREE.Mesh(geo, mat)
              mesh.position.set(x * spacing, y * spacing, z * spacing)
              gridGroup.add(mesh)
            }
          }
        }
        currentMainMesh = gridGroup
        meshGroup.add(currentMainMesh)
      } else if (currentMode === "particles") {
        const particleCount = 1200
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)

        const color1 = new THREE.Color(0xff3e00)
        const color2 = new THREE.Color(0xd4af37)

        for (let i = 0; i < particleCount; i++) {
          const radius = 1.5 + Math.random() * 1.5
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(2 * Math.random() - 1)

          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
          positions[i * 3 + 2] = radius * Math.cos(phi)

          const mixColor = Math.random() > 0.5 ? color1 : color2
          colors[i * 3] = mixColor.r
          colors[i * 3 + 1] = mixColor.g
          colors[i * 3 + 2] = mixColor.b
        }

        const geo = new THREE.BufferGeometry()
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
        geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))

        const mat = new THREE.PointsMaterial({
          size: 0.045,
          vertexColors: true,
          transparent: true,
          opacity: 0.85,
        })

        currentMainMesh = new THREE.Points(geo, mat)
        meshGroup.add(currentMainMesh)
      }
    }

    createGeometries()

    // Outer Floating Particles Atmosphere
    const starCount = 350
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 18
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 18
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 18
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))
    const starMat = new THREE.PointsMaterial({
      size: 0.025,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    })
    const starField = new THREE.Points(starGeo, starMat)
    scene.add(starField)

    // Mouse Movement Tracking
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetMouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1
      targetMouseY = -(((event.clientY - rect.top) / container.clientHeight) * 2 - 1)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Handle Resize
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(container)

    // Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    let lastMode = modeRef.current
    let lastWire = wireframeRef.current

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Check if mode or wireframe settings changed dynamically
      if (lastMode !== modeRef.current || lastWire !== wireframeRef.current) {
        lastMode = modeRef.current
        lastWire = wireframeRef.current
        createGeometries()
      }

      const delta = clock.getDelta()
      const spd = speedRef.current

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      if (autoRotateRef.current && currentMainMesh) {
        meshGroup.rotation.y += delta * 0.4 * spd
        meshGroup.rotation.x += delta * 0.2 * spd
      }

      // Interactive Tilt based on mouse
      meshGroup.rotation.y += mouseX * 0.03
      meshGroup.rotation.x += -mouseY * 0.03

      starField.rotation.y -= delta * 0.05

      // Light bounce
      const time = clock.getElapsedTime()
      mainLight.position.x = Math.sin(time * 0.8) * 4
      mainLight.position.y = Math.cos(time * 0.8) * 4

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      resizeObserver.disconnect()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "450px" }}>
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "450px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />

      {/* Interactive 3D Controller Overlay Badge */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          zIndex: 10,
          background: "rgba(14, 14, 14, 0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 62, 0, 0.3)",
          borderRadius: "14px",
          padding: "14px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          maxWidth: "320px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            <Sparkles size={14} /> 3D WebGL Engine
          </div>
          <span style={{ fontSize: "0.7rem", color: "#888", background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: "999px" }}>
            Three.js
          </span>
        </div>

        {/* Geometry Switcher Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px" }}>
          {[
            { id: "icosahedron", label: "Icosahedron" },
            { id: "torusKnot", label: "Torus Knot" },
            { id: "cubeGrid", label: "Cube Grid" },
            { id: "particles", label: "Particles" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveMode(item.id as GeometryMode)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "6px 10px",
                borderRadius: "6px",
                fontSize: "0.72rem",
                fontFamily: "var(--font-syne)",
                fontWeight: 600,
                border: activeMode === item.id ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.08)",
                background: activeMode === item.id ? "rgba(255,62,0,0.2)" : "rgba(255,255,255,0.02)",
                color: activeMode === item.id ? "#fff" : "#aaa",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Toggles */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "6px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <button
            onClick={() => setWireframe(!wireframe)}
            style={{
              background: "none",
              border: "none",
              color: wireframe ? "var(--accent)" : "#777",
              fontSize: "0.72rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: 600,
            }}
          >
            <Layers size={13} /> {wireframe ? "Wireframe" : "Solid"}
          </button>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            style={{
              background: "none",
              border: "none",
              color: autoRotate ? "var(--accent)" : "#777",
              fontSize: "0.72rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: 600,
            }}
          >
            <RefreshCw size={12} className={autoRotate ? "animate-spin" : ""} /> {autoRotate ? "Auto Spin" : "Paused"}
          </button>
        </div>
      </div>
    </div>
  )
}
