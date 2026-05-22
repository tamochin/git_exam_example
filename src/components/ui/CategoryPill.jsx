export default function CategoryPill({ label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200
        ${active
          ? "bg-stone-800 text-white border-stone-800"
          : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
        }`}
    >
      <span><img src={icon} alt="" width={30} height={30} /></span>
      <span>{label}</span>
    </button>
  );
}
