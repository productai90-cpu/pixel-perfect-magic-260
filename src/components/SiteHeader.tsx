import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { restaurant } from "@/data/menu";
import { toPersianDigits } from "@/lib/persian";

export function SiteHeader() {
  const { count, openCart } = useCart();
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (count === 0) return;
    setPop(true);
    const t = setTimeout(() => setPop(false), 440);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 shadow-lg shadow-brand/10">
        <Link to="/" className="min-w-0 leading-none">
          <div className="truncate text-lg font-bold text-foreground">
            {restaurant.name}
          </div>
          <div className="mt-1 truncate text-[10px] font-medium tracking-wide text-brand">
            {restaurant.subtitle}
          </div>
        </Link>
        <button
          type="button"
          onClick={openCart}
          aria-label="سبد خرید"
          className="glass-dark press relative grid size-11 shrink-0 place-items-center rounded-xl text-cream"
        >
          <ShoppingBag className="size-5" strokeWidth={2} />
          {count > 0 && (
            <span
              className={`num absolute -top-1.5 -left-1.5 grid size-5 place-items-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground ${pop ? "badge-pop" : ""}`}
            >
              {toPersianDigits(count)}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
