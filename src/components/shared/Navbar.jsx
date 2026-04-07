import React from "react";
import Logo from "../../assets/images/logo.png";
import { FiGithub } from "react-icons/fi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Apps</NavLink>
              </li>
              <li>
                <NavLink>Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost hover:border-none text-xl bg-linear-to-r from-[#8057E3] to-[#AE7FEF] bg-transparent bg-clip-text">
            <img className="overflow-hidden h-full w-full" src={Logo} alt="" />
            <h1>HERO.IO</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "btn" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/apps"}
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "btn" : ""}`
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/installedAppes"}
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "btn" : ""}`
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center gap-2 btn bg-linear-to-r from-[#8057E3] to-[#AE7FEF] text-white rounded-lg">
            <FiGithub />
            <h1>Contribute</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
