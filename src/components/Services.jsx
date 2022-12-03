import { Simulate } from "react-dom/test-utils";
import { MdCenterFocusStrong } from "react-icons/md";
import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section className="min-h-fit bg-dark_blue_3" id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="zoom-in">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="zoom-in">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div className="min-w-[14rem] duration-300 cursor-pointer rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hove:blur-sm hover:!blur-none">
                <img src={content.logo} alt="..." className="mx-auto h-12" />
                <h6 className="my-3">{content.title}</h6>
                <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
