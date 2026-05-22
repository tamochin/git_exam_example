import SectionHeader from "../ui/SectionHeader";
import { INSPIRATION_IMGS } from "../../data/products";

export default function InspirationSection() {
  return (
    <section className="px-10 py-12">
      <SectionHeader title="Interior Inspiration" />
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[520px]">
        {INSPIRATION_IMGS.map((src, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              src={src}
              alt={`Inspiration ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {i === 3 && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-semibold text-lg tracking-wide border border-white/60 px-6 py-2 rounded-full backdrop-blur-sm">
                  See All
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
