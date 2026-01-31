import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ContactPanel from "@/components/landing/ContactPanel";
import SkillsGrid from "@/components/landing/SkillsGrid";
import ExperienceSection from "@/components/landing/ExperienceSection";
import TroubleshootingLog from "@/components/landing/TroubleshootingLog";
import ProjectShowcase from "@/components/landing/ProjectShowcase";
import WorkStyleSection from "@/components/landing/WorkStyleSection";
import FooterSection from "@/components/landing/FooterSection";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <Toaster position="bottom-right" />
      <main className="font-sans antialiased">
        <HeroSection />
        <AboutSection />
        <ContactPanel />
        <SkillsGrid />
        <ExperienceSection />
        <TroubleshootingLog />
        <ProjectShowcase />
        <WorkStyleSection />
        <FooterSection />
      </main>
    </>
  );
}