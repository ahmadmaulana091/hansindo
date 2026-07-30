import { ServiceItem, ProjectItem, TestimonialItem, ClientLogo, TimelineEvent } from "@/types";

export const COMPANY_INFO = {
  name: "HANSINDO LOGISTIK",
  fullName: "PT. HANSINDO BERKAT JAYA LOGISTIK",
  tagline: "Trusted Logistics Service Provider Covering All of Indonesia",
  description: "Hansindo Berkat Jaya Logistik is a logistics service provider covering all of Indonesia. Established in 2019 and headquartered at Kencana Tower, Mezzanine Floor No. 88, West Jakarta, our company focuses on providing transportation for our clients. We are dedicated to maintaining service quality and becoming your trusted logistics partner.",
  descriptionParagraph2: "We are consistent in providing transportation and cargo delivery services across domestic areas, supported by a professional and experienced team, particularly in handling Export and Import cargo.",
  established: "2019",
  headquarters: "Kencana Tower, Mezzanine Floor No. 88, West Jakarta, Indonesia",
  phone: "+62 21 5890 8888",
  email: "info@hansindologistik.co.id",
  address: "Kencana Tower, Mezzanine Floor No. 88, West Jakarta, Indonesia",
  stats: [
    { label: "Domestic Coverage", value: 100, suffix: "%" },
    { label: "Shipments Delivered", value: 5000, suffix: "+" },
    { label: "Experienced Team", value: 150, suffix: "+" },
    { label: "Domestic & Int'l Ports", value: 45, suffix: "+" },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "project-cargo",
    title: "Project Cargo",
    shortDesc: "Layanan pengiriman kargo proyek skala besar dengan perencanaan rute khusus dan penanganan profesional untuk muatan non-standar.",
    fullDesc: "Hansindo Logistik menyediakan layanan Project Cargo yang mencakup perencanaan pengiriman end-to-end untuk muatan oversize, oversized, dan high-value. Kami mengelola seluruh aspek mulai dari survei rute, perizinan, pengiriman darat, hingga koordinasi di pelabuhan untuk memastikan muatan tiba dengan aman dan tepat waktu.",
    iconName: "Truck",
    features: [
      "Pengiriman kargo proyek skala besar",
      "Perencanaan rute & survei jalur khusus",
      "Penanganan muatan oversize & oversized",
      "Koordinasi pelabuhan & customs clearance",
      "Pengiriman domestik & internasional",
    ],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "heavy-lift-load",
    title: "Heavy Lift Load",
    shortDesc: "Solusi angkutan muatan berat dengan armada truk dan alat berat berkapasitas tinggi untuk berbagai jenis kargo industri.",
    fullDesc: "Divisi Heavy Lift Load Hansindo Logistik mengkhususkan diri dalam pengangkutan muatan berat yang membutuhkan penanganan teknis khusus. Dengan armada kendaraan heavy-duty dan tim berpengalaman, kami siap mengangkut peralatan industri, mesin pabrik, modul konstruksi, dan kargo berat lainnya di seluruh Indonesia.",
    iconName: "Container",
    features: [
      "Angkutan muatan berat (heavy cargo)",
      "Armada truk heavy-duty berkapasitas tinggi",
      "Penanganan peralatan & mesin industri",
      "Pengiriman modul konstruksi & pabrik",
      "Layanan pengiriman ekspor & impor",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
  },

];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-1",
    title: "Natuna Offshore Platform Towage & Positioning",
    category: "offshore",
    categoryLabel: "Offshore Engineering",
    client: "Pertamina Hulu Energy",
    year: "2025",
    location: "Natuna Sea, Indonesia",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    description: "Successful trans-oceanic towage of a 12,000-tonne central processing platform using 3 DP2 AHTS vessels with precision dynamic positioning setup.",
    stats: [
      { label: "Tonnage", value: "12,000 MT" },
      { label: "Duration", value: "45 Days" },
      { label: "Safety", value: "Zero LTI" },
    ],
  },
  {
    id: "project-2",
    title: "Subsea Pipeline Inspection & ROV Maintenance",
    category: "engineering",
    categoryLabel: "Subsea & ROV",
    client: "Chevron Pacific Indonesia",
    year: "2024",
    location: "Mahakam Delta, East Kalimantan",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
    description: "Deepwater subsea pipeline survey and cathodic protection replacement spanning 180 km of offshore pipeline infrastructure.",
    stats: [
      { label: "Pipeline Length", value: "180 km" },
      { label: "Depth", value: "350 m" },
      { label: "Accuracy", value: "99.9%" },
    ],
  },
  {
    id: "project-3",
    title: "Batang Modular Power Plant Heavy Transport",
    category: "logistics",
    categoryLabel: "Heavy Lift Logistics",
    client: "Adaro Energy & Sumitomo Corp",
    year: "2024",
    location: "Central Java, Indonesia",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
    description: "Complex barge transport and beach landing operation for 14 super-heavy generator modules weighing up to 850 MT each.",
    stats: [
      { label: "Max Unit Weight", value: "850 MT" },
      { label: "Units Cargo", value: "14 Modules" },
      { label: "Efficiency", value: "100% On-Time" },
    ],
  },
  {
    id: "project-4",
    title: "Strait of Malacca Escort & Bunkering Fleet",
    category: "maritime",
    categoryLabel: "Maritime Logistics",
    client: "Wilhelmsen Ship Management",
    year: "2025",
    location: "Strait of Malacca",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
    description: "Round-the-clock security escort, harbor tug support, and offshore refueling operations for international container vessel traffic.",
    stats: [
      { label: "Vessels Escorted", value: "120+" },
      { label: "Bunker Volume", value: "45,000 MT" },
      { label: "Response Time", value: "< 15 Mins" },
    ],
  },
  {
    id: "project-5",
    title: "FPSO Seamoor Mooring System Installation",
    category: "offshore",
    categoryLabel: "Offshore Engineering",
    client: "ENI Indonesia",
    year: "2023",
    location: "Kutei Basin, Indonesia",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    description: "Pre-laying of 12-point anchor mooring lines for deepwater FPSO deployment in challenging sea state conditions.",
    stats: [
      { label: "Water Depth", value: "950 m" },
      { label: "Anchor Holding", value: "1,200 MT" },
      { label: "Duration", value: "30 Days" },
    ],
  },
  {
    id: "project-6",
    title: "Tanjung Priok Container Terminal Port Logistics",
    category: "logistics",
    categoryLabel: "Port Operations",
    client: "Pelindo Maritime Services",
    year: "2025",
    location: "Jakarta, Indonesia",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    description: "Comprehensive stevedoring, customs clearance, and intermodal transport for global shipping lines.",
    stats: [
      { label: "TEUs Managed", value: "250,000+" },
      { label: "Downtime", value: "0.01%" },
      { label: "Rating", value: "5/5 Star" },
    ],
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "c1", name: "PERTAMINA", logoText: "PERTAMINA", subtext: "Integrated Energy Leader" },
  { id: "c2", name: "CHEVRON", logoText: "CHEVRON", subtext: "Global Energy Operational Partner" },
  { id: "c3", name: "BP INDONESIA", logoText: "BP ENERGY", subtext: "Offshore Exploration" },
  { id: "c4", name: "SHELL", logoText: "SHELL MARIME", subtext: "International Fuel & Logistics" },
  { id: "c5", name: "PELINDO", logoText: "PELINDO", subtext: "Indonesia Port Corporation" },
  { id: "c6", name: "ADARO", logoText: "ADARO ENERGY", subtext: "Industrial Power Logistics" },
  { id: "c7", name: "ENI", logoText: "ENI INDONESIA", subtext: "Deepwater Exploration" },
  { id: "c8", name: "MEDCO ENERGI", logoText: "MEDCO ENERGI", subtext: "Oil & Gas Operations" },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Hansindo's vessel chartering and offshore support team executed our deepwater platform towage with absolute precision. Their commitment to HSE standards and zero-LTI track record is unparalleled in Southeast Asia.",
    name: "Bambang Suhendra",
    role: "VP Offshore Operations",
    company: "Pertamina Hulu Energy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    rating: 5,
  },
  {
    id: "t2",
    quote: "When we needed high-capacity AHTS vessels on short notice for the Natuna campaign, Hansindo delivered top-tier Class-certified vessels equipped with DP2 capabilities ahead of schedule.",
    name: "Marcus Vance",
    role: "Global Marine Logistics Manager",
    company: "Chevron Asia Pacific",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    rating: 5,
  },
  {
    id: "t3",
    quote: "The engineering team at Hansindo provided vital loadout simulations and MWS oversight for our heavy power modules. They are our trusted long-term maritime logistics partner.",
    name: "Siti Rahmania",
    role: "Director of Supply Chain",
    company: "Adaro Power Infrastructure",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    rating: 5,
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  { year: "2008", title: "Company Establishment", description: "Hansindo founded in Jakarta as a vessel agency and tugboat chartering operator." },
  { year: "2012", title: "Offshore Fleet Expansion", description: "Acquired first DP2 AHTS vessels and launched offshore oil & gas support division." },
  { year: "2017", title: "Subsea & ROV Division", description: "Established subsea survey and underwater engineering capabilities for deepwater projects." },
  { year: "2021", title: "Regional Logistics Hubs", description: "Opened operational bases in Balikpapan, Batam, and Sorong to serve pan-Indonesia clients." },
  { year: "2025", title: "Global Expansion & ESG Focus", description: "Transitioned fleet to eco-fuel technology and expanded operations across APAC and Middle East." },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Users",
    title: "Professional Team",
    desc: "Over 450 Master Mariners, Marine Engineers, and DP Specialists with international offshore certification.",
  },
  {
    icon: "Award",
    title: "ISO & Class Certified",
    desc: "Fully audited under ISO 9001, ISO 14001, ISO 45001, and ABS/DNV/BKI Classification Societies.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality Assurance",
    desc: "Rigorous IMCA OVID/OVMSA compliant maintenance management ensuring 99.8% vessel availability.",
  },
  {
    icon: "HardHat",
    title: "Safety First (HSE)",
    desc: "Industry-leading Safety Performance with 5 consecutive years of Zero Lost Time Injury (LTI).",
  },
  {
    icon: "Zap",
    title: "Marine Innovation",
    desc: "Real-time vessel tracking, telemetry monitoring, and smart fuel management systems.",
  },
  {
    icon: "Clock",
    title: "24/7 Global Support",
    desc: "Dedicated operations control center monitoring marine logistics and emergency response round-the-clock.",
  },
];
