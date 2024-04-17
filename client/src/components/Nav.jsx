import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="bg-white border-gray-200 m-5 rounded-md">
            <div className="max-w-screen-2xl flex flex-wrap justify-between items-center md:gap-16 mx-auto p-4">
                <div className="flex items-center space-x-10">
                    <Link to="/">
                        <div className="flex items-center space-x-3">
                            <img
                                className=" h-12 rounded-md"
                                src="../public/images/jpnFlag.jpg"
                            ></img>
                            <div className="flex flex-col">
                                <span className=" self-start text-2xl font-semibold whitespace-nowrap">
                                    JDMPrime
                                </span>
                                <span className=" font-semibold">
                                    藤原とうふ店&nbsp;&nbsp;&nbsp;
                                    <span className=" self-end text-xxs">
                                        (自家用)
                                    </span>
                                </span>
                            </div>
                        </div>
                    </Link>
                    <div className="w-full md:block md:w-auto tracking-wider">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
                            <li className="block py-2 px-3 md:p-0 text-white bg-red-700 rounded md:bg-transparent md:text-red-500 md:hover:text-black ">
                                <Link to="/">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 ">
                                <Link to="/about">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 ">
                                <Link to="/services">
                                    <span className="">Services</span>
                                </Link>
                            </li>
                            <li className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 ">
                                <Link to="/marketplace">
                                    <span className="">Marketplace</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex tracking-wider space-x-5">
                    <button>cart</button>
                    <button>sign in</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
