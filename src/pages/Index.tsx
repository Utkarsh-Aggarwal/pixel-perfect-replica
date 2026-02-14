import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendyPlants from "@/components/TrendyPlants";
import TopSelling from "@/components/TopSelling";
import CustomerReviews from "@/components/CustomerReviews";
import BestO2 from "@/components/BestO2";
import Footer from "@/components/Footer";
import heroPlant from "@/assets/hero-plant.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero + Trendy share the same background plant */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-0">
            <img
              src={heroPlant}
              alt=""
              className="w-[700px] md:w-[900px] lg:w-[1100px] opacity-35 object-contain mix-blend-screen mt-[2vh]"
              style={{ minHeight: '100%' }}
              aria-hidden="true"
            />
          </div>
          <HeroSection />
          <TrendyPlants />
        </div>
        <TopSelling />
        <CustomerReviews />
        <BestO2 />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
