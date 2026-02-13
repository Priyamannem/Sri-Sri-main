import { motion } from "framer-motion";
import { Home, FileCheck, Route, ShieldCheck, TreePine, Building, Gamepad2, Hotel } from "lucide-react";

const highlights = [
  { icon: Home, title: "100% Clear Title", desc: "Vaastu-compliant layouts with full legal clarity" },
  { icon: FileCheck, title: "YTDA & RERA Approved", desc: "Government-approved layout for total peace of mind" },
  { icon: Route, title: "30ft & 40ft CC Roads", desc: "Wide cement-concrete roads for smooth connectivity" },
  { icon: ShieldCheck, title: "Gated Community", desc: "24/7 CCTV surveillance and round-the-clock security" },
  { icon: TreePine, title: "Landscaped Green Spaces", desc: "Tree plantations, lawns, and open breathing spaces" },
  { icon: Building, title: "Bank Loan Facility", desc: "Easy EMI options with leading banks" },
  { icon: Gamepad2, title: "Children's Play Areas", desc: "Dedicated parks, playgrounds, and family gardens" },
  { icon: Hotel, title: "Proposed Resort", desc: "An upcoming resort in the extension project" },
];

const HighlightsSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary text-sm tracking-[0.4em] uppercase font-sans font-black mb-4"
          >
            Excellence personified
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-black text-foreground"
          >
            Project Highlights
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-50/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:bg-white hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-gold/20 transition-all duration-500">
                <h.icon className="w-8 h-8 text-primary group-hover:text-gold transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">{h.title}</h3>
              <p className="text-muted-foreground text-base font-sans font-light leading-relaxed group-hover:text-foreground transition-colors duration-500">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
