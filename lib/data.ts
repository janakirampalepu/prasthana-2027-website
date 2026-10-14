// All site content lives here (no backend yet). Items marked SAMPLE are placeholders
// to be replaced with real case studies, profiles and job openings.

export const company = {
  name: "Prasthana",
  legalName: "Prasthana Software Solutions Pvt Ltd",
  tagline: "Coding with Purpose & Precision",
  description:
    "We are a software application development company that builds technology to elevate your business's user experience.",
  email: "info@prasthana.com",
  address:
    "1-98/G/38, Plot No. 37 & 38, Serenity Square, Hitech City Madhapur Road, Hyderabad, Telangana 500081",
  // Opens Google Maps (or the Maps app on phones) with the office address searched.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Prasthana Software Solutions, Serenity Square, Madhapur Road, Hitech City, Hyderabad, Telangana 500081"),
  linkedin: "https://in.linkedin.com/company/prasthana-software-solutions-pvt-ltd",
  facebook: "https://www.facebook.com/prasthanasoftwaresolutions",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/technologies", label: "Technologies" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/engagement-models", label: "How We Work" },
  { href: "/team", label: "Team" },
  { href: "/leadership", label: "Leadership" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  points: string[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "web",
    title: "Web Application Development",
    icon: "Globe",
    blurb: "Fast, scalable web platforms and portals engineered around your users.",
    points: ["Product & portal engineering", "Design systems & UI engineering", "APIs & integrations", "Performance & SEO"],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    icon: "Smartphone",
    blurb: "Native and cross-platform apps that connect brands with their users.",
    points: ["SwiftUI & Jetpack Compose", "React Native & Flutter", "Offline-first & real-time", "Store release & maintenance"],
    accent: "from-cyan-400 to-sky-500",
  },
  {
    slug: "quality",
    title: "Quality Engineering",
    icon: "ShieldCheck",
    blurb: "Automation-first testing so every release ships with confidence.",
    points: ["Test automation frameworks", "API, performance & security testing", "Shift-left QA in CI", "Accessibility audits"],
    accent: "from-emerald-400 to-teal-500",
  },
  {
    slug: "devops",
    title: "Dev Ops",
    icon: "Infinity",
    blurb: "Pipelines, infrastructure and observability that keep delivery fast and safe.",
    points: ["CI/CD pipelines", "Cloud & containers", "Infrastructure as code", "Monitoring & reliability"],
    accent: "from-orange-400 to-rose-500",
  },
  {
    slug: "analytics",
    title: "Analytics",
    icon: "ChartNoAxesCombined",
    blurb: "Turn raw data into dashboards and decisions your teams actually use.",
    points: ["BI dashboards", "Data modelling & warehousing", "Power BI, Tableau, Superset", "Embedded analytics"],
    accent: "from-lime-400 to-green-500",
  },
  {
    slug: "ai",
    title: "BigData, Machine Learning & AI",
    icon: "BrainCircuit",
    blurb: "Data platforms, ML models and AI assistants that put your data to work.",
    points: ["Data pipelines at scale", "ML model development", "LLM apps & AI agents", "RAG & knowledge assistants"],
    accent: "from-amber-400 to-orange-500",
  },
];

export type TechGroup = { title: string; items: { name: string; note?: string }[] };

export const techGroups: TechGroup[] = [
  {
    title: "Web",
    items: [{ name: "Vue.js" }, { name: "Bootstrap" }, { name: "Angular" }, { name: "React" }],
  },
  {
    title: "Backend",
    items: [{ name: "Ruby on Rails" }, { name: "Node.js" }, { name: ".NET" }],
  },
  {
    title: "Mobile Apps",
    items: [
      { name: "SwiftUI", note: "Native iOS" },
      { name: "Jetpack Compose", note: "Native Android" },
      { name: "React Native" },
      { name: "Flutter" },
    ],
  },
  {
    title: "Databases",
    items: [{ name: "SQL Server" }, { name: "Postgres" }, { name: "MySQL" }, { name: "Oracle" }],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  short: string; // compact label for menus and the footer
  client: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string[];
  stack: string[];
  engagement: string;
  duration: string;
  accent: string;
};

// Client details are confidential: case studies describe our product engineering work only.
// The AI knowledge assistant entry is SAMPLE content.
export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-care-coordination",
    short: "Behavioral Health Platform",
    title: "Whole-person care platform for behavioral health",
    client: "Confidential",
    industry: "Healthcare",
    summary:
      "Product engineering for a care-enablement platform and mobile app serving people with complex behavioral, medical and social needs.",
    problem:
      "Serving populations with complex behavioral health, medical and social needs means coordinating outreach, enrollment, services and reporting across payers, providers and members, often in separate tools. Teams needed one secure platform that could identify who needs help, engage them early and keep care moving around the clock.",
    solution:
      "We engineered the product across web and mobile: risk stratification and assessment workflows, outreach and enrollment tooling, programmatic services with remote monitoring, and analytics and reporting for each stakeholder. A member-facing mobile app extends care beyond the clinic. Security and compliance were designed in from the start, in line with healthcare data requirements.",
    outcome: [
      "One platform from risk identification to ongoing care",
      "Member app available on iOS and Android",
      "Analytics and reporting for payers, providers and care teams",
      "Security-first engineering for sensitive health data",
    ],
    stack: ["Angular", "Ruby on Rails", "Postgres", "React Native"],
    engagement: "Dedicated product & engineering teams",
    duration: "Multi-year partnership",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "fitness-membership-platform",
    short: "Fitness Membership Platform",
    title: "Membership and booking platform for fitness clubs",
    client: "Confidential",
    industry: "Fitness & Wellness",
    summary:
      "Product engineering for fitness-center membership software: memberships, booking, billing and a branded member app.",
    problem:
      "Gyms, health clubs and franchise chains run on memberships, classes, personal training and recurring billing. Operators needed a single system that handled joins, upgrades, freezes and renewals across locations, while giving members a smooth way to book and manage everything from their phone.",
    solution:
      "We built core parts of the product: membership lifecycle management, class and personal-training scheduling, automated billing and collections, and a custom-branded member app, built once in Flutter for both iOS and Android, for booking, add-ons and plan management. We also built staff tools for check-ins and upsells, reporting dashboards, and integrations with access control, payments and point-of-sale systems.",
    outcome: [
      "Membership lifecycle managed across multiple locations",
      "Members book classes and manage plans from their phone",
      "Automated billing and collections",
      "Dashboards for occupancy, revenue and churn risk",
    ],
    stack: ["Flutter", ".NET", "SQL Server"],
    engagement: "Dedicated product & engineering teams",
    duration: "Multi-year partnership",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    slug: "racket-sports-community-app",
    short: "Racket Sports Community App",
    title: "Community app for racket sports players",
    client: "Confidential",
    industry: "Sports & Community",
    summary:
      "End-to-end product engineering of a mobile community app that brings racket sport players together.",
    problem:
      "Racket sport players often struggle to find partners, organise games and stay connected with their local community. The product needed to feel social, fast and simple enough to use right before a match.",
    solution:
      "We took the product from idea to launch: product and UX design, native iOS and Android apps, and the backend services behind them. The focus was a lightweight community experience that makes it easy for players to connect and get on court.",
    outcome: [
      "Idea to launched product on iOS and Android",
      "A simple, social experience built for players",
      "Scalable backend ready for community growth",
    ],
    stack: ["Native iOS", "Native Android", "Ruby on Rails", "Postgres"],
    engagement: "Dedicated product & engineering teams",
    duration: "Idea to launch",
    accent: "from-lime-400 to-green-500",
  },
  {
    slug: "api-security-platform",
    short: "API Security Platform",
    title: "API security and threat protection platform",
    client: "Confidential",
    industry: "Cybersecurity",
    summary:
      "Product engineering for an API security platform that discovers, monitors and protects APIs without changing customers' code or infrastructure.",
    problem:
      "Modern applications expose hundreds of APIs, and many of them are undocumented or forgotten. Security teams could not see which APIs existed, what data flowed through them or when behaviour turned risky, and could not afford a solution that added latency or required changes to application code.",
    solution:
      "We engineered the product's web experience on top of lightweight, non-intrusive data collection: automatic API discovery and inventory, including shadow and unreviewed APIs; views of how data moves through each API function and object; and anomaly and threat detection surfaced as clear, actionable insights for security teams.",
    outcome: [
      "Continuous discovery of known and unknown APIs",
      "Visibility into data risk at the API function and object level",
      "Anomaly and threat insights without code or platform changes",
      "No inline performance impact on customer applications",
    ],
    stack: ["Angular", "Node.js", "Postgres"],
    engagement: "Dedicated product & engineering teams",
    duration: "Multi-year partnership",
    accent: "from-rose-500 to-orange-500",
  },
  {
    slug: "digital-agency-engineering-partner",
    short: "Digital Agency Partnership",
    title: "Frontend and backend engineering partner for a digital agency",
    client: "Confidential",
    industry: "Digital Services",
    summary:
      "Extended engineering support, frontend and backend, for a digital growth agency building websites, automation and marketing funnels for its clients.",
    problem:
      "A digital agency serving small and mid-sized businesses needed to deliver fast, secure, search-friendly websites and automation for many clients at once. Demand for custom development outpaced its in-house capacity, and delivery quality and turnaround time had to stay consistent.",
    solution:
      "We became the agency's engineering partner. Our frontend engineers built responsive, fast-loading, SEO-friendly interfaces from design, while our backend engineers delivered the APIs, integrations and automation behind them. Shared standards, code reviews and a predictable release rhythm let the agency scale delivery without sacrificing quality.",
    outcome: [
      "Added frontend and backend capacity without hiring delays",
      "Fast, secure and SEO-friendly client websites",
      "Automation and integrations behind client workflows",
      "Consistent delivery across many parallel projects",
    ],
    stack: ["React", "Node.js", "Postgres"],
    engagement: "Dedicated product & engineering teams",
    duration: "Multi-year partnership",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    slug: "ai-knowledge-assistant",
    short: "AI Knowledge Assistant",
    title: "AI knowledge assistant for internal teams",
    client: "Confidential",
    industry: "Technology",
    summary: "A retrieval-augmented assistant that answers questions from internal documents.",
    problem: "Employees lost hours searching wikis, tickets and documents for answers.",
    solution:
      "We built a RAG assistant with permission-aware retrieval, citations and an evaluation harness to keep answers grounded.",
    outcome: ["Answers with source citations", "Permission-aware access", "Continuous quality evaluation"],
    stack: ["Angular", "Amazon Bedrock", "Python"],
    engagement: "Dedicated product & engineering teams",
    duration: "4 months",
    accent: "from-amber-400 to-orange-500",
  },
];

export type Profile = {
  slug: string;
  name: string;
  role: string;
  years: number;
  summary: string;
  stack: string[];
  projects: string[];
};

// SAMPLE content: replace with real reference profiles (with consent).
export const profiles: Profile[] = [
  {
    slug: "engineer-1",
    name: "Senior Full-Stack Engineer",
    role: "Tech Lead",
    years: 12,
    summary: "Leads web platform delivery from architecture to release.",
    stack: ["React", "Node.js", "Postgres", "AWS"],
    projects: ["Behavioral health care platform", "AI knowledge assistant"],
  },
  {
    slug: "engineer-2",
    name: "Mobile Engineering Engineer",
    role: "Mobile Lead",
    years: 9,
    summary: "Builds native and cross-platform apps with strong UX.",
    stack: ["SwiftUI", "Jetpack Compose", "Flutter", "React Native"],
    projects: ["Fitness membership platform", "Racket sports community app"],
  },
  {
    slug: "engineer-3",
    name: "Data & Analytics Architect",
    role: "Architect",
    years: 14,
    summary: "Designs warehouses, pipelines and BI for decision makers.",
    stack: ["SQL Server", "Oracle", "Power BI", "Apache Superset"],
    projects: ["Behavioral health care platform (analytics and reporting)"],
  },
  {
    slug: "engineer-4",
    name: "Quality & DevOps Engineer",
    role: "SDET / DevOps",
    years: 8,
    summary: "Automates testing and delivery pipelines end to end.",
    stack: ["Playwright", "GitHub Actions", "Docker", "Terraform"],
    projects: ["Release automation program", "Behavioral health care platform"],
  },
  {
    slug: "engineer-5",
    name: "Application Architect",
    role: "Architect",
    years: 15,
    summary: "Designs scalable, secure application architectures and guides teams from design to delivery.",
    stack: ["Microservices", "Angular", "Ruby on Rails", "Postgres"],
    projects: ["Behavioral health care platform", "API security platform"],
  },
  {
    slug: "engineer-6",
    name: "Product Manager",
    role: "Product Management",
    years: 10,
    summary: "Turns business goals into roadmaps and clear priorities that engineering teams can deliver.",
    stack: ["Roadmapping", "Jira", "Figma", "Product Analytics"],
    projects: ["Fitness membership platform", "Racket sports community app"],
  },
  {
    slug: "engineer-7",
    name: "Release Manager",
    role: "Release Management",
    years: 9,
    summary: "Plans and coordinates releases so every version ships on schedule with minimal risk.",
    stack: ["Jira", "GitHub Actions", "Azure DevOps", "Release Automation"],
    projects: ["Release automation program", "Fitness membership platform"],
  },
];

export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type?: string;
  experience?: string;
  about: string;
  responsibilities: string[];
};

// Openings follow https://www.prasthana.com/careers/. Per-role location, type and experience are
// not published there, so only what is stated is shown ("Experienced" where the source says so).
export const jobs: Job[] = [
  {
    slug: "ruby-on-rails-developer",
    title: "Ruby On Rails Developer",
    team: "Backend",
    location: "Hyderabad",
    about: "Build Ruby applications and collaborate on solid design and quality products.",
    responsibilities: [
      "Build Ruby applications, including back-end microservices, command-line utilities and data processing scripts",
      "Coordinate with teams working on other infrastructure layers",
      "Solve problems collaboratively and build quality products",
    ],
  },
  {
    slug: "front-end-developer",
    title: "Front-End Developer",
    team: "Web",
    location: "Hyderabad",
    about: "Build complete user interfaces and deliver a streamlined user experience with a young, passionate team.",
    responsibilities: [
      "Build complete user interfaces and connect software components",
      "Deliver a streamlined user experience",
      "Write a first-class codebase using best practices",
    ],
  },
  {
    slug: "dotnet-developer",
    title: ".Net Developer",
    team: "Backend",
    location: "Hyderabad",
    experience: "Experienced",
    about: "Design, develop and deploy applications while collaborating with teams across the stack.",
    responsibilities: [
      "Design, develop, code, customize, configure, test and deploy applications",
      "Coordinate with teams working on other infrastructure layers",
      "Solve problems collaboratively and build quality products",
    ],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    team: "Quality Engineering",
    location: "Hyderabad",
    about: "Help every release ship with quality. Flexible working, with a focus on timely, quality output.",
    responsibilities: [
      "Test products and help deliver quality releases on time",
      "Work flexibly, with a focus on timely, quality output",
    ],
  },
  {
    slug: "ios-developer",
    title: "iOS Developer",
    team: "Mobile",
    location: "Hyderabad",
    about: "Build iOS apps for our clients. Flexible working, with a focus on timely, quality output.",
    responsibilities: [
      "Build and ship iOS applications",
      "Work flexibly, with a focus on timely, quality output",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    team: "Product Management",
    location: "Hyderabad",
    experience: "Experienced",
    about: "Own products across their lifecycle, from requirements and vision to delivery.",
    responsibilities: [
      "Plan and execute products across their lifecycle",
      "Gather and prioritise requirements and define the product vision",
      "Work with engineering, sales, marketing and support",
      "Ensure the product supports company strategy",
    ],
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Years of engineering experience" },
  { value: 6, suffix: "", label: "Service practices" },
  { value: 20, suffix: "+", label: "Technologies mastered" },
  { value: 100, suffix: "%", label: "Commitment to quality" },
];

export const values = [
  { title: "Purpose", text: "Every line of code ties back to a business outcome for our client." },
  { title: "Precision", text: "Quality engineering and automation are built into delivery, not bolted on." },
  { title: "Growth", text: "We invest in engineers so they grow into experts, and clients feel it in the product." },
  { title: "Collaboration", text: "Streamlined workflows and open communication across every team." },
];

export const engagementModels = [
  { title: "Dedicated Team", text: "A long-term team that works as an extension of yours." },
  { title: "Fixed Scope", text: "Clear scope, plan and price for well-defined projects." },
  { title: "Time & Material", text: "Flexible capacity when scope evolves with learning." },
];

export type ServiceDetail = {
  headline: string;
  overview: string;
  offerings: { title: string; text: string }[];
  process: { title: string; text: string }[];
  tech: string[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  caseStudy?: string; // slug of a related case study
};

const standardProcess = [
  { title: "Discover", text: "Workshops to understand users, goals and constraints." },
  { title: "Design", text: "Architecture, UX and a clear delivery plan." },
  { title: "Build", text: "Iterative sprints with demos every two weeks." },
  { title: "Launch & Scale", text: "Release, monitor and keep improving." },
];

// SAMPLE content: dummy copy per service page, to be refined with real material.
export const serviceDetails: Record<string, ServiceDetail> = {
  web: {
    headline: "Web platforms that are fast, scalable and a pleasure to use.",
    overview:
      "From customer portals to complex line-of-business systems, we design and engineer web applications built to grow with your business.",
    offerings: [
      { title: "Product & portal engineering", text: "Customer, partner and admin portals with role-based access." },
      { title: "Frontend engineering", text: "React, Angular and Vue.js apps with accessible, design-system-driven UI." },
      { title: "Backend & APIs", text: "Ruby on Rails, Node.js and .NET services with clean, documented APIs." },
      { title: "Modernisation", text: "Move legacy applications to modern, maintainable architectures." },
    ],
    process: standardProcess,
    tech: ["React", "Angular", "Vue.js", "Bootstrap", "Ruby on Rails", "Node.js", ".NET", "Postgres"],
    deliverables: ["Production-ready web application", "API documentation", "Automated test suite", "CI/CD pipeline"],
    faqs: [
      { q: "Which framework should we choose?", a: "We recommend based on your team, product and hiring needs, and are comfortable with React, Angular and Vue.js." },
      { q: "Can you take over an existing codebase?", a: "Yes. We start with a short audit and agree a plan to stabilise and extend it." },
      { q: "How long does an MVP take?", a: "Typically 8 to 12 weeks, depending on scope." },
    ],
    caseStudy: "healthcare-care-coordination",
  },
  mobile: {
    headline: "Mobile apps your users keep coming back to.",
    overview:
      "Native or cross-platform, we build polished iOS and Android apps with great performance and reliable release practices.",
    offerings: [
      { title: "Native iOS", text: "SwiftUI apps that feel right at home on Apple devices." },
      { title: "Native Android", text: "Jetpack Compose apps with modern Android architecture." },
      { title: "Cross-platform", text: "React Native and Flutter for one codebase on both platforms." },
      { title: "App store delivery", text: "Release management, analytics and ongoing maintenance." },
    ],
    process: standardProcess,
    tech: ["SwiftUI", "Jetpack Compose", "React Native", "Flutter", "Node.js", "Firebase"],
    deliverables: ["iOS and Android apps", "Store listings and release", "Crash and analytics setup", "Maintenance plan"],
    faqs: [
      { q: "Native or cross-platform?", a: "Native suits platform-heavy experiences; cross-platform suits speed and shared code. We help you decide." },
      { q: "Do you handle app store submission?", a: "Yes, from developer accounts to review and release." },
      { q: "Can the app work offline?", a: "Yes, we design offline-first sync where it matters." },
    ],
    caseStudy: "fitness-membership-platform",
  },
  quality: {
    headline: "Ship every release with confidence.",
    overview:
      "Quality engineering is built into our delivery. We automate testing early so teams release faster with fewer surprises.",
    offerings: [
      { title: "Test automation", text: "UI and API automation frameworks that are stable and maintainable." },
      { title: "Performance testing", text: "Load and stress testing to find limits before your users do." },
      { title: "Security testing", text: "Vulnerability scans and checks aligned with common standards." },
      { title: "Accessibility audits", text: "Reviews against WCAG with practical fixes." },
    ],
    process: [
      { title: "Assess", text: "Review current test coverage, tools and release risk." },
      { title: "Strategy", text: "Define the test pyramid and quality gates." },
      { title: "Automate", text: "Build frameworks and integrate them into CI." },
      { title: "Improve", text: "Track metrics and tighten the feedback loop." },
    ],
    tech: ["Playwright", "Cypress", "Selenium", "Postman", "k6", "GitHub Actions"],
    deliverables: ["Automation framework", "CI quality gates", "Quality dashboards", "Test strategy document"],
    faqs: [
      { q: "Can you embed QA in our team?", a: "Yes, as dedicated engineers or as a managed QA practice." },
      { q: "What automation coverage should we target?", a: "We focus on high-value flows first rather than a blanket percentage." },
      { q: "Do you test mobile apps?", a: "Yes, on real devices and emulators." },
    ],
  },
  devops: {
    headline: "Pipelines and platforms that keep delivery fast and safe.",
    overview:
      "We automate how software is built, deployed and observed, so your teams spend time on product rather than plumbing.",
    offerings: [
      { title: "CI/CD pipelines", text: "Automated build, test and release workflows." },
      { title: "Cloud & containers", text: "Docker and Kubernetes on AWS, Azure or GCP." },
      { title: "Infrastructure as code", text: "Repeatable environments with Terraform." },
      { title: "Observability", text: "Logging, metrics and alerting that surface issues early." },
    ],
    process: [
      { title: "Audit", text: "Assess pipelines, environments and costs." },
      { title: "Design", text: "Target architecture and a migration plan." },
      { title: "Implement", text: "Build automation and migrate workloads." },
      { title: "Operate", text: "Monitor, tune and support." },
    ],
    tech: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps", "AWS", "Prometheus", "Grafana"],
    deliverables: ["CI/CD pipelines", "Infrastructure code", "Monitoring dashboards", "Runbooks"],
    faqs: [
      { q: "Which cloud do you support?", a: "AWS, Azure and GCP." },
      { q: "Can you reduce our cloud bill?", a: "Often yes, through right-sizing and architecture reviews." },
      { q: "Do you offer 24x7 support?", a: "Support models are tailored to your needs." },
    ],
  },
  analytics: {
    headline: "Turn raw data into decisions your teams use.",
    overview:
      "We build the data models and dashboards that give leaders a trusted, live view of the business.",
    offerings: [
      { title: "BI dashboards", text: "Interactive reports in Power BI, Tableau and Apache Superset." },
      { title: "Data warehousing", text: "Modelling on SQL Server, Postgres, Oracle and MySQL." },
      { title: "ETL & pipelines", text: "Reliable, automated data movement." },
      { title: "Embedded analytics", text: "Analytics inside your own product." },
    ],
    process: [
      { title: "Understand", text: "Define the questions that matter." },
      { title: "Model", text: "Design the data model and sources." },
      { title: "Visualise", text: "Build dashboards with your users." },
      { title: "Adopt", text: "Train teams and refine." },
    ],
    tech: ["Power BI", "Tableau", "Apache Superset", "SQL Server", "Postgres", "Oracle", "MySQL"],
    deliverables: ["Data model", "Dashboards", "Automated refresh pipelines", "User training"],
    faqs: [
      { q: "Which BI tool is best?", a: "It depends on your stack and budget; we work across the major tools." },
      { q: "Can you work with legacy data sources?", a: "Yes, including Oracle and SQL Server estates." },
      { q: "How do you ensure data quality?", a: "Validation checks are built into every pipeline." },
    ],
    caseStudy: "healthcare-care-coordination",
  },
  ai: {
    headline: "Put your data to work with ML and AI.",
    overview:
      "From scalable data platforms to LLM-powered assistants, we help you move from experiments to production AI.",
    offerings: [
      { title: "Big data platforms", text: "Pipelines and storage built for scale." },
      { title: "Machine learning", text: "Model development, evaluation and deployment." },
      { title: "LLM applications", text: "Assistants, agents and workflow automation." },
      { title: "RAG & knowledge search", text: "Grounded answers over your own documents." },
    ],
    process: [
      { title: "Frame", text: "Pick use cases with clear business value." },
      { title: "Prototype", text: "Prove feasibility quickly with real data." },
      { title: "Productionise", text: "Harden, evaluate and deploy." },
      { title: "Monitor", text: "Track quality, cost and drift." },
    ],
    tech: ["Python", "LLM APIs", "Vector search", "Postgres", "Apache Spark", "Next.js"],
    deliverables: ["Working AI prototype", "Evaluation harness", "Production deployment", "Monitoring and cost controls"],
    faqs: [
      { q: "Is our data safe?", a: "We design for permission-aware access and keep sensitive data within your boundaries." },
      { q: "How do you keep answers accurate?", a: "Retrieval grounding, citations and automated evaluation." },
      { q: "Where should we start?", a: "A short discovery to rank use cases by value and feasibility." },
    ],
    caseStudy: "ai-knowledge-assistant",
  },
};

// Add more office photos here (put files in /public). Portrait or landscape both work.
export const officePhotos = [
  { src: "/office-banner.jpg", alt: "Prasthana banner in our office: web, mobile apps, core data and AI, coding with purpose and precision", width: 720, height: 2000 },
];

// SAMPLE content: engagement models in detail. Review and adjust to how Prasthana really engages.
export const engagementDetails = [
  {
    slug: "dedicated-team",
    title: "Dedicated Team",
    tagline: "A long-term team that works as an extension of yours.",
    bestFor: "Products that evolve continuously",
    team: "Engineers, QA and a delivery lead, ramped to your needs",
    commercial: "Monthly fee per team member",
    flexibility: "High: scale the team up or down with notice",
    risk: "Shared: you steer priorities, we own delivery quality",
    points: [
      "You set priorities; we run day-to-day delivery",
      "Team stays with your product and builds deep context",
      "Fastest path to a stable, high-velocity team",
    ],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "fixed-scope",
    title: "Fixed Scope",
    tagline: "Clear scope, plan and price for well-defined projects.",
    bestFor: "Projects with a clear scope and deadline",
    team: "Cross-functional project team led by a delivery manager",
    commercial: "Fixed price per agreed milestone",
    flexibility: "Medium: changes are handled through change requests",
    risk: "Mostly ours: we commit to scope, timeline and cost",
    points: [
      "Detailed scope, milestones and acceptance criteria up front",
      "Predictable budget and delivery date",
      "Change requests keep surprises visible and agreed",
    ],
    accent: "from-cyan-400 to-sky-500",
  },
  {
    slug: "time-and-material",
    title: "Time & Material",
    tagline: "Flexible capacity when scope evolves with learning.",
    bestFor: "Early-stage products and evolving requirements",
    team: "Right-sized team that changes as the work does",
    commercial: "Billed on actual effort at agreed rates",
    flexibility: "Very high: re-prioritise every sprint",
    risk: "Shared: transparent reporting keeps spend predictable",
    points: [
      "Start quickly with a minimal plan and learn as you go",
      "Pay for the effort you use, with monthly caps if needed",
      "Regular reviews to keep budget and scope aligned",
    ],
    accent: "from-lime-400 to-green-500",
  },
];

export const engagementCompare = [
  { label: "Best for", key: "bestFor" },
  { label: "Team", key: "team" },
  { label: "Commercials", key: "commercial" },
  { label: "Flexibility", key: "flexibility" },
  { label: "Risk", key: "risk" },
] as const;

export const engagementPractices = [
  { title: "Onboard", text: "Kick-off, access, working agreements and a clear 30-day plan." },
  { title: "Plan", text: "Roadmap and sprint planning, with priorities set together." },
  { title: "Deliver", text: "Two-week sprints with working software demonstrated at the end of each." },
  { title: "Review", text: "Weekly status, monthly steering review and quarterly health checks." },
  { title: "Improve", text: "Retrospectives and metrics that drive continuous improvement." },
];

export const engagementPrinciples = [
  { title: "Transparent", text: "You see the same boards, metrics and risks that we do." },
  { title: "Accountable", text: "A named delivery lead and a clear escalation path on every engagement." },
  { title: "Secure by default", text: "NDA, access controls and secure development practices from day one." },
  { title: "Easy to start, easy to adjust", text: "Begin small, then scale the team or change the model as needs change." },
];

export type Leader = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  years?: number;
  expertise?: string[];
  background?: string[];
};

// Names and roles were provided by Prasthana. Descriptions are role-based and generic:
// replace with real bios, years of experience, expertise and photos.
export const leadership: Leader[] = [
  {
    slug: "raghav-gangaraju",
    name: "Raghav Gangaraju",
    title: "Chief Executive Officer",
    summary: "Leads Prasthana's vision, strategy and client partnerships, and oversees day-to-day operations and governance.",
  },
  {
    slug: "harish-tadikamalla",
    name: "Harish Tadikamalla",
    title: "Senior Product Manager",
    summary: "Owns product strategy and roadmaps, turning client goals into clear priorities that engineering teams can deliver.",
  },
  {
    slug: "sagar-kshetri",
    name: "Sagar Kshetri",
    title: "Senior Manager, Development",
    summary: "Guides development teams and technical decisions, mentoring engineers across backend projects.",
  },
  {
    slug: "janakiram-palepu",
    name: "Janakiram Palepu",
    title: "Senior Manager, Development",
    summary: "Guides development teams and technical decisions, mentoring engineers across web and mobile projects.",
  },
  {
    slug: "narasimha-charya-vedagopuram",
    name: "Narasimha Charya Vedagopuram",
    title: "Delivery Manager",
    summary: "Keeps engagements on track, managing plans, risks and communication for predictable delivery.",
  },
];

// SAMPLE content: careers page "how we invest in people".
export const peoplePrograms = [
  { title: "Learning & certifications", text: "Time and budget for courses, certifications and conferences." },
  { title: "Mentoring", text: "Every engineer is paired with a mentor and a clear growth plan." },
  { title: "Career paths", text: "Grow as an expert or into leadership, with transparent levels and reviews." },
  { title: "Tech talks & guilds", text: "Regular sessions across web, mobile, data, quality and AI." },
  { title: "Health & well-being", text: "Health cover and flexibility that respects life outside work." },
  { title: "Recognition", text: "Celebrating great work, client wins and long-term contributions." },
];

export const hiringProcess = [
  { title: "Apply", text: "Send your resume for an open role or write to us about your interests." },
  { title: "Intro chat", text: "A conversation about your experience, goals and what you want next." },
  { title: "Technical discussion", text: "Hands-on discussion with the engineers you would work with." },
  { title: "Culture & fit", text: "Meet leadership to talk about values, growth and expectations." },
  { title: "Offer", text: "A clear offer and a structured onboarding plan." },
];
