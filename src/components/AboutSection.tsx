import { restaurant } from "@/data/menu";

export function AboutSection() {
  return (
    <section id="about" className="mt-8 scroll-mt-24 px-4">
      <div className="glass rounded-3xl p-5">
        <h2 className="text-lg font-bold">دربارهٔ {restaurant.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {restaurant.about}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-[11px] text-muted-foreground">ساعت کاری</p>
            <p className="num mt-0.5 font-semibold">{restaurant.hours}</p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">آدرس</p>
            <p className="num mt-0.5 font-semibold">{restaurant.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
