import * as React from "react";

export const Title = ({ children, left }) => (
  <h2
    className={`font-bold text-2xl text-gray-800 uppercase ${
      left ? "text-center md:text-left" : "text-center"
    }`}
  >
    {children}
  </h2>
);
