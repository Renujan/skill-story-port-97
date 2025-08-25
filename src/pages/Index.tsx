import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ProfessionalSkillsSection from "@/components/portfolio/ProfessionalSkillsSection";
import ReferencesSection from "@/components/portfolio/ReferencesSection";
import ContactSection from "@/components/portfolio/ContactSection";
import MobileNavigation from "@/components/portfolio/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MobileNavigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ReferencesSection />
      <ProfessionalSkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
