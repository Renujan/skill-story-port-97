import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";

const ProjectsSection = () => {
  const getGradientClass = (index: number) => {
    const gradients = [
      'bg-gradient-session-5',
      'bg-gradient-session-6', 
      'bg-gradient-session-7',
      'bg-gradient-session-8'
    ];
    return gradients[index] || 'bg-gradient-primary';
  };

  const projects = [
    {
      title: "Online Food Delivery (E-Commerce Front-end)",
      type: "Individual",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Admin panel", "Client Side", "Testing", "Validation"],
      year: "1st Year 2nd Semester Student",
      description: "A comprehensive e-commerce front-end for online food delivery with admin panel and client-side validation."
    },
    {
      title: "TechRepair (Java Swing Application)",
      type: "Group",
      technologies: ["Java Swing", "Java AWT", "JDBC", "Event Handling"],
      year: "1st Year 2nd Semester September",
      description: "A desktop application for tech repair services built with Java Swing and database connectivity."
    },
    {
      title: "Appointment App (Android Mobile Application)",
      type: "Group",
      technologies: ["Java", "Firebase", "API", "RecyclerView", "XML"],
      year: "2nd Year 1st Semester April",
      description: "Android mobile application for appointment management with Firebase backend integration."
    },
    {
      title: "Low Fidelity High Fidelity Project",
      type: "Group",
      technologies: ["Figma", "Wireframe"],
      year: "2nd Year 1st Semester February",
      description: "UI/UX design project focusing on creating both low and high fidelity prototypes using Figma."
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-primary-glow rounded-full filter blur-2xl animate-pulse-glow delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">Projects</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-left">
            A showcase of my technical projects and development experience across various technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`${getGradientClass(index)} shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:scale-[1.05] hover:rotate-1 group animate-scale-in text-white overflow-hidden relative`} 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg md:text-xl text-white group-hover:text-white/90 transition-smooth leading-tight group-hover:transform group-hover:translate-x-2 duration-300">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-white/80 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                      <Calendar className="w-4 h-4 animate-pulse-glow" />
                      <span>{project.year}</span>
                      <Badge variant="outline" className="text-xs bg-white/20 text-white border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-2 relative z-10">
                <p className="text-sm md:text-base text-white/90 leading-relaxed group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse-glow"></div>
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-pointer"
                          style={{animationDelay: `${techIndex * 0.1}s`}}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {project.features && (
                    <div>
                      <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-white animate-pulse-glow" />
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex} 
                            variant="outline" 
                            className="text-xs bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                            style={{animationDelay: `${featureIndex * 0.1}s`}}
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;