import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16 bg-[#ecf0f3]">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-2xl sm:text-4xl uppercase">Who I am</h2>
          <p className="py-2 text-gray-600">
            // Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestias dolorem aut nostrum nemo provident harum fugit possimus
            quam dolores!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            distinctio vero odit laborum dolores harum sequi saepe possimus
            velit nulla!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latets work
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src={about} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default About;
