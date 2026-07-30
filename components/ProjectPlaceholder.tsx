type ProjectPlaceholderProps = {
  title: string
  featured?: boolean
  colors?: { primary: string; secondary: string; accent: string }
  accentColor?: string
}

export default function ProjectPlaceholder({ title, featured = false, colors, accentColor }: ProjectPlaceholderProps) {
  const themeColors = colors ?? {
    primary: accentColor ?? (featured ? "#ff3e00" : "#555555"),
    secondary: accentColor ?? (featured ? "#cc3100" : "#333333"),
    accent: accentColor ?? "#ffffff",
  }
  const initial = title.charAt(0).toUpperCase()
  const id = `grad-${initial}`

  return (
    <svg
      viewBox="0 0 400 250"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={themeColors.primary} stopOpacity="0.3" />
          <stop offset="100%" stopColor={themeColors.secondary} stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id={`accent-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={themeColors.accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={themeColors.accent} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#${id})`} />
      <rect width="400" height="250" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect width="400" height="250" fill={`url(#accent-${id})`} />
      <text
        x="200"
        y="130"
        textAnchor="middle"
        fill={themeColors.accent}
        fillOpacity="0.12"
        fontSize="80"
        fontFamily="var(--font-syne), sans-serif"
        fontWeight="800"
      >
        {initial}
      </text>
    </svg>
  )
}
