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
              <div className="min-w-[14rem] duration-300 cursor-pointe rounded-xl text-center bg-bg_light_primary p-6 flex-1">
                <div
                  onClick={() => {
                    window.open(
                      "https://github.com/kiplangatmike?tab=repositories",
                      "_blank"
                    );
                    setSelectSkill(projects);
                    openModal();
                  }}
                  className="text-xl absolute ml-0.1 bg-dark_blue p-1 rounded hover:scale-125 text-white "
                >
                  {createElement(projects.icon)}
                </div>
                <img src={content.logo} alt="..." className="mx-auto h-12" />
                <h6 className="my-3 ">{content.title}</h6>
                <p className="leading-7">{content.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
