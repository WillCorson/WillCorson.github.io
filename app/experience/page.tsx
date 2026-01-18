import React from 'react';

// 1. Define the data structures
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
}

// 2. Populate the data
const EXPERIENCE: Experience[] = [
  {
    company: "1819 Innovation Hub",
    role: "Makerspace Prototyping Technician Part Time",
    period: "August 2024 - Present",
    description: [
      "Run and maintain a print farm that includes Desktop, Metal & Industrial FDM, and Formlabs SLA printers.",
      "Trained new members through certifications & workshops on makerspace equipment, tools and software such as a Artech 3d Scanner, Laser Cutters, a Vacuum Former, Sewing Machines & Graphics Printers.",
      "Completed projects include project samples for machinery, new curriculum for members, and research for developing my own skills.",
    ]
  },
  {
    company: "Cincinnati Children's Hospital Medical Center",
    role: "3D Print Lab and Engineering Co-op",
    period: "May 2025 - August 2025",
    description: [
      "Aided in running additive manufacturing equipment including Form 3, 3L and 4 SLA printers, a Stratasys FDM Printer and a Stratasys Medijet J5 printer.",
      "Aided in the production of custom ear molds for children utilizing SLA printed molds.",
      "Handled a multitude of design projects for other departments including a coverslip holder, a custom removable needle cap for insulin, and teaching samples.",
    ]
  },
  {
    company: "Mitsubishi Electric Automotive America, Inc.",
    role: "Training and Development Engineering Co-op",
    period: "January 2023 - April 2023",
    description: [
      "A full-time engineering position worked on a variety of projects from full design projects to hands on building.",
      "Helped design and 3d print a working gripper arm for wire cutting to go out on the manufacturing line for use.",
      "Created Teaching Examples & Curriculum to train technicians going out to run the line",
    ]
  },
];

const EDUCATION: Education[] = [
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

// 3. The Component
export default function Resume() {
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
          
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot: Blue for the first item, Gray for the rest */}
              <span 
                className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white ${
                  index === 0 ? 'bg-blue-600' : 'bg-gray-300'
                }`} 
              />
              
              <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
              <div className="text-blue-600 font-medium mb-1">{job.role}</div>
              <div className="text-sm text-gray-500 mb-4">{job.period}</div>
              
              <div>
                <ul className="list-disc pl-5 text-gray-900 space-y-2">
                  {job.description.map((point, i) => (
                    <li key={i}>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

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
    </div>
  );
}