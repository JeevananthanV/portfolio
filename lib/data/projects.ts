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
  gallery?: Array<{ id: number; title: string; aspect: string }>
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
    heroImage: "gradient-fashion",
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
      { id: 1, title: "Hero Screen", aspect: "16/9" },
      { id: 2, title: "Dashboard", aspect: "4/3" },
      { id: 3, title: "Registration", aspect: "3/4" },
      { id: 4, title: "Event List", aspect: "1/1" },
      { id: 5, title: "Vendor Portal", aspect: "16/9" },
      { id: 6, title: "Analytics", aspect: "4/3" },
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
    heroImage: "gradient-social",
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
      { id: 1, title: "Discovery Feed", aspect: "16/9" },
      { id: 2, title: "Influencer Profile", aspect: "4/3" },
      { id: 3, title: "Campaign Board", aspect: "3/4" },
      { id: 4, title: "Analytics", aspect: "1/1" },
      { id: 5, title: "Messages", aspect: "16/9" },
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
    title: "Kottai Varahi Temple",
    description: "A cultural heritage website dedicated to the Kottai Varahi temple, serving pilgrims and visitors.",
    role: "Web Developer",
    bullets: [
      "Developed a responsive temple website with event calendar and donation system",
      "Implemented virtual tour feature with 360-degree image viewer",
      "Integrated PDF accessibility features for religious documents",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PDF Accessibility", "Tailwind CSS"],
    featured: false,
    theme: "Temple",
    colors: { primary: "#4a0404", secondary: "#d4af37", accent: "#f5f5dc" },
    heroImage: "gradient-temple",
    heroAnimation: "sunrise",
    features: [
      "Temple Information",
      "Daily Pooja Schedule",
      "Festivals",
      "Online Donations",
      "Pooja Booking",
      "Payment Gateway",
    ],
    problem:
      "Devotees had no centralized way to access temple information, book poojas, or make donations online.",
    solution:
      "A comprehensive temple management website with event scheduling, donation processing, and admin dashboard.",
    dbTables: ["Devotees", "Donations", "Bookings", "Events", "Gallery", "Admin"],
    skillsDemonstrated: [
      "Payment Gateway Integration",
      "Secure Backend APIs",
      "React Dashboard",
      "Database Relationships",
      "Authentication",
      "Role-Based Access",
    ],
    gallery: [
      { id: 1, title: "Temple Front", aspect: "16/9" },
      { id: 2, title: "Pooja Hall", aspect: "4/3" },
      { id: 3, title: "Festival Crowd", aspect: "3/4" },
      { id: 4, title: "Donation Wall", aspect: "1/1" },
      { id: 5, title: "Calendar", aspect: "16/9" },
    ],
    testimonials: [
      { quote: "The temple website brought our community closer, even those abroad can now participate in festivals.", author: "Priya R.", role: "Temple Committee" },
      { quote: "Donation tracking and transparency gave devotees immense confidence.", author: "Arun K.", role: "Volunteer" },
      { quote: "The virtual tour feature helped elderly devotees explore the temple from home.", author: "Meena S.", role: "Devotee" },
    ],
    devJourney: [
      { week: "Week 1", task: "Research", description: "Studied temple workflow and devotee needs." },
      { week: "Week 2", task: "UI Design", description: "Created warm, spiritual design with traditional motifs." },
      { week: "Week 3", task: "Backend", description: "Built donation and booking systems with payment gateway." },
      { week: "Week 4", task: "Testing", description: "Tested across devices used by elderly devotees." },
      { week: "Week 5", task: "Deployment", description: "Launched with offline PDF access for religious docs." },
    ],
    challenges: [
      { title: "Accessibility for Elderly Users", problem: "Many devotees are elderly with limited digital literacy.", solution: "Large touch targets, simple navigation, and offline PDFs.", outcome: "95% positive feedback from senior users." },
      { title: "Payment Trust", problem: "Devotees hesitated to donate online.", solution: "Added transaction confirmations and admin transparency.", outcome: "Donation volume increased 3x in first month." },
      { title: "Multilingual Content", problem: "Temple content needed Tamil and English support.", solution: "Built i18n layer with dynamic content switching.", outcome: "Serves both local and diaspora communities." },
    ],
    stats: [
      { value: "10", suffix: "k+", label: "Monthly Visitors" },
      { value: "3", suffix: "x", label: "Donation Growth" },
      { value: "95", suffix: "%", label: "Satisfaction" },
    ],
    liveDemo: "https://kottai-varahi.vercel.app",
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
    heroImage: "gradient-creative",
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
      { id: 1, title: "Brand Identity", aspect: "1/1" },
      { id: 2, title: "Web Design", aspect: "16/9" },
      { id: 3, title: "App UI", aspect: "4/3" },
      { id: 4, title: "Marketing Kit", aspect: "3/4" },
      { id: 5, title: "Motion Graphics", aspect: "16/9" },
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
    heroImage: "gradient-corporate",
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
      { id: 1, title: "Headquarters", aspect: "16/9" },
      { id: 2, title: "Manufacturing", aspect: "4/3" },
      { id: 3, title: "Team", aspect: "3/4" },
      { id: 4, title: "Infrastructure", aspect: "1/1" },
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
    heroImage: "gradient-travel",
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
      { id: 1, title: "Package Card", aspect: "4/3" },
      { id: 2, title: "Route Map", aspect: "16/9" },
      { id: 3, title: "Vehicle Fleet", aspect: "3/4" },
      { id: 4, title: "Booking Flow", aspect: "1/1" },
      { id: 5, title: "Admin Panel", aspect: "16/9" },
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
    heroImage: "gradient-nature",
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
      { id: 1, title: "Wildlife", aspect: "16/9" },
      { id: 2, title: "Hill Station", aspect: "4/3" },
      { id: 3, title: "Waterfall", aspect: "3/4" },
      { id: 4, title: "Forest Trail", aspect: "1/1" },
      { id: 5, title: "Bird Watching", aspect: "16/9" },
      { id: 6, title: "Camping", aspect: "4/3" },
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
]
