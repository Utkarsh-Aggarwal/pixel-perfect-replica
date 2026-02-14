import { Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card/50">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="text-foreground" size={24} />
              <span className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Planto.
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Bringing nature closer to you. We deliver fresh, healthy plants right to your doorstep with care and love.
            </p>
            <div className="flex gap-4 pt-2">
              {["FB", "TW", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-foreground/60 flex items-center justify-center text-xs font-bold text-foreground/70 hover:text-foreground hover:border-foreground transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Type of Plants", "Contact", "Privacy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans font-semibold text-foreground mb-4">For Every Update</h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <button className="rounded-full px-6 py-2 bg-transparent text-foreground border border-foreground/60 hover:bg-foreground/10 transition-colors text-sm font-medium shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Planto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
