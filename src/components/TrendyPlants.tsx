import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

const plants = [
  {
    name: "For Small Decs Ai Plat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: "Rs. 599/-",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=500&fit=crop",
    imagePosition: "left" as const,
  },
  {
    name: "For Fresh Decs Ai Plat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    price: "Rs. 579/-",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&h=500&fit=crop",
    imagePosition: "right" as const,
  },
];

const TrendyPlants = () => {
  return (
    <section className="relative z-10 container mx-auto max-w-7xl px-6 py-16">
      <SectionTitle title="Our Trendy Plants" />
      <div className="flex flex-col gap-4">
        {plants.map((plant, idx) => (
          <div
            key={idx}
            className={`group rounded-3xl bg-card/40 backdrop-blur-sm border border-border/40 overflow-hidden flex flex-col ${
              plant.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Content */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{plant.name}</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-4 leading-relaxed max-w-sm">{plant.description}</p>
              <span className="text-foreground font-bold text-xl md:text-2xl mb-5">{plant.price}</span>
              <div className="flex items-center gap-3">
                <Button className="rounded-full px-6 bg-transparent text-foreground hover:bg-primary/10 border border-foreground/60 text-sm">
                  Explore
                </Button>
                <button className="w-10 h-10 rounded-full border border-foreground/60 flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
            {/* Image */}
            <div className="flex-1 relative overflow-hidden min-h-[250px] md:min-h-[300px]">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendyPlants;
