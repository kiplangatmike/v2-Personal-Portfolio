// import logo from './logo.svg';
// import './App.css';
import { useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Aos from "aos";
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials"
import HireMe from "./components/HireMe";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <HireMe />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">MIKE KIPLANGAT</h6>
        <p>All CopyRight Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
