import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import CategoryPill from "../ui/CategoryPill";
import SortBadge from "../ui/SortBadge";
import { CATEGORIES, CATEGORY_PRODUCTS } from "../../data/products";

export default function ExploreSection() {
  const [active, setActive] = useState("Chairs");

  return (
    <section className="px-10 py-12 bg-stone-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-playfair text-2xl font-semibold text-stone-800">Explore by Category</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-500 mr-2">Sort by</span>
          <SortBadge label="Price" />
          <SortBadge label="Date" />
          <SortBadge label="Relevance" />
        </div>
      </div>

      <div className="flex gap-8">
        <div className="w-44 shrink-0 flex flex-col gap-2">
          {CATEGORIES.map((c) => (
            <CategoryPill
              key={c.label}
              label={c.label}
              icon={c.icon}
              active={active === c.label}
              onClick={() => setActive(c.label)}
            />
          ))}
          <button className="w-full flex items-center gap-2 px-4 py-2.5 mt-2 rounded-full bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-colors">
            All Category →
          </button>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-5">
          {CATEGORY_PRODUCTS.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
