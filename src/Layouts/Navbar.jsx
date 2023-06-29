import { useState } from "react";
import { content } from "../Content";
import { RiMenu4Fill } from "react-icons/ri";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="relativ w-full flex justify-center">
      <div
        className="fixed sm:cursor-pointer top-10 right-8 z-[999] rounded-lg bg-dark_blue/10 p-2 "
        onClick={() => setShowMenu(!showMenu)}
      >
        <RiMenu4Fill size={34} />
      </div>
      <div className={`fixed z-[999] items-center ${
            showMenu ? "md:top-8" : "top-[-100%]"
          }`}>
        <nav
          className={`flex gap-5 bg-slate-200/60 px-5 py-3 backdrop-blur-md rounded text-dark_blue_2 duration-300 `}
        >
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setActive(i)}
              className={`text-xl p-2.5 rounded sm:cursor-pointer
            ${i === active && "bg-dark_blue text-white"}`}
            >
              {createElement(item.icon)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
