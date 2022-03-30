import React from "react";

const ButtonPrimary = ({ children, to, addClass }) => {
  return (
    <a href={to}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md cursor-pointer transition-all outline-none " +
        addClass
      }
    >
      {children}
    </a>
  );
};

export default ButtonPrimary;
