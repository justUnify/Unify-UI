import React from 'react';

interface ProductCardProps {
 title: string;
 price: string;
 image: string;
 username: string;
 rating: number;
 tags: string[];
}

export default function ProductCard({
 title,
 price,
 image,
 username,
 rating,
 tags
}: ProductCardProps) {
 return (
  <div className="w-full md:w-[350px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col group cursor-pointer h-full">
   {/* Product Image */}
   <div className="h-48 relative overflow-hidden bg-gray-100">
    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
     {price}
    </div>
   </div>

   <div className="p-5 flex flex-col gap-3">
    {/* Title & Rating */}
    <div className="flex justify-between items-start">
     <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-orange-500 transition-colors">{title}</h3>
     <span className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md">
      ★ {rating.toFixed(1)}
     </span>
    </div>

    {/* Seller Info */}
    <div className="flex items-center gap-2 text-sm text-gray-500">
     <span className="font-medium text-gray-400">Sold by</span>
     <span className="font-semibold text-gray-700 hover:text-orange-500 transition-colors">ut/{username}</span>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-2">
     {tags.map((tag) => (
      <span key={tag} className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-semibold text-gray-500 uppercase tracking-wide border border-gray-100">
       {tag}
      </span>
     ))}
    </div>
   </div>
  </div>
 );
}
