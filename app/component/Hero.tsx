"use client";
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
 const [count, setCount] = useState(0);
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
  const end = 200000;
  const duration = 2000;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
   const elapsed = currentTime - startTime;
   const progress = Math.min(elapsed / duration, 1);

   // Ease out quart
   const easeOut = 1 - Math.pow(1 - progress, 4);

   setCount(Math.floor(easeOut * end));

   if (progress < 1) {
    requestAnimationFrame(animate);
   }
  };

  requestAnimationFrame(animate);
 }, []);

 return (
  <section className="relative flex flex-col items-center justify-center text-center mt-24 px-4 overflow-hidden min-h-[60vh]">
   {/* Background Elements */}
   <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
    {/* Floating Shapes */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
    <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

    {/* Falling Particles */}
    {mounted && [...Array(15)].map((_, i) => (
     <div
      key={i}
      className="absolute bg-orange-500/20 rounded-full animate-fall"
      style={{
       left: `${Math.random() * 100}%`,
       top: `-${Math.random() * 20}%`,
       width: `${Math.random() * 10 + 5}px`,
       height: `${Math.random() * 10 + 5}px`,
       animationDuration: `${Math.random() * 5 + 5}s`,
       animationDelay: `${Math.random() * 5}s`,
      }}
     />
    ))}

    {/* Geometric Shapes */}
    <div className="absolute top-1/4 left-10 w-8 h-8 border-2 border-orange-300/30 rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-1/3 right-10 w-6 h-6 border-2 border-blue-300/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
    <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-orange-400/20 rotate-45 animate-float" style={{ animationDelay: '2.5s' }} />
   </div>

   {/* Content */}
   <div className="relative z-10 flex flex-col items-center">
    <div className="border border-orange-200 rounded-full px-4 py-1 text-xs font-semibold text-orange-500 mb-8 uppercase tracking-wide animate-fade-in-up bg-white/50 backdrop-blur-sm">
     The UK's #1 Student Marketplace
    </div>

    <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
     <span className="block text-black [-webkit-text-stroke:1px_black] animate-fade-in-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>The UK's #1 Student</span>
     <span className="block text-orange-500 [-webkit-text-stroke:1px_#FC6520] animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
      <span className="relative inline-block">
       Marketplace.
       <svg className="absolute -z-10 -bottom-2 left-0 w-full h-4 text-orange-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="10" fill="none" />
       </svg>
      </span>
     </span>
    </h1>

    <p className="text-black max-w-2xl mb-10 text-lg font-semibold animate-fade-in-up delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
     Buy, sell, book services, and discover student businesses safely. Verified students only. Secure payments. Real reviews.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
     <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transform duration-200 group">
      Explore Marketplace <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
     </button>
     <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all hover:-translate-y-1 transform duration-200 shadow-sm hover:shadow-md bg-white/50 backdrop-blur-sm">
      Create Your Seller Profile
     </button>
    </div>
   </div>
  </section>
 );
}
