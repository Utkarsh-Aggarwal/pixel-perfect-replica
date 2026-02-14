import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

const BestO2 = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-16">
      <SectionTitle title="Our Best O2" />
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=700&h=600&fit=crop"
            alt="Best O2 Plant"
            className="w-full h-80 md:h-[450px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Areca Palm – Nature's Air Purifier
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The Areca Palm is one of the best natural air purifiers. It removes harmful toxins like formaldehyde, 
            xylene and toluene from the air while releasing moisture, making it a perfect indoor companion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Recommended by NASA for its air-cleaning properties, this elegant palm adds a tropical vibe 
            to any space while actively improving the quality of air you breathe.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <button className="rounded-full px-8 py-2.5 bg-transparent text-foreground border border-foreground/60 hover:bg-foreground/10 transition-colors font-medium text-sm">
              Explore
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-foreground/60 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors">
                <ArrowLeft size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-foreground/60 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="flex gap-1.5 pt-2">
            <span className="w-8 h-1.5 rounded-full bg-foreground" />
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestO2;
