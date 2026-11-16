import type Project from "./project";

export const PROJECTS: Project[] =[
  {
    id: "Custom-Dice-Molds-And-Casts",
    title: "Custom Dice Molds & Casts",
    year: "July 2026 - Present",
    category: "Personal Project",
    description: "I am creating a custom silicone dice mold that incorporates custom symbols on each die. The design process steps involve modeling the dice, SLA 3D printing, polishing the dice, casting the 3D printeddice in silicone, removing the dice from the mold and finally casting the molds with resin.",
    tech:["Blender", "SLA 3D Printing", "Mold Making", "Resin Casting", "Post Processing"],
    links: { demo: "#" },
    displayFiles: ["/STL/CustomDice.STL"],
    stlCarousel: true
  },
  {
    id: "Laser-Cutting-to-UV-Workshop",
    title: "Laser Cutting to UV Workshop",
    year: "September 2026 - November 2026",
    category: "1819 Innovation Hub Makerspace",
    description: "Created curriculum for a class teaching 1819 students & members about the process of creating a project using the laser cutter and then taking it to the UV printer to print on. The piece we make for this class is a custom keychain. This class also acts as a certifications for the UV Printer.",
    tech:["UV Printing", "Laser Cutting", "Adobe Illustrator", "Teaching", "Customer Facing"],
    links: { demo: "#" },
    displayFiles: ["/STL/Calibration Token Half Circle 5mm Updated.stl", "/STL/Calibration Token Half Circle 10mm Updated.stl", "/STL/Calibration Token Half Circle 15mm Updated.stl", "/STL/Calibration Token Rectanglular Prism 5mm updated.stl", "/STL/Calibration Token Rectanglular Prism 10mm updated.stl", "/STL/Calibration Token Rectanglular Prism 15mm updated.stl", "/STL/Calibration Token Right Angle 5mm updated.stl", "/STL/Calibration Token Right Angle 10mm updated.stl", "/STL/Calibration Token Right Angle 15mm updated.stl"],
    stlCarousel: true
  },
  {
    id: "Calibration-Tokens-For-Verifying-Biocompatible-Resin",
    title: "Calibration Tokens For Verifying Biocompatible Resin",
    year: "March 2026 - April 2026",
    category: "Cincinnati Children's Hospital",
    description: "I worked with the Cincinnati Children's Hospital 3D Print Lab to create calibration tokens for verifying the accuracy of Formlabs biocompatible resins they offer. The tokens were designed to be printed on a Formlabs Form 3 and 4 printer, post processed in the same conditions followed by sterilization. At each of these steps they were measured to ensure that the prints were within the required tolerances for medical applications and assess the dimensional changes between each step. The findings will eventually be published in a research paper about the use of 3D printed surgical guides I will be labeled co-author of.",
    tech:["Fusion 360", "SLA 3D Printing", "Material Verification", "Research",],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: true
  },
  {
    id: "custom-childrens-ear-molds",
    title: "Custom Childrens Ear Molds",
    year: "May 2025 - April 2026",
    category: "Cincinnati Children's Hospital",
    description: "I aided mass production for custom ear molds in our audiology department. The process utilized SLA printed molds, post processing, and silicone injecting before giving a lacquer finish. During my time at cincinnati childrens I completed over 1000 ear molds for kids and helped improve the process of making them.",
    tech:["SLA 3D Printing", "Custom Injection Molding", "Process Improvement", "Customer Facing", "Mass Production "],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
    {
    id: "MRI-Coil-Support-System",
    title: "MRI Coil Support System",
    year: "February 2026 - April 2026",
    category: "Cincinnati Children's Hospital",
    description: "Created an in house MRI Coil support system to keep patients steady, reduce motion artifacts and optimize scans. This project saved the hospital thousands with its reproducibility, saftey improvements and long lasting design, drastically improving the off the market solution that was currently being used. The design was optimized to be easy to produce and replicated for all of the MRI's across the hospital to use. The height is easily adjustible to help technicians adjust for kids of all ages and sizes. Safety and durability was also a primary design focus to fix issues with the previous solution.",
    tech:["Fusion 360", "Laser Cutting", "SLA 3D Printing", "Adobe Illustrator", "Design for Safety", "Cost Saving", "Project Management"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "custom-childlife-keychains",
    title: "Custom ChildLife Keychains",
    year: "February 2026 - March 2026",
    category: "Cincinnati Children's Hospital",
    description: "I designed four custom multi-color 3D printed keychains for the child life department based on different organs. These keychains were designed to be passed out to kids to cheer them up during their stay or when they get discharged. They were made specific organs to help encourage individulaity and a keepsake depending on what the purpose of their stay was.",
    tech:["Fusion 360", "FDM 3D Printing", "Adobe Illustrator", "Project Management", "Customer Facing"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "frog-platform",
    title: "Frog Platform",
    year: "March 2026 - March 2026",
    category: "Cincinnati Children's Hospital",
    description: "I designed a resting platform to be added to the frog habitats in the research department. They were so well liked more than 30 ended up being produced and used in their various habitats. Later they also shared the file with other researchers for their habitats.",
    tech:["Blender", "FDM 3D Printing", "Customer Facing"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "glitter-mixing-caps",
    title: "Glitter Mixing Caps",
    year: "January 2026 - January 2026",
    category: "Cincinnati Children's Hospital",
    description: "I created mixing caps for glitter containers to cleanly and efficiently transfer glitter into silicone injection tips, for use in custom ear mold production. They were modeled with individual labels for each cap and printed using clear resin on a Formlabs SLA printer so the glitter color was visible and the dimensional accuracy would allow for a friction fit.",
    tech:["Fusion 360", "SLA 3D Printing", "Process Improvement"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "3d-modeled-prop-swords",
    title: "3D Modeled Prop Swords",
    year: "May 2025 - January 2026",
    category: "Personal Project",
    description: "Designed two dual 3D printed sword props, each with LED strips inside the blade that are coded to display a different effect with each press of a button.",
    tech:["Blender", "FDM 3D Printing", "Electronics"],
    links: { demo: "#" },
    displayFiles:["/STL/EnmaExploded.stl", "/STL/EnmaGuardHole.stl", "/STL/FrierenStaff.stl", "/STL/hornets.stl", "/STL/trueShikaiQuincy.stl", "/STL/trueShikaiQuincyExploded.stl"],
    stlCarousel: true
  },
  {
    id: "3D-Printed-Pinewood-Derby-Car",
    title: "3D Printed Pinewood Derby Car",
    year: "November 2025 - December 2025",
    category: "School Project",
    description: "For my intro to additive manufacturing course I created a pinewood derby car utilizing SLS printing and Nylon powder, placing second in the competition. I designed the car to be aerodynamic and lightweight while also being visually appealing.",
    tech:["Blender", "SLS 3D Printing", "Post Processing"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "custom-syringe-cap",
    title: "Custom Syringe Cap",
    year: "June 2025 - August 2025",
    category: "Cincinnati Children's Hospital",
    description: "I designed a custom syringe cap to limit the loss of insulin during transport from pharmacy to patient. I worked with the pharmacy and doctors to understand the design constraints and goals of the project and utilized 3D modeling, SLA 3D printing, Material research, Iterative testing and design to find the best possible solution.",
    tech:["Fusion 360", "SLA 3D Printing", "Iterative Design", "Project Management"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "stethoscope-teaching-kit",
    title: "Stethoscope Teaching Kit",
    year: "July 2025 - August 2025",
    category: "Cincinnati Children's Hospital",
    description: "Helped create a teaching kit where kids can build their own stethoscope using 3D printed parts, silicone tubing and a cut out diaphragm. I Mesh edited premade files to fix and adjust them to meet design specifications.",
    tech:["Blender", "FDM 3D Printing", "Project Management", "Customer Facing"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "coverslip-holder",
    title: "Coverslip Holder",
    year: "May 2025 - June 2025",
    category: "Cincinnati Children's Hospital",
    description: "I designed and produced a new coverslip holder for medical researchers to test at a higher volume working within the design constraints given I selected a suitable material for them to use for sonicating and cleaning the coverslips without the holder dissolving or damaging the coverslips.",
    tech: ["Fusion 360", "SLA 3D Printing", "Material Research", "Process Improvement"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "3d-printed-pvc-staff-prop",
    title: "3D Printed PVC Staff Prop",
    year: "June 2024 - August 2024",
    category: "1819 Innovation Hub Makerspace",
    description: "Leveraged Autodesk Fusion360 to fully 3D model and print parts to make a 6ft 4in fantasy staff. The staff head was designed to screw on for easy transport and maneuverability. Multiple parts were utilized to hide the connection points between the PVC shaft & the staff head.",
    tech: ["Fusion 360", "FDM 3D Printing", "Project Management", "Post Processing"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "laser-cut-lake-erie-islands-map",
    title: "Lake Erie Islands Topographical Map",
    year: "June 2024 - July 2024",
    category: "1819 Innovation Hub Makerspace",
    description: "Created a three-dimensional topographical depth chart of the Lake Erie Islands from below water to land. The map was created by laser engraving & cutting out of plywood for each depth layer before fitting it together, sanding, painting & finishing.",
    tech: ["Laser Cutting", "Adobe Illustrator", "Post Processing"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "brainwave-reactive-sword",
    title: "Brainwave Reactive Sword",
    year: "August 2023 - December 2023",
    category: "School Project",
    description: "Collaborated with another engineer to design and manufacture a prop sword that turns on and off with coded LEDS when Alpha or Beta brainwaves are read on a connected headset. Through this project I learned the capabilities, limitations & maintenance of 3D printers, Blender, sanding/finishing, & soldering.",
    tech: ["Blender", "FDM 3D Printing", "Post Processing", "Electronics"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "3d-modeled-bike-assembly",
    title: "3d Modeled Bike Assembly",
    year: "February 2022 - April 2022",
    category: "School Project",
    description: "As a team disassembled, measured, and 3D-modeled each individual piece of a bike and assembled it together using Siemens NX",
    tech: ["Siemens NX", "Design For Assembly",],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "lego-ev3-project-2",
    title: "Lego EV3 Robot Project",
    year: "January 2022 - April 2022",
    category: "School Project",
    description: "Designed a Lego EV3 robot as a team of 4 in order to complete a number of tasks to satisfy the needs of the customer over the course of a semester.",
    tech:["Robotics", "Python", "Problem Solving"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "transforming-nerf-gun",
    title: "Transforming Nerf Gun",
    year: "February 2021 - July 2021",
    category: "School Project",
    description: "Designed the outline for a functioning spring-loaded Nerf gun from scratch as a Capstone Engineering project for Dublin Engineering Academy.",
    tech: ["3D Design", "Technical Sketching"],
    links: { demo: "#" },
    displayFiles: ["/file.svg", "/globe.svg", "/next.svg"],
    stlCarousel: false
  },
  {
    id: "3d-printed-model-rocket",
    title: "3D Printed Model Rocket",
    year: "November 2020 - February 2021",
    category: "Personal Project",
    description: "Designed and printed a 3d model for the cone and wings of a model rocket. Tested with different types of engines to get the most controlled and efficient thrust.",
    tech:["Autodesk Inventor", "FDM 3D Printing", "Iterative Design"],
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
      "Helped manage the UC Makerspace Prototyping Lab, running, maintaining and training members on advanced prototyping equipment while also consulting with members about projects and developing improvements for the lab.",
      "Ran and maintained a diverse print farm (Desktop/Industrial/Metal FDM, Formlabs SLA/SLS,). Performing routine calibration, troubleshooting and preventative maintenance on each.",
      "Trained new members through certifications & workshops on makerspace equipment such as 3d scanning, Laser cutting, post processing 3d prints, sewing and UV/Vinyl Printing.",
      "Built Prototype samples and created curriculum materials for new classes.",
      "Offered members help and aid with converting their project ideas into step by step achievable solutions."
    ],
    projectIds: [
      "Laser-Cutting-to-UV-Workshop",
      "3D Printed PVC Staff Prop",
      "Lake Erie Islands Topographical Map",
    ],
  },
  {
    id: "cincinnati-childrens",
    company: "Cincinnati Children's Hospital Medical Center",
    role: "3D Print Lab and Engineering Co-op",
    period: "May 2025 - August 2025",
    description: [
      "A 3D printing technician and rapid prototyping position focused on supporting clinical engineering, doctors, patients and research teams by designing and producing quick, sustainable long term solutions to problems that arise.",
      "Operated and maintained additive manufacturing equipment including Formlabs Form 3/3L/4 (SLA), Stratasys Fortus 250mc & Prusa XL (FDM) and a Stratasys Medijet J5 (Polyjet).",
      "Produced custom ear molds for children utilizing SLA printed injection molds and silicone working alongside the Audiology department.",
      "Met requests from across the hospital to find long-term and reproducible solutions to their problems involving work including different specifications including but not limited to Biocompatibility, Design for Manufacturing and User customization.",
      "Saved the Hospital thousands with my MRI Coil Support System Project.",
    ],
    projectIds: [
      "calibration-tokens-for-verifying-biocompatible-resin",
      "custom-childrens-ear-molds",
      "Mri-Coil-Support-System",
      "Custom-ChildLife-Keychains",
      "Frog-Platform",
      "Glitter-Mixing-Caps",
      "custom-syringe-cap",
      "stethoscope-teaching-kit",
      "coverslip-holder",
    ],
  },
  {
    id: "mitsubishi-electric-automotive",
    company: "Mitsubishi Electric Automotive America, Inc.",
    role: "Training and Development Engineering Co-op",
    period: "January 2023 - April 2023",
    description: [
      "An Engineering Coop rotating through design and production tasks, creating line-ready hardware and fixtures for training manufacturing technicians.",
      "Designed and prototyped a working gripper arm used for implementing a pneumatic wire cutter out on the manufacturing line.",
      "Validated functionality through size constraints through iterative design and testing.",
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