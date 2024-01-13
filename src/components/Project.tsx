const Project = () => {
  return (
    <div className="w-full">
      <div className="mx-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="realtive flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]  "></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
