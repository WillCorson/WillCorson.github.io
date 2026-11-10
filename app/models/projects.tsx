import type Project from "./project";

export const PROJECTS: Project[] =[
  {
    id: "3d-modeled-prop-swords",
    title: "3D Modeled Prop Swords",
    year: "2025",
    category: "3D Printing & Design",
    description: "A centralized dashboard for monitoring cloud infrastructure security posture. Implements RBAC and real-time threat detection using AWS GuardDuty integration.",
    tech:["Next.js", "TypeScript", "AWS", "Tailwind"],
    links: { demo: "#" },
    displayFiles:["/STL/EnmaExploded.stl", "/STL/EnmaGuardHole.stl", "/STL/FrierenStaff.stl", "/STL/hornets.stl", "/STL/trueShikaiQuincy.stl", "/STL/trueShikaiQuincyExploded.stl"],
    stlCarousel: true
  },
  {
    id: "custom-childrens-ear-molds",
    title: "Custom Childrens Ear Molds",
    year: "2025",
    category: "Design & Prototyping",
    description: "Developed a lightweight mutual authentication protocol for resource-constrained IoT devices, reducing handshake latency by 40% compared to standard TLS.",
    tech:["C++", "Python", "MQTT", "Raspberry Pi"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "custom-syringe-cap",
    title: "Custom Syringe Cap",
    year: "2025",
    category: "Design & Automation",
    description: "Refactored a monolithic legacy application into scalable microservices using Docker and Kubernetes. Improved system uptime to 99.9%.",
    tech:["Go", "Docker", "Kubernetes", "PostgreSQL"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "stethoscope-teaching-kit",
    title: "Stethoscope Teaching Kit",
    year: "2025",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech:["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "coverslip-holder",
    title: "Coverslip Holder",
    year: "2025",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "3d-printed-pvc-staff-prop",
    title: "3D Printed PVC Staff Prop",
    year: "2024",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "laser-cut-lake-erie-islands-map",
    title: "Laser Cut Lake Erie Islands Topographical Map",
    year: "2024",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "brainwave-reactive-sword",
    title: "Brainwave Reactive Sword",
    year: "2023",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "transforming-nerf-gun",
    title: "Functioning Transforming Nerf Gun",
    year: "2023",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "3d-modeled-bike-assembly",
    title: "3d Modeled Bike Assembly",
    year: "2022",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "lego-ev3-project-2",
    title: "Lego EV3 Project #2",
    year: "2022",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech:["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "model-engine",
    title: "Model Engine",
    year: "2022",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "lego-ev3-project-1",
    title: "Lego EV3 Project #1",
    year: "2021",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech:["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "3d-printed-model-rocket",
    title: "3d Printed Model Rocket",
    year: "2020",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech:["HTML", "CSS", "JavaScript"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
];

// 1. Define the data structures
 export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  projectIds: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

// 2. Populate the data
export const EXPERIENCE: Experience[] = [
  {
    id: "1819-innovation-hub",
    company: "1819 Innovation Hub",
    role: "Makerspace Prototyping Technician Part Time",
    period: "August 2024 - Present",
    description: [
      "Run and maintain a print farm that includes Desktop, Metal & Industrial FDM, and Formlabs SLA printers.",
      "Trained new members through certifications & workshops on makerspace equipment, tools and software such as a Artech 3d Scanner, Laser Cutters, a Vacuum Former, Sewing Machines & Graphics Printers.",
      "Completed projects include project samples for machinery, new curriculum for members, and research for developing my own skills.",
    ],
    projectIds: [
      "3d-modeled-prop-swords",
      "coverslip-holder",
      "brainwave-reactive-sword",
      "model-engine",
      "3d-printed-model-rocket",
    ],
  },
  {
    id: "cincinnati-childrens",
    company: "Cincinnati Children's Hospital Medical Center",
    role: "3D Print Lab and Engineering Co-op",
    period: "May 2025 - August 2025",
    description: [
      "Aided in running additive manufacturing equipment including Form 3, 3L and 4 SLA printers, a Stratasys FDM Printer and a Stratasys Medijet J5 printer.",
      "Aided in the production of custom ear molds for children utilizing SLA printed molds.",
      "Handled a multitude of design projects for other departments including a coverslip holder, a custom removable needle cap for insulin, and teaching samples.",
    ],
    projectIds: [
      "custom-childrens-ear-molds",
      "stethoscope-teaching-kit",
      "laser-cut-lake-erie-islands-map",
      "lego-ev3-project-2",
      "3d-modeled-bike-assembly",
    ],
  },
  {
    id: "mitsubishi-electric-automotive",
    company: "Mitsubishi Electric Automotive America, Inc.",
    role: "Training and Development Engineering Co-op",
    period: "January 2023 - April 2023",
    description: [
      "A full-time engineering position worked on a variety of projects from full design projects to hands on building.",
      "Helped design and 3d print a working gripper arm for wire cutting to go out on the manufacturing line for use.",
      "Created Teaching Examples & Curriculum to train technicians going out to run the line",
    ],
    projectIds: [
      "custom-syringe-cap",
      "3d-printed-pvc-staff-prop",
      "transforming-nerf-gun",
      "lego-ev3-project-1",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor's Degree in Mechanical Engineering Technology",
    institution: "University of Cincinnati",
    period: "August 2021 - May 2026"
  },
  {
    degree: "Honors Stem Diploma",
    institution: "Dublin Jerome High School",
    period: "August 2018 - May 2021"
  }
];