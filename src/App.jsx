import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { NavBar } from "./layout/NavBar";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
