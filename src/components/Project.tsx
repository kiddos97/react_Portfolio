//import { Link } from "react-router-dom";
import { Projects } from "../Project/Project";

interface Props {
  projectname: string;
  projectdescription: string;
  img: string;
  button: string;
  link: string;
}

const ProjectList: React.FC<Props> = ({
  projectname,
  projectdescription,
  img,
  button,
  link,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl font-bold tracking-wider text-center text-white">
          {projectname}
        </h3>
        <p className="pb-4 pt-2 text-center font-bold text-white">
          {projectdescription}
        </p>

        <a href={link}>
          <p className="text-center py-3 rounded-xl bg-white text-gray-700 font-bold cursor-pointer text-lg">
            {button}
          </p>
        </a>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div id="project" className="w-full pt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-xl font-bold sm:text-4xl uppercase mb-4">
          What I've built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Projects.map((project, index) => (
            <ProjectList key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
