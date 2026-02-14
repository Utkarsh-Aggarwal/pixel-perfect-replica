import SectionTitle from "./SectionTitle";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Absolutely love my Monstera! It arrived in perfect condition and has been thriving ever since. The packaging was eco-friendly too!",
  },
  {
    name: "Arjun Patel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    text: "Great variety of plants and very reasonable prices. The customer service team was incredibly helpful with care instructions.",
  },
  {
    name: "Meera Reddy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "My office looks so much better with the plants I ordered from Planto. Fresh air and beautiful aesthetics combined!",
  },
];

const CustomerReviews = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-16">
      <SectionTitle title="Customer Review" />
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
