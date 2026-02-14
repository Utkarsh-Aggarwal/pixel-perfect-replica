import { Play, Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative container mx-auto max-w-7xl px-6 py-12 md:py-16 min-h-[85vh] flex items-center">
      <div className="relative z-10 w-full grid md:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <div className="space-y-5 pt-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-foreground">
            <span className="italic">Breath</span> <span className="italic">Natural</span>
          </h1>
          <p className="text-foreground/70 text-sm max-w-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-4 pt-1">
            <button className="rounded-full px-7 py-2.5 text-sm font-semibold bg-transparent text-foreground border border-foreground/60 hover:bg-foreground/10 transition-colors">
              Explore
            </button>
            <button className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group">
              <span className="w-10 h-10 rounded-full border border-foreground/60 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                <Play size={16} className="text-foreground ml-0.5" />
              </span>
              <span className="text-xs font-medium text-foreground">Live Demo...</span>
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="w-56 rounded-2xl bg-card/60 backdrop-blur-md border border-foreground/20 p-3 mt-6 shadow-xl">
            <div className="flex items-center gap-2 mb-1.5">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                alt="Customer"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-foreground font-sans">Alina Patel</p>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={9} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-foreground/60 leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
            </p>
          </div>
        </div>

        {/* Right - Featured Plant Card */}
        <div className="flex justify-end pt-0 md:pt-4">
          <div className="w-48 md:w-56 rounded-2xl bg-card/60 backdrop-blur-md border border-foreground/20 overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&h=400&fit=crop"
              alt="Calathea Plant"
              className="w-full h-44 object-cover"
            />
            <div className="p-3">
              <p className="text-[10px] text-foreground/50">Trendy House Plant</p>
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-sans text-sm font-bold text-foreground">Calathea plant</h3>
                <ChevronRight size={16} className="text-foreground/60" />
              </div>
              <button className="rounded-full bg-transparent text-foreground border border-foreground/60 hover:bg-foreground/10 transition-colors text-xs px-5 py-1.5 mt-2.5 w-full font-medium">
                Buy Now
              </button>
              <div className="flex justify-center gap-1.5 mt-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
