import Project from "./project";

const PROJECTS: Project[] =[
  {
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

export default PROJECTS;