import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import contact from "../assets/contact.jpg";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// const handleSubmit = async (event: {
//   preventDefault: () => void;
//   target: any;
// }) => {
//   event.preventDefault();

//   // Get form data from the actual form element
//   const form = event.target;
//   const formData = new FormData(form);

//   try {
//     const response = await fetch("http://127.0.0.1:5000/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: formData.get("name"), // Access form field value by name
//         email: formData.get("email"),
//         subject: formData.get("subject"),
//         message: formData.get("message"),
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

const Contact = () => {
  return (
    <div id="contact" className="w-full  lg:h-screen pt-10">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className="animate__animated animate__fadeInDownBig duration-300">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="cols-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4 animate__animated animate__fadeInLeft duration-300">
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
                      <a href="http://www.linkedin.com/in/osaro-imarhiagbe">
                        <FaLinkedin style={{ color: "#5651e5" }} />
                      </a>
                    </li>
                    <li className="rounded-full shadow-xl shadow-gray-600  p-4 ml-4">
                      <a href="http://github.com/kiddos97">
                        <FaGithub style={{ color: "#5651e5" }} />
                      </a>
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-600 rounded-xl lg:p-4 animate__animated animate__fadeInRight">
            <div className="p-4">
              <form
                action="https://getform.io/f/bab19575-7084-44e8-b510-5536a0cfc917"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      placeholder="Name..."
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex biorder-gray-300"
                      type="text"
                      placeholder="Phone Number..."
                      name="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex biorder-gray-300"
                    type="email"
                    placeholder="Email..."
                    name="Email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex biorder-gray-300"
                    type="text"
                    placeholder="Subject..."
                    name="Subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    placeholder="Message..."
                    rows={10}
                    name="Message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <div className="rounded-full shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <a href="/">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
