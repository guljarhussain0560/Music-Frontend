import React from "react";
import { Link } from "react-router-dom";
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
    <footer className="bg-[#000000] border-t border-neutral-900 py-8 z-30 relative w-full mt-auto text-neutral-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-6 justify-between items-center text-xs">
        {/* Navigation Links */}
        <ul className="flex gap-6 text-neutral-500 justify-center md:justify-start font-semibold uppercase tracking-wider text-[10px]">
          <li>
            <Link to="/about" className="hover:text-white transition-colors duration-150">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-white transition-colors duration-150">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition-colors duration-150">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-150">
              Privacy Policy
            </Link>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-neutral-500 text-xs text-center md:text-left order-3 md:order-2">
          &copy; {currentYear} Music Vibes | All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 order-2 md:order-3">
          <a
            className="text-neutral-500 hover:text-[#1db954] transition-all duration-150"
            href="https://www.facebook.com/share/16XDFqT2em/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={13} />
          </a>
          <a
            className="text-neutral-500 hover:text-[#1db954] transition-all duration-150"
            href="https://www.linkedin.com/in/guljar-hussain-7953a9243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={13} />
          </a>
          <a
            className="text-neutral-500 hover:text-[#1db954] transition-all duration-150"
            href="https://x.com/guljar7865?t=HW5cQZhgpQCXBWFcumjD3A&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={13} />
          </a>
          <a
            className="text-neutral-500 hover:text-[#1db954] transition-all duration-150"
            href="https://www.instagram.com/guljarhussain7865?igsh=MW9jaHA0dmtsNXZ6bg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={13} />
          </a>
          <a
            className="text-neutral-500 hover:text-[#1db954] transition-all duration-150"
            href="https://github.com/guljarhussain0560"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
