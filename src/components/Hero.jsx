import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hiddens">
      <div className="min-h-[30%] relative flex md:flex-row flex-col-reverse md:items-end justify-left items-left">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-5/12 w-8/12 top-0 right-0 by-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-0 absolute top-[45%] left-[5%] text-dark_blue_2 ">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        <div className="pb-16 px-6 pl-60 pt-40" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-center">
            <a href="https://docs.google.com/document/d/1WVmM9mj3KWqKQFO2t1bz7BMiM9Iu8KwOfmxsnq-L3gk/edit" target="_blank"><button className="btn hover:bg-dark_blue hover:text-white">{hero.btnText}</button></a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                    ${i === 1 && " flex-row-reverse text-right"} `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
