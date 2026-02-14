import { ShoppingCart } from "lucide-react";

interface PlantCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  highlighted?: boolean;
}

const PlantCard = ({ name, description, price, image, highlighted = false }: PlantCardProps) => {
  return (
    <div
      className={`group rounded-2xl bg-card/60 backdrop-blur-sm border border-foreground/20 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-foreground/5`}
    >
      <div className="relative overflow-hidden rounded-xl bg-secondary/50 aspect-square mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="font-sans text-lg font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-foreground font-bold text-lg">{price}</span>
        <button className="w-10 h-10 rounded-full bg-transparent border border-foreground/60 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
