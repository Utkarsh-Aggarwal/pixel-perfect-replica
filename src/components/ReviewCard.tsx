import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const ReviewCard = ({ name, avatar, rating, text }: ReviewCardProps) => {
  return (
    <div className="rounded-2xl bg-card/60 backdrop-blur-sm border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40 hover:shadow-lg hover:shadow-foreground/5">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-foreground/30"
        />
        <div>
          <h4 className="font-sans font-semibold text-foreground">{name}</h4>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

export default ReviewCard;
