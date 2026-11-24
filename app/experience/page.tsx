"use client";

import { useState } from "react";
import type Project from "@/app/models/project";
import  { PROJECTS, EDUCATION, EXPERIENCE } from "@/app/models/projects";
import Modal from "@/components/modal";

// 3. The Component
export default function Resume() {
  const [activeTabs, setActiveTabs] = useState<Record<string, "experience" | "projects">>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-12 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-ocean-950">Resume</h1>
        <p className="text-slate-600">My professional journey and education, starting with the most recent.</p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="mb-6 flex items-center text-xl font-semibold text-ocean-950">
          Work Experience
        </h2>
        <div className="relative ml-3 space-y-12 border-l-2 border-ocean-100 pb-2 pl-8">
          
          {EXPERIENCE.map((job, index) => {
            const activeTab = activeTabs[job.id] ?? "experience";
            const jobProjects = PROJECTS.filter((project) => job.projectIds.includes(project.id));

            return (
              <div key={job.id} className="relative">
                <span
                  className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white ${
                    index === 0 ? "bg-ocean-500" : "bg-slate-300"
                  }`}
                />

                <h3 className="text-lg font-bold text-ocean-950">{job.company}</h3>
                <div className="mb-1 font-medium text-ocean-700">{job.role}</div>
                <div className="mb-4 text-sm text-slate-500">{job.period}</div>

                <div
                  role="tablist"
                  aria-label={`${job.company} details`}
                  className="mb-4 flex gap-4 border-b border-ocean-100"
                >
                  <button
                    id={`${job.id}-experience-tab`}
                    type="button"
                    role="tab"
                    aria-controls={`${job.id}-experience-panel`}
                    aria-selected={activeTab === "experience"}
                    onClick={() => setActiveTabs((tabs) => ({ ...tabs, [job.id]: "experience" }))}
                    className={`pb-2 text-sm font-medium border-b-2 ${
                      activeTab === "experience"
                        ? "border-ocean-700 text-ocean-700"
                        : "border-transparent text-slate-500 hover:text-ocean-950 cursor-pointer "
                    }`}
                  >
                    Experience
                  </button>

                  {jobProjects.length > 0 && (
                  <button
                    id={`${job.id}-projects-tab`}
                    type="button"
                    role="tab"
                    aria-controls={`${job.id}-projects-panel`}
                    aria-selected={activeTab === "projects"}
                    onClick={() => setActiveTabs((tabs) => ({ ...tabs, [job.id]: "projects" }))}
                    className={`pb-2 text-sm font-medium border-b-2 ${
                      activeTab === "projects"
                        ? "border-ocean-700 text-ocean-700"
                        : "border-transparent text-slate-500 hover:text-ocean-950 cursor-pointer"
                    }`}
                  >
                    Projects ({jobProjects.length})
                  </button>
                  )}
                </div>

                <div
                  id={`${job.id}-experience-panel`}
                  role="tabpanel"
                  aria-labelledby={`${job.id}-experience-tab`}
                  hidden={activeTab !== "experience"}
                >
                  <ul className="list-disc space-y-2 pl-5 text-slate-900 marker:text-ocean-500">
                    {job.description.map((point) => (
                      <li key={point}>
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Skills Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={`${job.id}-${skill}`}
                          className="inline-flex items-center rounded-full bg-ocean-100 px-2.5 py-1 text-xs font-medium text-ocean-950 ring-1 ring-inset ring-ocean-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  id={`${job.id}-projects-panel`}
                  role="tabpanel"
                  aria-labelledby={`${job.id}-projects-tab`}
                  className={`gap-3 sm:grid-cols-2 ${
                    activeTab === "projects" ? "grid" : "hidden"
                  }`}
                >
                  {jobProjects.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer rounded-xl border border-slate-200 bg-white/85 p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-ocean-300 hover:shadow-md"
                    >
                      <span className="block font-semibold text-ocean-950">{project.title}</span>
                      <span className="mt-1 block text-sm text-slate-500">
                        {project.year} · {project.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-8 border-t border-ocean-100 pt-12 pb-12 md:grid-cols-2">
              <div className="rounded-2xl border border-ocean-100/80 bg-white/85 p-6 shadow-[0_10px_30px_rgba(3,4,94,0.05)]">
                <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-ocean-950">
                  <span className="h-1 w-8 rounded-full bg-ocean-500"></span>
                  Equipment Proficiencies
                </h4>
                <ul className="list-disc list-inside space-y-3 text-slate-600 marker:text-ocean-500">
                  <li>SLS</li>
                    <ul className="list-[square] list-inside pl-5 text-slate-600 marker:text-ocean-500">
                      <li>Fuse 1+ System</li>
                    </ul>
                  <li>SLA</li>
                    <ul className="list-[square] list-inside pl-5 text-slate-600 marker:text-ocean-500">
                      <li>Form 3L</li>
                      <li>Form 3</li>
                      <li>Form 4</li>
                    </ul>
                  <li>Polyjet</li>
                    <ul className="list-[square] list-inside pl-5 text-slate-600 marker:text-ocean-500">
                      <li>MedJet J5</li>
                    </ul>
                  <li>FDM</li>
                    <ul className="list-[square] list-inside pl-5 text-slate-600 marker:text-ocean-500">
                      <li>Stratasys Fortus</li>
                      <li>H2S</li>
                      <li>H2D</li>
                      <li>A1</li>
                      <li>P1P</li>
                      <li>BMD Studio System</li>
                      <li>XL</li>
                      <li>2+ Connect</li>
                    </ul>
                  <li>Epilog CO2 & Fiber Lasers</li>
                  <li>Xtool Lasers</li>
                  <li>UV Printing</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_10px_30px_rgba(3,4,94,0.05)]">
                <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-ocean-950">
                  <span className="h-1 w-8 rounded-full bg-amber-400"></span>
                  Software Proficiencies
                </h4>
                <ul className="list-disc list-inside space-y-3 text-slate-600 marker:text-ocean-500">
                  <li>Fusion 360</li>
                  <li>Blender</li>
                  <li>Autodesk Inventor</li>
                  <li>Siemens NX</li>
                  <li>Solidworks</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Bambu Labs Slicer</li>
                  <li>Prusa Slicer</li>
                  <li>Orca Slicer</li>
                  <li>Cura Slicer</li>
                  <li>Epilog Laser Software</li>
                  <li>Microsoft Suite</li>
                  <li>MatLAB</li>
                </ul>
              </div>
            </div>

      {/* Education Section */}
      <section>
        <h2 className="mb-6 text-xl font-semibold text-ocean-950">Education</h2>
        <div className="space-y-4">
          
          {EDUCATION.map((edu, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-ocean-300 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-ocean-950">{edu.degree}</h3>
              <div className="text-slate-600">{edu.institution}</div>
              <div className="mt-1 text-sm text-slate-400">{edu.period}</div>
            </div>
          ))}

        </div>
      </section>

      <Modal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}