import { categories } from "@/data/menu";

type Props = {
  active: string;
  onChange: (id: string) => void;
};

export function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {categories.map((c) => {
        const isActive = c.id === active;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onChange(c.id)}
            aria-pressed={isActive}
            className={`press shrink-0 rounded-full px-4 py-2 text-xs ${
              isActive
                ? "bg-ink font-semibold text-cream"
                : "glass font-medium text-foreground"
            }`}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
