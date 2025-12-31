import React from 'react';

interface ServiceCardProps {
 name: string;
 username: string;
 university: string;
 rating: number;
 tags: string[];
 profileImage: string;
}

export default function ServiceCard({
 name,
 username,
 university,
 rating,
 tags,
 profileImage
}: ServiceCardProps) {
 return (
  <div className="w-full md:w-[350px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col group cursor-pointer h-full">
   {/* Profile Image (Main) */}
   <div className="h-48 relative overflow-hidden bg-gray-100">
    <img src={profileImage} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-500 shadow-sm uppercase tracking-wide">
     Service
    </div>
   </div>

   <div className="p-5 flex flex-col gap-3 flex-1">
    {/* Name & Rating */}
    <div className="flex justify-between items-start">
     <div className="flex items-center gap-1">
      <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-orange-500 transition-colors">{name}</h3>
      <span className="text-orange-500" title="Verified">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
       </svg>
      </span>
     </div>
     <span className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md">
      ★ {rating.toFixed(1)}
     </span>
    </div>

    {/* Seller Info */}
    <div className="flex flex-col gap-1">
     <div className="flex items-center gap-2 text-sm text-gray-500">
      <span className="font-medium text-gray-400">Offered by</span>
      <span className="font-semibold text-gray-700 hover:text-orange-500 transition-colors">ut/{username}</span>
     </div>
     <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <path d="M22 10v6M2 10v6M20 21a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9m16 0H4m16 0V5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v5" />
      </svg>
      {university}
     </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-auto pt-3">
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
