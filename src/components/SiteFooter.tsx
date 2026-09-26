import { restaurant } from "@/data/menu";

export function SiteFooter() {
  return (
    <footer className="mt-8 px-4 pb-8">
      <div className="glass flex items-center justify-between gap-4 rounded-2xl p-4">
        <div className="min-w-0">
          <div className="text-sm font-bold">{restaurant.name}</div>
          <div className="num truncate text-[10px] text-muted-foreground">
            {restaurant.address}
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <a
            href="#contact"
            className="glass-dark press rounded-lg px-3 py-2 text-[11px] text-cream"
          >
            تماس
          </a>
          <a
            href="#about"
            className="glass-dark press rounded-lg px-3 py-2 text-[11px] text-cream"
          >
            درباره
          </a>
        </div>
      </div>
      <p className="num mt-3 text-center text-[10px] text-muted-foreground">
        © ۱۴۰۵ {restaurant.name} — تمامی حقوق محفوظ است.
      </p>
    </footer>
  );
}
