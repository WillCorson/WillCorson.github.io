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
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 group cursor-grab active:cursor-grabbing">
            {/* 3D Canvas Display */}
            <div className="w-full h-full relative z-0">
               <Canvas camera={{ position:[0, 0, 5], fov: 50 }}>
                 <Suspense 
                    fallback={
                      <Html center>
                        <Loader className="animate-spin text-gray-500" size={32} />
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
              className="absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {stls.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? "bg-gray-800 w-4" : "bg-gray-400"
                  }`} 
                />
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2 italic">
            Snapshots from recent builds & design work (Drag to rotate)
          </p>
        </div>
  );
};