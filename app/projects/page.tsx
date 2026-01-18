"use client";

import * as React from "react";
import { ExternalLink, Github, LayoutList, CalendarClock, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Ensure this path matches your project structure

// 1. Data Structure
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
    title: "Mitsubishi Electric Automotive America",
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

export default function Projects() {
  const [view, setView] = React.useState<"timeline" | "accordion">("timeline");

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
            {PROJECTS.map((project, index) => (
              <li key={index}>
                {index !== 0 && <hr className="bg-gray-200" />}
                
                {/* Date/Year Side */}
                <div className="timeline-start md:text-end mb-10 md:mb-0 px-4">
                  <time className="font-mono italic text-gray-500">{project.year}</time>
                  <div className="text-sm font-bold text-gray-400 mt-1">{project.category}</div>
                </div>

                {/* Icon Middle */}
                <div className="timeline-middle">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center ring-4 ring-white">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="timeline-end mb-10 px-4 w-full md:max-w-md">
                  <div className="text-lg font-black text-gray-900">{project.title}</div>
                  <p className="text-gray-600 py-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-2">
                    <a href={project.links.github} className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    {project.links.demo && (
                      <a href={project.links.demo} className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                {index !== PROJECTS.length - 1 && <hr className="bg-gray-200" />}
              </li>
            ))}
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
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left pr-4">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-900 text-lg">{project.title}</span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full hidden sm:inline-block">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 font-mono mt-1 sm:mt-0">{project.year}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">
                  <div className="pt-2 border-t border-gray-100 mt-2">
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
    </div>
  );
}