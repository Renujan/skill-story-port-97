import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-secondary text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-glow rounded-full filter blur-2xl animate-pulse-glow delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">Get In Touch</h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-left">
            Ready to collaborate or discuss opportunities? Let's connect and build something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 animate-slide-in-left">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 shadow-glow">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-bounce-gentle shadow-elegant">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-white/80 group-hover:text-white transition-colors">+94 767909473</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-bounce-gentle shadow-elegant">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-white/80 group-hover:text-white transition-colors break-all">kasthuryruban002@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-bounce-gentle shadow-elegant">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-white/80 group-hover:text-white transition-colors">Virachchi Lane, Uduppiddy, Jaffna</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 shadow-glow">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                Connect With Me
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group relative bg-gradient-primary border-0 text-white shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
                  onClick={() => window.open('https://github.com/Kasthu19', '_blank')}
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <Github className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle relative z-10" />
                  <span className="relative z-10">GitHub</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group relative bg-gradient-primary border-0 text-white shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 hover:-rotate-1 overflow-hidden"
                  onClick={() => window.open('http://linkedin.com/in/kasthury-ruban-307218301', '_blank')}
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  <Linkedin className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle relative z-10" />
                  <span className="relative z-10">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Ready to Work Together */}
          <div className="animate-slide-in-right">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-glow">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                Ready to Work Together?
              </h3>
              <p className="text-white/80 mb-6">
                I'm always open to discussing new opportunities, innovative projects, and ways to contribute to your team's success.
              </p>
              
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="w-full group relative bg-gradient-primary border-0 text-white shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 overflow-hidden"
                  onClick={() => {
                    const subject = encodeURIComponent("Work Opportunity - Let's Collaborate");
                    const body = encodeURIComponent("Hello Kasthury,\n\nI'm interested in discussing a potential collaboration or work opportunity.\n\nBest regards,");
                    const mailtoLink = `mailto:kasthuryruban002@gmail.com?subject=${subject}&body=${body}`;
                    window.open(mailtoLink, '_blank');
                  }}
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle relative z-10" />
                  <span className="relative z-10">Send me an Email</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full group relative border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-500 hover:scale-105"
                  onClick={() => window.open('tel:+94767909473', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  Call Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;