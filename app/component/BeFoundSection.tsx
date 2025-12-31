import React from 'react';
import { ShieldCheck, UserCheck, Star, Lock } from 'lucide-react';

export default function BeFoundSection() {
 const features = [
  {
   title: "Verified Students",
   description: "Every profile is verified with a university email. Know exactly who you're dealing with.",
   icon: <UserCheck size={40} className="text-orange-500" />
  },
  {
   title: "Secure Payments",
   description: "Transactions are protected. Funds are held safely until the service or product is delivered.",
   icon: <Lock size={40} className="text-orange-500" />
  },
  {
   title: "Real Reviews",
   description: "Reputation matters. Reviews are tied to real, verified transactions on campus.",
   icon: <Star size={40} className="text-orange-500" />
  },
  {
   title: "Buyer Protection",
   description: "We've got your back. Support and protection for both buyers and sellers.",
   icon: <ShieldCheck size={40} className="text-orange-500" />
  }
 ];

 return (
  <section className="flex flex-col items-center text-center mt-20 px-4 max-w-6xl mx-auto mb-16">
   <h2 className="text-3xl md:text-4xl font-bold mb-4">
    <span className="text-orange-500">Trusted</span> <span className="text-black">& Secure</span>
   </h2>

   <p className="text-black max-w-2xl text-lg font-semibold mb-16">
    Unify is built for safety. Verified identities and secure transactions mean you can buy and sell with confidence.
   </p>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full text-center">
    {features.map((feature, index) => (
     <div key={index} className="flex flex-col items-center gap-4">
      <div className="mb-2">
       {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-black">{feature.title}</h3>
      <p className="text-black text-sm font-semibold leading-relaxed max-w-sm">
       {feature.description}
      </p>
     </div>
    ))}
   </div>
  </section>
 );
}
