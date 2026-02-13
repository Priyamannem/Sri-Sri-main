import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Landmark } from "lucide-react";
import templeImg from "@/assets/temple.jpeg";



const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-background to-cream/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-sans font-bold mb-6">
              Divine Proximity & Luxury
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight">
              Near the Sacred <span className="text-gold italic underline decoration-primary/30 decoration-offset-4">Yadadri Temple</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans font-light">
              <p>
                <span className="font-serif text-foreground font-bold text-2xl">"Sri Sri Arcades"</span> — is strategically located just <span className="text-secondary font-black">2.5 km</span> from the world-famous <span className="text-foreground font-semibold italic">Sri Lakshmi Narasimha Swamy Temple</span>.
              </p>
              <p>
                Experience the spiritual aura and divine peace of one of India's most magnificent temple architectures. Sri Sri Arcades offers you a unique lifestyle that harmonizes modern luxury with ancestral heritage and spiritual awakening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all hover:bg-white hover:border-primary/20 group">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-bold text-foreground">TLP.NO. 01/2021 YTDA</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all hover:bg-white hover:border-primary/20 group">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-bold text-foreground">Just 5 mins drive to Temple</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all hover:bg-white hover:border-primary/20 group">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-bold text-foreground">Pure pollution-free air</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all hover:bg-white hover:border-primary/20 group">
                <BadgeCheck className="w-5 h-5 text-primary shrink-0 group-hover:text-gold transition-colors" />
                <span className="text-sm font-bold text-foreground">YTDA Approved</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all hover:bg-white hover:border-primary/20 group">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 group-hover:text-gold transition-colors" />
                <span className="text-sm font-bold text-foreground">RERA Approved</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg transition-all hover:bg-white hover:border-primary/20 group">
                <Landmark className="w-5 h-5 text-primary shrink-0 group-hover:text-gold transition-colors" />
                <span className="text-sm font-bold text-foreground">Bank Loan Available</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] bg-warm-dark/5 overflow-hidden border border-border/50 shadow-2xl relative group">
              <img
                src={templeImg}
                alt="Yadadri Temple"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/60 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="font-serif text-cream text-3xl font-bold mb-2 italic">Sri Lakshmi Narasimha Swamy</h4>
                <p className="text-gold text-sm font-sans uppercase tracking-[0.3em] font-bold">Yadadri Spiritual Hub</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-[2rem] shadow-2xl hidden md:block group hover:bg-primary transition-all duration-500 border border-white/10">
              <p className="text-cream text-4xl font-serif font-black mb-1">2.5km</p>
              <p className="text-gold text-xs uppercase tracking-widest font-sans font-black leading-none text-center">To Temple</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
