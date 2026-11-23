import { Canvas } from "@react-three/fiber";
import { Loader, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, Suspense } from "react";
// 1. Import Html from drei
import { OrbitControls, Stage, Html } from "@react-three/drei";
import { STLModel } from "./STLModel";

// --- 3. Helper Component: Placeholder for Three.js/STL ---
export default function ProjectMediaPlaceholder({ stls }: { stls: string[] }) {
  const[currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
      setCurrentSlide((prev) => (prev === stls.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? stls.length - 1 : prev - 1));
  };

  return (
    <div className="w-full order-2 lg:order-1">
          <div className="group relative aspect-video cursor-grab overflow-hidden rounded-2xl border border-ocean-100 bg-gradient-to-br from-ocean-100/60 via-slate-50 to-white shadow-[0_16px_40px_rgba(3,4,94,0.08)] active:cursor-grabbing">
            {/* 3D Canvas Display */}
            <div className="w-full h-full relative z-0">
               <Canvas camera={{ position:[0, 0, 5], fov: 50 }}>
                 <Suspense 
                    fallback={
                      <Html center>
                        <Loader className="animate-spin text-ocean-700" size={32} />
                      </Html>
                    }
                  >
                   <Stage environment="city" intensity={0.5}>
                     <STLModel url={stls[currentSlide]} />
                   </Stage>
                 </Suspense>
                 <OrbitControls autoRotate autoRotateSpeed={2} makeDefault />
               </Canvas>
               <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            <button 
              onClick={prevSlide}
              className="absolute z-10 left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ocean-950 opacity-0 shadow-md transition-opacity hover:bg-ocean-100 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute z-10 right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ocean-950 opacity-0 shadow-md transition-opacity hover:bg-ocean-100 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {stls.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? "w-4 bg-ocean-700" : "bg-slate-400"
                  }`} 
                />
              ))}
            </div>
          </div>
          <p className="mt-2 text-center text-sm italic text-slate-400">
            Snapshots from recent builds & design work (Drag to rotate)
          </p>
        </div>
  );
};