"use client";

import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import { Box, ExternalLink, Loader } from "lucide-react";
import { Suspense, useCallback, useEffect, useState } from "react";
import type Project from "@/app/models/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { STLModel } from "./STLModel";

interface RecentProjectsCarouselProps {
  projects: Project[];
}

function getFileExtension(file: string) {
  const path = file.split(/[?#]/, 1)[0];
  return path.slice(path.lastIndexOf(".")).toLowerCase();
}

export default function RecentProjectsCarousel({
  projects,
}: RecentProjectsCarouselProps) {
  const files = projects.flatMap((project) =>
    project.displayFiles.map((file, index) => ({
      file,
      index,
      project,
    }))
  );
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = useCallback((api: CarouselApi) => {
    setActiveSlide(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    updateActiveSlide(carouselApi);
    carouselApi.on("select", updateActiveSlide);
    return () => {
      carouselApi.off("select", updateActiveSlide);
    };
  }, [carouselApi, updateActiveSlide]);

  if (files.length === 0) return null;

  return (
    <Carousel
      className="group w-full"
      opts={{ loop: files.length > 1 }}
      setApi={setCarouselApi}
    >
      <CarouselContent className="ml-0">
        {files.map(({ file, index, project }, slideIndex) => {
          const extension = getFileExtension(file);
          const isImage = /\.(jpe?g|png|gif|webp|avif|bmp|svg)$/i.test(extension);
          const isVideo = /\.(mp4|mov|avi|webm|ogv|m4v)$/i.test(extension);
          const isStl = extension === ".stl";

          return (
            <CarouselItem key={`${project.id}-${index}`} className="pl-0">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-video bg-gray-100">
                  {isImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={file}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-contain"
                    />
                  ) : isVideo ? (
                    <video
                      src={file}
                      controls
                      preload="metadata"
                      className="h-full w-full object-contain"
                    />
                  ) : isStl ? (
                    activeSlide === slideIndex && (
                      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <Suspense
                          fallback={
                            <Html center>
                              <Loader
                                className="animate-spin text-gray-500"
                                size={32}
                              />
                            </Html>
                          }
                        >
                          <Stage environment="city" intensity={0.5}>
                            <STLModel url={file} />
                          </Stage>
                        </Suspense>
                        <OrbitControls autoRotate autoRotateSpeed={2} />
                      </Canvas>
                    )
                  ) : (
                    <a
                      href={file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full flex-col items-center justify-center gap-3 text-gray-500 hover:text-blue-600"
                    >
                      <Box aria-hidden="true" size={40} />
                      <span className="flex items-center gap-1 text-sm">
                        Open project file <ExternalLink size={14} />
                      </span>
                    </a>
                  )}
                  {files.length > 1 && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                      {slideIndex + 1} / {files.length}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {project.year} · {project.category}
                  </p>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {files.length > 1 && (
        <>
          <CarouselPrevious className="left-3 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100" />
          <CarouselNext className="right-3 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100" />
        </>
      )}
    </Carousel>
  );
}
