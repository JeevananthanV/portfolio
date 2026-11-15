import Link from "next/link"
import { ArrowLeft, Home, Sparkles } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="w-16 h-16 rounded-2xl bg-[#ff3e00]/10 border border-[#ff3e00]/25 flex items-center justify-center text-[#ff3e00] mb-6 shadow-lg shadow-[#ff3e00]/20">
        <Sparkles size={28} />
      </div>

      <span className="font-mono text-xs uppercase tracking-widest text-[#ff3e00] mb-2 font-bold">
        Error 404 // Page Not Found
      </span>

      <h1 className="text-4xl sm:text-6xl font-extrabold font-syne text-white tracking-tight mb-4">
        Lost in Cyberspace
      </h1>

      <p className="text-neutral-400 text-sm sm:text-base max-w-md mx-auto mb-8 font-sans leading-relaxed">
        The architecture route or project specification you are looking for does not exist or has been relocated.
      </p>

      <div className="flex items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff3e00] text-black font-extrabold text-xs uppercase tracking-wider font-syne hover:bg-[#ff3e00]/90 transition-all shadow-lg shadow-[#ff3e00]/20"
        >
          <Home size={14} />
          <span>Return Home</span>
        </Link>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider font-syne hover:bg-white/10 transition-all"
        >
          <span>View Projects</span>
        </Link>
      </div>
    </div>
  )
}

