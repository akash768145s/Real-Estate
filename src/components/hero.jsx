import Image from "next/image";
import React from "react";
import arrowIcon from "../assets/icons/arrow.png";
import phoneIcon from "../assets/icons/contact.png";
import mailIcon from "../assets/icons/mail.png";

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById("about-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen">
      <video
        src="/video.mp4"
        autoPlay
        loop
        className="w-full h-screen object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center pt-10 text-center">
        <button className="hidden lg:block bg-[#ed1c24] px-2 py-1 rounded-2xl text-white h-8 w-[200px] font-black text-xs uppercase cursor-pointer mb-6">
          Sree Kumaran Properties
        </button>

        <h1 className="font-normal text-7xl text-center text-white capitalize mb-10">
          find real estate
          <br /> that suits you
        </h1>

        {/* Icons and Text under Heading */}
        <div className="hidden sm:flex mt-5 justify-center items-center">
          <div className="flex mr-11">
            <Image
              src={arrowIcon}
              alt="arrow icon"
              className="w-5 h-5 mx-9 self-center"
            />
            <p className="text-white text-xl py-2">{address}</p>
          </div>

          <div className="flex ml-20 mr-20">
            <Image
              src={phoneIcon}
              alt="phone icon"
              className="w-5 h-5 mx-9 self-center"
            />
            <p className="text-white text-xl py-2">{phone}</p>
          </div>

          <div className="flex ml-20">
            <Image
              src={mailIcon}
              alt="mail icon"
              className="w-5 h-5 mx-9 self-center"
            />
            <p className="text-white text-xl py-2">{email}</p>
          </div>
        </div>

        {/* Show more button */}
        <div className="mt-12">
          <button
            onClick={showMoreBtn}
            className="text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-[#ed1c24] hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
          >
            show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
