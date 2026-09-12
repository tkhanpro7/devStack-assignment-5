import type { Technology } from "../Types";
interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

export default function TechCard({ tech, onAdd, isAdded }:TechCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Top: Icon & Badge */}
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${tech.badgeColor}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Middle: Text */}
      <div className="mt-4 flex-1">
        <h3 className="text-xl font-bold text-slate-950">{tech.name}</h3>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          {tech.description}
        </p>
      </div>

      {/* Bottom: Tags & Button */}
      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between text-xs font-medium text-slate-500">
          <span className="rounded bg-slate-50 px-2 py-1">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">★</span> {tech.rating}
          </span>
        </div>

        {/* সংশোধিত বাটন: isAdded এর ওপর ভিত্তি করে ডিজাইন এবং টেক্সট চেঞ্জ হবে */}
        <button
          onClick={() => !isAdded && onAdd(tech)}
          disabled={isAdded}
          className={`w-full rounded-xl min-h-10 h-10 font-medium transition-all duration-300 flex items-center justify-center ${
            isAdded
              ? "bg-slate-100 text-slate-400 cursor-not-allowed" // বাটন ডিম হওয়ার ডিজাইন
              : "btn border-0 bg-slate-950 text-white hover:bg-slate-800" // রেগুলার ডিজাইন
          }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}