import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  //Event handler setting nav to the oppisote
  const Navhandler = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      {/* Container */}
      <div className="flex justify-between items-center w-full bg-[#ecf0f3] h-full px-2 2xl:px-16">
        {/*Logo */}
        <div>
          <img src={logo} alt="logo" style={{ width: "120px" }} />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Project</li>
          <li className="p-4">Skills</li>
          <li className="p-4">Contact</li>
        </ul>

        {/*Hamburger */}
        <div
          onClick={Navhandler}
          className="md:hidden z-10 cursor-pointer rounded-full shadow-xl p-4 bg-white"
        >
          <FaBars style={{ color: "#5e17eb" }} />
        </div>
        {/* Moblie Menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[60%] h-screen bg-[#ecf0f3] p-4"
              : "fixed hidden ease-in-out duration-700 "
          }
        >
          <div
            onClick={Navhandler}
            className="md:hidden z-10 cursor-pointer flex items-center justify-between "
          >
            <div>
              <img src={logo} alt="logo" style={{ width: "120px" }} />
            </div>
            <div className="rounded-full shadow-xl p-4 bg-white">
              <FaTimes style={{ color: "#5e17eb" }} />
            </div>
          </div>
          <p className="text-md inline border-b border-gray-300 p-2">
            Let's build something legendary
          </p>
          <ul className="flex flex-col pt-12 uppercase">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Project</li>
            <li className="p-4">Skills</li>
            <li className="p-4">Contact</li>
          </ul>
          {/*Social Icon */}
          <p className=" text-sm uppercase p-4 text-[#5e17eb] pt-12">
            Let's connect!
          </p>
          <div>
            <ul className="flex justify-between items-center">
              <li className="rounded-full shadow-xl p-4 bg-white">
                <FaLinkedin style={{ color: "#5e17eb" }} />
              </li>
              <li className="rounded-full shadow-xl p-4 bg-white">
                <FaLinkedin style={{ color: "#5e17eb" }} />
              </li>
              <li className="rounded-full shadow-xl p-4 bg-white">
                <FaLinkedin style={{ color: "#5e17eb" }} />
              </li>
              <li className="rounded-full shadow-xl p-4 bg-white">
                <FaLinkedin style={{ color: "#5e17eb" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
