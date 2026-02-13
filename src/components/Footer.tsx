import { Download, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-cream/70 py-6 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-cream mb-3">Sri Sri Arcades</h3>
            <p className="text-sm italic text-gold mb-2 font-medium">"Why visit a Resort when you can Own One?"</p>
            <p className="text-xs text-cream/40 uppercase tracking-widest font-bold">Small Investment, Big Returns</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-black text-cream mb-6 uppercase tracking-[0.2em]">Navigation</h4>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <a href="#about" className="hover:text-gold transition-colors font-medium w-fit">About Project</a>
              <a href="/plots-availability" className="hover:text-gold transition-colors font-medium w-fit">Plot Availability</a>
              <a href="#amenities" className="hover:text-gold transition-colors font-medium w-fit">Lifestyle Amenities</a>
              <a href="#location" className="hover:text-gold transition-colors font-medium w-fit">Location View</a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-black text-cream mb-6 uppercase tracking-[0.2em]">Contact Us</h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gold">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 0000000000</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gold">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all">[dummy@srisri.in]</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-1">
            <h4 className="font-sans text-xs font-black text-cream mb-6 uppercase tracking-[0.2em]">Find Us</h4>
            <div className="flex items-start gap-3 text-sm font-medium">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="leading-relaxed">
                Gangasanpally Village, Raigir,<br />
                Yadadri Bhongir District,<br />
                Telangana — 508 116
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest font-bold text-cream/30">
          <p>© {new Date().getFullYear()} Sri Sri Arcades. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed & Developed by
            <a
              href="https://hashtagheros.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-all duration-300 hover:text-white"
            >
              HashTag Heros Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
