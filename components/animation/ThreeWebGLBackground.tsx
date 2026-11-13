"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeWebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return

    // Scene settings
    const scene = new THREE.Scene()
    
    // Ambient background color matches dark theme
    scene.background = null // Transparent so it blends with body dark gradient

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
    camera.position.z = 400

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Generate Particles (Constellation Nodes)
    const particleCount = 200
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities: Array<{x: number, y: number, z: number}> = []
    
    const range = 500

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * range
      positions[i * 3 + 1] = (Math.random() - 0.5) * range
      positions[i * 3 + 2] = (Math.random() - 0.5) * range

      velocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.4
      })
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    // Particle Shader Material (Glowing circular nodes)
    const material = new THREE.PointsMaterial({
      color: 0xff3e00, // Accent orange
      size: 3,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Lines Connecting Proximity Nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff8042, // Faint orange/gold
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    })

    let lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(particleCount * particleCount * 2 * 3) // Large buffer for nodes connectivity
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3))
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineMesh)

    // Mouse Parallax Coordinates
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      // Scale positions to relative coordinates
      targetX = (event.clientX - window.innerWidth / 2) * 0.15
      targetY = (event.clientY - window.innerHeight / 2) * 0.15
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Scroll offset acceleration
    let scrollSpeed = 0
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollSpeed += Math.abs(currentScrollY - lastScrollY) * 0.05
      lastScrollY = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)

    // Resize viewport handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // RequestAnimationFrame Render Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth mouse coordinate lerping
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      // Adjust camera viewport perspective based on mouse move
      camera.position.x = mouseX
      camera.position.y = -mouseY
      camera.lookAt(scene.position)

      // Get delta time
      const delta = clock.getDelta()

      // Dissipate scroll acceleration speed over time
      scrollSpeed *= 0.94

      // Update Particle Positions
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute
      const array = positionsAttr.array as Float32Array
      
      const multiplier = 1 + scrollSpeed * 0.18

      for (let i = 0; i < particleCount; i++) {
        array[i * 3] += velocities[i].x * multiplier
        array[i * 3 + 1] += velocities[i].y * multiplier
        array[i * 3 + 2] += velocities[i].z * multiplier

        // Boundary checks (warp node to opposite side)
        const halfRange = range / 2
        if (array[i * 3] > halfRange) array[i * 3] = -halfRange
        if (array[i * 3] < -halfRange) array[i * 3] = halfRange

        if (array[i * 3 + 1] > halfRange) array[i * 3 + 1] = -halfRange
        if (array[i * 3 + 1] < -halfRange) array[i * 3 + 1] = halfRange

        if (array[i * 3 + 2] > halfRange) array[i * 3 + 2] = -halfRange
        if (array[i * 3 + 2] < -halfRange) array[i * 3 + 2] = halfRange
      }
      positionsAttr.needsUpdate = true

      // Constellation Proximity Lines Update
      let lineIndex = 0
      const limit = 80 // Maximum distance to draw connectivity lines
      const lineArray = lineGeometry.attributes.position.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = array[i * 3] - array[j * 3]
          const dy = array[i * 3 + 1] - array[j * 3 + 1]
          const dz = array[i * 3 + 2] - array[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < limit) {
            lineArray[lineIndex * 3] = array[i * 3]
            lineArray[lineIndex * 3 + 1] = array[i * 3 + 1]
            lineArray[lineIndex * 3 + 2] = array[i * 3 + 2]

            lineArray[lineIndex * 3 + 3] = array[j * 3]
            lineArray[lineIndex * 3 + 4] = array[j * 3 + 1]
            lineArray[lineIndex * 3 + 5] = array[j * 3 + 2]

            lineIndex += 2
          }
        }
      }
      lineGeometry.attributes.position.needsUpdate = true
      
      // Update draw range to only render populated connections
      lineGeometry.setDrawRange(0, lineIndex)

      // Constant slow rotation rotation
      points.rotation.y += 0.0018 * multiplier
      points.rotation.x += 0.0006 * multiplier
      lineMesh.rotation.y += 0.0018 * multiplier
      lineMesh.rotation.x += 0.0006 * multiplier

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup resources and event listeners on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      
      if (containerRef.current) {
        // Safe check before DOM child removal
        if (renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }

      geometry.dispose()
      material.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
        overflow: "hidden"
      }}
    />
  )
}
