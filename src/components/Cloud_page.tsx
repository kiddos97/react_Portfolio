import { RiRadioButtonFill } from "react-icons/ri";
import cloud from "../assets/cloud.png";

const Cloud_page = () => {
  return (
    <div id="cloud_page" className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10 " />
        <img
          className="absolute z-1 object-cover w-full h-full"
          src={cloud}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">Portfolio</h2>
          <h3>React Js / Tailwind / TypeScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-2 text-lg sm:text-xl">Project</p>
          <h2 className="mb-2">Overview</h2>
          <p>
            This app was built using React Js, TypeScript and Tailwind Css. This
            is a single page portfolio with a fully functioning navigation menu
            and smooth scrolling. The page consists of an home and about
            section, a skill section displying the users lists of skills and a
            project section that consits of links to recent created projects.
            Lastly, there is a contact section that consists of a working
            contact form, that handles user input and form validation.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="#">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/kiddos97/React-Portfolio.git">Code</a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4">
          <div className="py-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                TypeScript
              </p>
            </div>
          </div>
        </div>
        <a href="/project">
          <p className="underline cursor-pointer">Back</p>
        </a>
      </div>
    </div>
  );
};

export default Cloud_page;
