const techKeywords = [
  "REACT",
  "NODE.JS",
  "BOOTSTRAP",
  "MYSQL",
  "JAVA",
  "TYPESCRIPT",
  "NEXT.JS",
  "POSTGRESQL",
  "GIT",
  "PAYMENT INTEGRATION",
  "RESPONSIVE DESIGN",
  "PDF ACCESSIBILITY",
]

export default function MarqueeSkills() {
  return (
    <div className="scrolling-marquee">
      <div className="marquee-inner">
        {techKeywords.map((kw, i) => (
          <span
            key={i}
            className="huge-type outline-text"
            style={{ fontSize: "3rem", marginRight: "60px" }}
          >
            {kw}
          </span>
        ))}
        {techKeywords.map((kw, i) => (
          <span
            key={i + techKeywords.length}
            className="huge-type outline-text"
            style={{ fontSize: "3rem", marginRight: "60px" }}
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}