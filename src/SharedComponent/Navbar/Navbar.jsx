import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg">
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
                            <NavLink to="/about" className="text-lg font-medium">About Page</NavLink>
                        </li>
                        <li className="hover:bg-gray-700 transition">
                            <NavLink to="/menu" className="text-lg font-medium">Menu</NavLink>
                        </li>
                        <li className="hover:bg-gray-700 transition">
                            <NavLink to="/todopage" className="text-lg font-medium">Customer</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink
                    to="/"
                    className="btn btn-ghost text-2xl font-extrabold tracking-wide hover:text-indigo-400 transition">
                    CAFE CENTRAL
                </NavLink>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li className="hover:bg-gray-700 rounded-lg px-3 py-2 transition">
                        <NavLink to="/about" className="text-lg font-semibold">About Page</NavLink>
                    </li>
                    <li className="hover:bg-gray-700 rounded-lg px-3 py-2 transition">
                        <NavLink to="/menu" className="text-lg font-semibold">Menu</NavLink>
                    </li>
                    <li className="hover:bg-gray-700 rounded-lg px-3 py-2 transition">
                        <NavLink to="/todopage" className="text-lg font-semibold">Orders</NavLink>
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
                        className="input input-bordered bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-full"
                    />
                </div>

                {/* Contact Button */}
                <NavLink
                    to="/contact"
                    className="btn btn-outline btn-accent text-white border-white hover:bg-teal-400 hover:border-teal-400 transition">
                    Contact Us
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
