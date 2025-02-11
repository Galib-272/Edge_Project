import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-700 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-gray-700">
                        <li className="hover:bg-gray-700 transition">
                            <NavLink to="/about" className="text-lg font-medium">About Us</NavLink>
                        </li>
                        <li className="hover:bg-gray-700 transition">
                            <NavLink to="/services" className="text-lg font-medium">Services</NavLink>
                        </li>
                        <li className="hover:bg-gray-700 transition">
                            <NavLink to="/todopage" className="text-lg font-medium">Patients</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink
                    to="/"
                    className="btn btn-ghost text-2xl font-extrabold tracking-wide hover:text-indigo-400 transition">
                    CITY HOSPITAL
                </NavLink>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li className="hover:bg-gray-700 rounded-lg px-3 py-2 transition">
                        <NavLink to="/about" className="text-lg font-semibold">About Us</NavLink>
                    </li>
                    <li className="hover:bg-gray-700 rounded-lg px-3 py-2 transition">
                        <NavLink to="/services" className="text-lg font-semibold">Services</NavLink>
                    </li>
                    <li className="hover:bg-gray-700 rounded-lg px-3 py-2 transition">
                        <NavLink to="/todopage" className="text-lg font-semibold">Patients</NavLink>
                    </li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end hidden lg:flex items-center space-x-4">
                {/* Search Bar */}
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-full"
                    />
                </div>

                {/* Contact Button */}
                <NavLink
                    to="/contact"
                    className="btn btn-outline btn-accent text-white border-white hover:bg-black hover:text-white transition">
                    Contact Us
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
