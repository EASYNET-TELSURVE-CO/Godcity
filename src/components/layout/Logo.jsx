import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ disabled }) => {
  const logoContent = (
    <>
      <img
        src="/vite.svg"
        className="h-8 bg-none p-[1px]"
        alt="Kleva Kit Logo"
      />
      <span className="self-center text-2xl text-slate-800 font-semibold whitespace-nowrap dark:text-amber-100">
        Kleva Kit™
      </span>
    </>
  );

  return disabled ? (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </div>
  ) : (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </Link>
  );
};

export default Logo;