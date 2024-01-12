import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-60 h-screen bg-[#ecf0f3] text-black">
      <div className="max-w-[1000px] mx-auto px-8 text-center justify-center h-full">
        <p className="uppercase text-sm mb-4">Lets build something together</p>
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
          <ul className="flex justify-between items-center px-8 sm:px-10">
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
  );
};

export default Hero;
