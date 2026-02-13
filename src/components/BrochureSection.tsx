import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BrochureSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center bg-card rounded-2xl border border-border p-10 md:p-14 shadow-lg"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4">
            Get the Full Picture
          </h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-md mx-auto">
            Download our detailed project brochure with floor plans, specifications, pricing, and more.
          </p>
          <Button asChild size="lg" className="gap-2 text-base px-8 py-6 rounded-full shadow-md">
            <a href="/Sreepuram-Villas-Brochure.pdf" download>
              <Download className="w-5 h-5" />
              Download Project Brochure (PDF)
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">PDF format · Free download</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrochureSection;
