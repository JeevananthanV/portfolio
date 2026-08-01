type ProjectPlaceholderProps = {
  title: string
  featured?: boolean
  colors?: { primary: string; secondary: string; accent: string }
  accentColor?: string
}

export default function ProjectPlaceholder({ title, featured = false, colors, accentColor }: ProjectPlaceholderProps) {
  const themeColors = colors ?? {
    primary: accentColor ?? (featured ? "#1a1a1a" : "#222222"),
    secondary: accentColor ?? (featured ? "#ff3e00" : "#444444"),
    accent: accentColor ?? "#ffffff",
  }
  const initial = title.charAt(0).toUpperCase()
  const safeId = title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
  const id = `grad-${safeId}`

  return (
    <svg
      viewBox="0 0 500 320"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", borderRadius: "8px" }}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={themeColors.primary} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`accent-${safeId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={themeColors.secondary} stopOpacity="0.6" />
          <stop offset="100%" stopColor={themeColors.accent} stopOpacity="0.2" />
        </linearGradient>
        <pattern id={`grid-${safeId}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Canvas Background */}
      <rect width="500" height="320" fill={`url(#${id})`} />
      <rect width="500" height="320" fill={`url(#grid-${safeId})`} />

      {/* Browser Bar / Window Mockup */}
      <rect x="20" y="20" width="460" height="280" rx="8" fill="rgba(15, 15, 15, 0.75)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path d="M 20 20 L 480 20 A 8 8 0 0 1 480 50 L 20 50 Z" fill="rgba(255,255,255,0.04)" />
      
      {/* Window Controls */}
      <circle cx="40" cy="35" r="4" fill="#ff5f56" />
      <circle cx="54" cy="35" r="4" fill="#ffbd2e" />
      <circle cx="68" cy="35" r="4" fill="#27c93f" />

      {/* URL bar indicator */}
      <rect x="100" y="29" width="220" height="12" rx="6" fill="rgba(255,255,255,0.08)" />

      {/* Mock UI Content Area */}
      {/* Sidebar Mock */}
      <rect x="35" y="65" width="80" height="220" rx="4" fill="rgba(255,255,255,0.03)" />
      <rect x="45" y="80" width="60" height="8" rx="2" fill={themeColors.accent} fillOpacity="0.4" />
      <rect x="45" y="100" width="50" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="45" y="116" width="40" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="45" y="132" width="55" height="6" rx="2" fill="rgba(255,255,255,0.15)" />

      {/* Main Dashboard Cards Mock */}
      <rect x="130" y="65" width="200" height="90" rx="6" fill={`url(#accent-${safeId})`} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="145" y="80" width="90" height="10" rx="2" fill={themeColors.accent} />
      <rect x="145" y="100" width="120" height="6" rx="2" fill="rgba(255,255,255,0.3)" />

      <rect x="345" y="65" width="120" height="90" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="405" cy="110" r="22" fill="none" stroke={themeColors.secondary} strokeWidth="4" strokeDasharray="80 30" />

      {/* Bottom Chart / Table Mock */}
      <rect x="130" y="170" width="335" height="115" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      
      {/* Sparkline chart */}
      <path d="M 145 250 Q 200 210 240 235 T 330 200 T 400 220 T 450 190" fill="none" stroke={themeColors.secondary} strokeWidth="3.5" strokeLinecap="round" />

      {/* Subtle Title Backdrop Text */}
      <text
        x="250"
        y="175"
        textAnchor="middle"
        fill={themeColors.accent}
        fillOpacity="0.07"
        fontSize="70"
        fontFamily="var(--font-syne), sans-serif"
        fontWeight="800"
      >
        {initial}
      </text>
    </svg>
  )
}

