import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Lightbulb, MessageSquare } from "lucide-react";

const AboutSection = () => {
  const getGradientClass = (index: number) => {
    const gradients = [
      'bg-gradient-session-1',
      'bg-gradient-session-2', 
      'bg-gradient-session-3',
      'bg-gradient-session-4'
    ];
    return gradients[index] || 'bg-gradient-primary';
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-glow rounded-full filter blur-2xl animate-pulse-glow delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">About Me</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-left">
            Get to know more about my background, education, and journey in software engineering
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* About Content */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className={`${getGradientClass(0)} shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:scale-[1.03] hover:rotate-1 text-white group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6 group-hover:animate-bounce-gentle">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-white group-hover:animate-wiggle" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <h4 className="font-semibold text-lg text-white">
                      B.Sc (Hons) Computer Science and Software Engineering
                    </h4>
                    <p className="text-white/90 font-medium">SLIIT - University of Sri Lanka</p>
                    <p className="text-white/80">NORTHERN UNI</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
                      <Calendar className="w-4 h-4 animate-pulse-glow" />
                      <span>Expected Graduation: 2026 October</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${getGradientClass(1)} shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 text-white group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse-glow"></div>
                  Personal Statement
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                  I'm Kasthury Natharuban, a second-year B.Sc. (Hons) Computer Science and Software 
                  Engineering student at SLIIT University of Sri Lanka. I'm passionate about harnessing 
                  technology to solve real-world challenges. My journey so far has equipped me with strong 
                  skills in Java, C, Python, HTML, CSS, and JavaScript, alongside experience in database 
                  management, mobile app development, and web development technologies like SpringBoot. 
                  I thrive in collaborative environments where I can contribute to exciting projects, grow my 
                  technical abilities, and make a lasting impact.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Skills & Languages */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className={`${getGradientClass(2)} shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:scale-[1.03] hover:rotate-1 text-white group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-white group-hover:animate-bounce-gentle" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-3">Management & Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Management Skills", "Creativity", "Time Management", "Adaptable", "Critical Thinking", "Leadership", "Decision Making", "Communication"].map((skill, index) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-pointer"
                          style={{animationDelay: `${index * 0.1}s`}}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${getGradientClass(3)} shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 text-white group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-white group-hover:animate-wiggle" />
                  Languages
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <span className="font-medium text-white">English</span>
                    <div className="flex gap-1">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-white/80 hover:animate-bounce-gentle transition-all duration-300" style={{animationDelay: `${i * 0.1}s`}}></div>
                      ))}
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <span className="font-medium text-white">Tamil</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-white/80 hover:animate-bounce-gentle transition-all duration-300" style={{animationDelay: `${i * 0.1}s`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${getGradientClass(0)} shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:scale-[1.03] text-white group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-white/10 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-white group-hover:animate-pulse-glow" />
                  Contact Information
                </h3>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-white animate-pulse" />
                    <span>Virachchi Lane, Uduppiddy, Jaffna</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <span className="w-4 h-4 flex items-center justify-center text-white">🌐</span>
                    <span>https://github.com/Kasthu19</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <span className="w-4 h-4 flex items-center justify-center text-white">💼</span>
                    <span>http://linkedin.com/in/kasthury-ruban-307218301</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;