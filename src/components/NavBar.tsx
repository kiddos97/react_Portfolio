import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaGithub, FaMailBulk, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
//import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  //Event handler setting nav to the oppisote
  const Navhandler = () => setNav(!nav);

  useEffect(() => {
    //setting shadow of border on scroll
    const handleshaow = () => {
      if (window.scrollY) {
        setShadow(!shadow);
      } else {
        setShadow(shadow);
      }
    };
    window.addEventListener("scroll", handleshaow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-gray-600 z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      {/* Container */}
      <div className="flex justify-between items-center w-full bg-[#ecf0f3] h-full px-2 2xl:px-16">
        {/*Logo */}
        <div>
          <img src={logo} alt="logo" style={{ width: "120px" }} />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex uppercase">
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="/about">About</a>
          </li>
          <li className="p-4">
            <a href="/project">Project</a>
          </li>
          <li className="p-4">
            <a href="/skills">Skills</a>
          </li>
          <li className="p-4">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div
          onClick={Navhandler}
          className="md:hidden z-10 cursor-pointer rounded-full shadow-xl shadow-gray-600 p-4"
        >
          <FaBars style={{ color: "#5651e5" }} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/*Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div>
              <img src={logo} alt="logo" style={{ width: "100px" }} />
            </div>
            <div
              onClick={Navhandler}
              className="rounded-full shadow-xl p-3 shadow-gray-600 cursor-pointer"
            >
              <FaTimes style={{ color: "#5651e5" }} />
            </div>
          </div>
          <div className="text-md border-b border-gray-400 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let's build something legendary together
            </p>
          </div>
          <div>
            <ul className="flex flex-col pt-12 uppercase">
              <li className="p-4">
                <a href="/">Home</a>
              </li>
              <li className="p-4">
                <a href="/about">About</a>
              </li>
              <li className="p-4">
                <a href="/project">Project</a>
              </li>
              <li className="p-4">
                <a href="/skills">Skills</a>
              </li>
              <li className="p-4">
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="pt-30">
              {/*Social Icon */}
              <p className=" text-sm uppercase tracking-widest p-4 text-[#5651e5] pt-12">
                Let's connect!
              </p>
              <div>
                <ul className="flex justify-between items-center">
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedin style={{ color: "#5651e5" }} />
                  </li>
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaGithub style={{ color: "#5651e5" }} />
                  </li>
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaMailBulk style={{ color: "#5651e5" }} />
                  </li>
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <BsFillPeopleFill style={{ color: "#5651e5" }} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
