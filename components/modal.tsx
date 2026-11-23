"use client";

import type Project from "@/app/models/project";
import { ExternalLink, Video, X } from "lucide-react";
import { useEffect, useRef } from "react";
import PhotoCarouselDisplay from "./PhotoCarouselDisplay";
import STLModelDisplay from "./STLModelDisplay";
import VideoCarouselDisplay from "./VideoCarouselDisplay";

interface ModalProps {
  selectedProject: Project | null;
  onClose: () => void;
}

export default function Modal({ selectedProject, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const mediaFiles = selectedProject?.displayFiles ?? [];
  const stls = mediaFiles.filter((file) => /\.stl$/i.test(file));
  const photos = mediaFiles.filter((file) => /(\.JPEG|\.PNG|\.JPG)$/i.test(file));
  const videos = mediaFiles.filter((file) => /(\.MP4|\.MOV|\.AVI)$/i.test(file));

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
      className="project-modal max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-scroll rounded-2xl border border-ocean-100 bg-white p-6 shadow-2xl"
    >
      {selectedProject && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-ocean-950">{selectedProject.title}</h2>
              <div className="mt-1 text-sm text-slate-500">
                {selectedProject.year} · {selectedProject.category}
              </div>
            </div>
            <button
              type="button"
              onClick={() => modalRef.current?.close()}
              aria-label="Close project details"
              className="text-slate-500 transition-colors hover:text-ocean-700"
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
              {videos.length > 0 && <VideoCarouselDisplay videos={videos} />}
            </div>
          )}

          <p className="mb-4 text-slate-600">{selectedProject.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {selectedProject.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-ocean-100 bg-ocean-100/50 px-2 py-1 text-xs text-ocean-950"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}
    </dialog>
  );
}
