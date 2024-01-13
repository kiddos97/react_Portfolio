//mport { CiMail } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-60 h-screen bg-[#ecf0f3] text-black">
      <div className="max-w-[1000px] mx-auto px-8 text-center justify-center h-full">
        <p className="uppercase text-sm mb-4">Let's build something together</p>
        <h1 className="text-4xl sm:text-7xl mb-4">
          Hi, I'm <span className="text-[#5e17eb] font-bold">Emmanuel</span>
        </h1>
        <p className="text-4xl sm:text-7xl mb-4">A Front-End Web Developer</p>
        <p className="text-sm sm:text-lg mb-8">
          I'm a front-end web developer specialzing in building exceptional
          digital experience. Currently I'm focused on building responsive
          front-end web applications while learning back-end technologies.
        </p>
        <div>
          <ul className="flex justify-center items-center">
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4">
              <FaLinkedin style={{ color: "#5e17eb" }} />
            </li>
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4">
              <FaGithub style={{ color: "#5e17eb" }} />
            </li>
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4">
              <FaMailBulk style={{ color: "#5e17eb" }} />
            </li>
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4">
              <BsFillPeopleFill style={{ color: "#5e17eb" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
