import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const villas = [
  {
    type: "Type A",
    area: "200+ Sq. Yds",
    builtUp: "1,269 Sq. Ft",
    config: "Premium Villa",
    pool: true,
  },
  {
    type: "Type B",
    area: "133+ Sq. Yds",
    builtUp: "780 Sq. Ft",
    config: "2BHK Duplex Villa",
    pool: true,
  },
  {
    type: "Type C",
    area: "115+ Sq. Yds",
    builtUp: "664 Sq. Ft",
    config: "1BHK Duplex Villa",
    pool: true,
  },
  {
    type: "Type D",
    area: "100+ Sq. Yds",
    builtUp: "502 Sq. Ft",
    config: "Compact Villa",
    pool: false,
  },
];

const VillasSection = () => {
  return (
    <section id="villas" className="py-24 md:py-32 bg-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary text-sm tracking-[0.4em] uppercase font-sans font-black mb-4"
          >
            Refined Living
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-black text-foreground mb-4"
          >
            Villa Configurations
          </motion.h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto font-light">
            Each villa is a masterpiece of spatial planning, designed to maximize both privacy and divine connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {villas.map((v, i) => (
            <motion.div
              key={v.type}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[2rem] border border-border/40 overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group"
            >
              <div className="bg-gradient-to-br from-warm-dark to-warm-dark/90 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/40 transition-colors" />
                <p className="text-sm text-gold font-sans font-black tracking-[0.2em] uppercase mb-2 relative z-10">{v.type}</p>
                <h3 className="font-serif text-2xl font-bold text-cream relative z-10 leading-tight">{v.config}</h3>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center group/item">
                    <span className="text-muted-foreground text-sm font-sans font-medium">Plot Area</span>
                    <span className="font-serif text-lg font-bold text-foreground group-hover/item:text-primary transition-colors">{v.area}</span>
                  </div>
                  <div className="h-px bg-border/40" />
                  <div className="flex justify-between items-center group/item">
                    <span className="text-muted-foreground text-sm font-sans font-medium">Built-up</span>
                    <span className="font-serif text-lg font-bold text-foreground group-hover/item:text-primary transition-colors">{v.builtUp}</span>
                  </div>
                </div>

                {v.pool ? (
                  <div className="pt-2">
                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary italic font-serif font-bold italic">P</div>
                      <span className="text-primary text-xs font-black uppercase tracking-widest font-sans">Private pool included</span>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2">
                    <div className="bg-muted border border-border/50 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-muted-foreground/10 flex items-center justify-center text-muted-foreground italic font-serif font-bold italic">S</div>
                      <span className="text-muted-foreground text-xs font-black uppercase tracking-widest font-sans">Standard layout</span>
                    </div>
                  </div>
                )}

                <Button asChild className="w-full h-14 rounded-2xl bg-secondary hover:bg-primary text-cream font-bold font-sans tracking-wide transition-all duration-300">
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    Request Pricing
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillasSection;
