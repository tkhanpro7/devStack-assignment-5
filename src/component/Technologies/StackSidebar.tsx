import type { Technology } from "../Types";


interface StackSidebarProps {
  stack: Technology[];
  onRemove: (techId: string) => void;
  onRemoveAll: () => void;
}
export default function StackSidebar({ stack, onRemove, onRemoveAll }:StackSidebarProps) {
  return (
    <div className="sticky top-28 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950 mb-1">Your Stack</h3>
      
      
      <p className="text-sm text-slate-400 mb-6">
        {stack.length === 0 
          ? "No technologies selected yet." 
          : `${stack.length} Technology Selected`}
      </p>

      
      {stack.length === 0 ? (
      
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 py-10">
          <p className="text-sm font-medium text-slate-400">Your stack is empty.</p>
        </div>

      ) : (
        
      
        <>
          <div className="flex flex-col gap-3">
            {stack.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-100 p-3">
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="h-6 w-6" />
                  <div>
                    <p className="text-sm font-bold text-slate-950 leading-tight">{item.name}</p>
                    <p className="text-[10px] text-slate-500">{item.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button 
            onClick={onRemoveAll}
            className="btn btn-outline mt-6 w-full text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 border-red-200 rounded-xl min-h-10 h-10"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}