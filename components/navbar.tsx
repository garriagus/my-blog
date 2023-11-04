"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

import Navlinks from "@/components/Navlinks"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                <Image
                      src="/logo.png"
                      alt="Vercel Logo"
                      className="dark:invert"
                      width={40}
                      height={40}
                      priority
                  />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">@Garriagus</span>
                </a>
                <div className="flex md:order-2">                  
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                       <Navlinks />
                        <ModeToggle />
                    </ul>
                </div>                
              <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;