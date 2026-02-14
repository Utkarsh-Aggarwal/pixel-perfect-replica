import { useState } from "react";
import { Search, User, Menu, X, Leaf, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Leaf className="text-foreground" size={28} />
          <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Planto.
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <li><a href="#" className="text-foreground transition-colors">Home</a></li>
          <li>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Plants Type <ChevronDown size={14} />
            </a>
          </li>
          <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">More</a></li>
          <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors">
            <User size={20} />
          </button>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-6">
          <ul className="flex flex-col gap-4 font-sans text-base font-medium">
            <li><a href="#" className="text-foreground">Home</a></li>
            <li><a href="#" className="text-muted-foreground">Plants Type</a></li>
            <li><a href="#" className="text-muted-foreground">More</a></li>
            <li><a href="#contact" className="text-muted-foreground">Contact</a></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <Search size={20} className="text-muted-foreground" />
            <User size={20} className="text-muted-foreground" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
