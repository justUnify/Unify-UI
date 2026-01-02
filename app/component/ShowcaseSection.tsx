import React from 'react';
import ServiceCard from './ServiceCard';

export default function ShowcaseSection() {
 return (
  <section className="flex flex-col items-center text-center mt-16 px-4 max-w-6xl mx-auto mb-10">
   <h2 className="text-3xl md:text-4xl font-black mb-4">
    <span className="text-black">Marketplace for </span>
    <span className="text-orange-500">Student Services</span>
   </h2>

   <p className="text-black max-w-2xl text-lg font-semibold mb-12">
    From tutoring and photography to repairs and design. <br />
    Discover student talent in your university.
   </p>

   <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-stretch">
    {/* Service Example 1 */}
    <div className="flex flex-col items-center w-full md:w-auto">
     <span className="mb-6 font-bold text-gray-400 uppercase tracking-widest text-xs">Photography</span>
     <ServiceCard
      name="Sean Idiai"
      username="seanidiai"
      university="University of Kent"
      rating={5.0}
      tags={['Photography', 'Events', 'Portraits']}
      profileImage="/image 42.png"
     />
    </div>

    {/* Service Example 2 */}
    <div className="flex flex-col items-center w-full md:w-auto">
     <span className="mb-6 font-bold text-gray-400 uppercase tracking-widest text-xs">Tutoring</span>
     <ServiceCard
      name="Sarah Jenkins"
      username="sarahj_tutor"
      university="University of Leeds"
      rating={4.9}
      tags={['Maths', 'Physics', 'Exam Prep']}
      profileImage="/image 41.png"
     />
    </div>
   </div>
  </section>
 );
}
