import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import {
  hamburgerIcon,
  question,
  roundClockLogo,
  clock,
  faceIdPlaceholder,
} from "../assets";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { PiFingerprintThin } from "react-icons/pi";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { overlayBgImage } from "../assets";
import { IoArrowForwardOutline } from "react-icons/io5";

function Home() {
  const [toggle, setToggle] = useState("Biometric Scan");
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const isClockRoute =
    location.pathname.includes("/clock-in") ||
    location.pathname.includes("/clock-out");

  return (
    <div className="p-4 mx-auto max-w-[1300px] h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 mb-8">
        <Link to={"/"}>
          <img
            src={roundClockLogo}
            alt="Round o' Clock Logo"
            className="w-24 sm:w-32"
          />
        </Link>

        <div className="flex gap-16 items-center">
          <div className="bg-white text-sm rounded-full p-1 sm:flex hidden">
            <button
              onClick={() => setToggle("Biometric Scan")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                toggle === "Biometric Scan"
                  ? "bg-[#5C5C5B] text-white"
                  : "bg-white text-black"
              }`}
            >
              <span>
                <PiFingerprintThin />
              </span>
              Biometric Scan
            </button>
            <button
              onClick={() => setToggle("Face ID")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                toggle === "Face ID"
                  ? "bg-[#5C5C5B] text-white"
                  : " bg-white text-black"
              }`}
            >
              <span>
                <IoPersonSharp />
              </span>
              Face ID
            </button>
          </div>

          <img
            src={hamburgerIcon}
            className="w-5 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </header>

      {!isClockRoute && <h3 className="text-end pr-6 mt-1">FRI 6 SEP 10:20</h3>}

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row text-center justify-between lg:justify-center flex-1 max-w-[1200px] mx-auto w-full">
        <Outlet />
        {!isClockRoute && (
          <>
            <section className="w-full lg:w-[602px]">
              {/* good morning section */}
              <div className="mt-10 flex flex-col items-center">
                <img src={clock} alt="" className="w-14" />
                <h2 className="text-black font-bold text-xl flex items-center gap-2">
                  Hello, Good Morning{" "}
                  <span>
                    <FiSun />
                  </span>
                </h2>
                <p className="text-[#00000099] font-light text-[13px]">
                  Use your face ID to get access in to the hub
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to={"/home/clock-in"}
                  className="w-full sm:w-auto bg-[#FEDC44] py-4 sm:py-5 px-8 sm:px-11 font-semibold text-sm flex items-center justify-center gap-7"
                >
                  <span>
                    <FaArrowUp />
                  </span>{" "}
                  Clock In
                </Link>
                <Link
                  to={"/home/clock-out"}
                  className="w-full sm:w-auto bg-[#EEEDED] py-4 sm:py-5 px-8 sm:px-16 font-semibold flex items-center justify-center text-sm gap-7"
                >
                  <span>
                    <FaArrowDown />
                  </span>{" "}
                  Clock Out
                </Link>
              </div>
            </section>

            <section className="w-full lg:max-w-[400px]">
              <div className="mt-12 items-center flex justify-center">
                <img
                  src={faceIdPlaceholder}
                  alt="Face ID Placeholder"
                  className="w-[200px]"
                />
              </div>
            </section>
          </>
        )}
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
                    <Link to={"/dashboard"} className="flex flex-col gap-12">
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
}

export default Home;
