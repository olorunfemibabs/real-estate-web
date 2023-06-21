import React from "react";
//import { useLocation, useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className=" sticky top-0 bg-white border-b shadow-sm z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <Link to="/">
            <img
              src="./rdc-logo-default.svg"
              alt="logo"
              className="h-5 cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className="cursor-pointer py-3 text-sm font-semibold text-gray-400">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? " border-b-[3px] border-b-red-500 text-black transition p-1 ease-in-out"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>

            <li className="cursor-pointer py-3 text-sm font-semibold text-gray-400">
              <Link
                to="/offers"
                className={`${
                  location.pathname === "/offers"
                    ? " border-b-[3px] border-b-red-500 text-black transition p-1 ease-in-out"
                    : ""
                }`}
              >
                Offers
              </Link>
            </li>

            <li className="cursor-pointer py-3 text-sm font-semibold text-gray-400">
              <Link
                to="/sign-in"
                className={`${
                  location.pathname === "/sign-in"
                    ? " border-b-[3px] border-b-red-500 text-black transition p-1 ease-in-out"
                    : ""
                }`}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
