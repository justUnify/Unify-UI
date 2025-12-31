"use client";
import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/Footer';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
 return (
  <main className="min-h-screen bg-white relative overflow-hidden">
   {/* Background Shapes */}
   <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] animate-float" />
    <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-[120px]" />
   </div>

   <div className="relative z-10">
    <Navbar />

    <section className="pt-40 pb-20 px-4 max-w-6xl mx-auto text-center">
     <div className="inline-block border border-orange-200 rounded-full px-4 py-1 text-xs font-semibold text-orange-500 mb-6 uppercase tracking-wide">
      Simple Pricing
     </div>

     <h1 className="text-5xl md:text-6xl font-black mb-6 text-black">
      Invest in your <span className="text-orange-500">Side Hustle</span>
     </h1>

     <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 font-medium">
      Start for free and upgrade as you grow. No hidden fees, cancel anytime.
     </p>

     {/* Pricing Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Free Plan */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col text-left relative overflow-hidden">
       <div className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-2">UniSeller</h3>
        <p className="text-gray-500 text-sm font-medium">Everything you need to start selling</p>
       </div>

       <div className="mb-8">
        <span className="text-5xl font-black text-black">£0</span>
        <span className="text-gray-400 font-medium">/month</span>
       </div>

       <Link href="/signup" className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-orange-500 hover:text-orange-500 transition-colors text-center mb-8">
        Start for Free
       </Link>

       <div className="space-y-4 flex-1">
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-600 font-medium text-sm">Verified Student Profile</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-600 font-medium text-sm">Unlimited Listings</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-600 font-medium text-sm">Secure Payments</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-500 font-medium text-sm">5% Commission Fee</span>
        </div>
        <div className="flex items-center gap-3 opacity-50">
         <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
          <X size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-400 font-medium text-sm">Advanced Analytics</span>
        </div>
        <div className="flex items-center gap-3 opacity-50">
         <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0">
          <X size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-400 font-medium text-sm">Profile Customization</span>
        </div>
       </div>
      </div>

      {/* Paid Plan */}
      <div className="bg-white rounded-3xl p-8 border-2 border-orange-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col text-left relative overflow-hidden group">

       <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
        MOST POPULAR
       </div>

       <div className="mb-8 relative z-10">
        <h3 className="text-2xl font-bold text-black mb-2">UniSeller<span className="text-orange-500">+</span></h3>
        <p className="text-gray-500 text-sm font-medium">Scale your hustle like a pro</p>
       </div>

       <div className="mb-8 relative z-10">
        <span className="text-5xl font-black text-black">£4.99</span>
        <span className="text-gray-400 font-medium">/month</span>
       </div>

       <Link href="/signup" className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors text-center mb-8 shadow-lg shadow-orange-500/25 relative z-10">
        Upgrade to Plus
       </Link>

       <div className="space-y-4 flex-1 relative z-10">
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-700 font-medium text-sm">0% Commission (Keep 100%)</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-700 font-medium text-sm">Unlimited Customizability</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-700 font-medium text-sm">Advanced Analytics</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-700 font-medium text-sm">1 Free Post Boost / Month</span>
        </div>
        <div className="flex items-center gap-3">
         <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
          <Check size={12} strokeWidth={3} />
         </div>
         <span className="text-gray-700 font-medium text-sm">Pro Seller Badge</span>
        </div>
       </div>
      </div>
     </div>
    </section>

    <Footer />
   </div>
  </main>
 );
}
