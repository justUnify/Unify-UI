import React from 'react';
import ServiceCard from './ServiceCard';
import ProductCard from './ProductCard';

export default function ShowcaseSection() {
 return (
  <section className="flex flex-col items-center text-center mt-16 px-4 max-w-6xl mx-auto mb-10">
   <h2 className="text-3xl md:text-4xl font-black mb-4">
    <span className="text-black">Marketplace for </span>
    <span className="text-orange-500">Products & Services</span>
   </h2>

   <p className="text-black max-w-2xl text-lg font-semibold mb-12">
    From clothing and electronics to tutoring and photography. <br />
    Discover student hustles in your university.
   </p>

   <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-stretch">
    {/* Product Example */}
    <div className="flex flex-col items-center w-full md:w-auto">
     <span className="mb-6 font-bold text-gray-400 uppercase tracking-widest text-xs">Products</span>
     <ProductCard
      title="Vintage Nike Sweatshirt"
      price="£25.00"
      image="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      username="sarahj"
      rating={4.8}
      tags={['Clothing', 'Vintage', 'Fashion']}
     />
    </div>

    {/* Service Example */}
    <div className="flex flex-col items-center w-full md:w-auto">
     <span className="mb-6 font-bold text-gray-400 uppercase tracking-widest text-xs">Services</span>
     <ServiceCard
      name="Sean Idiai"
      username="seanidiai"
      university="University of Kent"
      rating={5.0}
      tags={['Tutoring', 'Photography', 'Repairs']}
      profileImage="/image 42.png"
     />
    </div>
   </div>
  </section>
 );
}
