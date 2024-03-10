import { useState } from "react";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const toggleMenu = () =>{
    setShowMobile(!showMobile)
  }
  return (
    <>
      <div className="lg:flex items-center justify-between hidden">
        <img src="./assets/logo.svg" alt="logo" className="w-72 h-16" />
        <ul className="flex items-center gap-9">
          <li className="text-[#BCBCBC] text-lg cursor-pointer hover:text-white">
            <a
              href="#"
              className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-white"
            >
              Home
            </a>
          </li>
          <li className="text-[#BCBCBC] text-lg cursor-pointer hover:text-white">
            <a
              href="#"
              className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-white"
            >
              Services Us
            </a>
          </li>
          <li className="text-[#BCBCBC] text-lg cursor-pointer hover:text-white">
            <a
              href="#"
              className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-white"
            >
              Why Us
            </a>
          </li>
          <li className="text-[#BCBCBC] text-lg cursor-pointer hover:text-white">
            <a
              href="#"
              className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-white"
            >
              Our Goals
            </a>
          </li>
          <button className="bg-[#FFEC05] px-10 py-2.5 rounded-3xl flex items-center justify-center">
            Contact Us
          </button>
        </ul>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between lg:hidden">
        <img src="./assets/logo.svg" alt="logo" className="w-64 h-16" />

        <img
          src="./assets/menu.svg"
          alt="menu"
          className="w-8 h-8 cursor-pointer"
          onClick={toggleMenu}
        />
        {showMobile && (
          <ul className="flex flex-col items-center gap-9 absolute w-1/2 right-0 top-20 bg-white py-6 rounded-lg">
            <li className="text-[#474646] text-lg cursor-pointer hover:text-[#FFEC05]">
              <a
                href="#"
                className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-[#FFEC05]"
              >
                Home
              </a>
            </li>
            <li className="text-[#474646] text-lg cursor-pointer hover:text-[#FFEC05]">
              <a
                href="#"
                className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-[#FFEC05]"
              >
                Services Us
              </a>
            </li>
            <li className="text-[#474646] text-lg cursor-pointer hover:text-[#FFEC05]">
              <a
                href="#"
                className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-[#FFEC05]"
              >
                Why Us
              </a>
            </li>
            <li className="text-[#474646] text-lg cursor-pointer hover:text-[#FFEC05]">
              <a
                href="#"
                className="focus:border-b-2 border-[#FFEC05] pb-0.5 focus:text-[#FFEC05]"
              >
                Our Goals
              </a>
            </li>
            <button className="bg-[#FFEC05] px-10 py-2.5 rounded-3xl flex items-center justify-center">
              Contact Us
            </button>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
