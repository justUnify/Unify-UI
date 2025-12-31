import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import AiSearchSection from "./component/AiSearchSection";
import FeatureSection from "./component/FeatureSection";
import BeFoundSection from "./component/BeFoundSection";
import ShowcaseSection from "./component/ShowcaseSection";
import LovedBySection from "./component/LovedBySection";
import BackedBySection from "./component/BackedBySection";
import AnimatedBackground from "./component/AnimatedBackground";
import Footer from "./component/Footer";

export default function page() {
 return (
  <main className="min-h-screen bg-white relative overflow-hidden">
   <AnimatedBackground />
   <div className="relative z-10">
    <Navbar />
    <Hero />
    <AiSearchSection />
    <ShowcaseSection />
    <BeFoundSection />
    <FeatureSection />
    <LovedBySection />
    <BackedBySection />
    <Footer />
   </div>
  </main>
 );
}
