import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function VideoCarouselDisplay({ videos }: { videos: string[] }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="w-full relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 group">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full ml-0">
          {videos.map((video, index) => (
            <CarouselItem key={index} className="pl-0 h-full relative aspect-video">
              <video
                src={video}
                controls
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {videos.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </>
        )}
      </Carousel>
    </div>
  );
}