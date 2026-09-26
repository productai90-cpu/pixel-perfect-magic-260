import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

const title = "کافه نُور — سفارش آنلاین پیتزا، برگر و نوشیدنی";
const description =
  "منوی دیجیتال کافه نُور در تهران: پیتزا، برگر، ساندویچ، نوشیدنی و دسر تازه با تحویل ۲۵ دقیقه‌ای. سفارش آنلاین از موبایل.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-5xl">
      <Hero />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
