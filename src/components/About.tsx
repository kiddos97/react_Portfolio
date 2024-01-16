import about from "../assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full pt-20 md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 animate__animated animate__fadeInLeft">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-xl font-bold sm:text-4xl uppercase">
            Who I am
          </h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer.
          </p>
          <p className="py-2 text-gray-600">
            I am Full-Stack developer based in Austin, Tx. I currently work at
            General Motors, where I'm a software developer with over
            <strong className="text-lg"> 2+ Years</strong> experiences. With a
            keen mind for innovation and a passion for crafting cutting-edge
            solutions, I previously worked on SAS DMP project and now currently
            work on the DMP Merkle project, and on the side I do Front-End web
            development.
          </p>
          <p className="py-2 text-gray-600">
            My passion to create digital magic. With
            <strong className="text-lg"> 2+ Years</strong> of Front-End
            experience, I hope you'll witness the culmination of my dedication,
            skills, and love for web development.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <a href="/project"> Check out some of my latest work</a>
          </p>
        </div>

        <div className="animate__animated animate__fadeInRight">
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src={about} alt="laptop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
