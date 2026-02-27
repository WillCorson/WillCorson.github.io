"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  Download, 
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

// REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS
const GALLERY_IMAGES = [
  "/project1.jpg", // Placeholder example
  "/project2.jpg",
  "/project3.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel (optional, remove if unwanted)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-[80vh] animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto px-4 py-12">
      
      {/* --- SECTION 1: CENTERED NAME/HEADER --- */}
      <div className="text-center mb-12">
        <p className="text-xl text-gray-500 mt-4 font-medium uppercase tracking-widest">
          William Corson
        </p>
      </div>

      {/* --- SECTION 2: GRID (GALLERY | PROFILE) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        
        {/* LEFT COLUMN: Photo Carousel */}
        <div className="w-full order-2 lg:order-1">
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 group">
            {/* Image Display */}
            <div className="w-full h-full relative">
               {/* Note: In a real app, use Next.js <Image fill /> */}
               <img 
                 src={GALLERY_IMAGES[currentSlide]} 
                 alt={`Gallery slide ${currentSlide + 1}`}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 // Fallback for demo purposes if image is missing
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://placehold.co/600x400/e2e8f0/94a3b8?text=Project+Image";
                 }}
               />
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {GALLERY_IMAGES.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? "bg-white w-4" : "bg-white/50"
                  }`} 
                />
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2 italic">
            Snapshots from recent builds & design work
          </p>
        </div>

        {/* RIGHT COLUMN: Profile Picture & Actions */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-1 lg:order-2">
          
          {/* Profile Picture */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-gray-100">
             <img 
              src="/globe.svg" 
              alt="Will Corson" 
              className="object-cover w-full h-full"
            /> 
          </div>
        </div>
      </div>

      {/* --- SECTION 3: ABOUT ME --- */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6 border-b border-gray-200 pb-4">
            About Me
          </h3>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. 
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
      </div>

      {/* --- SECTION 4: CONTACT AREA --- */}
      <div className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Get in Touch</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          
          {/* Email Card */}
          <a 
            href="mailto:goalmaster8@gmail.com" 
            className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
              <Mail className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email Me</p>
              <p className="text-lg font-medium text-gray-900">goalmaster8@gmail.com</p>
            </div>
          </a>

          {/* Phone Card */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all group cursor-default">
            <div className="bg-green-50 p-4 rounded-full group-hover:bg-green-100 transition-colors">
              <Phone className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Call Me</p>
              <p className="text-lg font-medium text-gray-900">+1 (555) 123-4567</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}