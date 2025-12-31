export default function FeatureSection() {
 return (
  <section className="flex flex-col items-center text-center mt-20 px-2 max-w-6xl mx-auto">
   <div className="border border-orange-200 rounded-full px-4 py-1 text-xs font-semibold text-orange-500 mb-8 uppercase tracking-wide">
    Your Professional Identity
   </div>

   <h2 className="text-4xl md:text-5xl font-black font-extrabold mb-6">
    <span className="text-black">More Than Just a Profile. </span>
    <br />
    <span className="text-orange-500">It's Your Reputation.</span>
   </h2>

   <p className="text-black max-w-2xl text-lg leading-relaxed font-bold mb-20">
    Every seller gets a professional profile with a portfolio, reviews, and trust badges.
    Build your campus reputation and share your page anywhere.
   </p>

   {/* Feature Row 1 */}
   <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 mb-24">
    <div className="w-full md:w-1/2 flex justify-center">
     <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
      <img src="/unify4.jpg" alt="Student Running" className="object-contain w-full h-full" />
     </div>
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
     <h3 className="text-xl md:text-2xl font-black text-black leading-tight">
      Showcase your work with a <span className="text-orange-500">professional portfolio</span> <br />
      and let your reviews speak for themselves.
     </h3>
    </div>
   </div>

   {/* Feature Row 2 */}
   <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full gap-12">
    <div className="w-full md:w-1/2 flex justify-center">
     <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
      <img src="/unify5.jpg" alt="Student Standing" className="object-contain w-full h-full" />
     </div>
    </div>
    <div className="w-full md:w-1/2 text-center md:text-right">
     <h3 className="text-xl md:text-2xl font-black text-black leading-tight">
      <span className="text-orange-500">Verified Student Status</span> <br />
      means instant trust from buyers on your campus.
     </h3>
    </div>
   </div>
  </section>
 );
}
