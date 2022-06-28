import * as React from "react";
import { Navbar } from "./Navbar";
import highFive from "../images/high-five.webp";

export const Header = () => (
  <header className="h-screen flex flex-col">
    <Navbar />
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-6 lg:gap-48 px-6 lg:px-36 h-full mb-10 lg:mb-0">
      <div className="flex flex-col gap-3 items-center lg:items-start">
        <small className="bg-green-100 px-4 py-1 rounded-md font-semibold text-sm uppercase text-gray-800">
          #1 au maroc
        </small>
        <h1 className="font-extrabold text-3xl lg:text-4xl text-gray-900 tracking-tight text-center lg:text-left">
          Donc, vous déménagez dans une nouvelle maison?
        </h1>
        <p className="text-gray-800 text-sm lg:text-base font-base text-center lg:text-left">
          Mais vous inquiétez pour vos affaires? avec UNLOAD le déménagement est tout simplement facile.
        </p>
        <a
          href="/#offers"
          className="border-orange-400 border-2 bg-orange-400 text-white px-2 lg:px-4 py-2 lg:py-2 rounded uppercase text-xs lg:text-sm font-bold shadow-sm tracking-wide hover:bg-orange-500 transition-bg duration-300"
        >
          Découvrez nos offres
        </a>
      </div>
      <img src={highFive} alt="High five" className="w-60 lg:w-auto" />
    </div>
  </header>
);
