"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
 const [isVisible, setIsVisible] = useState(true);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 useEffect(() => {
  const controlNavbar = () => {
   if (typeof window !== 'undefined') {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down and past 100px
     setIsVisible(false);
    } else { // if scroll up
     setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
   }
  };

  if (typeof window !== 'undefined') {
   window.addEventListener('scroll', controlNavbar);

   // cleanup function
   return () => {
    window.removeEventListener('scroll', controlNavbar);
   };
  }
 }, [lastScrollY]);

 return (
  <>
   {/* Desktop Navbar */}
   <nav
    className={`fixed left-0 right-0 top-6 mx-auto z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-32'
     } flex items-center justify-between px-6 py-4 border border-orange-200 rounded-full max-w-6xl bg-white/80 backdrop-blur-md shadow-sm`}
   >
    <div className="flex items-center gap-8">
     <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
       <img src="/Unify Logo.png" alt="Unify Logo" />
      </div>
     </Link>
     <div className="hidden md:flex items-center gap-6 text-sm font-bold text-black">
      <Link href="#" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500">
       Services
      </Link>
      <Link href="/pricing" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500">
       Pricing
      </Link>
     </div>
    </div>
    <div className="hidden md:flex items-center gap-4">
     <Link href="/login" className="px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
      Login
     </Link>
     <Link href="/signup" className="px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
      Signup for Free
     </Link>
    </div>
   </nav>

   {/* Mobile Menu Button (Bottom Right) */}
   <button
    onClick={() => setIsMobileMenuOpen(true)}
    className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
   >
    <Menu size={24} />
   </button>

   {/* Mobile Sidebar */}
   <div className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
    {/* Backdrop */}
    <div
     className="absolute inset-0 bg-black/50 backdrop-blur-sm"
     onClick={() => setIsMobileMenuOpen(false)}
    ></div>

    {/* Sidebar Content */}
    <div className={`absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl p-6 flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
     <div className="flex justify-between items-center mb-8">
      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
       <img src="/Unify Logo.png" alt="Unify Logo" />
      </div>
      <button
       onClick={() => setIsMobileMenuOpen(false)}
       className="p-2 text-gray-500 hover:text-black transition-colors"
      >
       <X size={24} />
      </button>
     </div>

     <div className="flex flex-col gap-6 flex-1">
      <Link href="#" className="text-lg font-bold text-black hover:text-orange-500 transition-colors">
       Products
      </Link>
      <Link href="/pricing" className="text-lg font-bold text-black hover:text-orange-500 transition-colors">
       Pricing
      </Link>
      <hr className="border-gray-100" />
      <Link href="/login" className="text-lg font-bold text-black hover:text-orange-500 transition-colors">
       Login
      </Link>
      <Link href="/signup" className="px-4 py-3 text-center text-sm font-bold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
       Signup for Free
      </Link>
     </div>
    </div>
   </div>
  </>
 );
}
