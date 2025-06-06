import React from "react";
import { Link } from "react-router-dom";
import about from '../aboutPage/AboutPage.jsx';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 py-6 lg:py-2  min-h-28 z-50  relative">
      <div className="xl:px-10 sm:px-6 px-4  min-h-28  flex lg:flex-row flex-col  lg:gap-0 gap-5  justify-between items-center ">
        <ul className="flex flex-1  md:gap-6 gap-4   text-white flex-row items-center ">
          <li>
            <Link to="/about">
              <span className="hover:underline">About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <span className="hover:underline">Services</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span className="hover:underline">Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              <span className="hover:underline">Privacy Policy</span>
            </Link>
          </li>
        </ul>

        <p className="w-fit  flex items-center text-white text-sm">
          <span>&copy;{currentYear} Music Vibes | All rights reserved.</span>
        </p>

        <div className="flex-1  flex flex-row gap-6 lg:justify-end justify-start items-center">
          <a
            className="text-white border h-10 w-10 flex justify-center items-center border-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300"
            href="https://www.facebook.com/share/16XDFqT2em/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF width={20} height={20} />
          </a>
          <a
            className="text-white border h-10 w-10 flex justify-center items-center border-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300"
            href="https://www.linkedin.com/in/guljar-hussain-7953a9243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn width={20} height={20} />
          </a>
          <a
            className="text-white border h-10 w-10 flex justify-center items-center border-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300"
            href="https://x.com/guljar7865?t=HW5cQZhgpQCXBWFcumjD3A&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter width={20} height={20} />
          </a>
          <a
            className="text-white border h-10 w-10 flex justify-center items-center border-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300"
            href="https://www.instagram.com/guljarhussain7865?igsh=MW9jaHA0dmtsNXZ6bg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram width={20} height={20} />
          </a>
          <a
            className="text-white border h-10 w-10 flex justify-center items-center border-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300"
            href="https://github.com/guljarhussain0560"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
