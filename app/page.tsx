import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main>
      <PageTransition>
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal>
          <Projects />
        </SectionReveal>
        <SectionReveal>
          <Skills />
        </SectionReveal>
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionReveal>
          <Education />
        </SectionReveal>
        <SectionReveal>
          <Certificates />
        </SectionReveal>
        <SectionReveal>
          <Contact />
        </SectionReveal>
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </PageTransition>
    </main>
  );
}
