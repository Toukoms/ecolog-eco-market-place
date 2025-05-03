import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-ecologis-green">ECO</span>
          <span className="text-2xl font-bold text-ecologis-orange">LOGIS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="font-medium hover:text-ecologis-green-dark transition-colors"
          >
            Accueil
          </Link>
          <Link
            to="/produits"
            className="font-medium hover:text-ecologis-green-dark transition-colors"
          >
            Produits
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-ecologis-green-dark transition-colors"
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className="font-medium hover:text-ecologis-green-dark transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Cart and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center bg-ecologis-orange text-white p-0">
                3
              </Badge>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="py-2 px-4 hover:bg-ecologis-green/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/produits"
              className="py-2 px-4 hover:bg-ecologis-green/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 hover:bg-ecologis-green/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="py-2 px-4 hover:bg-ecologis-green/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="py-2 px-4 hover:bg-ecologis-green/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Panier
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
