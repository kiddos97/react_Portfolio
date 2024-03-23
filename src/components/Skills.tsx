import { skills } from "../Skills/Skills";

interface Props {
  name: string;
  img: string;
}
const Skill: React.FC<Props> = ({ name, img }) => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center ">
      <div className="m-auto">
        <img src={img} alt="python" style={{ width: "64px", height: "64px" }} />
      </div>
      <div className="flex flex-col first:justify-center items-center">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="w-full pt-20 lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] p-2">
          Skills
        </p>
        <h2 className="py-4 text-xl font-bold sm:text-4xl uppercase mb-4">
          What I can do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate__animated animate__fadeInRightBig ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl shadow-gray-600 rounded-xl hover:scale-105 ease-in duration-300 "
            >
              <Skill {...skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
