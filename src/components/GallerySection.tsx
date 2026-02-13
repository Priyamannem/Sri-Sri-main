import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import galleryAerial from "@/assets/gallery-aerial.jpg";
import galleryPoolVilla from "@/assets/gallery-pool-villa.jpg";
import galleryClubhouse from "@/assets/gallery-clubhouse.jpg";
import galleryGardens from "@/assets/gallery-gardens.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";

const images = [
  { src: galleryAerial, alt: "Aerial view of Sri Sri Arcades community" },
  { src: galleryPoolVilla, alt: "Private pool villa exterior" },
  { src: galleryClubhouse, alt: "Club house and swimming pool" },
  { src: galleryGardens, alt: "Landscaped gardens and pathways" },
  { src: galleryInterior, alt: "Villa interior living spaces" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Visual Tour
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`cursor-pointer overflow-hidden rounded-xl group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-warm-dark/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-cream" onClick={() => setSelected(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
