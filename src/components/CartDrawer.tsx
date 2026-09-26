import { useNavigate } from "@tanstack/react-router";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatToman, toPersianDigits } from "@/lib/persian";

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, add, decrement, remove } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <button
        type="button"
        aria-label="بستن سبد"
        onClick={closeCart}
        className="fade-in absolute inset-0 bg-ink/30"
      />
      <aside className="glass-dark drawer-in relative m-2 flex h-[calc(100%-1rem)] w-[85%] max-w-[340px] flex-col rounded-3xl text-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h3 className="font-bold">سبد خرید</h3>
          <button
            type="button"
            onClick={closeCart}
            aria-label="بستن"
            className="glass press grid size-9 place-items-center rounded-lg text-foreground"
          >
            <X className="size-4" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {lines.length === 0 && (
            <p className="pt-8 text-center text-sm text-cream/60">
              سبد شما خالی است. از منو یک غذا انتخاب کنید.
            </p>
          )}

          {lines.map((line) => (
            <div key={line.item.id} className="glass flex items-center gap-3 rounded-2xl p-3">
              <img
                src={line.item.image}
                alt={line.item.name}
                loading="lazy"
                width={816}
                height={816}
                className="size-14 shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-foreground">
                  {line.item.name}
                </div>
                <div className="num text-[11px] text-muted-foreground">
                  {formatToman(line.item.price)}
                </div>
                <button
                  type="button"
                  onClick={() => remove(line.item.id)}
                  className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-destructive"
                >
                  <Trash2 className="size-3" />
                  حذف
                </button>
              </div>
              <div className="glass flex shrink-0 items-center gap-1 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => add(line.item)}
                  aria-label="افزودن یکی"
                  className="press grid size-6 place-items-center text-brand"
                >
                  <Plus className="size-3.5" strokeWidth={3} />
                </button>
                <span className="num min-w-4 text-center text-xs font-bold text-foreground">
                  {toPersianDigits(line.quantity)}
                </span>
                <button
                  type="button"
                  onClick={() => decrement(line.item.id)}
                  aria-label="کاهش یکی"
                  className="press grid size-6 place-items-center text-muted-foreground"
                >
                  <Minus className="size-3.5" strokeWidth={3} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 p-4">
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-cream/60">جمع</span>
            <span className="num font-bold">{formatToman(subtotal)}</span>
          </div>
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={() => {
              closeCart();
              navigate({ to: "/checkout" });
            }}
            className="press mt-3 w-full rounded-xl bg-accent py-3.5 text-sm font-extrabold text-accent-foreground shadow-lg shadow-accent/30 disabled:opacity-40"
          >
            ادامه و پرداخت
          </button>
        </div>
      </aside>
    </div>
  );
}
