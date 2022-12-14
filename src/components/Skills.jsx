import { createElement, useState } from "react";
import { content } from "../Content";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit bg-dark_blue_3 w-full}" id="skills">
      {/* <modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      > */}
      {/* <div className="flex items-center gap-2">
          <img className="h-10" src={selectskill?.logo} alt="..." />
          <h6>{selectskill?.name}</h6>
        </div>
        <br /> */}
      {/* <ul className="list-decimal px-4 font-Poppins sm:text text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
        </ul> */}
      {/* <br />
        <div className="flex justify-end">
          <button className="btn" onClick={closeModal}>
            close
          </button>
        </div> */}
      {/* </modal> */}

      <div className="md:container pl-8 px-5 py-14 ">
        <h2 className="title flex items-center " data-aos="zoom-in">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="zoom-in">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="flip-down"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-0 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                {/* <p className="italic">{skill.para}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
