import { motion } from "framer-motion";
import {
  Church, TreePine, TrainFront, Hospital, Building2, Route, GraduationCap, Landmark
} from "lucide-react";

const advantages = [
  { icon: Church, label: "2.5 km to Yadadri Sri Laxmi Narasimhaswamy Temple" },
  { icon: TreePine, label: "600 m to Deer Park (Lakshminarasimha Abhyaranyam)" },
  { icon: TrainFront, label: "2.5 km to Yadadri Railway Junction" },
  { icon: Hospital, label: "AIIMS Medical University & 1000 Beds Hospital nearby" },
  { icon: Building2, label: "Singapore Township, Raheja & IT Parks nearby" },
  { icon: Route, label: "3.5 km to 4-Lane Warangal National Highway" },
  { icon: GraduationCap, label: "Proposed Central University & IIT nearby" },
  { icon: Landmark, label: "Infosys, TCS & IT corridor just minutes away" },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Prime Location
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-3">
            Location Advantages
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Strategically positioned in Hyderabad's fastest-growing eastern corridor — where spiritual heritage
            meets modern infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center gap-4 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:bg-white hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <a.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-base font-sans font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{a.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 px-4">
          <p className="text-lg md:text-xl  lg:text-2xl text-foreground font-black font-serif tracking-tight">
            📍 Gangasanpally Village, Raigir, <span className="text-primary italic">Yadadri Bhongir District</span> — 508 116
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
