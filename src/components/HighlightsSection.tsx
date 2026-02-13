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
    <section className="pt-12 md:pt-20 pb-8 md:pb-12 bg-white relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-center gap-4 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:bg-white hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <h.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{h.title}</h3>
                <p className="text-muted-foreground text-sm font-sans font-medium leading-tight group-hover:text-foreground transition-colors duration-300">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
