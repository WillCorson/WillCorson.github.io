"use client";

import type Project from "@/app/models/project";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import PhotoCarouselDisplay from "./PhotoCarouselDisplay";
import STLModelDisplay from "./STLModelDisplay";

interface ModalProps {
  selectedProject: Project | null;
  onClose: () => void;
}

export default function Modal({ selectedProject, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const mediaFiles = selectedProject?.displayFiles ?? [];
  const stls = mediaFiles.filter((file) => /\.stl$/i.test(file));
  const photos = mediaFiles.filter((file) => !/\.stl$/i.test(file));

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (selectedProject && !modal.open) {
      modal.showModal();
    } else if (!selectedProject && modal.open) {
      modal.close();
    }
  }, [selectedProject]);

  return (
    <dialog
      ref={modalRef}
      onClose={onClose}
      className="project-modal bg-white border border-gray-200 rounded-lg shadow-lg max-h-[90vh] max-w-2xl w-[calc(100%-2rem)] p-6 overflow-y-auto"
    >
      {selectedProject && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <div className="text-sm text-gray-500 mt-1">
                {selectedProject.year} · {selectedProject.category}
              </div>
            </div>
            <button
              type="button"
              onClick={() => modalRef.current?.close()}
              aria-label="Close project details"
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {mediaFiles.length > 0 && (
            <div className="mb-6 space-y-4">
              {stls.length > 0 && (
                <STLModelDisplay key={selectedProject.id} stls={stls} />
              )}
              {photos.length > 0 && <PhotoCarouselDisplay photos={photos} />}
            </div>
          )}

          <p className="text-gray-600 mb-4">{selectedProject.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {selectedProject.tech.map((technology) => (
              <span
                key={technology}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
              >
                {technology}
              </span>
            ))}
          </div>

          {selectedProject.links.demo && (
            <a
              href={selectedProject.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
