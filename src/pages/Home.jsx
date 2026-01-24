import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactPanel from "@/components/landing/ContactPanel";
import SkillsGrid from "@/components/landing/SkillsGrid";
import ExperienceSection from "@/components/landing/ExperienceSection";
import WorkStyleSection from "@/components/landing/WorkStyleSection";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <HeroSection />
      <AboutSection />
      <ContactPanel />
      <SkillsGrid />
      <ExperienceSection />
      <WorkStyleSection />
      <FooterSection />
    </main>
  );
}