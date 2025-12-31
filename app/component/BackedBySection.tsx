import React from 'react';

export default function BackedBySection() {
 return (
  <section className="flex flex-col items-center text-center mt-16 px-4 max-w-6xl mx-auto mb-20">
   <h2 className="text-3xl md:text-4xl font-black mb-16">
    <span className="text-black"><span className='text-orange-500'>Backed</span> by</span>
   </h2>

   <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 w-full grayscale hover:grayscale-0 transition-all duration-500">
    {/* University of Kent */}
    <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
     <img
      src="/image 15.png"
      alt="University of Kent"
      className="h-24 md:h-28 object-contain"
     />
    </div>

    {/* ASPIRE */}
    <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
     <img
      src="/image 16.png"
      alt="ASPIRE University of Kent"
      className="h-20 md:h-24 object-contain"
     />
    </div>

    {/* Backer Person */}
    <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
     <img
      src="/image 22.png"
      alt="Backer"
      className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover shadow-lg"
     />
    </div>
   </div>
  </section>
 );
}
