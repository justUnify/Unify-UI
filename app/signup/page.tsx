"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Step1Account = ({ onNext, formData, setFormData }: any) => {
 const [showPassword, setShowPassword] = useState(false);

 return (
  <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
   {/* Form Section */}
   <div className="w-full md:w-1/2 max-w-md">
    <div className="text-center mb-8">
     <h1 className="text-3xl font-bold text-black mb-2">Join Unify</h1>
     <p className="text-gray-500 font-medium">Create your student marketplace account</p>
    </div>

    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
     <div>
      <label className="block text-sm font-bold text-black mb-2">Full Name</label>
      <div className="relative">
       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
         <circle cx="12" cy="7" r="4" />
        </svg>
       </div>
       <input
        type="text"
        placeholder="Sarah Chen"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black placeholder-gray-400 font-medium"
       />
      </div>
     </div>

     <div>
      <label className="block text-sm font-bold text-black mb-2">University</label>
      <div className="relative">
       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
         <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
       </div>
       <input
        type="text"
        placeholder="Your University Name"
        value={formData.university}
        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black placeholder-gray-400 font-medium"
       />
      </div>
     </div>

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
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        placeholder="Create a strong password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
     </div>

     <div className="flex justify-start">
      <Link href="/" className="text-sm text-gray-500 font-bold hover:text-orange-500 transition-colors flex items-center gap-1">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
       </svg>
       Back to Home
      </Link>
     </div>

     <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transform duration-200">
      Continue
     </button>

     <p className="text-xs text-gray-400 text-center mt-4">
      By signing up, you agree to our Terms of Service and Privacy Policy
     </p>
    </form>

    <div className="mt-8 text-center">
     <p className="text-gray-500 font-medium">
      Already have an account?{' '}
      <Link href="/login" className="text-orange-500 font-bold hover:underline">
       Log in
      </Link>
     </p>
    </div>
   </div>

   {/* Image Section */}
   <div className="hidden md:flex w-full md:w-1/2 justify-center relative">
    {/* Background Shapes */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 right-10 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10" />

    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
     <img
      src="/unify4.jpg"
      alt="Student Running"
      className="object-contain w-full h-full relative z-10"
     />
    </div>
   </div>
  </div>
 );
};

const Step2Intent = ({ onNext, onBack, formData, setFormData }: any) => {
 const options = [
  { id: 'buying', label: 'Buying', desc: "You're here to shop for items and services", icon: '🛍️' },
  { id: 'selling', label: 'Selling', desc: "You're here to share your business", icon: '💰' },
  { id: 'both', label: 'Both', desc: "You plan on dabbling in both aspects", icon: '🤝' },
 ];

 return (
  <div className="max-w-4xl w-full flex flex-col items-center">
   <h2 className="text-3xl font-bold text-black mb-12 text-center">What will you be using Unify for?</h2>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
    {options.map((option) => (
     <div
      key={option.id}
      onClick={() => setFormData({ ...formData, intent: option.id })}
      className={`cursor-pointer rounded-2xl p-8 border-2 transition-all duration-200 flex flex-col items-center text-center gap-4 hover:shadow-lg ${formData.intent === option.id
       ? 'border-orange-500 bg-orange-50'
       : 'border-dashed border-gray-200 hover:border-orange-300'
       }`}
     >
      <div className="text-4xl mb-2">{option.icon}</div>
      <h3 className="text-xl font-bold text-black">{option.label}</h3>
      <p className="text-sm text-gray-500 font-medium">{option.desc}</p>
      {formData.intent === option.id && (
       <div className="absolute top-4 right-4 text-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
       </div>
      )}
     </div>
    ))}
   </div>

   <div className="flex gap-4 w-full max-w-md">
    <button onClick={onBack} className="flex-1 py-3 rounded-lg border border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition-colors">
     Go Back
    </button>
    <button
     onClick={onNext}
     disabled={!formData.intent}
     className={`flex-1 py-3 rounded-lg font-bold text-white transition-colors shadow-lg ${formData.intent ? 'bg-orange-500 hover:bg-orange-600 hover:-translate-y-1' : 'bg-gray-300 cursor-not-allowed'
      }`}
    >
     Continue
    </button>
   </div>
  </div>
 );
};

const Step3Profile = ({ onNext, onBack, formData, setFormData }: any) => {
 const [preview, setPreview] = useState<string | null>(null);

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setPreview(reader.result as string);
    setFormData({ ...formData, profileImage: reader.result });
   };
   reader.readAsDataURL(file);
  }
 };

 return (
  <div className="max-w-2xl w-full flex flex-col items-center text-center">
   <h2 className="text-3xl font-bold text-black mb-4">Add a profile picture</h2>
   <p className="text-gray-500 font-medium mb-12">Help others recognize you on campus</p>

   <div className="mb-12 relative group">
    <div className="w-48 h-48 rounded-full bg-gray-100 border-4 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative">
     {preview ? (
      <img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
     ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
       <circle cx="12" cy="7" r="4" />
      </svg>
     )}
     <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="absolute inset-0 opacity-0 cursor-pointer z-10"
     />
     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <span className="text-white font-bold">Change Photo</span>
     </div>
    </div>
   </div>

   <div className="flex gap-4 w-full max-w-md">
    <button onClick={onBack} className="flex-1 py-3 rounded-lg border border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition-colors">
     Go Back
    </button>
    <button onClick={onNext} className="flex-1 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transform duration-200">
     {preview ? 'Continue' : 'Skip for now'}
    </button>
   </div>
  </div>
 );
};

const Step4Seller = ({ onNext, onBack, formData, setFormData }: any) => {
 return (
  <div className="max-w-2xl w-full flex flex-col items-center">
   <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-black mb-2">Build your Seller Page</h2>
    <p className="text-gray-500 font-medium">Add links to your portfolio or social media</p>
   </div>

   <div className="w-full space-y-4 mb-12">
    {['Instagram', 'Portfolio', 'LinkedIn', 'Other'].map((platform) => (
     <div key={platform}>
      <label className="block text-sm font-bold text-black mb-2">{platform}</label>
      <div className="relative">
       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
         <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
       </div>
       <input
        type="text"
        placeholder={`https://${platform.toLowerCase()}.com/username`}
        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black placeholder-gray-400 font-medium"
       />
      </div>
     </div>
    ))}
   </div>

   <div className="flex gap-4 w-full max-w-md">
    <button onClick={onBack} className="flex-1 py-3 rounded-lg border border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition-colors">
     Go Back
    </button>
    <button onClick={onNext} className="flex-1 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transform duration-200">
     Continue
    </button>
   </div>
  </div>
 );
};

const Step5Verify = ({ onBack, formData }: any) => {
 return (
  <div className="max-w-md w-full flex flex-col items-center text-center">
   <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <rect width="20" height="16" x="2" y="4" rx="2" />
     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
   </div>

   <h2 className="text-3xl font-bold text-black mb-4">Verify your email</h2>
   <p className="text-gray-500 font-medium mb-8">
    We sent a verification code to <span className="text-black font-bold">{formData.email || 'your email'}</span>.
    Enter the code below to verify your account.
   </p>

   <div className="flex gap-3 mb-8 justify-center">
    {[1, 2, 3, 4].map((i) => (
     <input
      key={i}
      type="text"
      maxLength={1}
      className="w-14 h-14 text-center text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-black"
     />
    ))}
   </div>

   <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transform duration-200 mb-4">
    Verify Email
   </button>

   <button onClick={onBack} className="text-gray-400 hover:text-gray-600 font-medium text-sm">
    Back to previous step
   </button>
  </div>
 );
};

export default function SignupPage() {
 const [step, setStep] = useState(1);
 const [formData, setFormData] = useState({
  fullName: '',
  university: '',
  email: '',
  password: '',
  intent: '', // buying, selling, both
  profileImage: null as string | null,
  links: {}
 });

 const nextStep = () => {
  if (step === 3 && formData.intent === 'buying') {
   setStep(5); // Skip seller setup if only buying
  } else {
   setStep(step + 1);
  }
 };

 const prevStep = () => {
  if (step === 5 && formData.intent === 'buying') {
   setStep(3); // Go back to profile if skipped seller setup
  } else {
   setStep(step - 1);
  }
 };

 return (
  <main className="min-h-screen bg-white p-4 flex flex-col md:justify-center relative">
   {/* Progress Bar (Optional, for steps > 1) */}
   {step > 1 && (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-100 z-20">
     <div
      className="h-full bg-orange-500 transition-all duration-500 ease-out"
      style={{ width: `${(step / 5) * 100}%` }}
     ></div>
    </div>
   )}

   <div className="flex-1 flex items-center justify-center w-full">
    {step === 1 && <Step1Account onNext={nextStep} formData={formData} setFormData={setFormData} />}
    {step === 2 && <Step2Intent onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />}
    {step === 3 && <Step3Profile onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />}
    {step === 4 && <Step4Seller onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />}
    {step === 5 && <Step5Verify onBack={prevStep} formData={formData} />}
   </div>
  </main>
 );
}
