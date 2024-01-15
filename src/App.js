import { useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Aos from "aos";
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects2 from "./components/Projects2";
import Footer from "./components/footer";

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
      <Footer />
    </div>
  );
};

export default App;
