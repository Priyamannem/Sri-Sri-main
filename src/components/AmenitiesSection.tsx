import { motion } from "framer-motion";
import {
  Waves, Dumbbell, Gamepad2, Trophy, TreePine, Footprints,
  Flower2, Armchair, Sun, Route, CloudRain, Camera, Fence, Zap
} from "lucide-react";

const categories = [
  {
    title: "Recreation",
    items: [
      { icon: Waves, name: "Club House & Pool", desc: "Unwind by the sparkling community swimming pool" },
      { icon: Dumbbell, name: "AC Gymnasium", desc: "Stay fit with state-of-the-art equipment" },
      { icon: Gamepad2, name: "Indoor Games", desc: "Table Tennis, Chess, Billiards & Caroms" },
      { icon: Trophy, name: "Snooker Room", desc: "Enjoy premium leisure at your doorstep" },
    ],
  },
  {
    title: "Outdoors",
    items: [
      { icon: TreePine, name: "Children's Play Area", desc: "Safe, fun spaces for kids to explore" },
      { icon: Footprints, name: "Jogging Track", desc: "Morning runs through landscaped pathways" },
      { icon: Flower2, name: "Carpet Grass Lawns", desc: "Lush green spaces for relaxation" },
      { icon: Armchair, name: "Elder Sitting Area", desc: "Peaceful corners for quiet evenings" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { icon: Sun, name: "Solar Street Lights", desc: "Eco-friendly, energy-efficient lighting" },
      { icon: Route, name: "CC Roads", desc: "30ft & 40ft wide cement-concrete roads" },
      { icon: CloudRain, name: "Rain Water Harvesting", desc: "Sustainable water management systems" },
      { icon: Camera, name: "CCTV Surveillance", desc: "Round-the-clock security monitoring" },
      { icon: Fence, name: "Compound Wall", desc: "Secure boundary with electric fencing" },
      { icon: Zap, name: "Underground Electrification", desc: "Clean, safe electrical infrastructure" },
    ],
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary text-sm tracking-[0.4em] uppercase font-sans font-black mb-4"
          >
            Divine Amenities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-black text-foreground"
          >
            Lifestyle & Recreation
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map((cat, ci) => (
            <div key={cat.title}>
              <div className="flex items-center gap-6 mb-12">
                <h3 className="font-serif text-3xl font-bold text-foreground shrink-0">{cat.title}</h3>
                <div className="h-px bg-gradient-to-r from-border/60 to-transparent w-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group flex flex-col items-start gap-6 bg-slate-100/40 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:bg-white hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="w-7 h-7 text-secondary group-hover:text-cream transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-muted-foreground text-base font-sans font-light leading-relaxed group-hover:text-foreground transition-colors duration-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
