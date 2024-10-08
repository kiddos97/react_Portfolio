//mport { CiMail } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="w-full pt-60 h-screen text-black">
      <div className="max-w-[1000px] mx-auto px-8 text-center justify-center h-full ">
        <div className="animate__animated animate__fadeInDownBig">
          <p className="uppercase text-sm mb-4">
            Let's build something together
          </p>
          <h1 className="text-4xl sm:text-7xl mb-4">
            Hi, I'm <span className="text-[#5651e5] font-bold">Emmanuel</span>
          </h1>
          <p className="text-4xl sm:text-7xl mb-4">A Full Stack Developer</p>
          <p className="text-sm sm:text-lg mb-8 text-gray-600">
            I'm a front-end web developer specialzing in building exceptional
            digital experience. Currently I'm focused on building responsive
            front-end web applications while learning back-end technologies.
          </p>
        </div>
        <div className="animate__animated animate__jackInTheBox">
          <ul className="flex justify-center items-center">
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4 hover:scale-110 ease-in duration-300">
              <a href="http://www.linkedin.com/in/osaro-imarhiagbe">
                <FaLinkedin style={{ color: "#5651e5" }} />
              </a>
            </li>
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4 hover:scale-110 ease-in duration-300">
              <a href="http://github.com/kiddos97">
                <FaGithub style={{ color: "#5651e5" }} />
              </a>
            </li>
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4 hover:scale-110 ease-in duration-300">
              <FaMailBulk style={{ color: "#5651e5" }} />
            </li>
            <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4 hover:scale-110 ease-in duration-300">
              <BsFillPeopleFill style={{ color: "#5651e5" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
