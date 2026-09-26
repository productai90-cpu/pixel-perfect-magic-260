import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { restaurant } from "@/data/menu";
import { formatToman, toPersianDigits } from "@/lib/persian";

const title = "تکمیل سفارش — کافه نُور";
const description =
  "اطلاعات تحویل خود را وارد کنید و سفارش خود را از کافه نُور نهایی کنید.";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CheckoutPage,
});

type Delivery = "delivery" | "pickup";

function CheckoutPage() {
  const { lines, subtotal, count, clear } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] = useState<Delivery>("delivery");
  const [done, setDone] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for a real payment gateway call.
    setOrderCode(toPersianDigits(Math.floor(100000 + Math.random() * 899999)));
    setDone(true);
    clear();
  }

  if (done) {
    return (
      <main className="mx-auto flex max-w-md flex-col items-center px-4 pt-10 text-center">
        <div className="glass rise-in w-full rounded-3xl p-6">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-accent/20 text-accent">
            <CheckCircle2 className="size-8" strokeWidth={2.5} />
          </div>
          <h1 className="mt-4 text-xl font-extrabold">سفارش شما ثبت شد</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            همکاران ما به‌زودی برای تأیید با شما تماس می‌گیرند. سفارش حدوداً ۲۵
            دقیقه دیگر آماده می‌شود.
          </p>
          <div className="glass-dark mt-4 rounded-2xl px-4 py-3 text-cream">
            <span className="text-[11px] text-cream/60">شمارهٔ سفارش</span>
            <div className="num text-lg font-extrabold">{orderCode}</div>
          </div>
          <Link
            to="/"
            className="press mt-5 block rounded-xl bg-brand py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-brand/30"
          >
            بازگشت به صفحهٔ اصلی
          </Link>
        </div>
      </main>
    );
  }

  if (count === 0) {
    return (
      <main className="mx-auto max-w-md px-4 pt-10 text-center">
        <div className="glass rounded-3xl p-6">
          <h1 className="text-lg font-bold">سبد شما خالی است</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            ابتدا از منو چند غذا انتخاب کنید.
          </p>
          <Link
            to="/"
            className="press mt-5 block rounded-xl bg-brand py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-brand/30"
          >
            مشاهده منو
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-md px-4 pt-5 pb-10">
      <button
        type="button"
        onClick={() => navigate({ to: "/" })}
        className="mb-3 inline-flex items-center gap-1 text-xs font-medium text-brand"
      >
        <ChevronRight className="size-4" />
        بازگشت به منو
      </button>

      <div className="glass rounded-3xl p-5">
        <h1 className="text-lg font-bold">تکمیل سفارش</h1>

        <ul className="mt-4 space-y-2">
          {lines.map((line) => (
            <li key={line.item.id} className="flex items-center justify-between gap-3 text-sm">
              <span className="min-w-0 truncate">
                {line.item.name}
                <span className="num text-muted-foreground">
                  {" "}
                  × {toPersianDigits(line.quantity)}
                </span>
              </span>
              <span className="num shrink-0 font-semibold">
                {formatToman(line.item.price * line.quantity)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
          <span className="text-muted-foreground">جمع کل</span>
          <span className="num font-extrabold text-brand">{formatToman(subtotal)}</span>
        </div>
      </div>

      <form onSubmit={submit} className="glass mt-4 rounded-3xl p-5">
        <div className="flex gap-2">
          {(
            [
              ["delivery", "ارسال با پیک"],
              ["pickup", "تحویل حضوری"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setDelivery(id)}
              className={`press flex-1 rounded-xl py-2.5 text-xs ${
                delivery === id
                  ? "bg-ink font-semibold text-cream"
                  : "bg-secondary font-medium text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <label className="mt-4 block text-xs font-medium text-muted-foreground">
          نام و نام خانوادگی
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-input bg-card px-3 py-3 text-sm text-foreground outline-none focus:border-brand"
            placeholder="مثلاً مریم رضایی"
          />
        </label>

        <label className="mt-3 block text-xs font-medium text-muted-foreground">
          شمارهٔ تماس
          <input
            required
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="num mt-1 w-full rounded-xl border border-input bg-card px-3 py-3 text-sm text-foreground outline-none focus:border-brand"
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
          />
        </label>

        {delivery === "delivery" && (
          <label className="mt-3 block text-xs font-medium text-muted-foreground">
            نشانی تحویل
            <textarea
              required
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full resize-none rounded-xl border border-input bg-card px-3 py-3 text-sm text-foreground outline-none focus:border-brand"
              placeholder="خیابان، پلاک، واحد"
            />
          </label>
        )}

        {delivery === "pickup" && (
          <p className="num mt-3 text-xs leading-relaxed text-muted-foreground">
            سفارش را از {restaurant.address} تحویل بگیرید.
          </p>
        )}

        <button
          type="submit"
          className="press mt-5 w-full rounded-xl bg-accent py-3.5 text-sm font-extrabold text-accent-foreground shadow-lg shadow-accent/30"
        >
          ثبت و پرداخت
        </button>
        <p className="mt-2 text-center text-[10px] text-muted-foreground">
          پرداخت آزمایشی است؛ درگاه بانکی بعداً متصل می‌شود.
        </p>
      </form>
    </main>
  );
}
