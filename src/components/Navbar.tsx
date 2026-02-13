import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Plots Availability", href: "/plots-availability" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to determine if we should use Link or a tag
  const isInternal = (href: string) => href.startsWith("/") && !href.endsWith(".pdf");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md border-b border-border/40 py-2 shadow-sm"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link
          to="/"
          className={`font-serif text-2xl font-bold transition-colors duration-500 ${isScrolled ? "text-primary" : "text-cream"
            }`}
        >
          Sri Sri Arcades
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            isInternal(link.href) ? (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[13px] font-sans font-black uppercase tracking-[0.2em] transition-all duration-500 hover:text-primary relative group ${isScrolled ? "text-foreground" : "text-cream"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full`} />
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-sans font-black uppercase tracking-[0.2em] transition-all duration-500 hover:text-primary relative group ${isScrolled ? "text-foreground" : "text-cream"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full`} />
              </a>
            )
          ))}
          <Button
            asChild
            className={`rounded-xl px-8 font-bold transition-all duration-500 shadow-lg hover:shadow-primary/20 ${isScrolled
              ? "bg-primary hover:bg-gold text-cream"
              : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white text-cream hover:text-primary"
              }`}
          >
            <a href="#contact" className="gap-2">
              <Calendar className="w-4 h-4" />
              Book Site Visit
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            isInternal(l.href) ? (
              <Link
                key={l.label}
                to={l.href}
                className="block text-sm font-medium text-foreground/80 hover:text-primary py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm font-medium text-foreground/80 hover:text-primary py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            )
          ))}
          <Button asChild size="sm" className="w-full gap-1.5">
            <a href="#contact">
              <Calendar className="w-4 h-4" />
              Book Site Visit
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
