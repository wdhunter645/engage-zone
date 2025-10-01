import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Famous Quote */}
        <div className="text-center mb-8">
          <blockquote className="text-xl md:text-2xl font-serif italic text-foreground/80 max-w-3xl mx-auto">
            "Coming together is a beginning, staying together is progress, and working together is success."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-3">— Henry Ford</p>
        </div>

        <Separator className="my-8" />

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} BUSINESS NAME. All rights reserved.</p>
          <p className="mt-2">Built with passion for our amazing fan community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
