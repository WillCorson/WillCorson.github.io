import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PhotoCarouselDisplay({ photos }: { photos: string[] }) {
  if (!photos || photos.length === 0) return null;

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-ocean-100 bg-ocean-100/50 shadow-[0_16px_40px_rgba(3,4,94,0.08)]">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full ml-0">
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="pl-0 h-full relative aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Only show arrows if there's more than 1 photo */}
        {photos.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </>
        )}
      </Carousel>
    </div>
  );
}