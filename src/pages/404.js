import * as React from "react";

const page = typeof document !== "undefined" && document.location.pathname;

const NotFound = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-8xl text-orange-400 font-bold">404</h1>
    <p className="text-gray-900">
      La page
      <span className="bg-gray-100 rounded p-[2px] mx-1 text-gray-800">
        {page}
      </span>
      est introuvable!
    </p>
  </div>
);

export default NotFound;
