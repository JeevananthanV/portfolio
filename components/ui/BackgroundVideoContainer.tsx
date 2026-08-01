"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Film } from "lucide-react"
import { motion } from "motion/react"

interface BackgroundVideoProps {
  posterImage?: string
  overlayOpacity?: number
}

const videoSources = [
  {
    id: "cyber-network",
    title: "Digital Network",
    src: "https://cdn.coverr.co/videos/coverr-digital-network-connections-3430/1080p.mp4",
  },
  {
    id: "glowing-code",
    title: "Code Waves",
    src: "https://cdn.coverr.co/videos/coverr-lines-of-code-2633/1080p.mp4",
  },
  {
    id: "data-particles",
    title: "Abstract Grid",
    src: "https://cdn.coverr.co/videos/coverr-flying-through-abstract-glowing-lines-4824/1080p.mp4",
  },
]

export default function BackgroundVideoContainer({
  posterImage = "/man_mountains_clouds_118031_1366x768.jpg",
  overlayOpacity = 0.75,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const currentVideo = videoSources[currentVideoIdx]

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
          setIsPlaying(false)
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying, currentVideoIdx])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const switchVideo = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % videoSources.length)
    setVideoLoaded(false)
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* Background Poster / Fallback Image */}
      <img
        src={posterImage}
        alt="Background atmosphere"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(0.8) brightness(0.6)",
          opacity: videoLoaded ? 0.3 : 0.8,
          transition: "opacity 1s ease",
        }}
      />

      {/* HTML5 Loop Video */}
      <video
        ref={videoRef}
        src={currentVideo.src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "contrast(1.1) brightness(0.7) grayscale(0.2)",
          opacity: videoLoaded ? 0.45 : 0,
          transition: "opacity 1s ease",
        }}
      />

      {/* Dark Gradient Mask Overlay to ensure extreme text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 30% 30%, rgba(14, 14, 14, ${overlayOpacity - 0.2}) 0%, rgba(14, 14, 14, ${overlayOpacity + 0.15}) 100%), linear-gradient(180deg, rgba(14,14,14,0.4) 0%, rgba(14,14,14,0.95) 100%)`,
        }}
      />

      {/* Floating Video Control Widget (Interactive pointer-events enabled) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "24px",
          zIndex: 20,
          pointerEvents: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(14, 14, 14, 0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "999px",
            padding: "6px 14px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          <button
            onClick={togglePlay}
            title={isPlaying ? "Pause Video" : "Play Video"}
            style={{
              background: "none",
              border: "none",
              color: "var(--accent)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "2px",
            }}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>

          <button
            onClick={toggleMute}
            title={isMuted ? "Unmute Video" : "Mute Video"}
            style={{
              background: "none",
              border: "none",
              color: "#aaa",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "2px",
            }}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--accent)" />}
          </button>

          <div style={{ height: "12px", width: "1px", background: "rgba(255,255,255,0.15)" }} />

          <button
            onClick={switchVideo}
            title="Switch Background Video Theme"
            style={{
              background: "none",
              border: "none",
              color: "#eee",
              fontSize: "0.7rem",
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Film size={13} color="var(--accent)" />
            <span>{currentVideo.title}</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
