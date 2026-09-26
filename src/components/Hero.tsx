import { restaurant } from "@/data/menu";

export function Hero() {
  return (
    <section className="px-4 pt-5">
      <div className="glass-dark relative overflow-hidden rounded-3xl p-5 text-cream md:p-8">
        <div className="pointer-events-none absolute -bottom-10 -left-6 size-40 rounded-full bg-accent/50 blur-2xl" />
        <div className="relative md:max-w-xl">
          <span className="glass inline-block rounded-full px-3 py-1 text-[11px] font-semibold text-brand">
            {restaurant.badge}
          </span>
          <h1 className="mt-3 text-[26px] leading-[1.25] font-extrabold md:text-4xl">
            {restaurant.tagline[0]}
            <br />
            {restaurant.tagline[1]}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-cream/70">
            {restaurant.intro}
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href="#menu"
              className="press flex-1 rounded-xl bg-brand py-3 text-center text-sm font-bold text-primary-foreground shadow-lg shadow-brand/30 md:flex-none md:px-8"
            >
              مشاهده منو
            </a>
            <a
              href="#contact"
              className="glass press rounded-xl px-4 py-3 text-sm font-semibold text-foreground"
            >
              تماس
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
