import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/home" className="hover:text-blue-300 transition duration-300">
            Insightify
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link
                to="/home"
                className="hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-300 transition duration-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-300 transition duration-300"
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-300 transition duration-300"
              >
                ContactUs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
