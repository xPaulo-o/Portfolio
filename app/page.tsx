import Hero from './Components/Hero';
import Project from './Components/Projects';
import Navbar from './Components/Navbar';
import LazySections from './Components/LazySections';

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
        <LazySections />
      </main>
    </div>
  );
}
