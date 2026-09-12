interface ToastProps {
  message: string;
}

export default function Toast({ message }:ToastProps) {
  // যদি মেসেজ না থাকে, তবে টোস্ট রেন্ডার হবে না
  if (!message) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 transition-all duration-300">
      <div className="flex items-center gap-3 bg-slate-950 text-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-800">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
          ✓
        </span>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}