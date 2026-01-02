import { Search, Sparkles, MapPin, Clock } from 'lucide-react';

export default function AiSearchSection() {
 return (
  <section className="flex flex-col items-center text-center mt-10 px-4 max-w-6xl mx-auto mb-10">
   <div className="border border-orange-200 rounded-full px-4 py-1 text-xs font-semibold text-orange-600 mb-6 uppercase tracking-wide bg-orange-50">
    <Sparkles size={12} className="inline mr-1" /> AI-Powered Discovery
   </div>

   <h2 className="text-3xl md:text-5xl font-black mb-6">
    <span className="text-black">Search by </span>
    <span className="text-orange-500">Vibe, Need, or Intent</span>
   </h2>

   <p className="text-black max-w-2xl text-lg font-semibold mb-12">
    Don't just search for keywords. Tell Unify what you need, and our AI will find the perfect student service on your campus.
   </p>

   <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12">
    <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
     <div className="w-3 h-3 rounded-full bg-red-400"></div>
     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
     <div className="w-3 h-3 rounded-full bg-green-400"></div>
     <div className="ml-4 flex-1 bg-white rounded-md px-3 py-2 text-sm text-gray-500 flex items-center gap-2 shadow-sm">
      <Search size={16} />
      <span>Find a cheap haircut near me...</span>
     </div>
    </div>
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
     <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-purple-200 transition-colors cursor-pointer group">
      <div className="flex items-center gap-2 mb-2 text-red-600">
       <Clock size={18} />
       <span className="font-bold text-sm">Open Now</span>
      </div>
      <p className="text-gray-700 font-medium text-sm group-hover:text-red-700">"Show me a barber open tonight"</p>
     </div>
     <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors cursor-pointer group">
      <div className="flex items-center gap-2 mb-2 text-orange-500">
       <MapPin size={18} />
       <span className="font-bold text-sm">Nearby</span>
      </div>
      <p className="text-gray-700 font-medium text-sm group-hover:text-orange-600">"Find photography services at my uni"</p>
     </div>
     <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer group">
      <div className="flex items-center gap-2 mb-2 text-blue-500">
       <Sparkles size={18} />
       <span className="font-bold text-sm">Trending</span>
      </div>
      <p className="text-gray-700 font-medium text-sm group-hover:text-blue-600">"Graphic designers for my startup"</p>
     </div>
    </div>
   </div>
  </section>
 );
}
