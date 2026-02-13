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
    <section id="amenities" className="pt-8 md:pt-12 pb-12 md:pb-20 bg-white relative">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group flex items-center gap-4 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:bg-white hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-muted-foreground text-sm font-sans font-medium leading-tight group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
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
