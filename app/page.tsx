"use client";
import {
  Instagram,
  Linkedin,
  Mail, 
  Phone,
} from "lucide-react";
import RecentProjectsCarousel from "@/components/RecentProjectsCarousel";
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
  return (
    <div className="flex flex-col min-h-[80vh] animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto px-4 py-12">
      
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-ocean-950 md:text-5xl">
          Will Corson
        </h1>
        <p className="mt-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-ocean-700">
          <span className="h-px w-8 bg-ocean-300" />
          Designer · Engineer
          <span className="h-px w-8 bg-ocean-300" />
        </p>
      </div>

      <div className="flex justify-center mb-16 w-full">
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(3,4,94,0.16)] ring-4 ring-ocean-100">
           <img 
            src="/will.png" 
            alt="Will Corson" 
            className="object-cover w-full h-full"
          /> 
        </div>
      </div>

      <div className="mb-12 rounded-3xl border border-white/80 bg-white/75 p-6 shadow-[0_18px_60px_rgba(3,4,94,0.06)] backdrop-blur-sm md:p-12">
            <h3 className="mt-4 text-3xl font-semibold uppercase tracking-widest text-ocean-950">
              Recent Projects
            </h3>

            <div className="mt-4 mb-6">
              <RecentProjectsCarousel projects={recentProjects} />
            </div>

          <h3 className="mb-6 border-b border-ocean-100 pb-4 text-3xl font-extrabold tracking-tight text-ocean-950">
            About Me
          </h3>
          <div className="prose prose-lg max-w-none space-y-6 text-slate-600">
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

            
          </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 border-t border-ocean-100 pt-12 pb-12 md:grid-cols-2">
              <div className="rounded-2xl border border-ocean-100/80 bg-white/85 p-6 shadow-[0_10px_30px_rgba(3,4,94,0.05)]">
                <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-ocean-950">
                  <span className="h-1 w-8 rounded-full bg-ocean-500"></span>
                  Organizations
                </h4>
                <ul className="list-disc list-inside space-y-3 text-slate-600 marker:text-ocean-500">
                  <li>President of Animation Club for 2 years, officer for 3</li>
                  <li>Relay For Life team captain 2022-2026, raised over $1000 in 2025</li>
                  <li>EnableUC Member</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[0_10px_30px_rgba(3,4,94,0.05)]">
                <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-ocean-950">
                  <span className="h-1 w-8 rounded-full bg-amber-400"></span>
                  Activities
                </h4>
                <ul className="list-disc list-inside space-y-3 text-slate-600 marker:text-amber-500">
                  <li>Team captain for a recreational Volleyball team</li>
                  <li>Sailing</li>
                  <li>Hiking</li>
                  <li>Creative Writing</li>
                  <li>Cosplay</li>
                  <li>Dice Making</li>
                </ul>
              </div>
            </div>

      <div className="border-t border-ocean-100 pt-12">
        <h3 className="mb-8 text-center text-2xl font-bold text-ocean-950">Get in Touch</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:corsonwt@mail.uc.edu" 
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-ocean-300 hover:shadow-lg"
            >
              <div className="rounded-full bg-ocean-100 p-4 transition-colors group-hover:bg-ocean-300/60">
                <Mail className="h-6 w-6 text-ocean-700" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Email Me</p>
                <p className="text-lg font-medium text-ocean-950">corsonwt@mail.uc.edu</p>
              </div>
            </a>

            <div className="group flex cursor-default items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md">
              <div className="rounded-full bg-emerald-50 p-4 transition-colors group-hover:bg-emerald-100">
                <Phone className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Call Me</p>
                <p className="text-lg font-medium text-ocean-950">+1 (614) 813-6233</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a 
              href="https://www.linkedin.com/in/william-corson-a16667232/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-ocean-300 hover:shadow-lg"
            >
              <div className="rounded-full bg-ocean-100 p-4 transition-colors group-hover:bg-ocean-300/60">
                <Linkedin className="h-6 w-6 text-ocean-700" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">LinkedIn</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/bigtimber35" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-lg"
            >
              <div className="rounded-full bg-rose-50 p-4 transition-colors group-hover:bg-rose-100">
                <Instagram className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}