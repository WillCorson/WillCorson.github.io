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
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-ocean-100 bg-ocean-100/50 shadow-[0_16px_40px_rgba(3,4,94,0.08)]">
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
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2"  />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </>
        )}
      </Carousel>
    </div>
  );
}