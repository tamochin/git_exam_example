import ProductCard from "../ui/ProductCard";
import SectionHeader from "../ui/SectionHeader";
import { POPULAR } from "../../data/products";

export default function PopularSection() {
  return (
    <section className="px-10 py-12 bg-stone-50">
      <SectionHeader title="Popular Products" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {POPULAR.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
