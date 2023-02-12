// import images
// import Hero_person from "./assets/images/Hero/person.png";

import js from "./assets/images/Skills/js.png";
import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import c from "./assets/images/Skills/c.png";
import tailwind from "./assets/images/Skills/tailwind-css-icon.png";
import flutter from "./assets/images/Skills/flutter.png";

import movie_app from "./assets/images/Projects/movie_app.png"
import reddit from "./assets/images/Projects/booking.png";
import tracker from "./assets/images/Projects/tracker.png";
import house from "./assets/images/Projects/house.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";
import services_logo5 from "./assets/images/Services/coding.png";
import services_logo6 from "./assets/images/Services/logo6.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { HiHome } from "react-icons/hi";
export const content = {
  nav: [
    {
      link: "#home",
      icon: FiHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: AiOutlineFundProjectionScreen,
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
    firstName: "FRONT-END",
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
    // subtitle: "MY SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        logo: js,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Python",
        logo: python,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "C",
        logo: c,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "Flutter",
        logo: flutter,
      },
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  projects: {
    title: "Projects",
    icon: FiGithub,
    // subtitle: "PROJECTS I'VE DONE",
    service_content: [
      {
        title: "Task Tracker",
        para: "This is an application that keeps track of activities that you are doing, the ones you are done with and the ones you are yet to finish",
        logo: tracker,
      },
      {
        title: "Find Your House App",
        para: "This is an application that links agents and home owners individuals looking for house to rent or buy.",
        logo: house,
      },
      {
        title: "Movie App",
        para: "This is a website that i'm using open source API to fetch data of movies that are popular and those that are trending",
        logo: movie_app,
      },
    ],
  },
  services: {
    title: "Services",
    // subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "",
        logo: services_logo6,
      },
      {
        title: "Mobile App Development",
        para: "",
        logo: services_logo4,
      },
      {
        title: "UI Designing",
        para: "",
        logo: services_logo5,
      },
    ],
  },
  // Projects2: {
  //   title: "Projects",
  //   subtitle: "MY CREATION",
  //   image: person_project,
  //   project_content: [
  //     {
  //       title: "Gym Website",
  //       image: project1,
  //     },
  //     {
  //       title: "Social Media web",
  //       image: project2,
  //     },
  //     {
  //       title: "Creative Website",
  //       image: project3,
  //     },
  //   ],
  // },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [],
  // },
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
    // subtitle: "GET IN TOUCH?",
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
        text: "nyolmo_",
        icon: BsTwitter,
        link: "https://twitter.com/nyolmo_",
      },
      {
        text: "+254 713 336 340",
        icon: MdCall,
        link: "https://wa.me/0780323032",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
