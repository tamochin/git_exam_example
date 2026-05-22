export default function ProductCard({ name, price, img, size = "md" }) {
  const imgH = size === "lg" ? "h-56" : "h-44";
  return (
    <div className="group cursor-pointer">
      <div className={`${imgH} overflow-hidden rounded-xl mb-3 bg-stone-100`}>
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-sm font-medium text-stone-800 mb-1">{name}</p>
      <p className="text-sm font-semibold price-color">{price}</p>
    </div>
  );
}
