"use client";
import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);

 if (!mounted) return null;

 return (
  <div className="fixed inset-0 pointer-events-none select-none overflow-hidden -z-50">
   {/* Floating Shapes */}
   <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
   <div className="absolute top-1/3 right-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
   <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

   {/* Falling Particles */}
   {[...Array(20)].map((_, i) => (
    <div
     key={i}
     className="absolute bg-orange-500/20 rounded-full animate-fall"
     style={{
      left: `${Math.random() * 100}%`,
      top: `-${Math.random() * 20}%`,
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      animationDuration: `${Math.random() * 10 + 10}s`, // Slower fall for full page
      animationDelay: `${Math.random() * 10}s`,
     }}
    />
   ))}

   {/* Geometric Shapes */}
   <div className="absolute top-1/4 left-10 w-12 h-12 border-2 border-orange-300/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }} />
   <div className="absolute bottom-1/3 right-10 w-8 h-8 border-2 border-blue-300/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
   <div className="absolute top-1/2 left-3/4 w-6 h-6 bg-orange-400/10 rotate-45 animate-float" style={{ animationDelay: '2.5s' }} />
  </div>
 );
}
