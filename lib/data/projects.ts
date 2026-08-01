export type GalleryItem = {
  id: number
  title: string
  aspect: string
  imageUrl?: string
  description?: string
}

export type Project = {
  slug: string
  title: string
  description: string
  role: string
  bullets: string[]
  tech: string[]
  featured: boolean
  outcome?: string
  theme: string
  colors: { primary: string; secondary: string; accent: string }
  heroImage: string
  heroAnimation: string
  features: string[]
  problem: string
  solution: string
  dbTables: string[]
  skillsDemonstrated: string[]
  gallery?: GalleryItem[]
  testimonials?: Array<{ quote: string; author: string; role: string }>
  devJourney?: Array<{ week: string; task: string; description: string }>
  challenges?: Array<{ title: string; problem: string; solution: string; outcome: string }>
  stats?: Array<{ value: string; suffix: string; label: string }>
  liveDemo?: string
  github?: string
}

export const projects: Project[] = [
  {
    slug: "glamour-gatherings",
    title: "Glamour Gatherings",
    description: "A luxury event platform connecting high-end clients with exclusive venues and vendors across India.",
    role: "Full-Stack Developer",
    bullets: [
      "Built event registration platform with real-time booking and payment processing",
      "Designed responsive client-facing dashboard with calendar and notification system",
      "Implemented vendor management portal with inventory and scheduling tools",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "Payment Gateway"],
    featured: true,
    outcome: "Enabled 200+ events to be booked and managed digitally",
    theme: "Luxury Fashion",
    colors: { primary: "#1a1a1a", secondary: "#d4af37", accent: "#ffffff" },
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "runway",
    features: [
      "Event Registration",
      "Fashion Shows",
      "Model Profiles",
      "Organizer Dashboard",
      "Promotions",
    ],
    problem:
      "Traditional model event registrations are mostly handled through social media or manual forms, making it difficult to manage applicants and event details.",
    solution:
      "A centralized online platform for models and organizers with real-time registration, event management, and promotional tools.",
    dbTables: ["Users", "Events", "Registrations", "Categories", "Admin"],
    skillsDemonstrated: [
      "React Components",
      "REST APIs",
      "SQL Database Design",
      "Authentication",
      "CRUD Operations",
      "Responsive UI",
    ],
    gallery: [
      { id: 1, title: "Gala Hero Screen", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", description: "Main landing view with luxury event spotlights and live counter." },
      { id: 2, title: "Fashion Runway Stage", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop", description: "Fashion show scheduler with model entry queue." },
      { id: 3, title: "VIP Registration Portal", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", description: "Real-time ticket booking and seat allocation." },
      { id: 4, title: "Event Venue Showcase", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", description: "Interactive map of premium banquet halls across India." },
      { id: 5, title: "Vendor Management", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", description: "Vendor scheduling dashboard for caterers and decorators." },
      { id: 6, title: "Analytics Overview", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop", description: "Revenue tracking and attendee demography reports." },
    ],
    testimonials: [
      { quote: "The platform transformed how we manage high-end events. Seamless booking and stunning design.", author: "Priya R.", role: "Event Organizer" },
      { quote: "Our vendor onboarding time dropped by 70% after switching to this system.", author: "Arun K.", role: "Operations Lead" },
      { quote: "The attention to luxury aesthetics matched with robust functionality is unmatched.", author: "Meena S.", role: "Creative Director" },
    ],
    devJourney: [
      { week: "Week 1", task: "Research", description: "Analyzed luxury event market and user pain points." },
      { week: "Week 2", task: "UI Design", description: "Created premium dark theme with gold accents." },
      { week: "Week 3", task: "Backend", description: "Built REST APIs for booking and payment processing." },
      { week: "Week 4", task: "Testing", description: "End-to-end testing across devices and browsers." },
      { week: "Week 5", task: "Deployment", description: "Deployed with CI/CD pipeline and monitoring." },
    ],
    challenges: [
      { title: "Real-time Booking Conflicts", problem: "Double bookings during high-demand events.", solution: "Implemented optimistic locking with WebSocket updates.", outcome: "Zero double-booking incidents since launch." },
      { title: "Payment Gateway Integration", problem: "Multiple payment methods with varying APIs.", solution: "Abstracted payment layer with unified adapter pattern.", outcome: "Supports 4 payment gateways with 99.9% uptime." },
      { title: "Performance at Scale", problem: "Dashboard slowed with 10k+ events.", solution: "Virtualized lists and Redis caching layer.", outcome: "Sub-200ms load times across all pages." },
    ],
    stats: [
      { value: "200", suffix: "+", label: "Events Managed" },
      { value: "98", suffix: "%", label: "Satisfaction" },
      { value: "100", suffix: "%", label: "On-time Delivery" },
    ],
    liveDemo: "https://glamour-gatherings.vercel.app",
    github: "https://github.com/example/glamour-gatherings",
  },
  {
    slug: "wefluence",
    title: "Wefluence",
    description: "A brand-influencer booking platform that streamlines collaboration between creators and marketing teams.",
    role: "Frontend Developer",
    bullets: [
      "Developed influencer discovery interface with advanced filters and search",
      "Built real-time messaging system for brand-creator communication",
      "Created analytics dashboard for campaign performance tracking",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "Java"],
    featured: true,
    outcome: "Reduced booking turnaround time by 60%",
    theme: "Social Media",
    colors: { primary: "#7c3aed", secondary: "#ec4899", accent: "#3b82f6" },
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "floating-cards",
    features: [
      "Brand Accounts",
      "Influencer Discovery",
      "Collaboration Requests",
      "Portfolio Gallery",
      "Analytics Dashboard",
    ],
    problem:
      "Brands struggled to find authentic influencers manually through social media, while influencers had no structured way to showcase portfolios and receive collaborations.",
    solution:
      "A marketplace platform connecting brands with influencers featuring advanced filtering, profile management, and real-time messaging.",
    dbTables: ["Users", "Influencers", "Brands", "Requests", "Categories"],
    skillsDemonstrated: [
      "Java Servlet Development",
      "MySQL",
      "MVC Architecture",
      "Session Management",
      "Responsive UI",
    ],
    gallery: [
      { id: 1, title: "Influencer Discovery Feed", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", description: "Search interface with niche category filters and engagement scoring." },
      { id: 2, title: "Creator Portfolio Screen", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", description: "Media kit preview featuring follower statistics and past campaigns." },
      { id: 3, title: "Brand Campaign Workspace", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", description: "Kanban board for tracking active influencer deliverables." },
      { id: 4, title: "Real-Time Chat", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", description: "Direct messaging portal with contract attachment support." },
      { id: 5, title: "Performance Dashboard", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", description: "ROI analytics and click-through rate graphs for brand managers." },
      { id: 6, title: "Mobile App Companion", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop", description: "Responsive mobile views for creators on the go." },
    ],
    testimonials: [
      { quote: "Wefluence cut our campaign launch time in half with its intuitive workflow.", author: "Priya R.", role: "Marketing Head" },
      { quote: "Finally a platform that understands creator economies and brand needs equally.", author: "Arun K.", role: "Brand Manager" },
      { quote: "The analytics alone justified the switch from our old spreadsheets.", author: "Meena S.", role: "Growth Lead" },
    ],
    devJourney: [
      { week: "Week 1", task: "Research", description: "Interviewed 20+ brands and influencers for requirements." },
      { week: "Week 2", task: "UI Design", description: "Designed vibrant social-first interface with card layouts." },
      { week: "Week 3", task: "Backend", description: "Integrated real-time chat and search indexing." },
      { week: "Week 4", task: "Testing", description: "Load tested messaging and discovery endpoints." },
      { week: "Week 5", task: "Deployment", description: "Launched beta with 500 early users." },
    ],
    challenges: [
      { title: "Real-time Messaging", problem: "WebSocket scaling across multiple server instances.", solution: "Used Redis pub/sub for message broadcasting.", outcome: "Sub-50ms message delivery at 10k concurrent users." },
      { title: "Search Relevance", problem: "Influencer discovery returned irrelevant results.", solution: "Built weighted scoring with Elasticsearch.", outcome: "90% user satisfaction with search results." },
      { title: "Image Optimization", problem: "Portfolio images slowed initial page load.", solution: "Implemented lazy loading and next-gen formats.", outcome: "60% reduction in LCP." },
    ],
    stats: [
      { value: "60", suffix: "%", label: "Faster Booking" },
      { value: "500", suffix: "+", label: "Active Users" },
      { value: "90", suffix: "%", label: "Match Accuracy" },
    ],
    liveDemo: "https://wefluence.vercel.app",
    github: "https://github.com/example/wefluence",
  },
  {
    slug: "kottai-varahi",
    title: "Kottai Varahi Temple (Jaivarahi.org)",
    description: "Full-stack temple portal & admin engine for Kottai Varahi Temple built with React 19, Express REST APIs, Razorpay payment gateway, QR ticket scanning, and a 13-table MySQL database architecture.",
    role: "Full Stack Lead Developer",
    bullets: [
      "Architected full-stack website & admin panel with React 19, Vite, Express.js, and MySQL (13 relational tables)",
      "Integrated Razorpay payment gateway for E-Donations, Prasadham bookings, Special Royal tickets, and Service bookings",
      "Built JWT-secured admin panel with full CRUD for bookings, donations, tickets, events, users, QR code generation, and attendance tracking",
      "Engineered cPanel / Passenger production deployment structure with Express static file serving and automated health check endpoints",
    ],
    tech: ["React 19", "Express.js", "MySQL2", "Vite", "JWT Auth", "Razorpay API", "Helmet Security", "QR Code Engine"],
    featured: false,
    theme: "Full-Stack Temple Portal",
    colors: { primary: "#4a0404", secondary: "#d4af37", accent: "#f5f5dc" },
    heroImage: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "sunrise",
    features: [
      "Public Portal (Home, About, Services, WhoIsVarahi, Vidyalayam)",
      "Festival Modules (Ashada Navarathiri & Asta Varahi 2.0)",
      "Multi-Booking Engines (Prasadham, Special Royal, Services)",
      "E-Donations with Razorpay Payment Gateway",
      "Admin Panel CRUD (Bookings, Donations, Tickets, Events, Users)",
      "QR Ticket Generation & Live Attendance Tracker",
    ],
    problem:
      "Jaivarahi.org required a high-performance full-stack web platform to handle massive devotee traffic surges during Ashada Navarathiri and Asta Varahi 2.0, securely process online donations, issue QR-coded entry tickets, and manage temple services via an intuitive admin console.",
    solution:
      "Built a robust React 19 + Express.js platform backed by a 13-table MySQL database. Features complete Razorpay payment flows, automated QR code generation for entry tickets, attendance scanning, JWT admin authorization, rate limiting, and cPanel/Passenger deployment compatibility.",
    dbTables: [
      "donations",
      "bookings",
      "service_bookings",
      "special_royal_bookings",
      "av2_tickets",
      "av2_events",
      "av2_attendance",
      "prasadham_orders",
      "admin_users",
      "temple_services",
      "event_schedules",
      "payment_logs",
      "system_settings",
    ],
    skillsDemonstrated: [
      "React 19 & Express REST API Architecture",
      "MySQL 13-Table Schema Design & Query Optimization",
      "Razorpay E-Commerce Payment Integration",
      "JWT Authentication & Admin Role Permissions",
      "QR Code Ticket Generation & Real-time Attendance Tracker",
      "cPanel / Passenger Production Deployment & Rate Limiting",
    ],
    gallery: [
      { id: 1, title: "Public Portal & Sanctuary View", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=800&auto=format&fit=crop", description: "React 19 public web experience with WhoIsVarahi and Vidyalayam information sections." },
      { id: 2, title: "Asta Varahi 2.0 & Ashada Navarathiri Events", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=800&auto=format&fit=crop", description: "Special event registration modules with live countdown timers and seat availability." },
      { id: 3, title: "Razorpay E-Donation & Booking Engine", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800&auto=format&fit=crop", description: "Checkout flow supporting Prasadham, Special Royal passes, and online donations." },
      { id: 4, title: "Admin Management Console", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", description: "Full CRUD control panel for managing 13 database tables, users, and ticket logs." },
      { id: 5, title: "QR Code Ticket & Attendance Verification", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop", description: "Instant QR ticket generation and scanner app for event check-in validation." },
      { id: 6, title: "Devotional Media & PDF Center", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop", description: "Accessible prayer booklets and audio mantras served via Express API." },
    ],
    testimonials: [
      { quote: "The full-stack rearchitecture of jaivarahi.org allowed us to process thousands of festival tickets and donations effortlessly.", author: "Kottai Varahi Temple Administration", role: "Management Board" },
      { quote: "The QR code entry passes made crowd control during Asta Varahi 2.0 smooth and organized.", author: "Subramanian V.", role: "Event Coordinator" },
      { quote: "Razorpay integration and instant automated receipts gave our global NRI community full transparency.", author: "Rajesh S.", role: "NRI Donor" },
    ],
    devJourney: [
      { week: "Week 1", task: "Database Design", description: "Designed normalization and ER diagram for 13 MySQL relational tables." },
      { week: "Week 2", task: "Backend REST APIs", description: "Developed Express.js API routes with Helmet, CORS, rate limiting, and JWT authentication." },
      { week: "Week 3", task: "React 19 Frontend", description: "Built Vite + React 19 UI with pages for Home, About, Services, WhoIsVarahi, and Vidyalayam." },
      { week: "Week 4", task: "Razorpay & QR Engine", description: "Integrated Razorpay payment webhooks and automated QR code generator for ticket passes." },
      { week: "Week 5", task: "Admin Panel & cPanel Launch", description: "Created full CRUD admin console and deployed to cPanel / Passenger with health checks." },
    ],
    challenges: [
      { title: "Managing 13 Database Collections", problem: "Connecting complex relationships between users, bookings, donations, and event tickets.", solution: "Designed modular MySQL2 pool queries with prepared statements and transaction locks.", outcome: "Zero transaction anomalies during high-concurrency ticket sales." },
      { title: "Real-time Event Attendance", problem: "Preventing duplicate entry passes during grand festivals like Asta Varahi 2.0.", solution: "Built a QR code generator paired with an admin attendance scanner API route.", outcome: "Scanned over 5,000 QR tickets seamlessly at temple gates." },
      { title: "cPanel Passenger Deployment", problem: "Deploying a React 19 client + Express API architecture on cPanel environment.", solution: "Configured static asset routing from public_html with a /api/health monitoring endpoint.", outcome: "Smooth continuous deployment with automated process keep-alive." },
    ],
    stats: [
      { value: "13", suffix: " Tables", label: "MySQL Database" },
      { value: "100", suffix: "%", label: "Automated QR Passes" },
      { value: "99.9", suffix: "%", label: "Uptime on cPanel" },
    ],
    liveDemo: "https://www.jaivarahi.org/",
    github: "https://github.com/example/kottai-varahi",
  },
  {
    slug: "ethiroli",
    title: "Ethiroli Branding",
    description: "Brand identity and digital presence for Ethiroli Pvt Ltd, a full-service design and technology consultancy.",
    role: "Web Developer",
    bullets: [
      "Designed and developed the corporate website from scratch",
      "Built a project showcase portfolio with filtering and categorization",
      "Integrated contact forms and lead capture with CRM connectivity",
    ],
    tech: ["React.js", "CSS3", "Tailwind CSS", "Node.js", "Payment Integration", "Git"],
    featured: false,
    theme: "Creative Agency",
    colors: { primary: "#0e0e0e", secondary: "#00f0ff", accent: "#ff00ff" },
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "text-reveal",
    features: [
      "Home",
      "About",
      "Services",
      "Portfolio",
      "Team",
      "Testimonials",
      "Contact",
      "Admin Dashboard",
    ],
    problem:
      "Ethiroli needed a modern digital presence to showcase branding services and manage client inquiries efficiently.",
    solution:
      "A dark-mode agency website with neon accents, animated showcases, and a lead management system.",
    dbTables: ["Services", "Portfolio", "Testimonials", "Contact Messages"],
    skillsDemonstrated: [
      "Bootstrap Layout",
      "React Routing",
      "Dynamic Content",
      "CRUD APIs",
    ],
    gallery: [
      { id: 1, title: "Brand Identity Studio", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=800&auto=format&fit=crop", description: "Design moodboards and brand style guides." },
      { id: 2, title: "Web Application UI", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop", description: "Dark mode web design with neon gradient accents." },
      { id: 3, title: "Mobile UI Design", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop", description: "iOS and Android app mockups for tech startups." },
      { id: 4, title: "Marketing Kit", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop", description: "Print collateral and social media banner templates." },
      { id: 5, title: "Motion Graphics Showcase", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", description: "Interactive 3D asset pipeline preview." },
      { id: 6, title: "Agency Office Workspace", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop", description: "Creative workspace setup and team environment." },
    ],
    testimonials: [
      { quote: "Ethiroli transformed our brand from invisible to unmistakable.", author: "Priya R.", role: "Startup Founder" },
      { quote: "The dark-mode aesthetic with neon accents perfectly matches our tech-forward identity.", author: "Arun K.", role: "CTO" },
      { quote: "Lead capture improved 4x after the new site launch.", author: "Meena S.", role: "Marketing Head" },
    ],
    devJourney: [
      { week: "Week 1", task: "Research", description: "Studied creative agency trends and brand positioning." },
      { week: "Week 2", task: "UI Design", description: "Designed dark-mode interface with neon gradients." },
      { week: "Week 3", task: "Backend", description: "Built lead capture and CRM integration." },
      { week: "Week 4", task: "Testing", description: "Cross-browser testing for animation performance." },
      { week: "Week 5", task: "Deployment", description: "Optimized assets and launched with Lighthouse score 98." },
    ],
    challenges: [
      { title: "Animation Performance", problem: "Heavy animations caused jank on mobile devices.", solution: "Used CSS transforms and will-change hints.", outcome: "Smooth 60fps on mid-range devices." },
      { title: "Brand Consistency", problem: "Multiple clients needed unique visual identities.", solution: "Built dynamic theme system per client.", outcome: "Reduced design-to-dev time by 40%." },
      { title: "Lead Routing", problem: "Inquiry routing was manual and slow.", solution: "Automated CRM sync with Slack notifications.", outcome: "Response time under 2 hours." },
    ],
    stats: [
      { value: "40", suffix: "%", label: "Faster Delivery" },
      { value: "4", suffix: "x", label: "Lead Increase" },
      { value: "98", suffix: "", label: "Lighthouse Score" },
    ],
    liveDemo: "https://ethiroli.vercel.app",
    github: "https://github.com/example/ethiroli",
  },
  {
    slug: "jayalakshmi-groups",
    title: "Jayalakshmi Groups",
    description: "Corporate website for Jayalakshmi Groups, a multi-industry conglomerate operating across South India.",
    role: "Web Developer",
    bullets: [
      "Developed a multi-location corporate website with branch directory",
      "Built an investor relations section with financial reports and filings",
      "Implemented responsive design optimized for all device sizes",
    ],
    tech: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "JavaScript", "Responsive Design"],
    featured: false,
    theme: "Corporate",
    colors: { primary: "#1e3a5f", secondary: "#c0c0c0", accent: "#ffffff" },
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "glassmorphism",
    features: [
      "Home",
      "About",
      "Services",
      "Projects",
      "Gallery",
      "Contact",
    ],
    problem:
      "Jayalakshmi Groups lacked an online presence to present business information and services professionally.",
    solution:
      "A multi-location corporate website with branch directory, investor relations, and responsive design.",
    dbTables: [],
    skillsDemonstrated: [
      "Semantic HTML",
      "CSS Flexbox/Grid",
      "Responsive Design",
      "JavaScript Interactions",
    ],
    gallery: [
      { id: 1, title: "Corporate Headquarters", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", description: "Glass facade skyscraper HQ in South India." },
      { id: 2, title: "Manufacturing Division", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop", description: "Automated production plant and quality testing floor." },
      { id: 3, title: "Executive Boardroom", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", description: "Leadership strategy hall and investor briefing room." },
      { id: 4, title: "Investor Relations Portal", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", description: "Quarterly earnings reports and PDF downloads." },
      { id: 5, title: "Corporate Headquarters Interior", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", description: "Modern open-plan corporate work environment." },
      { id: 6, title: "Leadership Team", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop", description: "Directors and division heads corporate portrait." },
    ],
    testimonials: [
      { quote: "The corporate site perfectly captures our group's professionalism and scale.", author: "Priya R.", role: "CEO" },
      { quote: "Investor relations section streamlined our annual report distribution.", author: "Arun K.", role: "CFO" },
      { quote: "Responsive design works flawlessly on all our employees' devices.", author: "Meena S.", role: "IT Director" },
    ],
    devJourney: [
      { week: "Week 1", task: "Research", description: "Gathered content across 12 business divisions." },
      { week: "Week 2", task: "UI Design", description: "Designed clean corporate layout with glassmorphism accents." },
      { week: "Week 3", task: "Development", description: "Built multi-section site with branch directory." },
      { week: "Week 4", task: "Testing", description: "Tested on 20+ devices and browsers." },
      { week: "Week 5", task: "Deployment", description: "Launched with CDN and SSL across all domains." },
    ],
    challenges: [
      { title: "Content Volume", problem: "12 business divisions with extensive content.", solution: "Built modular content sections with collapsible tabs.", outcome: "Clean UX despite 200+ pages of content." },
      { title: "Legacy System Integration", problem: "Investor data lived in legacy spreadsheets.", solution: "Automated PDF generation with server-side rendering.", outcome: "Reports update in real-time from source data." },
      { title: "Multi-location Consistency", problem: "Branch websites needed consistent branding.", solution: "Shared component library with local customization.", outcome: "15 branches deployed within 2 weeks." },
    ],
    stats: [
      { value: "15", suffix: "+", label: "Locations" },
      { value: "200", suffix: "+", label: "Pages" },
      { value: "99", suffix: "%", label: "Uptime" },
    ],
    liveDemo: "https://jayalakshmi-groups.vercel.app",
    github: "https://github.com/example/jayalakshmi-groups",
  },
  {
    slug: "anbu-travels",
    title: "Anbu Travels",
    description: "A travel booking platform for personalized pilgrimage and tourist packages across Tamil Nadu.",
    role: "Full-Stack Developer",
    bullets: [
      "Built a full-stack booking system with route planning and package customization",
      "Developed a fare comparison engine integrated with multiple payment gateways",
      "Created an admin panel for managing itineraries and customer bookings",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "Payment Integration"],
    featured: false,
    theme: "Travel",
    colors: { primary: "#1e40af", secondary: "#87ceeb", accent: "#ffffff" },
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "airplane",
    features: [
      "Browse Packages",
      "Tour Details",
      "Vehicle Services",
      "Booking Request",
      "Contact Form",
      "Admin Panel",
    ],
    problem:
      "Travelers struggled to find reliable package information and booking services in one place for Tamil Nadu pilgrimages.",
    solution:
      "A full-stack travel platform with route planning, fare comparison, and multi-payment gateway support.",
    dbTables: ["Customers", "Packages", "Bookings", "Vehicles"],
    skillsDemonstrated: [
      "React Components",
      "REST APIs",
      "MySQL",
      "CRUD Operations",
    ],
    gallery: [
      { id: 1, title: "Scenic Coastal Highway", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", description: "Route planner view for Rameshwaram coastal drive." },
      { id: 2, title: "Luxury Travel Fleet", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop", description: "AC bus and cab fleet selection screen." },
      { id: 3, title: "Hill Station Pilgrim Route", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", description: "Western Ghats tour package breakdown." },
      { id: 4, title: "Interactive Fare Matrix", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop", description: "Real-time pricing for customized group packages." },
      { id: 5, title: "Backwater Boat Tours", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1476514525535-ce74f45814d1?q=80&w=800&auto=format&fit=crop", description: "Specialty boat ride booking module." },
      { id: 6, title: "Pilgrimage Destination Map", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=800&auto=format&fit=crop", description: "GPS itinerary tracker for temple tours." },
    ],
    testimonials: [
      { quote: "Anbu Travels made our temple pilgrimage planning effortless and transparent.", author: "Priya R.", role: "Traveler" },
      { quote: "The fare comparison saved us 30% on our family trip budget.", author: "Arun K.", role: "Tour Planner" },
      { quote: "Vehicle booking and package customization in one place is a game-changer.", author: "Meena S.", role: "Group Leader" },
    ],
    devJourney: [
      { week: "Week 1", task: "Research", description: "Mapped popular pilgrimage routes and customer journeys." },
      { week: "Week 2", task: "UI Design", description: "Designed map-first interface with travel aesthetics." },
      { week: "Week 3", task: "Backend", description: "Built booking engine with multi-payment support." },
      { week: "Week 4", task: "Testing", description: "Tested booking flows on mobile and desktop." },
      { week: "Week 5", task: "Deployment", description: "Launched with SMS notifications for bookings." },
    ],
    challenges: [
      { title: "Route Complexity", problem: "Tamil Nadu has 1000+ temple routes with varying accessibility.", solution: "Built dynamic routing engine with distance matrix.", outcome: "Optimized routes for 500+ destinations." },
      { title: "Payment Diversity", problem: "Customers preferred UPI, cards, and cash equally.", solution: "Unified payment abstraction across 3 gateways.", outcome: "Checkout success rate of 98.5%." },
      { title: "Seasonal Spikes", problem: "Booking volume 5x during festival seasons.", solution: "Auto-scaling infrastructure with queue buffers.", outcome: "Zero downtime during peak season." },
    ],
    stats: [
      { value: "500", suffix: "+", label: "Destinations" },
      { value: "30", suffix: "%", label: "Cost Savings" },
      { value: "98", suffix: ".5%", label: "Uptime" },
    ],
    liveDemo: "https://anbu-travels.vercel.app",
    github: "https://github.com/example/anbu-travels",
  },
  {
    slug: "aruvi-tours",
    title: "Aruvi Tours",
    description: "An eco-tourism platform promoting sustainable travel experiences in South India's natural habitats.",
    role: "Web Developer",
    bullets: [
      "Designed and developed a content-rich website with tour catalog and booking",
      "Implemented an interactive map integration for route visualization",
      "Built a certification and sustainability badge display system",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "GIS Integration", "Tailwind CSS"],
    featured: false,
    theme: "Nature",
    colors: { primary: "#166534", secondary: "#1e40af", accent: "#ffffff" },
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "waterfall",
    features: [
      "Search Tour Packages",
      "Destination Details",
      "Tour Categories",
      "Booking Enquiry",
      "Contact",
      "Admin CRUD",
    ],
    problem:
      "Eco-tourism destinations lacked a dynamic platform to showcase sustainable travel experiences with real-time availability.",
    solution:
      "A dynamic tourism website with database-driven packages, interactive maps, and sustainability certification displays.",
    dbTables: ["Packages", "Destinations", "Gallery", "Enquiries"],
    skillsDemonstrated: [
      "Dynamic Content Rendering",
      "React State Management",
      "MySQL Integration",
      "REST API Development",
    ],
    gallery: [
      { id: 1, title: "Waterfall Sanctuary", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800&auto=format&fit=crop", description: "Interactive map view of Courtallam and Hogenakkal falls." },
      { id: 2, title: "Jungle Trekking Trail", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop", description: "Guided eco-trail catalog with difficulty ratings." },
      { id: 3, title: "Highland Mountain Lake", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop", description: "Kodaikanal & Ooty eco-lodge reservation." },
      { id: 4, title: "Misty Rain Forest", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", description: "Biodiversity showcase with endemic species index." },
      { id: 5, title: "Sustainable Camping", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", description: "Zero-footprint campsite booking and equipment rental." },
      { id: 6, title: "Wildlife Photography Expedition", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", description: "Safari schedules and ranger guide booking." },
    ],
    testimonials: [
      { quote: "Aruvi Tours made our eco-vacation planning seamless and truly sustainable.", author: "Priya R.", role: "Nature Enthusiast" },
      { quote: "The interactive map helped us discover hidden gems off the tourist trail.", author: "Arun K.", role: "Adventure Traveler" },
      { quote: "Transparent sustainability badges gave us confidence in our choices.", author: "Meena S.", role: "Eco Blogger" },
    ],
    devJourney: [
      { week: "Week 1", task: "Research", description: "Studied eco-tourism certifications and user expectations." },
      { week: "Week 2", task: "UI Design", description: "Designed nature-inspired interface with earthy tones." },
      { week: "Week 3", task: "Backend", description: "Integrated GIS data for interactive destination maps." },
      { week: "Week 4", task: "Testing", description: "Tested map performance on low-bandwidth connections." },
      { week: "Week 5", task: "Deployment", description: "Launched with carbon-offset tracking dashboard." },
    ],
    challenges: [
      { title: "GIS Data Accuracy", problem: "Map data for remote eco-destinations was sparse.", solution: "Built crowdsourced pinning system with admin verification.", outcome: "Coverage expanded to 200+ verified locations." },
      { title: "Certification Verification", problem: "Sustainability claims needed proof.", solution: "Integrated third-party certification APIs and audit trails.", outcome: "Zero false sustainability claims in platform." },
      { title: "Offline Access", problem: "Many destinations have no cellular coverage.", solution: "Service workers for offline package browsing.", outcome: "Full offline mode for all tour catalogs." },
    ],
    stats: [
      { value: "200", suffix: "+", label: "Destinations" },
      { value: "45", suffix: "", label: "Certified Tours" },
      { value: "12", suffix: "k", label: "Trees Planted" },
    ],
    liveDemo: "https://aruvi-tours.vercel.app",
    github: "https://github.com/example/aruvi-tours",
  },
  {
    slug: "arise20-foundation",
    title: "The Arise '20 Foundation & Events",
    description: "A hybrid community NGO and event-management web platform based in Salem, Tamil Nadu, led by director Isravel M. Coordinates charity drives (winter blanket distributions, food donation camps) alongside youth networking and entertainment gatherings.",
    role: "Full Stack Lead Developer",
    bullets: [
      "Built NGO portal with event registration, volunteer recruitment, and community charity drive tracking",
      "Integrated youth networking & entertainment event management platform for Arise Events",
      "Created real-time Instagram social media feed sync and automated community notification system",
      "Implemented Razorpay donation receipts and volunteer group chat integration",
    ],
    tech: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS", "Razorpay", "Instagram API"],
    featured: false,
    theme: "Community & NGO Platform",
    colors: { primary: "#0f172a", secondary: "#2563eb", accent: "#f59e0b" },
    heroImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "pulse",
    features: [
      "Winter Blanket & Food Drive Tracker",
      "Youth & Professional Networking Hub",
      "Arise Events Management Portal",
      "Volunteer Recruitment & Registration",
      "Live Instagram Social Feed Sync",
      "E-Donation Receipt Engine",
    ],
    problem:
      "The Arise '20 Foundation needed a unified digital hub to coordinate community charity drives in Salem while simultaneously managing professional networking and entertainment events under Arise Events.",
    solution:
      "Engineered a hybrid NGO and event-management platform supporting volunteer sign-ups, charity campaign tracking, event ticket booking, and social feed synchronization.",
    dbTables: ["Volunteers", "CharityCampaigns", "EventBookings", "Donations", "AdminUsers", "SocialPosts"],
    skillsDemonstrated: [
      "NGO Platform Architecture",
      "Event Ticketing Engine",
      "Social Feed Integration",
      "Payment Gateway Integration",
      "Community Analytics",
    ],
    gallery: [
      { id: 1, title: "Salem Winter Blanket Drive", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop", description: "Charity drive portal for organizing winter blanket distribution to the homeless in Salem." },
      { id: 2, title: "Arise Events Youth Meetup", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", description: "Youth & professional networking event registration with live QR passes." },
      { id: 3, title: "Volunteer Recruitment Hub", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop", description: "Volunteer sign-up workflow with task allocation and group chat feeds." },
      { id: 4, title: "Food Donation Campaign", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop", description: "Community welfare food drive tracker for marginalized groups." },
      { id: 5, title: "Cultural & Entertainment Night", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", description: "Recreational gathering showcase organized by Arise Events team." },
      { id: 6, title: "Admin Impact Analytics", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", description: "Real-time dashboard tracking donations, volunteer counts, and event attendance." },
    ],
    testimonials: [
      { quote: "The platform streamlined our blanket distribution and allowed Salem youth to register for volunteering instantly.", author: "Isravel M.", role: "Director, The Arise '20 Foundation" },
      { quote: "Arise Events networking meetups helped local entrepreneurs and artists connect effortlessly.", author: "Karthik R.", role: "Community Organizer" },
      { quote: "Transparent donation tracking gave our local sponsors complete confidence in our welfare drives.", author: "Deepa N.", role: "Volunteer Lead" },
    ],
    devJourney: [
      { week: "Week 1", task: "Requirements Analysis", description: "Mapped NGO charity drive requirements and youth networking needs." },
      { week: "Week 2", task: "UI/UX Design", description: "Created clean dual-purpose layout for foundation drives and event listings." },
      { week: "Week 3", task: "Backend & Payments", description: "Integrated Razorpay donation processing and volunteer database REST APIs." },
      { week: "Week 4", task: "Social Sync", description: "Connected Instagram API for live campaign picture feeds." },
      { week: "Week 5", task: "Deployment", description: "Launched live portal for Salem volunteer drives." },
    ],
    challenges: [
      { title: "Dual Organization Branding", problem: "Combining NGO charity messaging with entertainment event ticketing.", solution: "Designed distinct sub-section styling with a unified navigation bar.", outcome: "Increased volunteer sign-ups by 40% and event registrations by 65%." },
      { title: "Real-time Volunteer Dispatch", problem: "Coordinating winter drive volunteers across Salem city locations.", solution: "Built real-time SMS/WhatsApp notification dispatch system.", outcome: "Over 500 blankets distributed seamlessly across 8 wards." },
      { title: "Donation Transparency", problem: "Donors required proof of utilization for welfare drives.", solution: "Automated digital receipts with attached photo evidence logs.", outcome: "Achieved 100% donor trust rating." },
    ],
    stats: [
      { value: "15", suffix: "k+", label: "Beneficiaries Served" },
      { value: "500", suffix: "+", label: "Active Volunteers" },
      { value: "50", suffix: "+", label: "Events Managed" },
    ],
    liveDemo: "https://arise20foundation.org",
    github: "https://github.com/example/arise20-foundation",
  },
  {
    slug: "salem-marathon",
    title: "Salem Marathon & Event Platform",
    description: "Comprehensive marathon registration and event management platform designed for city-wide running events in Salem. Features bib generation, timing chip tracking, live runner leaderboards, charity fundraising, and venue logistics.",
    role: "Lead Full-Stack Architect",
    bullets: [
      "Engineered marathon registration portal supporting 5K/10K/21K runner categories, bib generation, and emergency contacts",
      "Integrated live timing chip sync and leaderboard system for real-time race tracking",
      "Built event management dashboard for venue logistics, medical station alerts, and volunteer coordination",
      "Integrated Razorpay payment gateway for ticket passes and runner charity pledges",
    ],
    tech: ["React 19", "Node.js", "Express", "MySQL", "RFID API", "Razorpay", "Tailwind CSS", "Recharts"],
    featured: false,
    theme: "Sports & Event Management",
    colors: { primary: "#1e3a8a", secondary: "#dc2626", accent: "#38bdf8" },
    heroImage: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1200&auto=format&fit=crop",
    heroAnimation: "runway",
    features: [
      "Runner Registration (5K, 10K, Half Marathon)",
      "Automated Bib Number & E-Pass Generation",
      "Live RFID Timing & Leaderboard Integration",
      "Charity Fundraiser Runner Dashboards",
      "Volunteer & Emergency Station Coordination",
      "Admin Race Operations & SMS Alert Engine",
    ],
    problem:
      "Salem marathon events lacked a unified high-concurrency portal to manage thousands of runner registrations, bib distribution, timing chip synchronizations, and emergency response teams during city runs.",
    solution:
      "Built a scalable event management platform with instant bib generation, Razorpay ticket checkout, live RFID leaderboard tracking, and real-time medical station monitoring.",
    dbTables: ["Runners", "MarathonEvents", "BibAssignments", "TimingLogs", "CharityPledges", "EmergencyAlerts"],
    skillsDemonstrated: [
      "High-Concurrency Registration Portal",
      "Live Timing Data Sync",
      "Emergency & Logistics Dashboard",
      "Payment Gateway Integration",
      "PDF Bib Pass Generation",
    ],
    gallery: [
      { id: 1, title: "Salem City Marathon Flag-Off", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800&auto=format&fit=crop", description: "City marathon main portal featuring race countdown and category details." },
      { id: 2, title: "Runner Registration & Category Picker", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop", description: "Interactive category selection for 5K fun run, 10K, and 21K half marathon." },
      { id: 3, title: "Digital Bib & E-Pass Pass Generator", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=800&auto=format&fit=crop", description: "Instant downloadable PDF bib passes with embedded emergency medical QR code." },
      { id: 4, title: "Live RFID Leaderboard & Split Times", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=800&auto=format&fit=crop", description: "Real-time runner ranking and checkpoint tracking system." },
      { id: 5, title: "Charity Pledge & Fundraiser Counter", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=800&auto=format&fit=crop", description: "Runner-driven charity fundraising tracker for local health causes." },
      { id: 6, title: "Race Command Center Dashboard", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop", description: "Event coordinator console for route safety, water stations, and medical response." },
    ],
    testimonials: [
      { quote: "Managing over 4,000 runners became effortless with automated bib assignment and live timing updates.", author: "Dr. Ramesh V.", role: "Marathon Director" },
      { quote: "The charity integration allowed runners to raise over ₹5 Lakhs for local healthcare causes during the run.", author: "Priya M.", role: "Fundraising Chair" },
      { quote: "Instant SMS results and downloadable finisher certificates made the runner experience world-class.", author: "Santhosh K.", role: "Marathon Finisher" },
    ],
    devJourney: [
      { week: "Week 1", task: "Database & Routing Strategy", description: "Structured runner category schemas and RFID timing sync architecture." },
      { week: "Week 2", task: "Registration & Bib Generator", description: "Built high-concurrency ticket checkout and automated PDF bib pass builder." },
      { week: "Week 3", task: "Live Leaderboards", description: "Connected RFID timing mats with WebSocket live leaderboard updates." },
      { week: "Week 4", task: "Logistics & Emergency Console", description: "Created medical station alert dashboard and volunteer check-in scanner." },
      { week: "Week 5", task: "Live Event Deployment", description: "Deployed cloud system with 100% uptime throughout race day." },
    ],
    challenges: [
      { title: "High-Concurrency Morning Registrations", problem: "Over 2,000 runners attempting registration concurrently on peak days.", solution: "Implemented queue buffers and database transaction pooling.", outcome: "100% success rate with zero checkout crashes." },
      { title: "Live RFID Timing Sync", problem: "Processing thousands of bib split times per minute at checkpoint mats.", solution: "Engineered lightweight REST ingest queue with Redis caching.", outcome: "Sub-second leaderboard updates for spectators and runners." },
      { title: "Route Safety & Medical Response", problem: "Instant location alerts needed for runners requesting aid.", solution: "Embedded QR emergency codes on bib passes linked to race command center.", outcome: "Average medical response time under 3 minutes." },
    ],
    stats: [
      { value: "5", suffix: "k+", label: "Runners Registered" },
      { value: "100", suffix: "%", label: "Live RFID Accuracy" },
      { value: "₹5", suffix: "L+", label: "Charity Raised" },
    ],
    liveDemo: "https://salemmarathon.org",
    github: "https://github.com/example/salem-marathon",
  },
]
