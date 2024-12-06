import React, { useState } from "react";
import {
  roundClockLogo,
  homepage1,
  homepage2,
  homepage3,
  question,
  hamburgerIcon,
  overlayBgImage,
} from "../assets";
import { FaArrowUp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="p-4 mx-auto container">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Link to={"/"}>
          <img src={roundClockLogo} alt="Round o' Clock Logo" className="h-6" />
        </Link>

        <img
          src={hamburgerIcon}
          className="w-5 cursor-pointer"
          onClick={toggleMenu}
        />
      </header>

      {/* Main Section */}
      <section className="mx-auto max-w-[634px] text-center mt-10  px-4">
        {/* Welcome Message */}
        <div>
          <h6 className="text-[#363649] acaslonpro   text-4xl md:text-5xl lg:text-6xl leading-none max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mx-auto lg:font-normal font-semibold">
            Welcome to Nexus Hub
          </h6>
          <p className="mt-1 text-[#000000] font-semibold flex justify-center space-x-2 text-[11px]">
            <span>Opens 8:00AM</span> <span>|</span> <span>Closes 9:00PM</span>
          </p>
        </div>

        {/* Images Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-4">
          <div className="">
            {/* 1st image */}
            <div className="relative">
              {/* Red container - moved before image */}
              <div className="w-[80px] h-[90px] md:w-[110px] md:h-[115px] lg:w-[130px] lg:h-[145px] rounded-2xl bg-[#F2CFC7] absolute top-1 left-2 lg:left-3 md:top-1.5 lg:top-2" />

              <img
                src={homepage1}
                alt="Workspace 1"
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative"
              />
            </div>
          </div>

          {/* 2nd Image */}
          <div className="relative">
            {/* Yellow container - moved before image */}
            <div className="w-20 h-24 md:w-[110px] md:h-[115px] lg:w-[130px] lg:h-[143px] rounded-2xl bg-[#E9DCA5] absolute top-0 md:top-1.5 lg:top-2.5 left-2.5 lg:left-3 rotate-[25deg]" />

            <img
              src={homepage2}
              alt="Workspace 2"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative"
            />
          </div>

          {/* 3rd image */}
          <div className="relative">
            {/* Blue container - moved before image */}
            <div className="w-20 h-24 md:w-[110px] md:h-[115px] lg:w-[133px] lg:h-[145px] rounded-2xl bg-[#A5DDE9] absolute top-[2px] lg:top-[8px] md:top-[6px] left-1.5 lg:left-2.5 rotate-[20deg]" />

            <img
              src={homepage3}
              alt="Workspace 3"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative"
            />
          </div>
        </div>

        <Link
          to={"/home"}
          className="bg-[#FEDC44] border rounded-full w-full max-w-xs md:max-w-sm lg:max-w-[500px] mt-8 py-2 md:py-3 text-[#000000] font-semibold flex items-center justify-center gap-3 mx-auto text-[13px]"
        >
          Get in <FaArrowUp />
        </Link>
      </section>

      <footer className="p-3 flex flex-col md:flex-row gap-5 justify-between items-center mt-8">
        <div
          className="py-3 px-3 rounded-lg w-full md:w-2/4 bg-gradient-to-r from-neutral-200
         to-[#e1e1e14b] text-center md:text-left"
        >
          <p className="text-[#000000] text-[13px] font-bold">
            First time here?
          </p>
          <p className="text-[#5C5C5B] text-[12px]">
            Take a virtual tour of our workspace
          </p>
        </div>
        <div className="py-3 px-4 flex gap-3 items-center justify-center rounded-lg w-full md:w-2/4 bg-gradient-to-r from-neutral-200 to-[#e1e1e14b] text-center md:text-left">
          <img src={question} className="w-5 h-5" />

          <div>
            <p className="text-[#000000] text-[13px] font-bold">
              {" "}
              Hub Guideline
            </p>
            <p className="text-[#5C5C5B] text-[12px]">
              Read about our policy and operational guidelines
            </p>
          </div>
        </div>
      </footer>

      {/* OVERLAY SECTION */}
      {isOpen && (
        <div className="fixed inset-0 overflow-auto  bg-gradient-to-b from-green-800 to-yellow-50 duration-300">
          <div className="bg-transparent w-full h-full flex flex-col items-center justify-center p-8 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <IoMdClose />
            </button>

            {/* Overlay Content */}
            <div className=" w-full max-w-5xl mx-auto ">
              <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 w-full mt-[280px]   min-[500px]:mt-[480px]   sm:mt-0">
                {/* Left side with image and welcome text */}
                <div className="relative h-full">
                  <img
                    src={overlayBgImage}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <h2
                    className="text-[#4FA83D] text-5xl font-normal absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 acaslonpro 
                "
                  >
                    Welcome
                    <br />
                    to Nexus
                  </h2>
                </div>

                {/* Right side content */}
                <div className="flex flex-col gap-6 mb-12 sm:mb-0">
                  {/* Top cards container */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* New Hub User Card */}
                    <Link
                      to={"/new-user"}
                      className="bg-white rounded-md 
                      py-3 px-4 hover:scale-105 transition-transform cursor-pointer flex flex-col gap-[90px]"
                    >
                      <h3 className="text-[#EEEEEF] font-semibold text-5xl mb-2 flex flex-col">
                        New <span className="">Hub</span> User
                      </h3>

                      <div className="flex justify-between items-center">
                        <p className="text-[#434641] text-[16px]">
                          New Hub User?
                        </p>
                        <IoArrowForwardOutline />
                      </div>
                    </Link>
                  </div>

                  {/* Admin Card */}
                  <div className="bg-white rounded-md   py-3 px-4 hover:scale-105 transition-transform cursor-pointer ">
                    <Link to={"/admin-login"} className="flex flex-col gap-12">
                      <h3 className="text-[#EEEEEF] font-semibold text-5xl">
                        Admin
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-[#434641] text-[16px]">
                          Admin Login
                        </p>
                        <IoArrowForwardOutline />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
