import React from 'react';

const testimonials = [
 {
  id: 1,
  name: "Sarah Jenkins",
  role: "Seller @ NYU",
  image: "/image 40.png",
  quote: "I used to feel invisible, but with Unify, my handmade jewelry is finally getting seen by everyone on campus. I feel invincible now!"
 },
 {
  id: 2,
  name: "David Chen",
  role: "Buyer @ UCLA",
  image: "/image 41.png",
  quote: "Finding reliable services on campus was a nightmare. Unify made it so easy to find a tutor who actually goes to my school."
 },
 {
  id: 3,
  name: "Maya Patel",
  role: "Seller @ UT Austin",
  image: "/image 42.png",
  quote: "My vintage clothing store blew up overnight. Unify gave me the platform I needed to reach students who actually care about sustainable fashion."
 },
 {
  id: 4,
  name: "James Wilson",
  role: "Buyer @ Michigan",
  image: "/image 43.png",
  quote: "I bought a bike from a senior moving out. The process was safe, easy, and I made a new friend. Unify is a game changer."
 }
];

export default function LovedBySection() {
 return (
  <section className="flex flex-col items-center text-center mt-16 px-4 max-w-6xl mx-auto mb-20">
   <h2 className="text-3xl md:text-4xl font-black mb-6">
    <span className="text-black">Loved by </span>
    <span className="text-orange-500">Student</span>
    <span className="text-black"> Sellers and Buyers</span>
   </h2>

   <p className="text-black max-w-2xl text-lg font-semibold mb-16">
    Students are talented but invisible. Unify helps you build credibility,
    showcase what you do, and get discovered on campus.
   </p>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    {testimonials.map((testimonial) => (
     <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-left flex flex-col gap-6 hover:-translate-y-1">
      <div className="flex items-center gap-4">
       <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-100">
        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
       </div>
       <div>
        <h4 className="font-bold text-lg text-black">{testimonial.name}</h4>
        <p className="text-sm text-orange-500 font-bold">{testimonial.role}</p>
       </div>
      </div>
      <div className="relative">
       <span className="absolute -top-4 -left-2 text-6xl text-orange-100 font-serif">"</span>
       <p className="text-gray-600 font-medium leading-relaxed relative z-10">
        {testimonial.quote}
       </p>
      </div>
      <div className="flex gap-1 text-orange-400 mt-auto">
       {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
       ))}
      </div>
     </div>
    ))}
   </div>
  </section>
 );
}
