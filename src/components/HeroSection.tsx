import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSec from "@/assets/hero-sec.jpeg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
        style={{ backgroundImage: `url(${heroSec})` }}
      />
      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-warm-dark via-warm-dark/40 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-dark/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold text-cream mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
            Sri Sri Arcades
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-cream italic mb-6 drop-shadow-md">
            "Premium Open Plots in a Fast-Growing Spiritual & Urban Corridor"
          </p>
          <p className="text-cream/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            YTDA & RERA Approved Open Plot Development
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2 text-base px-8 py-6 rounded-full shadow-lg">
            <a href="/Sreepuram-Villas-Brochure.pdf" download>
              <Download className="w-5 h-5" />
              Download Brochure
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 text-base px-8 py-6 rounded-full border-cream/40 text-cream hover:bg-cream/10 hover:text-cream bg-transparent"
          >
            <a href="#contact">
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
