// import images
import Hero_person from "./assets/images/Hero/person.png";
// import Hero_person1 from "./assets/images/Hero/profile.mike.jpg";

import js from "./assets/images/Skills/js.png";
import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#Projects2",
      icon: RiProjectorLine,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },

    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Mike Kiplangat",
    firstName: "WEB",
    LastName: "DEVELOPER",
    btnText: "Resume",
    // image: Hero_person1,
    hero_content: [
      {
        count: "</",
        text: "I'm a Software Engineer specialised in front-end Development...",
      },
      {
        count: "/>",
        text: "I enjoy designing and bring applications to life",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "WHAT I HAVE WORKED ON",
    service_content: [
      {
        title: "Task Tracker",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Find Your House",
        para: "This is an application that links agents and home owners individuals looking for house to rent or buy.",
        logo: services_logo3,
      },
      {
        title: "Reddit Clone",
        para: "A simple reddit clone app made of Node JS and React",
        logo: services_logo2,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Mobile App Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "ui Designing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
    ],
  },
  Projects2: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [],
  },
  // Hireme: {
  //   title: "Hire Me",
  //   subtitle: "FOR YOUR PROJECTS",
  //   image1: Hireme_person,
  //   image2: Hireme_person2,
  //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
  //   btnText: "Hire Me",
  // },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "kiplangatmike1938@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "nyolmo_mike",
        icon: BsInstagram,
        link: "https://www.instagram.com/nyolmo_mike/",
      },
      {
        text: "+254 713 336 340",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
