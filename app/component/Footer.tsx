import Link from 'next/link';

export default function Footer() {
 return (
  <footer className="bg-white border-t border-gray-100 py-16 px-4 mt-20">
   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    <div className="flex flex-col items-start gap-6">
     <div className="flex items-center gap-2">
      <div className="w-10 h-10  rounded-full flex items-center justify-center text-orange-500">
       <img src="/Unify Logo.png" alt="Unify Logo" className="w-6 h-6" />
      </div>
      <span className="font-bold text-2xl text-black">Unify</span>
     </div>

     <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
      <span className="text-orange-500">🇬🇧</span>
      <span className="text-sm font-bold text-orange-700">#1 Best Student Marketplace in the UK</span>
     </div>
    </div>

    <div className="flex flex-col md:items-end gap-8">
     <div className="flex gap-8 text-sm font-bold text-gray-600">
      <Link href="#" className="hover:text-orange-500 transition-colors">About</Link>
      <Link href="#" className="hover:text-orange-500 transition-colors">Privacy</Link>
      <Link href="#" className="hover:text-orange-500 transition-colors">Terms</Link>
      <Link href="#" className="hover:text-orange-500 transition-colors">Contact</Link>
     </div>
     <div className="text-sm text-gray-400 font-medium mt-auto">
      © 2025 justUnify. All rights reserved.
     </div>
    </div>
   </div>
  </footer>
 );
}
