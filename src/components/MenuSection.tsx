import { useMemo, useState } from "react";
import { CategoryTabs } from "@/components/CategoryTabs";
import { MenuCard } from "@/components/MenuCard";
import { categories, menuItems } from "@/data/menu";
import { toPersianDigits } from "@/lib/persian";

export function MenuSection() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? menuItems : menuItems.filter((i) => i.category === active)),
    [active],
  );

  return (
    <section id="menu" className="mt-6 scroll-mt-24 px-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold">منوی امروز</h2>
        <span className="num shrink-0 text-[11px] font-medium text-brand">
          {toPersianDigits(categories.length - 1)} دسته
        </span>
      </div>

      <CategoryTabs active={active} onChange={setActive} />

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
