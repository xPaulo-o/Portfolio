import Hero from './Components/Hero';
import Project from './Components/Projects';
import Footer from './Components/Footer';
import Certificate from './Components/certificates';
import Navbar from './Components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="certificates">
          <Certificate />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
