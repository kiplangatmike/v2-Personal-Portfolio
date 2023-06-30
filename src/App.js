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
import Projects2 from "./components/Projects2";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div >
      <Navbar />
      <Hero />
      <Skills />
      <Projects2 />
      <Services />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3 font-bold">MIKE KIPLANGAT</h6>
        <p>@2023</p>
      </footer>
    </div>
  );
};

export default App;
