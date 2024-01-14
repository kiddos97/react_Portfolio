import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import contact from "../assets/contact.jpg";
import { BsFillPeopleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="cols-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Emmanuel</h2>
                <p>Front-End Developer</p>
                <p className="py-4 mb-4">
                  I am avaiable for free-lance positions. Contact me and let's
                  talk!
                </p>
                <div>
                  <p className="uppercase text-center pt-8"> Connect with me</p>
                </div>
                <div className="p-4">
                  <ul className="flex justify-center items-center">
                    <li className="rounded-full shadow-xl shadow-gray-600  p-4 ml-4">
                      <FaLinkedin style={{ color: "#5651e5" }} />
                    </li>
                    <li className="rounded-full shadow-xl shadow-gray-600  p-4 ml-4">
                      <FaGithub style={{ color: "#5651e5" }} />
                    </li>
                    <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4">
                      <FaMailBulk style={{ color: "#5651e5" }} />
                    </li>
                    <li className="rounded-full shadow-xl shadow-gray-600 p-4 ml-4">
                      <BsFillPeopleFill style={{ color: "#5651e5" }} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-600 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase tetx-sm py-2" htmlFor="">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex biorder-gray-300"
                      type="text"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
