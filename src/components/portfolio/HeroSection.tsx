import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-primary-glow rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
          {/* Main Portfolio Heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent leading-tight overflow-hidden">
              <div className="relative inline-block">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-glow to-accent overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typing" style={{animation: 'typing 3s steps(12, end) 0.5s forwards, blink 1s infinite 0.5s'}}>
                  PROFESSIONAL
                </span>
              </div>
              <div className="relative inline-block">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-white overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typing" style={{animation: 'typing 2s steps(6, end) 4s forwards, blink 1s infinite 4s'}}>
                  SKILLS
                </span>
              </div>
              <div className="relative inline-block">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-glow via-white to-accent overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typing" style={{animation: 'typing 3s steps(9, end) 6.5s forwards, blink 1s infinite 6.5s'}}>
                  PORTFOLIO
                </span>
              </div>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-primary-glow mx-auto rounded-full animate-pulse transform scale-x-0 opacity-0" style={{animation: 'scaleIn 0.8s ease-out 10s forwards'}}></div>
          </div>
          
          {/* Profile Image */}
          <div className="mx-auto w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-glow mb-6 md:mb-8 animate-scale-in overflow-hidden group transform translate-y-8 opacity-0" style={{animation: 'fade-in 0.8s ease-out 1.5s forwards, slideUpFade 0.8s ease-out 1.5s forwards'}}>
            <div className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-500 group-hover:scale-110">
              <img 
                src="/lovable-uploads/11455c93-8d12-4072-a735-ec03ef7c3239.png" 
                alt="Kasthury Natharuban Profile" 
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full"></div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="space-y-3 md:space-y-4 transform translate-y-8 opacity-0" style={{animation: 'fade-in 0.8s ease-out 1.8s forwards, slideUpFade 0.8s ease-out 1.8s forwards'}}>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                <span className="block hover:text-primary-glow transition-colors duration-300">KASTHURY</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow hover:from-primary-glow hover:to-white transition-all duration-500">
                  NATHARUBAN
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light mb-4 md:mb-8 hover:text-white transition-colors duration-300">
                Intern Software Engineer
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed px-4 hover:text-white/90 transition-colors duration-300">
              B.Sc (Hons) Computer Science and Software Engineering Student at SLIIT University of Sri Lanka, 
              passionate about solving real-world challenges through technology
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-white/90 text-xs sm:text-sm animate-fade-in px-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 hover:bg-white/30 transition-smooth text-white border border-white/20 h-auto min-h-0 hover:scale-105 shadow-lg"
              onClick={() => window.open('tel:+94767909473', '_self')}
            >
              <Phone className="w-4 h-4 flex-shrink-0 text-white" />
              <span className="truncate text-white font-medium">+94 767909473</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 hover:bg-white/30 transition-smooth text-white border border-white/20 h-auto min-h-0 hover:scale-105 shadow-lg"
              onClick={() => window.open('mailto:kasthuryruban002@gmail.com', '_self')}
            >
              <Mail className="w-4 h-4 flex-shrink-0 text-white" />
              <span className="truncate text-white font-medium">kasthuryruban002@gmail.com</span>
            </Button>
            <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 hover:bg-white/30 transition-smooth border border-white/20 shadow-lg">
              <MapPin className="w-4 h-4 flex-shrink-0 text-white" />
              <span className="truncate text-white font-medium">Virachchi Lane, Uduppiddy, Jaffna</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex justify-center mt-8 md:mt-12 px-4 animate-slide-up">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="group w-full sm:w-auto hover:scale-105 transition-all duration-500 shadow-elegant hover:shadow-glow bg-gradient-primary border-0 text-white overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <span className="relative z-10 group-hover:animate-bounce-gentle">View Projects</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
        <ChevronDown className="w-6 h-6 text-white/60 mx-auto mt-2 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;