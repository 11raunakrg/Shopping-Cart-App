import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-neutral-900 px-10 py-5 text-white">
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
          <Link to="/">
            <h3
              className={`text-2xl font-semibold underline ${
                location.pathname === "/"
                  ? "text-white"
                  : "text-red-500 hover:text-gray-200"
              }`}
            >
              Home
            </h3>
          </Link>
          <div>
            <h1 className="text-green-700 text-3xl font-bold ">
              REACT REDUX SHOPPING CART APP
            </h1>
          </div>
          <Link
            to="/cart"
            className={`text-2xl font-semibold underline ${
              location.pathname === "/cart"
                ? "text-white"
                : "text-red-500 hover:text-gray-200"
            }`}
          >
            Cart
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
