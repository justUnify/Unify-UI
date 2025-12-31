"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
 const [showPassword, setShowPassword] = useState(false);

 return (
  <main className="min-h-screen bg-white p-4 flex flex-col md:justify-center relative">

   <div className="flex-1 flex items-center justify-center">
    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
     {/* Form Section */}
     <div className="w-full md:w-1/2 max-w-md">
      <div className="text-center mb-8">
       <h1 className="text-3xl font-bold text-black mb-2">Welcome Back</h1>
       <p className="text-gray-500 font-medium">Log in to continue buying and selling on campus</p>
      </div>

      <form className="space-y-6">
       <div>
        <label className="block text-sm font-bold text-black mb-2">Student Email</label>
        <p className="text-xs text-gray-400 mb-2">Must be a valid .edu email address</p>
        <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <rect width="20" height="16" x="2" y="4" rx="2" />
           <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
         </div>
         <input
          type="email"
          placeholder="you@university.edu"
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black placeholder-gray-400 font-medium"
         />
        </div>
       </div>

       <div>
        <label className="block text-sm font-bold text-black mb-2">Password</label>
        <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
           <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
         </div>
         <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black placeholder-gray-400 font-medium"
         />
         <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
         >
          {showPassword ? (
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line x1="2" x2="22" y1="2" y2="22" />
           </svg>
          ) : (
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
           </svg>
          )}
         </button>
        </div>
        <div className="flex justify-between mt-2">
         <Link href="/" className="text-sm text-gray-500 font-bold hover:text-orange-500 transition-colors flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="m12 19-7-7 7-7" />
           <path d="M19 12H5" />
          </svg>
          Back to Home
         </Link>
         <Link href="#" className="text-sm text-orange-500 font-bold hover:underline">
          Forgot Password?
         </Link>
        </div>
       </div>

       <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transform duration-200">
        Login
       </button>
      </form>

      <div className="mt-8 text-center">
       <p className="text-gray-500 font-medium">
        Don't have an account?{' '}
        <Link href="/signup" className="text-orange-500 font-bold hover:underline">
         Sign up
        </Link>
       </p>
      </div>
     </div>

     {/* Image Section */}
     <div className="hidden md:flex w-full md:w-1/2 justify-center relative">
      {/* Background Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
       <img
        src="/unify5.jpg"
        alt="Student Sitting"
        className="object-contain w-full h-full relative z-10"
       />
      </div>
     </div>
    </div>
   </div>
  </main>
 );
}
