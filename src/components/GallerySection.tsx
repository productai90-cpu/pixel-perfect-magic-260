import { galleryImages } from "@/data/menu";

export function GallerySection() {
  return (
    <section id="gallery" className="mt-8 scroll-mt-24 px-4">
      <h2 className="mb-3 text-lg font-bold">گالری</h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {galleryImages.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            width={816}
            height={816}
            className="aspect-square w-full rounded-2xl object-cover shadow-md shadow-brand/5"
          />
        ))}
      </div>
    </section>
  );
}
