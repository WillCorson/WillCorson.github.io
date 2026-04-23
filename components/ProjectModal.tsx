import Project from "@/app/models/project";
import { ExternalLink, X } from "lucide-react";
import React from "react";
import PhotoCarouselDisplay from "./PhotoCarouselDisplay";
import STLModelDisplay from "./STLModelDisplay";

export default function ProjectModal() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const modalRef = React.useRef<HTMLDialogElement>(null);
  const handleCloseModal = () => {
      modalRef.current?.close();
      setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

    return (
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
                    <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost text-gray-500">
                      <X className="w-5 h-5" />
                    </button>
                  </form>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                
                {/* MODAL: Conditional 3D / Image Viewer Area */}
                {selectedProject.displayFiles?.length > 0 && (
                  <div className="mb-6">
                    {selectedProject.stlCarousel ? (
                      <STLModelDisplay stls={selectedProject.displayFiles} />
                    ) : (
                      <PhotoCarouselDisplay photos={selectedProject.displayFiles} />
                    )}
                  </div>
                )}

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
    )




}