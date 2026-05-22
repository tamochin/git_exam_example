export default function SortBadge({ label }) {
  return (
    <span className="flex items-center gap-1 text-xs text-stone-600 border border-stone-200 rounded-full px-3 py-1.5 cursor-pointer hover:border-stone-400 transition-colors">
      {label} <span className="text-stone-400">∨</span>
    </span>
  );
}