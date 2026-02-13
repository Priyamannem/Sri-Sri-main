import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const villaTypes = ["Type A — 200+ Sq. Yds", "Type B — 2BHK Duplex", "Type C — 1BHK Duplex", "Type D — 100+ Sq. Yds", "Plots"];

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // For now, show success toast — backend integration to follow
    setTimeout(() => {
      toast({
        title: "Enquiry Submitted!",
        description: "Our team will contact you shortly to schedule a site visit.",
      });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-3">
            Schedule a Site Visit
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Take the first step towards owning your dream villa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-border/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />

              <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Send an Enquiry</h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" required className="bg-slate-50/50 border-border/60 focus:bg-white transition-all h-12" />
                  <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-slate-50/50 border-border/60 focus:bg-white transition-all h-12" />
                </div>
                <Input name="email" type="email" placeholder="Email Address" required className="bg-slate-50/50 border-border/60 focus:bg-white transition-all h-12" />
                <select
                  name="villaType"
                  required
                  className="flex h-12 w-full rounded-md border border-border/60 bg-slate-50/50 px-3 py-2 text-sm text-muted-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
                >
                  <option value="">Interested Property Type</option>
                  {villaTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <Textarea name="message" placeholder="Your Message (optional)" rows={4} className="bg-slate-50/50 border-border/60 focus:bg-white transition-all" />
                <Button type="submit" size="lg" disabled={loading} className="w-full gap-2 rounded-xl h-14 font-black shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                  <Send className="w-5 h-5" />
                  {loading ? "Submitting Request..." : "Schedule a Site Visit Now"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-3xl border border-border/40 hover:bg-white hover:shadow-xl transition-all duration-300">
                <Phone className="w-6 h-6 text-primary mb-4" />
                <h4 className="font-serif font-black text-secondary mb-2 uppercase tracking-tight">Call Center</h4>
                <p className="font-sans text-sm font-bold text-foreground">+91 9849 016 082</p>
                <p className="font-sans text-sm text-muted-foreground">9 AM to 7 PM IST</p>
              </div>
              <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-3xl border border-border/40 hover:bg-white hover:shadow-xl transition-all duration-300">
                <Mail className="w-6 h-6 text-primary mb-4" />
                <h4 className="font-serif font-black text-secondary mb-2 uppercase tracking-tight">Email Sales</h4>
                <p className="font-sans text-sm font-bold text-foreground">info@sreepuramvillas.com</p>
                <p className="font-sans text-sm text-muted-foreground">Response within 2 hrs</p>
              </div>
            </div>

            {/* Map Placeholder/Integration */}
            <div className="flex-1 min-h-[350px] bg-slate-50/60 rounded-[2.5rem] overflow-hidden border border-border/40 shadow-xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15214.3418512143!2d78.966!3d17.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb060000000000%3A0x0!2zMTfCsDI3JzEwLjgiTiA3OMKwNTgnMTQuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-border/40 shadow-lg text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Site Location
                </div>
              </div>
            </div>

            {/* Project Approval Details */}
            <div className="bg-secondary p-8 rounded-[2rem] text-cream relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-gold text-xs uppercase tracking-[0.2em] font-black mb-1">Government Approved</p>
                  <h5 className="font-serif text-xl font-bold">TLP.NO. 01/2021 YTDA</h5>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
