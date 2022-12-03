import { Simulate } from "react-dom/test-utils";
import { MdCenterFocusStrong } from "react-icons/md";
import { content } from "../Content";
import { useState, createElement } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Projects2 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectskill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { projects } = content;
  return (
    <section className="min-h-fit bg-dark_blue_2" id="projects">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="zoom-in">
          {projects.title}
        </h2>
        <h4 className="subtitle" data-aos="zoom-in">
          {projects.subtitle}
        </h4>
        <br />
        <div>
          <div className="flex gap-5 justify-between flex-wrap group">
            {projects.service_content.map((content, i) => (
              <div className="min-w-[14rem] duration-300 cursor-pointer rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none">
                <img src={content.logo} alt="..." className="mx-auto" />
                <h6 className="my-3">{content.title}</h6>
                <p className="leading-7">{content.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(projects);
                    openModal();
                  }}
                  className="text-xl absolute bottom-5 right-5"
                >
                  {createElement(projects.icon)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
