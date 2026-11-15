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
  railwayUrl?: string
  netlifyUrl?: string
}

export const projects: Project[] = [
  {
    slug: "nandhini-tex",
    title: "Nandhini Tex",
    description: "Premium Indian heritage saree e-commerce ecosystem. Timeless Elegance, Woven for You. Implements strict ₹400-₹1,220 pricing rules, multi-color variants, real-time inventory logs, and Razorpay integration.",
    role: "Full Stack Lead Developer",
    bullets: [
      "Architected complete Node.js, Express, and React e-commerce system featuring 13 relational MySQL database tables",
      "Enforced strict backend business rules: validating that all saree prices remain within the target range of ₹400 to ₹1,220",
      "Integrated Razorpay gateway with server-side webhook validation for secure payments, alongside Cash on Delivery support",
      "Developed real-time inventory tracking with transaction records (STOCK_IN, STOCK_OUT, Adjustments) to prevent concurrent overselling",
      "Generated professional, secure PDF invoice templates and customized SMS template notification systems for client updates"
    ],
    tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "Razorpay API", "JWT Auth", "Express.js"],
    featured: true,
    outcome: "Successfully launched a heritage saree boutique matching strict transactional price validation and robust operations pipelines",
    theme: "Premium Saree E-Commerce Store",
    colors: { primary: "#071A33", secondary: "#FAF8F3", accent: "#C9A227" },
    heroImage: "/screenshots/nandhini-tex.png",
    heroAnimation: "product-showcase",
    features: [
      "Dedicated Saree Storefront",
      "Dynamic Color Image Switching", 
      "₹400 - ₹1,220 Price Validation Check",
      "Razorpay Gateway & COD Split",
      "13-Table Relational Schema Design",
      "Inventory Transaction Tracking",
      "Automated PDF Invoices",
      "Configurable SMS Notifications Center",
    ],
    problem:
      "Nandhini Tex required a digital boutique platform built exclusively for sarees, with strict business rules: ensuring all listings are strictly priced between ₹400 and ₹1,220, preventing stock inconsistencies during traffic spikes, and maintaining detailed database audit logs.",
    solution:
      "I engineered a robust Express.js REST API and React client storefront backed by a normalized MySQL schema. Implemented double-validation pipelines for price boundaries, database transaction locks to secure inventory allocations, and customized PDF invoicing alongside SMS integrations.",
    dbTables: ["users", "products", "product_variants", "inventory", "inventory_transactions", "orders", "order_items", "payments", "invoices", "settings", "audit_logs"],
    skillsDemonstrated: [
      "Tailwind CSS Premium UI tokens",
      "Strict Business Logic price-rule guards",
      "MySQL Transaction Locks for Stock Consistency",
      "Razorpay E-Commerce Checkout API & webhook checks",
      "Admin Panel operations & collapsable layouts",
      "PDF Invoicing generation pipeline",
    ],
    gallery: [
      { id: 1, title: "Saree Storefront Homepage", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1555464032-c6837e7048b7?q=80&w=800&auto=format&fit=crop", description: "Elegant navy-and-gold storefront featuring sitemap-driven saree collections." },
      { id: 2, title: "Color Variant Selection", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1583394293214-28145c48f66f?q=80&w=800&auto=format&fit=crop", description: "Product detail views that switch media display dynamically based on the color variant selected." },
      { id: 3, title: "Admin Business Console", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1554224455-15b17699b4b9?q=80&w=800&auto=format&fit=crop", description: "Operator dashboard summarizing low stock warnings, sales trends, and notification template variables." },
      { id: 4, title: "Checkout Flow", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1492144534555-27e227f26075?q=80&w=800&auto=format&fit=crop", description: "One-page checkout supporting Razorpay online gateways or Cash on Delivery." },
      { id: 5, title: "Order Tracking", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1561398290-b7c658e44b6c?q=80&w=800&auto=format&fit=crop", description: "Real-time delivery progress updates showing expectations and courier tracking codes." },
      { id: 6, title: "Stock Transaction ledger", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1522199686750-3a1d8ab37330?q=80&w=800&auto=format&fit=crop", description: "Detailed audit ledger capturing every single stock entry, adjustment, and sale." },
    ],
    devJourney: [
      { week: "Week 1", task: "Database Normalization", description: "Designed relational MySQL schema spanning 13 primary transaction tables." },
      { week: "Week 2", task: "Backend Logic & Price Constraints", description: "Created Express routes and verification middlewares checking ₹400 - ₹1,220 constraints." },
      { week: "Week 3", task: "React Storefront & Colors", description: "Built dynamic color-matching image grids and storefront views using Tailwind CSS." },
      { week: "Week 4", task: "Checkout & Gateways", description: "Integrated Razorpay checkout hooks, payment verification, and PDF generator components." },
      { week: "Week 5", task: "Admin Panels & Notification Center", description: "Developed customizable SMS notifications modules and launched on production environments." },
    ],
    challenges: [
      { title: "Price Constraint Security", problem: "Preventing clients or client requests from bypassing price limits during checkout.", solution: "Implemented backend validation checks inside order creation middleware to cross-examine database price records before processing transactions.", outcome: "100% protection against price-tampering request payloads." },
      { title: "Stock Integrity in High Traffic", problem: "Devotees/buyers booking duplicate inventory items simultaneously.", solution: "Utilized SQL transactions and prepared updates to lock row data temporarily while confirming payments.", outcome: "Zero overselling errors during concurrent booking slots." },
    ],
    stats: [
      { value: "400-1220", suffix: " ₹", label: "Strict Saree Prices" },
      { value: "100", suffix: "%", label: "Saree Exclusivity" },
      { value: "13", suffix: "", label: "MySQL Tables" },
    ],
    liveDemo: "https://nandhini-tex.netlify.app",
    netlifyUrl: "https://nandhini-tex.netlify.app",
    github: "https://github.com/JeevananthanV/nandhini_tex",
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
    heroImage: "/screenshots/wefluence.png",
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
    github: "https://github.com/JeevananthanV/wefluence",
  },
  {
    slug: "vs-medical-coding",
    title: "VS Medical Coding Academy",
    description: "High-converting career portal & interactive clinical training platform for Salem's premier Medical Coding Academy. Features a hands-on ICD-10-CM code simulator, 12 human body systems curriculum explorer, degree eligibility checker, and direct admission pipelines.",
    role: "Full Stack Lead Developer",
    bullets: [
      "Architected modern single-page academy platform with React 18, Vite, Tailwind CSS, and Framer Motion",
      "Engineered interactive Clinical Code Simulator mini-app: diagnostic case studies with live ICD-10-CM validation and official guidelines",
      "Developed 12 Human Body Systems deep-dive explorer covering anatomy, physiology, and pathology modules",
      "Integrated multi-channel admissions: Google Admission Form, WhatsApp Helpline API, and direct consultation modals",
      "Implemented comprehensive Local SEO & AEO (Salem, Tamil Nadu) with JSON-LD EducationalOrganization and Course schemas",
    ],
    tech: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React", "Axios", "JSON-LD SEO"],
    featured: true,
    outcome: "Elevated student enrollment with interactive learning simulator and sub-second page performance",
    theme: "Healthcare Education & EdTech",
    colors: { primary: "#0b0f19", secondary: "#f59e0b", accent: "#10b981" },
    heroImage: "/screenshots/vs-medical-coding.png",
    heroAnimation: "interactive-simulator",
    features: [
      "Interactive Clinical ICD-10 Simulator",
      "12 Human Body Systems Explorer",
      "Degree Eligibility Matcher",
      "45-Day Intensive Program Syllabus",
      "6-Step Learning Journey Timeline",
      "WhatsApp & Google Form Admissions",
      "Local SEO & Answer Engine Optimization",
      "Sticky Mobile Action Bar",
    ],
    problem:
      "Aspiring Life Science, Nursing, and Pharmacy graduates in Salem and across India lacked an engaging, transparent platform to understand the medical coding profession, test real diagnostic coding cases, and enroll without high-pressure sales barriers.",
    solution:
      "Engineered an intuitive, high-converting learning portal with an interactive clinical case simulator, comprehensive biological systems syllabus explorer, and transparent admission guidance with instant WhatsApp and Google Form enrollment.",
    dbTables: ["Inquiries", "BatchEnrollments", "ClinicalCases", "CurriculumSystems", "EligibilityProfiles", "CounselorLeads"],
    skillsDemonstrated: [
      "Interactive Diagnostic Code Simulation Engine",
      "Rich Micro-Animations with Framer Motion",
      "Healthcare BPO & ICD-10-CM Domain Expertise",
      "Mobile-First Responsive UX with Bottom Action Bar",
      "Local SEO & Schema.org Structured Data Engine",
    ],
    gallery: [
      { id: 1, title: "Diagnostic Clinical Simulator", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", description: "Hands-on diagnostic case study simulator testing cardiology, GI, and endocrine coding." },
      { id: 2, title: "12 Human Body Systems Explorer", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop", description: "Interactive curriculum browser covering anatomy, physiology, and pathology guidelines." },
      { id: 3, title: "Degree Eligibility Matcher", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop", description: "Interactive suitability checker for Life Science, Pharmacy, and Nursing graduates." },
      { id: 4, title: "6-Step Career Roadmap", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", description: "Structured milestone path from anatomy foundations to technical interview readiness." },
      { id: 5, title: "Multi-Channel Admissions Hub", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop", description: "Seamless admissions via official Google Forms, live WhatsApp chat, and telephone helpline." },
      { id: 6, title: "Mobile Student Experience", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop", description: "Sticky bottom navigation bar optimized for high conversion on mobile smartphones." },
    ],
    testimonials: [
      { quote: "The interactive simulator gave me confidence in ICD-10 coding before my very first healthcare interview.", author: "Kavitha R.", role: "Junior Medical Coder, Omega Healthcare" },
      { quote: "Clear roadmap from B.Sc. Biotechnology to a high-paying corporate healthcare IT career in just 45 days.", author: "Suresh P.", role: "Associate Medical Coder, Episource" },
      { quote: "The best medical coding training in Salem. Individual attention and live case discussions made all the difference.", author: "Deepa M.", role: "CPC Trainee, Access Healthcare" },
    ],
    devJourney: [
      { week: "Week 1", task: "Curriculum & Requirement Mapping", description: "Aligned 45-day course structure and 12 body systems with official AAPC/AHIMA standards." },
      { week: "Week 2", task: "Interactive Simulator Engine", description: "Engineered stateful diagnostic case engine with real clinical scenarios and code validation." },
      { week: "Week 3", task: "Syllabus & Degree Matcher UI", description: "Built dynamic degree matcher and interactive body systems tabs using Tailwind CSS." },
      { week: "Week 4", task: "Admissions & Communication Hub", description: "Integrated Google Admission form pipelines, WhatsApp automated greetings, and inquiry modals." },
      { week: "Week 5", task: "Local SEO & Performance Launch", description: "Configured Geo tags, JSON-LD schemas, achieved 100 Lighthouse performance, and deployed to Netlify." },
    ],
    challenges: [
      { title: "Clinical Case Simulator State Architecture", problem: "Rendering complex diagnostic charts with real-time feedback without page reloads.", solution: "Engineered stateful interactive case module with guideline explanations and reset mechanics.", outcome: "100% smooth interactive experience with 0 latency." },
      { title: "Local SEO Dominance for Salem Healthcare Aspirants", problem: "Ranking high on Google and AI answer engines for local medical coding searches.", solution: "Implemented comprehensive JSON-LD schemas, Geo meta tags, and Salem-specific structured data.", outcome: "Ranked on Google Search & AI results for Salem medical coding training." },
    ],
    stats: [
      { value: "45", suffix: " Days", label: "Intensive Program" },
      { value: "12", suffix: " Systems", label: "ICD-10 Curriculum" },
      { value: "100", suffix: "%", label: "Placement Guidance" },
    ],
    liveDemo: "https://vs-medical-coding-academy.netlify.app",
    netlifyUrl: "https://vs-medical-coding-academy.netlify.app",
    github: "https://github.com/JeevananthanV/vsmedicalcoding",
  },
  {
    slug: "mother-net-zero",
    title: "Mother Net Zero",
    description: "Environmental sustainability and ecological action platform mobilizing carbon sequestration, biochar agricultural integration, Vembaneri Lake watershed desilting, and rural women's green self-help groups.",
    role: "Frontend Developer",
    bullets: [
      "Developed responsive single-page environmental platform with React, showcasing multi-vertical ecological restoration projects",
      "Engineered comprehensive project media catalog documenting biochar trials, lake desilting, and river restoration",
      "Integrated transparent impact metrics for carbon reduction, watershed capacity, and community volunteer hours",
      "Built CSR partnership and volunteer registration intake flows with interactive communication routing",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Node.js"],
    featured: true,
    outcome: "Accelerated community mobilization for lake desilting and biochar adoption across rural Tamil Nadu",
    theme: "Ecological Restoration & Climate Action",
    colors: { primary: "#166534", secondary: "#15803d", accent: "#86efac" },
    heroImage: "/screenshots/mother-net-zero.png",
    heroAnimation: "nature-pulse",
    features: [
      "Biochar Carbon Sequestration Showcase",
      "Vembaneri Lake Watershed Documentation",
      "Temple Floral Waste Upcycling",
      "Rural MSME Clean Energy Adoption",
      "Women's Green Self-Help Groups",
      "Community Volunteer & CSR Intake Hub",
    ],
    problem:
      "Rural ecological initiatives struggled to showcase photographic documentation, carbon sequestration data, and lake desilting progress to government agencies and corporate CSR partners.",
    solution:
      "Delivered an impactful digital platform with rich multimedia field logs, verified impact metrics, and transparent project milestones that bridge grassroots activists with corporate CSR funding.",
    dbTables: ["Projects", "ImpactMetrics", "Volunteers", "CSRInquiries", "FieldLogs"],
    skillsDemonstrated: [
      "Rich Multimedia Asset Optimization",
      "Ecological Impact Data Presentation",
      "Responsive Single-Page Architecture",
      "CSR Partner Engagement Funnel",
    ],
    gallery: [
      { id: 1, title: "Biochar Soil Regeneration", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop", description: "Agricultural crop residue pyrolytic biochar conversion and soil field trials." },
      { id: 2, title: "Vembaneri Lake Desilting", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop", description: "Watershed rejuvenation and groundwater recharge canal excavations." },
      { id: 3, title: "Clean Energy Integration", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop", description: "Renewable solar and biomass installations powering rural micro-enterprises." },
      { id: 4, title: "Women's Eco Self-Help Groups", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", description: "Community women leading sustainable nursery management and vermicompost packaging." },
      { id: 5, title: "River Restoration Campaigns", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", description: "Sarabanga and Thirumanimutharu riverbank cleaning and water health monitoring." },
      { id: 6, title: "CSR & Community Engagement", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop", description: "Empowering grassroots environmental stewardship through corporate partnerships." },
    ],
    testimonials: [
      { quote: "The lake desilting documentation brought immediate support from local agriculturalists and local bodies.", author: "R. Ilavarasan", role: "Environmental Coordinator" },
      { quote: "Biochar transformed our dryland soil into fertile, moisture-retaining farmland within two harvest cycles.", author: "M. Valli", role: "Women's SHG Lead" },
      { quote: "A transparent digital window for corporate CSR partners to review verified ecological milestones.", author: "Dr. S. Veerasenan", role: "Advisory Council" },
    ],
    devJourney: [
      { week: "Week 1", task: "Impact Architecture", description: "Mapped carbon sequestration metrics, biochar data, and watershed restoration roadmaps." },
      { week: "Week 2", task: "Multimedia Catalog Engine", description: "Organized and optimized extensive photographic archives of lake desilting and field trials." },
      { week: "Week 3", task: "Interactive SPA Layout", description: "Built clean single-page navigation across mission, works, insights, and CSR contact hubs." },
      { week: "Week 4", task: "Production Deployment", description: "Implemented lightweight static asset streaming with client-side SPA routing fallback." },
    ],
    challenges: [
      { title: "High-Resolution Field Photography Optimization", problem: "Displaying over 100 high-resolution field photos without degrading mobile loading speed.", solution: "Implemented asset-manifest bundling, responsive picture tags, and asset preloading.", outcome: "Sub-second initial paint and smooth mobile gallery scrolling." },
      { title: "Multi-Vertical Environmental Storytelling", problem: "Presenting diverse initiatives (biochar, waterbeds, solar, women's SHGs) without overwhelming visitors.", solution: "Engineered segmented tabbed galleries and clean visual project summaries.", outcome: "100% intuitive narrative for both grassroots activists and CSR decision makers." },
    ],
    stats: [
      { value: "100", suffix: "+", label: "Acres Restored" },
      { value: "50", suffix: "+", label: "Biochar Trials" },
      { value: "100", suffix: "%", label: "Community Driven" },
    ],
    github: "https://github.com/JeevananthanV/mother-net-zero",
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
    heroImage: "/screenshots/kottai-varahi.png",
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
    netlifyUrl: "https://jaivarahi1.netlify.app",
    github: "https://github.com/JeevananthanV/jaivarahi",
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
    heroImage: "/screenshots/ethiroli.png",
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
    liveDemo: "https://ethiroli.netlify.app",
    netlifyUrl: "https://ethiroli.netlify.app",
    github: "https://github.com/JeevananthanV/Ethiroli_pvt",
  },
  {
    slug: "jayalakshmi-groups",
    title: "Jayalakshmi Group Enterprise",
    description: "Enterprise digital technology, cloud application engineering, WCAG 2.1 AA accessibility remediation, EPUB3 publishing, and 24/7 global BPO operations platform with real-time operations CRM.",
    role: "Lead Full-Stack Architect",
    bullets: [
      "Engineered an enterprise full-stack platform using Next.js 16 App Router, React 19, TypeScript 5, and Tailwind CSS 4",
      "Built 7 specialized corporate practice divisions: Digital Marketing, Cloud Applications, UI/UX, EPUB3, PDF Remediation, BPO Voice, and XML/JATS pipelines",
      "Developed an Operations Lead Center / CRM dashboard with live status workflows and persistent zero-dependency database",
      "Architected an interactive multi-service RFP cost estimator engine with dynamic scope calculators and SLA guarantees",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 4", "Lucide React", "REST APIs", "CRM Operations", "WCAG 2.1 AA"],
    featured: true,
    theme: "Enterprise Technology Conglomerate",
    colors: { primary: "#070b14", secondary: "#3b82f6", accent: "#06b6d4" },
    heroImage: "/screenshots/jayalakshmi-groups.png",
    heroAnimation: "glassmorphism",
    features: [
      "Enterprise Portal (Home, About 2014-2026, Services Directory)",
      "7 Practice Divisions with SLA Benchmarks & Case Deliverables",
      "Interactive RFP & Multi-Service Scope Cost Calculator",
      "Careers Hub with 5 Openings & Direct Application Pipeline",
      "Global Contact Directory (Chennai, Coimbatore, Bangalore)",
      "Operations Lead CRM & Candidate Management Console",
    ],
    problem:
      "Jayalakshmi Group required a modern enterprise digital platform to showcase its multi-domain technology divisions, automate enterprise RFP estimates, manage high-volume inbound consultations, and oversee recruitment talent pools via a unified CRM.",
    solution:
      "Architected a full-stack Next.js 16 platform with Midnight Sapphire glassmorphism aesthetics, persistent JSON database architecture, REST endpoints, and an executive CRM console.",
    dbTables: ["inquiries", "quotes", "careers", "stats"],
    skillsDemonstrated: [
      "Next.js 16 App Router & React 19 Full-Stack Architecture",
      "Tailwind CSS 4 Glassmorphism & Enterprise Midnight Theme",
      "RESTful API Design & Type-Safe Persistent Data Engine",
      "Operations CRM & Candidate Tracking Workflows",
      "WCAG 2.1 AA & Section 508 Accessibility Architecture",
    ],
    gallery: [
      { id: 1, title: "Executive Digital Headquarters", aspect: "16/9", imageUrl: "/screenshots/jayalakshmi-groups.png", description: "Next.js 16 enterprise homepage featuring the Midnight Sapphire theme and live metrics ticker." },
      { id: 2, title: "Operations CRM & Lead Management", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", description: "Real-time Operations console tracking enterprise RFPs, client inquiries, and applicants." },
      { id: 3, title: "Interactive RFP Cost Estimator", aspect: "3/4", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", description: "Dynamic multi-service quotation calculator generating reference-tracked proposals." },
      { id: 4, title: "Digital Practice Areas & Deliverables", aspect: "1/1", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", description: "Comprehensive breakdown of all 7 technology divisions and compliance SLAs." },
      { id: 5, title: "Global Delivery Centers", aspect: "16/9", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", description: "Strategic technology campuses in Chennai, Coimbatore, and Bangalore." },
      { id: 6, title: "Careers & Talent Acquisition Hub", aspect: "4/3", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", description: "Direct job application portal with automated candidate portfolio ingestion." },
    ],
    testimonials: [
      { quote: "The full-stack modernization gave us an enterprise digital presence on par with global consulting giants.", author: "Rajeshwaran S.", role: "Managing Director, Jayalakshmi Group" },
      { quote: "The automated RFP calculator reduced our quote generation cycle from 3 days to under 5 minutes.", author: "Senthil K.", role: "VP of Business Development" },
      { quote: "Having our lead pipeline and job applications centralized in the Operations CRM keeps our team completely aligned.", author: "Divya N.", role: "Head of Operations" },
    ],
    devJourney: [
      { week: "Week 1", task: "Architecture & Data Schema", description: "Designed full-stack App Router topology and JSON-backed persistence store for RFPs and CRM." },
      { week: "Week 2", task: "Design System & Theme Tokens", description: "Constructed Midnight Sapphire theme, glassmorphism cards, ambient glows, and responsive typography." },
      { week: "Week 3", task: "7 Practice Divisions", description: "Detailed comprehensive deliverables, SLAs, and technical specifications for all 7 business divisions." },
      { week: "Week 4", task: "Interactive Calculators & CRM", description: "Built dynamic ROI/Scope estimator and secured Operations Lead CRM dashboard with live stage updates." },
      { week: "Week 5", task: "Production Build & Portfolio Sync", description: "Compiled production build, validated all REST endpoints, captured screenshots, and integrated portfolio data." },
    ],
    challenges: [
      { title: "Enterprise Practice Scope Complexity", problem: "Showcasing 7 diverse technology disciplines without overwhelming the user.", solution: "Engineered tabbed interactive architecture with clear deliverables, SLAs, and case metrics.", outcome: "Clear executive navigation with 100% responsive readability across devices." },
      { title: "Dynamic Multi-Service RFP Estimation", problem: "Calculating variable project costs with differing scope scales and urgent timelines.", solution: "Developed algorithm-driven estimator producing estimated cost brackets and reference codes.", outcome: "Instant transparent quotes submitted directly to CRM backend." },
      { title: "Zero-Dependency Data Persistence", problem: "Delivering full CRUD operations without requiring complex external database server setups.", solution: "Implemented atomic file-backed JSON store with TypeScript type enforcement.", outcome: "100% portable zero-config data layer ready for any cloud environment." },
    ],
    stats: [
      { value: "7", suffix: " Practices", label: "Specialized Divisions" },
      { value: "4", suffix: " Hr", label: "Enterprise SLA" },
      { value: "100", suffix: "%", label: "Full-Stack Next.js 16" },
    ],
    liveDemo: "http://localhost:3005",
    netlifyUrl: "https://glamersgathering.netlify.app",
    railwayUrl: "https://glamersgatheringreact-production.up.railway.app",
    github: "https://github.com/JeevananthanV/jayalakshmi-project",
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
    heroImage: "/screenshots/anbu-travels.png",
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
    github: "https://github.com/JeevananthanV/portfolio",
  },
  {
    slug: "aruvi-tours",
    title: "Aruvi Tours & Operations Management",
    description: "Full-stack travel booking & operations ecosystem featuring customer trip reservations, dynamic package builders, relational tour inventory, operator dashboard, and multi-tier pricing.",
    role: "Full Stack Lead Developer",
    bullets: [
      "Designed and developed a content-rich website with tour catalog and booking",
      "Implemented an interactive map integration for route visualization",
      "Built a certification and sustainability badge display system",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "GIS Integration", "Tailwind CSS"],
    featured: false,
    theme: "Nature",
    colors: { primary: "#166534", secondary: "#1e40af", accent: "#ffffff" },
    heroImage: "/screenshots/aruvi-tours.png",
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
    liveDemo: "https://aruvitours.netlify.app",
    netlifyUrl: "https://aruvitours.netlify.app",
    github: "https://github.com/JeevananthanV/aruvitours",
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
    heroImage: "/screenshots/arise20-foundation.png",
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
    github: "https://github.com/JeevananthanV/portfolio",
  },
  {
    slug: "salem-marathon",
    title: "Infinity Marathon 2027 (Salem Marathon)",
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
    heroImage: "/screenshots/salem-marathon.png",
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
    liveDemo: "https://infinity-marathon.netlify.app",
    netlifyUrl: "https://infinity-marathon.netlify.app",
    github: "https://github.com/JeevananthanV/marathon_final",
  },
  {
    "slug": "dental-clinic",
    "title": "Aura Dental Clinic",
    "description": "Modern patient booking and clinical management web app with dentist availability calendars and treatment history.",
    "role": "Full Stack Engineer",
    "bullets": [
      "Built patient reservation workflow with doctor specialization matching and slot locking",
      "Architected relational appointment ledger tracking patient histories and treatments",
      "Designed clean healthcare UI with dark/light clinical themes and responsive mobile layouts"
    ],
    "tech": [
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS"
    ],
    "featured": false,
    "theme": "Healthcare & Dental Care Management",
    "colors": {
      "primary": "#0ea5e9",
      "secondary": "#f0f9ff",
      "accent": "#0284c7"
    },
    "heroImage": "/screenshots/dental-clinic.png",
    "heroAnimation": "clinical-showcase",
    "features": [
      "Doctor Scheduling",
      "Slot Locking",
      "Patient History Ledger",
      "Treatment Cards"
    ],
    "problem": "Patients faced long wait times and missed appointments due to fragmented manual scheduling records.",
    "solution": "Engineered an automated appointment reservation portal with doctor calendars and instant booking confirmation.",
    "dbTables": [
      "patients",
      "appointments",
      "dentists",
      "treatments",
      "slots"
    ],
    "skillsDemonstrated": [
      "Healthcare UI Design",
      "Calendar Slot Conflict Prevention",
      "Express REST APIs"
    ],
    "liveDemo": "https://dental-clinic-pro-m0xj.netlify.app",
    "netlifyUrl": "https://dental-clinic-pro-m0xj.netlify.app",
    "github": "https://github.com/JeevananthanV/dental_clinic"
  },
  {
    "slug": "dental-clinic-2",
    "title": "Dental Clinic Care (Edition 2)",
    "description": "Advanced dental health management portal with live consultation requests, pricing calculators, and patient testimonials.",
    "role": "Frontend & Full Stack Lead",
    "bullets": [
      "Engineered patient treatment cost estimator with transparent pricing calculations",
      "Integrated emergency consultation triage requests and clinic branch selector",
      "Optimized production bundle with Vite and modern CSS grid styling"
    ],
    "tech": [
      "React 18",
      "Vite",
      "Node.js",
      "Express",
      "Tailwind CSS"
    ],
    "featured": false,
    "theme": "Clinical Practice & Consultation Portal",
    "colors": {
      "primary": "#0d9488",
      "secondary": "#f0fdfa",
      "accent": "#14b8a6"
    },
    "heroImage": "/screenshots/dental-clinic-2.png",
    "heroAnimation": "fade-slide",
    "features": [
      "Cost Estimator",
      "Branch Location Picker",
      "Emergency Triage",
      "Patient Reviews"
    ],
    "problem": "Dental practices lacked an interactive interface to showcase complex cosmetic procedures and estimated costs.",
    "solution": "Developed an interactive procedure cost calculator and dynamic before/after case studies carousel.",
    "dbTables": [
      "consultations",
      "branches",
      "testimonials",
      "procedures"
    ],
    "skillsDemonstrated": [
      "Vite Build Architecture",
      "Interactive Pricing Calculator",
      "Component Composition"
    ],
    "liveDemo": "https://dental-clinic-care-5rxm.netlify.app",
    "netlifyUrl": "https://dental-clinic-care-5rxm.netlify.app",
    "github": "https://github.com/JeevananthanV/dental_clinic_2"
  },
  {
    "slug": "enterprise-lms",
    "title": "Enterprise LMS Portal",
    "description": "Scalable Learning Management System featuring course catalogs, student enrollment tracking, lesson progress, and quizzes.",
    "role": "Backend Architect & Full Stack",
    "bullets": [
      "Architected FastAPI microservices backend backed by PostgreSQL, MongoDB, and Redis caching",
      "Built course authoring studio allowing instructors to upload curriculum videos and modular lessons",
      "Designed student progress dashboard with quiz assessments and completion certificates"
    ],
    "tech": [
      "FastAPI",
      "Python",
      "React 18",
      "PostgreSQL",
      "Redis",
      "TypeScript"
    ],
    "featured": true,
    "theme": "Enterprise EdTech Platform",
    "colors": {
      "primary": "#4f46e5",
      "secondary": "#eef2ff",
      "accent": "#6366f1"
    },
    "heroImage": "/screenshots/enterprise-lms.png",
    "heroAnimation": "education-grid",
    "features": [
      "Curriculum Studio",
      "Interactive Quizzes",
      "Redis-Cached Progress",
      "Role-Based Access Control"
    ],
    "problem": "Corporate training pipelines were fragmented across third-party tools with no unified tracking or quiz assessment.",
    "solution": "Engineered a centralized, low-latency LMS powered by FastAPI and PostgreSQL with sub-50ms Redis-cached progress lookups.",
    "dbTables": [
      "users",
      "courses",
      "modules",
      "lessons",
      "enrollments",
      "quiz_submissions",
      "certificates"
    ],
    "skillsDemonstrated": [
      "FastAPI High-Performance Async APIs",
      "Relational Schema Normalization",
      "Redis Caching Strategy"
    ],
    "liveDemo": "https://enterprise-lms-portal.netlify.app",
    "netlifyUrl": "https://enterprise-lms-portal.netlify.app",
    "github": "https://github.com/JeevananthanV/enterprise-lms"
  },
  {
    "slug": "marathon-platform",
    "title": "Marathon Platform (Dockerized)",
    "description": "High-concurrency athletic marathon registration and runner tracking engine containerized with Docker and docker-compose.",
    "role": "DevOps & Cloud Engineer",
    "bullets": [
      "Containerized multi-service architecture including FastAPI backend, React client, and PostgreSQL database",
      "Configured automated database migration pipelines and environment variable secrets orchestration",
      "Benchmarked throughput to handle 5,000+ simultaneous registrations during marathon launch windows"
    ],
    "tech": [
      "Docker",
      "Docker Compose",
      "FastAPI",
      "React",
      "PostgreSQL"
    ],
    "featured": false,
    "theme": "Containerized Sports Infrastructure",
    "colors": {
      "primary": "#e11d48",
      "secondary": "#fff1f2",
      "accent": "#f43f5e"
    },
    "heroImage": "/screenshots/marathon-platform.png",
    "heroAnimation": "docker-flow",
    "features": [
      "One-Command Docker Compose",
      "Async Runner Ingestion",
      "Automated DB Migrations",
      "Load-Balanced API"
    ],
    "problem": "Manual host configurations led to environment drift and deployment bottlenecks across staging and production.",
    "solution": "Standardized infrastructure-as-code using Docker Compose, creating reproducible containerized environments.",
    "dbTables": [
      "runners",
      "categories",
      "orders",
      "timing_checkpoints"
    ],
    "skillsDemonstrated": [
      "Docker Multi-Stage Builds",
      "Container Networking",
      "Postgres Connection Pooling"
    ],
    "liveDemo": "https://marathon-platform-run.netlify.app",
    "netlifyUrl": "https://marathon-platform-run.netlify.app",
    "github": "https://github.com/JeevananthanV/marathon-platform"
  },
  {
    "slug": "marathon-event-one",
    "title": "StrideForge Marathon",
    "description": "Athletic event management platform with dynamic distance selection, runner medical waivers, and automated BIB generation.",
    "role": "Full Stack Developer",
    "bullets": [
      "Developed responsive registration flow with 5K, 10K, Half, and Full Marathon categories",
      "Implemented digital waiver agreement signing and emergency contact validations",
      "Connected live runner database with instant ticket confirmation downloads"
    ],
    "tech": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS"
    ],
    "featured": false,
    "theme": "Athletic Race Management",
    "colors": {
      "primary": "#ea580c",
      "secondary": "#fff7ed",
      "accent": "#f97316"
    },
    "heroImage": "/screenshots/marathon-event-one.png",
    "heroAnimation": "stride-slide",
    "features": [
      "Dynamic Distance Selectors",
      "Medical Waiver Signing",
      "Automated BIB Numbers",
      "Live Registrations Feed"
    ],
    "problem": "Marathon organizers struggled with physical paperwork and manual BIB number allocation on race day.",
    "solution": "Built a fully digital registration portal with automated sequential BIB generation and downloadable digital runner passes.",
    "dbTables": [
      "athletes",
      "race_bibs",
      "categories",
      "waivers"
    ],
    "skillsDemonstrated": [
      "Document Generation",
      "Form Validation Chains",
      "MongoDB Aggregation"
    ],
    "liveDemo": "https://marathon-event-one.netlify.app",
    "netlifyUrl": "https://marathon-event-one.netlify.app",
    "github": "https://github.com/JeevananthanV/marathon_event"
  },
  {
    "slug": "marathon-event-two",
    "title": "Run Beyond Limits 2026",
    "description": "Second edition marathon web portal featuring live countdown timer, elevation route charts, and sponsor showcases.",
    "role": "Frontend Architect",
    "bullets": [
      "Designed elevation profile visualization using SVG chart animations",
      "Integrated hydration point map with emergency ambulance dispatch stations",
      "Optimized load times with WebP asset compression and Vite bundling"
    ],
    "tech": [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Express.js"
    ],
    "featured": false,
    "theme": "Endurance Race Experience",
    "colors": {
      "primary": "#2563eb",
      "secondary": "#eff6ff",
      "accent": "#3b82f6"
    },
    "heroImage": "/screenshots/marathon-event-two.png",
    "heroAnimation": "route-map",
    "features": [
      "Elevation Profile Visualizer",
      "Hydration Point Waypoints",
      "Live Event Countdown",
      "Sponsor Logos Grid"
    ],
    "problem": "Runners lacked detailed route topology data, resulting in poor pacing and hydration planning during past marathons.",
    "solution": "Engineered interactive route topological maps indicating hydration stations, medical tents, and gradient changes.",
    "dbTables": [
      "race_routes",
      "waypoints",
      "sponsors"
    ],
    "skillsDemonstrated": [
      "SVG Data Visualization",
      "Vite Production Optimization",
      "Mobile-First UX"
    ],
    "liveDemo": "https://marathon-event-two.netlify.app",
    "netlifyUrl": "https://marathon-event-two.netlify.app",
    "github": "https://github.com/JeevananthanV/marathon_event_2"
  },
  {
    "slug": "marathon-event-three",
    "title": "Marathon Edition 3 (WhatsApp Bot)",
    "description": "Next-gen runner onboarding platform featuring an automated conversational WhatsApp Bot registration system and instant BIB simulator.",
    "role": "Full Stack & Automation Engineer",
    "bullets": [
      "Built automated conversational flow allowing runners to register via text messaging",
      "Developed instant digital runner pass preview with RFID timing chip allocation",
      "Created ultra-fast static landing page optimized for mobile edge networks"
    ],
    "tech": [
      "HTML5",
      "Modern CSS",
      "JavaScript",
      "WhatsApp API",
      "Tailwind CDN"
    ],
    "featured": false,
    "theme": "Conversational Automation & Race Portal",
    "colors": {
      "primary": "#0284c7",
      "secondary": "#f0f9ff",
      "accent": "#38bdf8"
    },
    "heroImage": "/screenshots/marathon-event-three.png",
    "heroAnimation": "bot-chat",
    "features": [
      "WhatsApp 24/7 Registration Bot",
      "Instant BIB #7704 Simulator",
      "Multi-Wave Staggered Start Info",
      "Zero-Wait Registration"
    ],
    "problem": "Lengthy web forms caused significant user drop-off on slow mobile connections.",
    "solution": "Integrated a friction-free WhatsApp conversational bot workflow where runners register by sending a single message.",
    "dbTables": [
      "bot_conversations",
      "runners",
      "bib_allocations"
    ],
    "skillsDemonstrated": [
      "Conversational UX Design",
      "WhatsApp Business API",
      "Edge-Optimized Static Architecture"
    ],
    "liveDemo": "https://marathon-event-three.netlify.app",
    "netlifyUrl": "https://marathon-event-three.netlify.app",
    "github": "https://github.com/JeevananthanV/marathon_event_3"
  },
  {
    "slug": "photo-studio-master",
    "title": "Photo Studio Master",
    "description": "Creative photography studio portfolio with dynamic masonry gallery, booking requests, and photo package customization.",
    "role": "Full Stack Developer",
    "bullets": [
      "Engineered masonry grid layout with fluid responsive image transitions",
      "Built photoshoot inquiry form with date-picker and customizable equipment add-ons",
      "Implemented RESTful backend in Express for client quote requests"
    ],
    "tech": [
      "React",
      "Next.js",
      "Express",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    "featured": false,
    "theme": "Creative Photography & Portfolio",
    "colors": {
      "primary": "#7c3aed",
      "secondary": "#faf5ff",
      "accent": "#8b5cf6"
    },
    "heroImage": "/screenshots/photo-studio-master.png",
    "heroAnimation": "masonry-fade",
    "features": [
      "Masonry Photo Grid",
      "Shooting Package Builder",
      "Client Inquiry Manager",
      "Equipment Checklist"
    ],
    "problem": "Photographers needed a high-performance visual catalog that highlights photography without slowing page loads.",
    "solution": "Implemented Next.js responsive image optimization with progressive blur placeholders and client inquiry management.",
    "dbTables": [
      "galleries",
      "bookings",
      "packages",
      "inquiries"
    ],
    "skillsDemonstrated": [
      "Image Asset Optimization",
      "Masonry CSS Grids",
      "Next.js Image Components"
    ],
    "liveDemo": "https://photo-studio-master.netlify.app",
    "netlifyUrl": "https://photo-studio-master.netlify.app",
    "github": "https://github.com/JeevananthanV/photo-studio"
  },
  {
    "slug": "photo-studio-creative",
    "title": "Photo Studio Creative Edition",
    "description": "Artistic photography showcase with GSAP scroll-triggered animations, interactive dark canvas, and high-fashion editorial layouts.",
    "role": "Creative Frontend Developer",
    "bullets": [
      "Integrated GSAP ScrollTrigger for smooth parallax transitions across high-resolution editorial collections",
      "Developed interactive dark room aesthetic with custom glowing cursor effects",
      "Secured 95+ Google Lighthouse performance score with strict Oxlint audits"
    ],
    "tech": [
      "React 18",
      "GSAP",
      "Vite",
      "Oxlint",
      "Tailwind CSS"
    ],
    "featured": false,
    "theme": "Editorial & Fashion Photography",
    "colors": {
      "primary": "#c026d3",
      "secondary": "#fdf4ff",
      "accent": "#d946ef"
    },
    "heroImage": "/screenshots/photo-studio-creative.png",
    "heroAnimation": "editorial-reveal",
    "features": [
      "GSAP ScrollTrigger Parallax",
      "Dark Room Aesthetic",
      "Oxlint Zero-Warning Build",
      "Full-Screen Lightbox"
    ],
    "problem": "High-end fashion clients expect interactive visual drama without sacrificing mobile frame rates.",
    "solution": "Crafted GPU-accelerated GSAP animations and optimized bundle chunking for a buttery-smooth 60fps experience.",
    "dbTables": [
      "collections",
      "lookbooks",
      "client_reviews"
    ],
    "skillsDemonstrated": [
      "GSAP Animation Timeline",
      "Hardware-Accelerated CSS",
      "Oxlint Code Quality"
    ],
    "liveDemo": "https://photo-studio-creative.netlify.app",
    "netlifyUrl": "https://photo-studio-creative.netlify.app",
    "github": "https://github.com/JeevananthanV/photo_studio_2"
  },
  {
    "slug": "sukra-app",
    "title": "Sukra Astrology & Planetary Portal",
    "description": "Sacred Vedic astrology calculation engine featuring real-time Shukra Hora calculation, Shukra Gayatri japa counter, and planetary wisdom.",
    "role": "Frontend Architect & Creator",
    "bullets": [
      "Developed real-time Shukra Hora calculator based on astronomical sunrise algorithms",
      "Engineered interactive 108-cycle Japa Counter with completion toasts and persistent state",
      "Designed gold-leaf sacred Vedic UI with Cinzel typography and glassmorphism styling"
    ],
    "tech": [
      "HTML5",
      "Modern JS",
      "Tailwind CSS",
      "Cinzel Typography"
    ],
    "featured": false,
    "theme": "Spiritual Media & Vedic Astronomical App",
    "colors": {
      "primary": "#c5a059",
      "secondary": "#fbf9f4",
      "accent": "#f7d070"
    },
    "heroImage": "/screenshots/sukra-app.png",
    "heroAnimation": "sacred-glow",
    "features": [
      "Real-Time Hora Calculator",
      "108 Japa Counter",
      "Gemstone & Direction Guide",
      "Vedic Mantras Display"
    ],
    "problem": "Devotees had to consult physical almanacs (Panchangams) to identify favorable planetary hours (Shukra Hora).",
    "solution": "Built a responsive, zero-install web app calculating daily Shukra Horas dynamically with interactive japa counting.",
    "dbTables": [
      "hora_schedules",
      "mantras",
      "astrological_attributes"
    ],
    "skillsDemonstrated": [
      "Vedic Calculation Algorithms",
      "Glassmorphic Design Tokens",
      "Pure Vanilla JS State Engine"
    ],
    "liveDemo": "https://sukra-app-portal.netlify.app",
    "netlifyUrl": "https://sukra-app-portal.netlify.app",
    "github": "https://github.com/JeevananthanV/sukra_app"
  },
  {
    "slug": "sukra-symbol-blog",
    "title": "Sukra Symbol & Mudras Blog",
    "description": "Vedic mudras and esoteric symbols spiritual blog with interactive posture guides, healing benefits, and sacred mantras.",
    "role": "Frontend Developer",
    "bullets": [
      "Crafted interactive mudra visual guide showcasing proper hand postures and energy channels",
      "Designed serene, readable typography layout optimized for long-form spiritual reading",
      "Built with React 18, Vite, and Lucide icons for ultra-lightweight delivery"
    ],
    "tech": [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Lucide React"
    ],
    "featured": false,
    "theme": "Spiritual Wellness & Mudras",
    "colors": {
      "primary": "#d97706",
      "secondary": "#fffbeb",
      "accent": "#f59e0b"
    },
    "heroImage": "/screenshots/sukra-symbol-blog.png",
    "heroAnimation": "mudra-flow",
    "features": [
      "Mudra Posture Guides",
      "Energy Meridian Charts",
      "Chakra Associations",
      "Responsive Article Cards"
    ],
    "problem": "Traditional mudra literature is dense and lacks visual step-by-step guidance for beginners.",
    "solution": "Designed a clean, modern digital portal with clear anatomical posture illustrations and healing benefits.",
    "dbTables": [
      "mudras",
      "articles",
      "chakras"
    ],
    "skillsDemonstrated": [
      "Editorial Typography",
      "Lucide Icon Integration",
      "Vite Static Generation"
    ],
    "liveDemo": "https://sukra-symbol-blog.netlify.app",
    "netlifyUrl": "https://sukra-symbol-blog.netlify.app",
    "github": "https://github.com/JeevananthanV/sukra_symbol_blog"
  },
  {
    "slug": "world-tourist-association",
    "title": "World Tourist Association",
    "description": "International eco-tourism and global heritage destination portal promoting sustainable exploration, cultural preservation, and bookings.",
    "role": "Frontend Engineer",
    "bullets": [
      "Engineered international destination catalog with eco-certification filters",
      "Designed responsive destination cards with regional climate indicators and best visit months",
      "Developed with React 18 and Vite with strict linting and accessible ARIA attributes"
    ],
    "tech": [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Oxlint"
    ],
    "featured": false,
    "theme": "Global Eco-Tourism & Travel",
    "colors": {
      "primary": "#059669",
      "secondary": "#ecfdf5",
      "accent": "#10b981"
    },
    "heroImage": "/screenshots/world-tourist-association.png",
    "heroAnimation": "globe-pan",
    "features": [
      "Global Destination Catalog",
      "Eco-Tourism Certification Filters",
      "Seasonality Indicator",
      "Curated Travel Guides"
    ],
    "problem": "Travelers seeking sustainable, community-first travel experiences struggled to find vetted destinations.",
    "solution": "Built a curated global association platform highlighting heritage preservation, certified eco-resorts, and cultural codes.",
    "dbTables": [
      "destinations",
      "eco_badges",
      "travel_guides"
    ],
    "skillsDemonstrated": [
      "Geographical Data Filtering",
      "Tailwind Color Palettes",
      "Vite Fast Refresh"
    ],
    "liveDemo": "https://world-tourist-association.netlify.app",
    "netlifyUrl": "https://world-tourist-association.netlify.app",
    "github": "https://github.com/JeevananthanV/world_tourist_association"
  },
  {
    "slug": "guru-ubadhesam-blog",
    "title": "Guru Ubadhesam Spiritual Blog",
    "description": "Vedic wisdom, Varahi temple history, and upasana philosophy blog featuring audio chant player and sacred scriptural commentaries.",
    "role": "Full Stack Developer",
    "bullets": [
      "Integrated audio streaming player for Vedic chants and Varahi Kavacham recitations",
      "Designed sacred bilingual (Tamil/English) typography hierarchy with temple photography",
      "Built with React 18, Vite, and responsive mobile-first navigation"
    ],
    "tech": [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Audio Player API"
    ],
    "featured": false,
    "theme": "Temple Upasana & Sacred Commentaries",
    "colors": {
      "primary": "#b91c1c",
      "secondary": "#fef2f2",
      "accent": "#ef4444"
    },
    "heroImage": "/screenshots/guru-ubadhesam-blog.png",
    "heroAnimation": "temple-reveal",
    "features": [
      "Audio Chanting Streamer",
      "Bilingual Scriptural Articles",
      "Varahi Temple History",
      "Event Calendar"
    ],
    "problem": "Spiritual seekers needed an authentic digital repository of Varahi upasana guidance and audio chants.",
    "solution": "Developed an audio-integrated digital portal documenting sacred mantras, festival dates, and commentary.",
    "dbTables": [
      "scriptures",
      "audio_tracks",
      "temple_festivals"
    ],
    "skillsDemonstrated": [
      "Audio Player Integration",
      "Bilingual Typography Design",
      "Vite Asset Management"
    ],
    "liveDemo": "https://guru-ubadhesam-blog.netlify.app",
    "netlifyUrl": "https://guru-ubadhesam-blog.netlify.app",
    "github": "https://github.com/JeevananthanV/guru_ubadhesam_blog"
  },
  {
    "slug": "guru-upadhesam",
    "title": "Guru Upadhesam Portal",
    "description": "Modern interactive spiritual education platform built on React 19 and Oxlint with student guidance modules.",
    "role": "Lead Frontend Engineer",
    "bullets": [
      "Engineered on cutting-edge React 19 with latest compiler features and Oxlint linting",
      "Designed modular lesson cards for spiritual philosophy study and meditation guides",
      "Optimized for high-speed edge delivery with Vite build pipeline"
    ],
    "tech": [
      "React 19",
      "Vite",
      "Oxlint",
      "Tailwind CSS"
    ],
    "featured": false,
    "theme": "Next-Gen Spiritual Learning",
    "colors": {
      "primary": "#d97706",
      "secondary": "#fffbeb",
      "accent": "#f59e0b"
    },
    "heroImage": "/screenshots/guru-upadhesam.png",
    "heroAnimation": "react19-card",
    "features": [
      "React 19 Concurrent Features",
      "Oxlint Zero-Warning Code",
      "Meditation Modules",
      "Philosophy Reader"
    ],
    "problem": "Legacy educational portals suffered from slow rendering and bloated frontend framework dependencies.",
    "solution": "Pioneered React 19 architecture delivering sub-second first contentful paint and modular meditation lessons.",
    "dbTables": [
      "lessons",
      "meditation_sessions",
      "discussions"
    ],
    "skillsDemonstrated": [
      "React 19 Architecture",
      "Oxlint Tooling",
      "Edge CDN Hosting"
    ],
    "liveDemo": "https://guru-upadhesam-portal.netlify.app",
    "netlifyUrl": "https://guru-upadhesam-portal.netlify.app",
    "github": "https://github.com/JeevananthanV/guru_upadhesam"
  },
  {
    "slug": "ojs-logistics",
    "title": "OJS Logistics & Cargo Global",
    "description": "Global logistics, freight forwarding, customs clearance, and supply chain tracking web portal with multimodal shipping calculators.",
    "role": "Full Stack Engineer",
    "bullets": [
      "Engineered international shipping inquiry forms for air freight, ocean cargo, and overland transport",
      "Developed cargo shipment tracking simulator and customs clearance documentation guides",
      "Optimized high-resolution transport fleet imagery and responsive client contact channels"
    ],
    "tech": [
      "HTML5",
      "Modern CSS",
      "JavaScript",
      "Web APIs",
      "Responsive Layouts"
    ],
    "featured": false,
    "theme": "Global Logistics & Freight Forwarding",
    "colors": {
      "primary": "#0369a1",
      "secondary": "#f0f9ff",
      "accent": "#0284c7"
    },
    "heroImage": "/screenshots/ojs-logistics.png",
    "heroAnimation": "cargo-flow",
    "features": [
      "Air & Ocean Freight Portals",
      "Customs Clearance Guides",
      "Consignment Rate Inquiries",
      "Fleet Gallery"
    ],
    "problem": "International clients faced confusing customs documentation and fragmented freight rate request processes.",
    "solution": "Built a centralized digital logistics hub with streamlined rate inquiry forms and multi-modal transit services.",
    "dbTables": [
      "freight_inquiries",
      "routes",
      "customs_checklists"
    ],
    "skillsDemonstrated": [
      "Multimodal Logistics UX",
      "Asset Optimization",
      "Responsive Modern CSS"
    ],
    "liveDemo": "https://ojs-research-journal.netlify.app",
    "netlifyUrl": "https://ojs-research-journal.netlify.app",
    "github": "https://github.com/JeevananthanV/ojs_new"
  }
]
