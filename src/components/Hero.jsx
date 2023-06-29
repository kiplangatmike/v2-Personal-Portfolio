import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section >
      <div className="min-h-[40%] relative flex md:flex-row flex-col md:items-end justify-left items-left">
        <div
          data-aos="slide-left"
          data-aos-delay="1500"
          className="absolute h-full md:w-5/12 hidden md:block top-0 right-0 by-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-0 absolute top-[45%] left-[5%] text-dark_blue_2 ">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        <div
          className="pb-16 px-6 md:pl-60 md:pt-40 pt-32 relative flex  flex-col md:items-center md:justify-left items-left"
          data-aos="fade-left"
          // data-aos-delay="1000"
        >
          <h2 data-aos-delay="200">{hero.title}</h2>
          <br />
          <div className="flex md:justify-center" data-aos-delay="1000">
            <a
              href="https://docs.google.com/document/d/18ILr4v4Ht331FOoyAzucyck2w2F2CiOgxClRBN2T4GA/edit"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn hover:bg-dark_blue hover:text-white transform-all duration-500">
                {hero.btnText}
              </button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10" data-aos-delay="2000">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 500}
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
