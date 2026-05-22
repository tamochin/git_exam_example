import ProductCard from "../ui/ProductCard";
import SectionHeader from "../ui/SectionHeader";
import { BESTSELLERS } from "../../data/products";

export default function BestsellersSection() {
  return (
    <section className="px-10 py-12">
      <SectionHeader title="Our Bestsellers" action="See all" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BESTSELLERS.map((p) => (
          <ProductCard key={p.name} {...p} size="lg" />
        ))}
      </div>
    </section>
  );
}
