import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactForm />
    </main>
  );
}