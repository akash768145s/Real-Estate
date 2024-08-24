import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import searchIcon from "../../src/assets/icons/search.png";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ThemeChanger from "./themeChanger";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState("transparent");
  const [headerText, setHeaderText] = useState("white");

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor("#ed1c24");
        setHeaderText("#ffffff");
      } else {
        setHeaderColor("transparent");
        setHeaderText("#ffffff");
      }
    };
    window.addEventListener("scroll", handleColorChange);
  }, []);

  return (
    <div
      style={{ background: `${headerColor}` }}
      className=" fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Menu + Name */}

      <div className="max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src="/icon-logo.png" // Replace with the correct path to your logo
            alt="Constructor Logo"
            width={120} // Adjust width as needed
            height={100} // Adjust height as needed
            className="hover:opacity-80" // Add hover effect if needed
          />
        </Link>
      </div>

      <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex
      "
      >
        <li className=" p-4 hover:text-[#00aeef]">
          <Link href="#about-container">About</Link>
        </li>
        <li className=" p-4 hover:text-[#00aeef]">
          <Link href="#services">Services</Link>
        </li>
        <li className=" p-4 hover:text-[#00aeef]">
          <Link href="#reviews">Reviews</Link>
        </li>
        <li className=" p-4 hover:text-[#00aeef]">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <p
        style={{ color: `${headerText}` }}
        className="hidden sm:flex text-sm font-bold ml-10 mr-5 hover:text-[#00aeef] cursor-pointer"
      >
        Get In Touch
      </p>
      <div className="mr-10">
        <ThemeChanger />
      </div>

      {/* Mobile hamburgerMenu */}

      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
        )}
      </div>
      <div
        className={
          header
            ? "sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300"
            : "sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300"
        }
      >
        <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-bold 
      "
        >
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#about-container" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#services" onClick={handleMobileHeader}>
              Services
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#deals" onClick={handleMobileHeader}>
              Deals
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#reviews" onClick={handleMobileHeader}>
              Reviews
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#contact" onClick={handleMobileHeader}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
