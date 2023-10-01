import About from "../About";
import ContactInfo from "../Contact/ContactInfo";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-right">
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Content;
