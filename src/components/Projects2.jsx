import { Simulate } from "react-dom/test-utils";
import { MdCenterFocusStrong } from "react-icons/md";
import { content } from "../Content";

const Projects2 = () => {
  const { Projects } = content;
  return (
    <section className="min-h-fit bg-dark_blue_2" id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {Projects.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Projects.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {Projects.service_content.map((content, i) => (
            <div className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none">
                <img src={content.logo} alt="..." className="mx-auto" />
                <h6 className="my-3">{content.title}</h6>
                <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
