import Link from "next/link"
import { Metadata } from "next"
import { 
  ArrowLeft, 
  Code2, 
  Server, 
  Database, 
  CreditCard, 
  Flame, 
  Sparkles, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Freelancing Services | Jeevananthan V",
  description:
    "Available for freelance full-stack development projects in Salem, Tamil Nadu. Specializing in React 19, Node.js, REST APIs, and scalable web applications.",
  keywords: [
    "Freelance Developer Salem",
    "Web Developer Salem Tamil Nadu",
    "React Freelancer India",
    "Node.js Freelance Salem",
    "Full Stack Freelancer Tamil Nadu",
  ],
}

const services = [
  {
    title: "Full-Stack Web Applications",
    description: "End-to-end production web applications engineered with React 19, Node.js, and normalized MySQL schemas.",
    icon: Code2,
    deliverables: ["Modular architecture", "State management", "RESTful backend", "Authentication"],
  },
  {
    title: "Payment Gateway Integrations",
    description: "Secure, reliable checkout flows with Razorpay & Stripe, including webhook signature verification.",
    icon: CreditCard,
    deliverables: ["Online payments", "Webhook handlers", "Automated PDF invoices", "Refund pipelines"],
  },
  {
    title: "Backend APIs & Database Systems",
    description: "High-throughput REST APIs, database indexing, concurrency locks, and transaction logs.",
    icon: Server,
    deliverables: ["Express REST APIs", "MySQL / Postgres", "JWT security", "Audit trails"],
  },
  {
    title: "Salesforce CRM & Apex Engineering",
    description: "Enterprise Salesforce integrations, custom Apex controllers, triggers, and workflow automations.",
    icon: Flame,
    deliverables: ["Apex triggers", "REST endpoints", "Data synchronization", "Lead routing"],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Scope",
    description: "Analyzing your requirements, user stories, technical constraints, and timeline milestones.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Designing the database schema, API contracts, UI component hierarchy, and security flow.",
  },
  {
    step: "03",
    title: "Agile Build & Iteration",
    description: "Developing code in weekly sprint deliverables with staging deployments for your review.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Conducting Lighthouse optimization, cross-browser audits, CI/CD pipeline setup, and production deployment.",
  },
]

export default function FreelancingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pb-24">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-syne font-extrabold text-base tracking-tight hover:text-[#ff3e00] transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-[#ff3e00] flex items-center justify-center text-black font-extrabold text-xs">
              JV
            </div>
            <span>JEEVANANTHAN V</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} className="text-[#ff3e00]" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-b border-white/5">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff3e00]/10 border border-[#ff3e00]/25 text-[#ff3e00] text-xs font-mono font-medium mb-6">
            <Sparkles size={13} />
            FREELANCE & CONTRACTUAL ENGINEERING
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-syne text-white leading-tight">
            Bring Your Vision to Life With Production-Grade Code
          </h1>

          <p className="mt-6 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Whether you need a complete web application built from scratch, payment integrations, or backend database architecture, I deliver clean, documented, and high-performance solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:jeevananthanjeeva170902@gmail.com"
              className="px-6 py-3 rounded-xl bg-[#ff3e00] hover:bg-[#ff3e00]/90 text-black font-extrabold text-xs uppercase tracking-wider font-syne transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#ff3e00]/25"
            >
              Start a Project
            </a>
            <a
              href="tel:+916374230015"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider font-syne transition-colors"
            >
              Call: +91 63742 30015
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 border-b border-white/5">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-syne text-white">
              Specialized Engineering Offerings
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3 font-sans">
              Tailored services for startups, agencies, and expanding businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.title}
                  className="p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#ff3e00]/10 border border-[#ff3e00]/25 flex items-center justify-center text-[#ff3e00] mb-4">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-syne text-white mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-6">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                      Core Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-neutral-300 border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-16 sm:py-24 border-b border-white/5">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-syne text-white">
              Development Lifecycle
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3 font-sans">
              Structured, transparent workflows from initial requirements to successful deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-extrabold font-syne text-[#ff3e00] block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold font-syne text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to collaborate callout */}
      <section className="pt-16 sm:pt-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-white/10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-syne text-white mb-3">
              Ready to Kick Off Your Project?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-sans">
              Send your project specifications, questions, or ideas. I will review them and send over a structured proposal.
            </p>

            <a
              href="mailto:jeevananthanjeeva170902@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff3e00] text-black font-extrabold text-xs uppercase tracking-wider font-syne shadow-lg shadow-[#ff3e00]/20 hover:bg-[#ff3e00]/90 transition-all"
            >
              <span>Email: jeevananthanjeeva170902@gmail.com</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
