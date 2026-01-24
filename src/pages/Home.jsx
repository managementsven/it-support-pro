import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import SkillsGrid from "@/components/landing/SkillsGrid";
import ExperienceSection from "@/components/landing/ExperienceSection";
import WorkStyleSection from "@/components/landing/WorkStyleSection";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <HeroSection />
      <AboutSection />
      <SkillsGrid />
      <ExperienceSection />
      <WorkStyleSection />
      <FooterSection />
    </main>
  );
}