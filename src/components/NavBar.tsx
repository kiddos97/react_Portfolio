import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaGithub, FaMailBulk, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
//import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navbg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const location = useLocation();
  //Event handler setting nav to the oppisote
  const Navhandler = () => setNav(!nav);

  useEffect(() => {
    if (
      location.pathname === "/portfolio_page" ||
      location.pathname === "/cloud_page"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor(linkColor);
    }
  }, [location]);
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
      style={{ backgroundColor: `${navbg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-gray-600 z-[100] rounded-full"
          : "fixed w-full h-20 z-[100] rounded-full"
      }
    >
      {/* Container */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/*Logo */}
        <div>
          <img src={logo} alt="logo" style={{ width: "120px" }} />
        </div>
        {/* Menu */}
        <ul
          style={{ color: `${linkColor}` }}
          className="hidden md:flex uppercase"
        >
          <li className="p-4 ">
            <a className="hover:border-b-2 border-black" href="/">
              Home
            </a>
          </li>
          <li className="p-4">
            <a className="hover:border-b-2 border-black" href="/about">
              About
            </a>
          </li>
          <li className="p-4">
            <a className="hover:border-b-2 border-black" href="/project">
              Project
            </a>
          </li>
          <li className="p-4">
            <a className="hover:border-b-2 border-black" href="/skills">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a className="hover:border-b-2 border-black" href="/contact">
              Contact
            </a>
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 rounded-xl"
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
              <li className="p-4 ">
                <a className="hover:border-b-2 border-black" href="/">
                  Home
                </a>
              </li>
              <li className="p-4">
                <a className="hover:border-b-2 border-black" href="/about">
                  About
                </a>
              </li>
              <li className="p-4">
                <a className="hover:border-b-2 border-black" href="/project">
                  Project
                </a>
              </li>
              <li className="p-4">
                <a className="hover:border-b-2 border-black" href="/skills">
                  Skills
                </a>
              </li>
              <li className="p-4">
                <a className="hover:border-b-2 border-black" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="pt-30">
              {/*Social Icon */}
              <p className=" text-sm uppercase tracking-widest p-4 text-[#5651e5] pt-5">
                Let's connect!
              </p>
              <div>
                <ul className="flex justify-between items-center">
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <a href="http://www.linkedin.com/in/osaro-imarhiagbe">
                      <FaLinkedin style={{ color: "#5651e5" }} />
                    </a>
                  </li>
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <a href="http://github.com/kiddos97">
                      <FaGithub style={{ color: "#5651e5" }} />
                    </a>
                  </li>
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaMailBulk style={{ color: "#5651e5" }} />
                  </li>
                  <li className="rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-500">
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
