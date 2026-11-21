"use client";
import { useState } from "react";
import {
  Box,
  Instagram,
  Linkedin,
  Mail, 
  Phone,
} from "lucide-react";
import Modal from "@/components/modal";
import type Project from "./models/project";
import { PROJECTS } from "./models/projects";

const recentProjectIds = [
  "Calibration-Tokens-For-Verifying-Biocompatible-Resin",
  "3d-modeled-prop-swords",
  "MRI-Coil-Support-System",
  "custom-childrens-ear-molds",
];
const recentProjects = PROJECTS.filter((project) =>
  recentProjectIds.includes(project.id)
);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col min-h-[80vh] animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto px-4 py-12">
      
      <div className="text-center mb-12">
        <p className="text-xl text-gray-500 mt-4 font-semibold uppercase tracking-widest">
          Will Corson
        </p>
      </div>

      <div className="flex justify-center mb-16 w-full">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-gray-100">
           <img 
            src="/will.png" 
            alt="Will Corson" 
            className="object-cover w-full h-full"
          /> 
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6 border-b border-gray-200 pb-4">
            About Me
          </h3>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
            <p>
              I am a passionate Designer/Engineer with extensive experience in 3d design and rapid prototyping. I specialize in bringing ideas into reality, 
              whether that be conceptual or fictional and adding functionality to it. I am looking for a position that will make me think creatively and challenge 
              me to grow as a designer. I currently attend the University of Cincinnati College of Engineering studying Mechanical Engineering Technology and 
              pursuing a Creative Writing Certificate.
            </p>
            <p>
              For most of my career thus far I have focused myself on honing my prototyping skills by mastering CAD/3D design and additive/subtractive 
              manufacturing processes which I can use to bring prototypes to life! This can be seen through my projects both professional & personal 
              ranging from Needle caps meant for wide use among hospital staff to functional props from stories and games. 
            </p>
            <p>
              Outside of my career and personal projects I also get up to a variety of activities and actively participate in a variety of clubs & 
              organizations including but not limited to:
            </p>
            
              <h3 className="text-xl text-gray-500 mt-4 font-semibold uppercase tracking-widest">
                Recent Projects
              </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {recentProjects.map((project) => {
                const previewImage = project.displayFiles.find((file) =>
                  /\.(jpe?g|png|gif|webp|avif|bmp)$/i.test(file)
                );

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition hover:border-blue-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {previewImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={previewImage}
                        alt=""
                        className="aspect-video w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-video w-full items-center justify-center bg-gray-100 text-gray-400">
                        <Box aria-hidden="true" size={40} />
                      </div>
                    )}
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900">
                        {project.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {project.year} · {project.category}
                      </p>
                      <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 border-t border-gray-200 pt-12 pb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                  Organizations
                </h4>
                <ul className="list-disc list-inside space-y-3 text-gray-600 marker:text-blue-500">
                  <li>President of Animation Club for 2 years, officer for 3</li>
                  <li>Relay For Life team captain 2022-2026, raised over $1000 in 2025</li>
                  <li>Team captain for a recreational Volleyball team</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                  Activities
                </h4>
                <ul className="list-disc list-inside space-y-3 text-gray-600 marker:text-green-500">
                  <li>EnableUC Member</li>
                  <li>Sailing</li>
                  <li>Hiking</li>
                  <li>Creative Writing</li>
                </ul>
              </div>
            </div>

      <div className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Get in Touch</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:corsonwt@mail.uc.edu" 
              className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
                <Mail className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email Me</p>
                <p className="text-lg font-medium text-gray-900">corsonwt@mail.uc.edu</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all group cursor-default">
              <div className="bg-green-50 p-4 rounded-full group-hover:bg-green-100 transition-colors">
                <Phone className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Call Me</p>
                <p className="text-lg font-medium text-gray-900">+1 (614) 813-6233</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a 
              href="https://www.linkedin.com/in/william-corson-a16667232/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
                <Linkedin className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">LinkedIn</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/bigtimber35" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-pink-300 transition-all group"
            >
              <div className="bg-pink-50 p-4 rounded-full group-hover:bg-pink-100 transition-colors">
                <Instagram className="text-pink-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Modal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}