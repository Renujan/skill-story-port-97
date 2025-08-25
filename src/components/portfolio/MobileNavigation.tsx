import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, User, FolderOpen, Award, Users, Mail } from "lucide-react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#skills", label: "Skills", icon: Award },
    { href: "#references", label: "References", icon: Users },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="secondary" 
              size="icon" 
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 shadow-glow"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-gradient-secondary text-white border-white/20">
            <div className="flex flex-col gap-4 mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Navigation</h2>
                <p className="text-white/80 text-sm">Explore my portfolio</p>
              </div>
              
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Floating Navigation */}
      <div className="hidden md:block fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
        <nav className="flex flex-col gap-3 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white hover:scale-110 transform duration-200"
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNavigation;