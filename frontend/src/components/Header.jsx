import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex md:justify-center justify-between items-center px-4 py-6">
      <div className="flex-[0.5] justify-center items-center">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul className="flex list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4">
          <Link to="/login" className="flex items-center hover:text-[#777]">
            <div className="mr-2">
              <FaSignInAlt />
            </div>
            Login
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/register" className="flex items-center hover:text-[#777]">
            <div className="mr-2">
              <FaUser />{" "}
            </div>
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
