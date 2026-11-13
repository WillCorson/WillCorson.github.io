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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume</h1>
        <p className="text-gray-600">My professional journey and education, starting with the most recent.</p>
      </header>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          Work Experience
        </h2>
        <div className="border-l-2 border-gray-200 ml-3 space-y-12 pl-8 relative pb-2">
          
          {EXPERIENCE.map((job, index) => {
            const activeTab = activeTabs[job.id] ?? "experience";
            const jobProjects = PROJECTS.filter((project) => job.projectIds.includes(project.id));

            return (
              <div key={job.id} className="relative">
                <span
                  className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white ${
                    index === 0 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />

                <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
                <div className="text-blue-600 font-medium mb-1">{job.role}</div>
                <div className="text-sm text-gray-500 mb-4">{job.period}</div>

                <div
                  role="tablist"
                  aria-label={`${job.company} details`}
                  className="flex gap-4 border-b border-gray-200 mb-4"
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
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    Experience
                  </button>
                  <button
                    id={`${job.id}-projects-tab`}
                    type="button"
                    role="tab"
                    aria-controls={`${job.id}-projects-panel`}
                    aria-selected={activeTab === "projects"}
                    onClick={() => setActiveTabs((tabs) => ({ ...tabs, [job.id]: "projects" }))}
                    className={`pb-2 text-sm font-medium border-b-2 ${
                      activeTab === "projects"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    Projects ({jobProjects.length})
                  </button>
                </div>

                <div
                  id={`${job.id}-experience-panel`}
                  role="tabpanel"
                  aria-labelledby={`${job.id}-experience-tab`}
                  hidden={activeTab !== "experience"}
                >
                  <ul className="list-disc pl-5 text-gray-900 space-y-2">
                    {job.description.map((point) => (
                      <li key={point}>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                      Skills Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={`${job.id}-${skill}`}
                          className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200"
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
                      className="text-left rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <span className="block font-semibold text-gray-900">{project.title}</span>
                      <span className="block text-sm text-gray-500 mt-1">
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

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="space-y-4">
          
          {EDUCATION.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
              <div className="text-gray-600">{edu.institution}</div>
              <div className="text-sm text-gray-400 mt-1">{edu.period}</div>
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