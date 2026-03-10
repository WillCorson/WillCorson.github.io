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
import { useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, Html, useProgress } from "@react-three/drei";
import { STLLoader } from "three-stdlib";

const GALLERY_IMAGES =[
  "/STL/EnmaExploded.stl",
  "/STL/EnmaGuardHole.stl",
  "/STL/FrierenStaff.stl",
  "/STL/hornets.stl",
  "/STL/hornetsPins.stl",
  "/STL/trueShikaiQuincy.stl",
  "/STL/trueShikaiQuincyExploded.stl",
];

// Sub-component to load and render the STL file
function STLModel({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url);
  return (
    <mesh geometry={geometry}>
      {/* You can change the color/material of the STL here */}
      <meshStandardMaterial color="#94a3b8" roughness={0.4} metalness={0.6} />
    </mesh>
  );
}

// Sub-component to show a loading spinner while the STL fetches
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2">
        {/* DaisyUI Spinner */}
        <span className="loading loading-spinner loading-lg text-gray-400"></span>
        <span className="text-gray-400 font-semibold text-sm animate-pulse">
          Loading Model...
        </span>
      </div>
    </Html>
  );
}

export default function Home() {
  const[currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel (Commented out: usually you want auto-advance OFF for 3D models 
  // so the user has time to drag, rotate, and interact with the model without it switching)
  /*
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); 
    return () => clearInterval(timer);
  }, [currentSlide]);
  */

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
        
        {/* LEFT COLUMN: 3D STL Carousel */}
        <div className="w-full order-2 lg:order-1">
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 group cursor-grab active:cursor-grabbing">
            
            {/* 3D Canvas Display */}
            <div className="w-full h-full relative z-0">
               <Canvas camera={{ position:[0, 0, 5], fov: 50 }}>
                 <Suspense fallback={<Loader />}>
                   {/* Stage automatically centers the model and sets up good studio lighting */}
                   <Stage environment="city" intensity={0.5}>
                     <STLModel url={GALLERY_IMAGES[currentSlide]} />
                   </Stage>
                 </Suspense>
                 {/* OrbitControls allows the user to drag to rotate and scroll to zoom */}
                 <OrbitControls autoRotate autoRotateSpeed={2} makeDefault />
               </Canvas>
               
               {/* Overlay Gradient (Pointer events none ensures it doesn't block 3D rotation) */}
               <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Controls (Z-index added so buttons sit above the 3D canvas) */}
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
              {GALLERY_IMAGES.map((_, idx) => (
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

        {/* RIGHT COLUMN: Profile Picture & Actions */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-1 lg:order-2">
          
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-gray-100">
             <img 
              src="/will.png" 
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
              I am a passionate Designer/Engineer with extensive experience in 3d design and rapid prototyping. I specialize in bringing ideas into reality, 
              whether that be conceptual or fictional and adding functionality to it. I am looking for a position that will make me think creatively and challenge 
              me to grow as a designer. I currently attend the University of Cincinnati College of Engineering studying Mechanical Engineering Technology and 
              pursuing a Creative Writing Certificate.
            </p>
            <p>
              For most of my career thus far I have focused myself on honing my prototyping skills by mastering CAD/3D design and additive/subtractive 
              manufacturing processes which I can use to bring prototypes to life! This can be seen through my projects both professional & personal 
              ranging from Needle caps meant for wide use among hospital staff to functional props from stories and games. 
            </p>
            <p>
              Outside of my career and personal projects I also get up to a variety of activities and actively participate in a variety of clubs & 
              organizations including but not limited to:
            </p>
            
            {/* FIXED HTML STRUCTURE & LIST STYLING */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                  Organizations
                </h4>
                {/* Styled Unordered List */}
                <ul className="list-disc list-inside space-y-3 text-gray-600 marker:text-blue-500">
                  <li>President of Animation Club for 2 years, officer for 3</li>
                  <li>Relay For Life team captain 2022-2026, raised over $1000 in 2025</li>
                  <li>Team captain for a recreational Volleyball team</li>
                  <li>University of Cincinnati's Student Government</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                  Activities
                </h4>
                {/* Styled Unordered List */}
                <ul className="list-disc list-inside space-y-3 text-gray-600 marker:text-green-500">
                  <li>Sailing</li>
                  <li>Hiking</li>
                  <li>Team captain for a recreational Volleyball team</li>
                  <li>Creative Writing</li>
                </ul>
              </div>
            </div>

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