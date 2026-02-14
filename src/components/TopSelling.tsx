import SectionTitle from "./SectionTitle";
import PlantCard from "./PlantCard";

const products = [
  { name: "Peace Lily", description: "Elegant white flowers with lush green foliage", price: "Rs. 399/-", image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop", highlighted: false },
  { name: "Fiddle Leaf Fig", description: "Statement plant with large violin-shaped leaves", price: "Rs. 799/-", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop", highlighted: false },
  { name: "Pothos Golden", description: "Trailing vine with heart-shaped golden leaves", price: "Rs. 249/-", image: "https://images.unsplash.com/photo-1572688484438-313a56e6a160?w=400&h=400&fit=crop", highlighted: true },
  { name: "Rubber Plant", description: "Glossy dark leaves that add elegance to spaces", price: "Rs. 549/-", image: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&h=400&fit=crop", highlighted: false },
  { name: "ZZ Plant", description: "Nearly indestructible with waxy oval-shaped leaves", price: "Rs. 449/-", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&h=400&fit=crop", highlighted: false },
  { name: "Aloe Vera", description: "Medicinal succulent great for skin and air quality", price: "Rs. 199/-", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop", highlighted: false },
];

const TopSelling = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-16">
      <SectionTitle title="Our Top Selling" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product, idx) => (
          <PlantCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
};

export default TopSelling;
