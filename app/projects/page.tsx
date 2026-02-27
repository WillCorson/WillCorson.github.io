"use client";

import * as React from "react";
import { ExternalLink, Github, LayoutList, CalendarClock, CheckCircle2, Box, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 

// --- 1. Types ---
interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  tech: string[];
  links: {
    github: string;
    demo?: string;
  };
}

// --- 2. Data ---
const PROJECTS: Project[] = [
  {
    title: "Cincinnati Childrens",
    year: "2025",
    category: "3D Printing & Design",
    description: "A centralized dashboard for monitoring cloud infrastructure security posture. Implements RBAC and real-time threat detection using AWS GuardDuty integration.",
    tech: ["Next.js", "TypeScript", "AWS", "Tailwind"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "1819 Innovation Hub Makerspace",
    year: "2024",
    category: "Design & Prototyping",
    description: "Developed a lightweight mutual authentication protocol for resource-constrained IoT devices, reducing handshake latency by 40% compared to standard TLS.",
    tech: ["C++", "Python", "MQTT", "Raspberry Pi"],
    links: { github: "#" }
  },
  {
    title: "Mitsubishi Electric Automotive",
    year: "2023",
    category: "Design & Automation",
    description: "Refactored a monolithic legacy application into scalable microservices using Docker and Kubernetes. Improved system uptime to 99.9%.",
    tech: ["Go", "Docker", "Kubernetes", "PostgreSQL"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Commissions",
    year: "2025",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "#" }
  },
  {
    title: "Personal Project 1",
    year: "2024",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "#" }
  },
  {
    title: "Personal Project 2",
    year: "2023",
    category: "Design & 3D Printing",
    description: "My first personal portfolio built to showcase early academic projects. Focused on accessibility and semantic HTML.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "#" }
  }
];

// --- 3. Helper Component: Placeholder for Three.js/STL ---
const ProjectMediaPlaceholder = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-64 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-3 text-slate-400 mt-4 mb-6">
      <div className="p-3 bg-white rounded-full shadow-sm">
        <Box className="w-8 h-8 text-blue-500" />
      </div>
      <div className="text-center">
        <p className="font-medium text-sm">3D Viewer / STL Area</p>
        <p className="text-xs">Media for: {title}</p>
      </div>
      {/* 
        TODO: Insert your Three.js Canvas here.
        Example: 
        <Canvas>
           <Stage>
             <Model url={project.stlUrl} />
           </Stage>
        </Canvas>
      */}
    </div>
  );
};

// --- 4. Main Component ---
export default function Projects() {
  const [view, setView] = React.useState<"timeline" | "accordion">("timeline");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const modalRef = React.useRef<HTMLDialogElement>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <div className="space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600">A selection of my recent work and side projects.</p>
        </div>

        {/* View Switcher */}
        <div className="bg-gray-100 p-1 rounded-lg flex items-center w-fit self-start md:self-auto">
          <button
            onClick={() => setView("timeline")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              view === "timeline"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <CalendarClock className="w-4 h-4" />
            Timeline
          </button>
          <button
            onClick={() => setView("accordion")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              view === "accordion"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <LayoutList className="w-4 h-4" />
            List
          </button>
        </div>
      </header>

      {/* Content Area */}
      <div className="mt-8">
        {view === "timeline" ? (
          /* --- DAISYUI TIMELINE --- */
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {PROJECTS.map((project, index) => {
              // Determine alignment based on index (even = title on start, odd = title on end)
              const isEven = index % 2 === 0;
              
              return (
                <li key={index}>
                  {index !== 0 && <hr className="bg-gray-200" />}

                  {/* 
                     SLOT 1: TIMELINE START
                     If Even: Show Title. If Odd: Show Date.
                  */}
                  <div className="timeline-start mb-10 md:mb-0 px-4 w-full md:w-1/2 flex flex-col justify-center md:items-end">
                    {isEven ? (
                       // Title (Clickable)
                      <button 
                        onClick={() => handleProjectClick(project)}
                        className="text-xl cursor-pointer font-black text-gray-900 hover:text-blue-600 transition-colors text-right w-full"
                      >
                        {project.title}
                      </button>
                    ) : (
                      // Date/Meta
                      <div className="flex flex-col items-end w-full">
                        <time className="font-mono italic text-gray-500">{project.year}</time>
                        <div className="text-sm font-bold text-gray-400 mt-1">{project.category}</div>
                      </div>
                    )}
                  </div>

                  {/* MIDDLE ICON */}
                  <div className="timeline-middle">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center ring-4 ring-white">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* 
                     SLOT 2: TIMELINE END
                     If Even: Show Date. If Odd: Show Title.
                  */}
                  <div className="timeline-end mb-10 px-4 w-full md:w-1/2 flex flex-col justify-center md:items-start">
                     {isEven ? (
                       // Date/Meta
                       <div className="flex flex-col items-start w-full">
                        <time className="font-mono italic text-gray-500">{project.year}</time>
                        <div className="text-sm font-bold text-gray-400 mt-1">{project.category}</div>
                      </div>
                     ) : (
                       // Title (Clickable)
                       <button 
                        onClick={() => handleProjectClick(project)}
                        className="text-xl cursor-pointer font-black text-gray-900 hover:text-blue-600 transition-colors text-left w-full"
                      >
                        {project.title}
                      </button>
                     )}
                  </div>
                  
                  {index !== PROJECTS.length - 1 && <hr className="bg-gray-200" />}
                </li>
              );
            })}
          </ul>
        ) : (
          /* --- SHADCN ACCORDION --- */
          <Accordion type="single" collapsible className="w-full space-y-4">
            {PROJECTS.map((project, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg px-4 bg-white data-[state=open]:border-blue-200 transition-colors"
              >
                <AccordionTrigger className="cursor-pointer hover:no-underline py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left pr-4">
                    <div className="flex items-center gap-3">
                      <span className="cursor-pointer font-bold text-gray-900 text-lg">{project.title}</span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full hidden sm:inline-block">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 font-mono mt-1 sm:mt-0">{project.year}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  <div className="pt-2 border-t border-gray-100 mt-2">
                    
                    {/* 3D/Image Area added to List View */}
                    <ProjectMediaPlaceholder title={project.title} />

                    <p className="mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={project.links.github} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                        <Github className="w-4 h-4" /> View Code
                      </a>
                      {project.links.demo && (
                        <a href={project.links.demo} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>

      {/* --- DAISYUI MODAL --- */}
      <dialog ref={modalRef} id="project_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-3xl bg-white p-0 overflow-hidden">
          {selectedProject && (
            <>
              {/* Modal Header */}
              <div className="flex justify-between items-start p-6 border-b border-gray-100 bg-gray-50/50">
                 <div>
                    <h3 className="font-bold text-2xl text-gray-900">{selectedProject.title}</h3>
                    <div className="flex gap-2 items-center mt-1">
                      <span className="text-sm font-mono text-gray-500">{selectedProject.year}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-sm font-medium text-blue-600">{selectedProject.category}</span>
                    </div>
                 </div>
                 <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost text-gray-500">
                      <X className="w-5 h-5" />
                    </button>
                  </form>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                
                {/* 3D / Image Viewer Area */}
                <ProjectMediaPlaceholder title={selectedProject.title} />

                <div className="prose max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">About this project</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                   <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100">
                            {t}
                          </span>
                        ))}
                      </div>
                   </div>
                   
                   <div className="pt-4 mt-2 border-t border-gray-100">
                      <div className="flex gap-4">
                        <a 
                          href={selectedProject.links.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="btn btn-outline btn-sm gap-2 normal-case"
                        >
                          <Github className="w-4 h-4" /> View Code
                        </a>
                        {selectedProject.links.demo && (
                          <a 
                            href={selectedProject.links.demo} 
                            target="_blank" 
                            rel="noreferrer"
                            className="btn btn-primary btn-sm gap-2 normal-case text-white"
                          >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </a>
                        )}
                      </div>
                   </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Backdrop click to close */}
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCloseModal}>close</button>
        </form>
      </dialog>

    </div>
  );
}