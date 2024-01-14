import work from "../assets/workImg.jpeg";
//import realestate from "../assets/realestate.jpg";

const Project = () => {
  return (
    <div className="w-full bg-[#ecf0f3]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={work}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl font-bold tracking-wider text-center text-white">
                Real Estate
              </h3>
              <p className="pb-4 pt-2 text-center text-white">
                React Js project
              </p>
              <a
                className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                href="/"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
