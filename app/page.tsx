import Vision from "@/components/vision";
import Contact from "@/components/contact";
import Experience from "@/components/why";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Vision />
      <Services />
      <Projects />
      
      <Experience />
      <Contact />
    </main>
  );
}
