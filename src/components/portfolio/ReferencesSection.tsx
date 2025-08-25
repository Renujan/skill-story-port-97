import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, User } from "lucide-react";

const ReferencesSection = () => {
  const getGradientClass = (index: number) => {
    const gradients = [
      'bg-gradient-session-1',
      'bg-gradient-session-2'
    ];
    return gradients[index] || 'bg-gradient-primary';
  };

  const references = [
    {
      name: "Mr. K.Thiruthanigesan",
      title: "Faculty of Computing",
      organization: "Lecture SLIIT NORTHERN UNI",
      location: "Jaffna, Sri Lanka",
      phone: "+94 779702255",
      email: "thiruthanigesan@gmail.lk"
    },
    {
      name: "Mr. V.A.M.R.Sinthujan",
      title: "Department of IT",
      organization: "Lecturer, SLIIT NORTHERN UNI", 
      location: "Jaffna, Sri Lanka",
      phone: "+94 778605609",
      email: "sinthujan@sliit.lk"
    }
  ];

  return (
    <section id="references" className="py-12 md:py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-glow rounded-full filter blur-2xl animate-pulse-glow delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up">References</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-left">
            Professional references who can attest to my academic performance and character
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {references.map((reference, index) => (
            <Card 
              key={index} 
              className={`${getGradientClass(index)} shadow-elegant border-0 hover:shadow-glow transition-all duration-500 hover:scale-[1.05] hover:rotate-1 animate-scale-in text-white group overflow-hidden relative`} 
              style={{animationDelay: `${index * 0.3}s`}}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:animate-bounce-gentle backdrop-blur-sm">
                    <User className="w-6 h-6 text-white group-hover:animate-wiggle" />
                  </div>
                  <div className="group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <h3 className="text-xl font-semibold">{reference.name}</h3>
                    <p className="text-sm text-white/80 font-normal">{reference.title}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-white animate-pulse-glow">🏢</span>
                    </div>
                    <span className="text-sm">{reference.organization}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-white/90 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-white flex-shrink-0 animate-pulse" />
                    <span className="text-sm">{reference.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-white/90 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <Phone className="w-5 h-5 text-white flex-shrink-0 animate-pulse-glow" />
                    <span className="text-sm">{reference.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-white/90 group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <Mail className="w-5 h-5 text-white flex-shrink-0 animate-pulse" />
                    <span className="text-sm break-all">{reference.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;