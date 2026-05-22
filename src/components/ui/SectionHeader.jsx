export default function SectionHeader({ title, action }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-playfair text-2xl font-semibold text-stone-800">{title}</h2>
      {action && (
        <a href="#" className="text-sm text-stone-500 hover:text-stone-800 flex items-center gap-1 transition-colors">
          {action} <span>→</span>
        </a>
      )}
    </div>
  );
}
