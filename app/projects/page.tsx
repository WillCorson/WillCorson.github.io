"use client";
import * as React from "react";
import { ExternalLink, LayoutList, CalendarClock, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 
import STLModelDisplay from "@/components/STLModelDisplay";
import PhotoCarouselDisplay from "@/components/PhotoCarouselDisplay"; 
import type Project from "../models/project";
import Modal from "@/components/modal";
import { PROJECTS } from "../models/projects";



export default function Projects() {
  const [view, setView] = React.useState<"timeline" | "accordion">("timeline");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-ocean-950">Projects</h1>
          <p className="text-slate-600">A selection of my recent work and side projects.</p>
        </div>

        {/* View Switcher */}
        <div className="flex w-fit items-center self-start rounded-xl border border-ocean-100 bg-white/80 p-1 shadow-sm md:self-auto">
          <button
            onClick={() => setView("timeline")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              view === "timeline"
                ? "bg-ocean-700 text-white shadow-sm"
                : "text-slate-500 hover:text-ocean-950"
            }`}
          >
            <CalendarClock className="w-4 h-4" />
            Timeline
          </button>
          <button
            onClick={() => setView("accordion")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              view === "accordion"
                ? "bg-ocean-700 text-white shadow-sm"
                : "text-slate-500 hover:text-ocean-950"
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
              const isEven = index % 2 === 0;
              
              return (
                <li key={index}>
                  {index !== 0 && <hr className="bg-ocean-100" />}

                  <div className="timeline-start mb-5 md:mb-10 px-4 w-full md:w-1/2 flex flex-col justify-center md:items-end">
                    {isEven ? (
                      <button 
                        onClick={() => handleProjectClick(project)}
                        className="w-full cursor-pointer text-right text-xl font-black text-ocean-950 transition-colors hover:text-ocean-700"
                      >
                        {project.title}
                      </button>
                    ) : (
                      <div className="flex flex-col items-end w-full">
                        <time className="font-mono italic text-slate-500">{project.year}</time>
                        <div className="mt-1 text-sm font-bold text-slate-400">{project.category}</div>
                      </div>
                    )}
                  </div>

                  <div className="timeline-middle">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-ocean-700 ring-4 ring-ocean-100">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div className="timeline-end mb-10 px-4 w-full md:w-1/2 flex flex-col justify-center md:items-start">
                     {isEven ? (
                       <div className="flex flex-col items-start w-full">
                        <time className="font-mono italic text-slate-500">{project.year}</time>
                        <div className="mt-1 text-sm font-bold text-slate-400">{project.category}</div>
                      </div>
                     ) : (
                       <button 
                        onClick={() => handleProjectClick(project)}
                        className="w-full cursor-pointer text-left text-xl font-black text-ocean-950 transition-colors hover:text-ocean-700"
                      >
                        {project.title}
                      </button>
                     )}
                  </div>
                  
                  {index !== PROJECTS.length - 1 && <hr className="bg-ocean-100" />}
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
                className="rounded-xl border border-slate-200 bg-white/85 px-4 shadow-sm transition-colors data-[state=open]:border-ocean-300 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="cursor-pointer hover:no-underline py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left pr-4">
                    <div className="flex items-center w-full gap-3">
                      <span className="max-w-2/3 cursor-pointer text-lg font-bold text-ocean-950">{project.title}</span>
                      <span className="hidden rounded-full bg-ocean-100 px-2 py-0.5 text-xs text-ocean-950 sm:inline-block">
                        {project.category}
                      </span>
                    </div>
                    <span className="mt-1 max-w-1/6 text-right font-mono text-sm text-slate-400 sm:mt-0">{project.year}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-slate-600">
                  <div className="mt-2 border-t border-ocean-100 pt-2">
                    
                    {/* ACCORDION: Conditional 3D/Image Area */}
                    {project.displayFiles?.length > 0 && (
                      <div className="mb-6 mt-4">
                        {project.stlCarousel ? (
                          <STLModelDisplay stls={project.displayFiles} />
                        ) : (
                          <PhotoCarouselDisplay photos={project.displayFiles} />
                        )}
                      </div>
                    )}

                    <p className="mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-md border border-ocean-100 bg-ocean-100/50 px-2 py-1 text-xs text-ocean-950">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>

      <Modal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}