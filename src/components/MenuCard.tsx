import { Plus } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/persian";

export function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { add } = useCart();

  return (
    <div
      className="glass rise-in flex h-full flex-col rounded-2xl p-3 shadow-md shadow-brand/5"
      style={{ animationDelay: `${Math.min(index, 6) * 60}ms` }}
    >
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        width={816}
        height={816}
        className="aspect-square w-full rounded-xl object-cover"
      />
      <h3 className="mt-2 text-sm font-bold">{item.name}</h3>
      <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
        {item.description}
      </p>
      <div className="mt-auto flex items-center justify-between gap-2 pt-2">
        <span className="num text-sm font-extrabold text-brand">
          {formatPrice(item.price)}
        </span>
        <button
          type="button"
          onClick={() => add(item)}
          aria-label={`افزودن ${item.name} به سبد`}
          className="press grid size-8 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand"
        >
          <Plus className="size-4" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
