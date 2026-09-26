import { MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/menu";

export function ContactSection() {
  return (
    <section id="contact" className="mt-8 scroll-mt-24 px-4">
      <div className="glass overflow-hidden rounded-3xl">
        <div className="p-5">
          <h2 className="text-lg font-bold">تماس و مسیر</h2>
          <div className="mt-3 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand" />
              <span className="num font-semibold">{restaurant.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-brand" />
              <span className="num">{restaurant.address}</span>
            </div>
          </div>
        </div>
        <div className="grid h-40 place-items-center bg-secondary text-xs text-muted-foreground">
          نقشه به‌زودی در همین بخش قرار می‌گیرد
        </div>
      </div>
    </section>
  );
}
