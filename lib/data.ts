import { ServiceItem, ProjectItem, TestimonialItem, ClientLogo, TimelineEvent } from "@/types";

export const COMPANY_INFO = {
  name: "HANSINDO LOGISTIK",
  fullName: "PT. HANSINDO BERKAT JAYA LOGISTIK",
  tagline: "Trusted Logistics Service Provider Covering All of Indonesia",
  description: "Hansindo Berkat Jaya Logistik is a logistics service provider covering all of Indonesia. Established in 2019 and headquartered at Kencana Tower, Mezzanine Floor No. 88, West Jakarta, our company focuses on providing transportation for our clients. We are dedicated to maintaining service quality and becoming your trusted logistics partner.",
  descriptionParagraph2: "We are consistent in providing transportation and cargo delivery services across domestic areas, supported by a professional and experienced team, particularly in handling Export and Import cargo.",
  established: "2019",
  headquarters: "Kencana Tower, Mezzanine Floor No. 88, West Jakarta, Indonesia",
  phone: "021-29601481",
  whatsappNumber: "+62 819-4959-7957",
  whatsappUrl: "https://wa.me/6281949597957?text=Hello%20PT.%20Hansindo%20Berkat%20Jaya%20Logistik,%20I%20would%20like%20to%20consult%20about%20logistics%20services",
  email: "info@hansindologistik.com",
  address: "Kencana Tower, Mezzanine Floor No. 88, West Jakarta, Indonesia",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "project-cargo",
    title: "Project Cargo",
    tagline: "Specialized Heavy Lift & Industrial Cargo Transportation",
    badge: "Heavy Cargo & Industrial",
    shortDesc: "Large-scale project cargo delivery with specialized route planning and professional handling for non-standard loads.",
    fullDesc: "Expert Project Cargo Solutions: Seamless, secure, and reliable transportation of heavy steel products (slabs, blooms, billets, and plates), industrial machinery, and oversized power equipment across Indonesia.",
    iconName: "Truck",
    image: "/images/content/truk_putih_loading_warehouse.png",
    gallery: [
      {
        src: "/images/content/truk_putih_loading_warehouse.png",
        alt: "Warehouse Cargo Loading",
        caption: "",
      },
      {
        src: "/images/content/cargo_loading_plat.jpeg",
        alt: "Heavy Steel Plate Loading",
        caption: "",
      },
      {
        src: "/images/content/truk_putih_lift_load.png",
        alt: "Crane Heavy Lift Operation",
        caption: "",
      },
      {
        src: "/images/content/cargo_loading.png",
        alt: "Safety Lashing & Rigging",
        caption: "",
        position: "object-[center_65%]",
      },
      {
        src: "/images/content/truk_putih_loading.png",
        alt: "Fleet Preparation",
        caption: "",
      },
    ],
    features: [
      "Large-scale project cargo shipments",
      "Custom route planning & feasibility survey",
      "Oversized & overweight cargo handling",
      "Port coordination & customs clearance",
      "Domestic & inter-island freight delivery",
    ],
  },
  {
    id: "project-container",
    title: "Project Container",
    tagline: "Container Transport, Port Drayage & Depot Logistics",
    badge: "Container Logistics",
    shortDesc: "Reliable container transport (FCL/LCL) with professional handling and port drayage coordination across Indonesia.",
    fullDesc: "Integrated Container Logistics Solutions: Delivering safe, reliable, and time-critical container transportation, port drayage, and depot management services tailored for industrial supply chains.",
    iconName: "Container",
    image: "/images/content/truk_putih_loading_cargo.png",
    gallery: [
      {
        src: "/images/content/truk_putih_loading_cargo.png",
        alt: "Container Trailer Fleet",
        caption: "",
      },
      {
        src: "/images/content/container_jalan.png",
        alt: "Container Truck on Highway",
        caption: "",
      },
      {
        src: "/images/content/container_loading.png",
        alt: "Port Crane Container Loading",
        caption: "",
        position: "object-[center_65%]",
      },
      {
        src: "/images/content/container_parkir.png",
        alt: "Container Depot Yard",
        caption: "",
        position: "object-[center_90%]",
      },
    ],
    features: [
      "20ft & 40ft Container transport services (FCL / LCL)",
      "High-capacity heavy-duty trailer fleet",
      "Industrial equipment & machinery handling",
      "Construction & factory module delivery",
      "Export & import shipment services (Port to Factory)",
    ],
  },
];

