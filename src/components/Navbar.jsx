import * as React from "react";
import logo from "../images/logo.webp";

const NavContainer = ({ children }) => (
  <nav className="lg:px-36 py-5 flex flex-col md:flex-row items-center justify-between shadow-sm md:px-8">
    {children}
  </nav>
);

const Menu = () => (
  <ul className="capitalize hidden md:flex gap-8 font-semibold text-gray-800 text-sm">
    <a href="/#offers" className="cursor-pointer">
      Nos services
    </a>
    <li className="cursor-pointer">Notre équipe</li>
    <li className="cursor-pointer">FAQ</li>
    <li className="cursor-pointer">À propos</li>
  </ul>
);

const ContactUs = () => (
  <a
    href="/#contact"
    className="cursor-pointer hidden md:block bg-orange-400 rounded text-white px-5 py-2 shadow-sm font-bold tracking-wide text-xs md:text-sm uppercase hover:bg-orange-500 transition-colors duration-300"
  >Contactez-nous</a>
);

export const Navbar = () => (
  <NavContainer>
    <a href="https://www.unload.ma">
      <img alt="Unload Logo" src={logo} width="90" className="cursor-pointer" />
    </a>
    <Menu />
    <ContactUs />
  </NavContainer>
);
