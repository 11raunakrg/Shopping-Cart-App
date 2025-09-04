import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-gray-800 px-10 py-5 text-white flex justify-center items-center">
        <div>
          <h1 className="text-white text-3xl font-bold ">
            REACT REDUX SHOPPING CART APP
          </h1>
        </div>
        <nav className="flex items-center justify-between gap-10 h-20 max-w-6xl mx-auto">
          <Link to="/">
            <h3
              className={`text-2xl font-semibold ${
                location.pathname === "/"
                  ? "text-red-600"
                  : "text-white hover:text-red-700"
              }`}
            >
              Home
            </h3>
          </Link>
          <Link
            to="/cart"
            className={`text-2xl font-semibold  ${
              location.pathname === "/cart"
                ? "text-red-600"
                : "text-white hover:text-red-700"
            }`}
          >
            Your Cart
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
