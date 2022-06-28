import * as React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <footer className="mt-10 flex flex-col md:flex-row py-3 border-t border-gray-200 bg-gray-100 justify-between lg:px-32 px-8">
    <div className=" text-center text-sm font-base text-gray-800">
      Tous les droits sont réservés &copy; {(new Date()).getFullYear()}{" "}
      <span className="font-medium">UNLOAD</span>
    </div>
    <div className="flex text-xl gap-3 text-gray-800 self-center">
      <a href="https://www.facebook.com/unload.ma" target="_blank" rel="noreferrer">
        <FaFacebookSquare className="cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/unload.ma" target="_blank" rel="noreferrer">
        <FaInstagram className="cursor-pointer" />
      </a>
    </div>
  </footer>
);
