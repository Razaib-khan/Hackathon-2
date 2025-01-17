"use client"
import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <div>
    <div className="hidden lg:block">
      <nav className="bg-black flex flex-row justify-evenly gap-4">
        <img
          src="/Foodtuck.png"
          alt="logo"
          className="flex w-[100px] h-[20px] relative top-5 justify-center items-center"
        />
        <div>
          <ul className="flex p-5 text-white items-center flex-row justify-center gap-5">
            <Link href=".">
              <li className="text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Home
              </li>
            </Link>
            <Link href="/Menu">
              <li className="text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Menu
              </li>
            </Link>
            <Link href="/Blog">
              <li className="text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Blog
              </li>
            </Link>
            <div className="flex flex-col">
            <div>
            <li
              className="text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D] flex flex-row cursor-pointer"
              onClick={togglePagesDropdown}
            >
              Pages
              <span className={`inline-block ml-1 transition-transform duration-300 ease-in-out ${isPagesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                {isPagesDropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </span>
            </li>
            </div>
            <div>
            {isPagesDropdownOpen && (
              <ul className="absolute bg-black bg-opacity-20 text-white mt-2 p-2 rounded-md "> 
                <Link href="/OurChefs">
                  <li className="hover:text-[#FF9F0D] px-4 py-1">Our Chefs</li>
                </Link>
                <Link href="/404Error">
                  <li className="hover:text-[#FF9F0D] px-4 py-1 border-t border-t-[#FF9F0D]">404 Error</li>
                </Link>
                <Link href="/Checkout">
                  <li className="hover:text-[#FF9F0D] px-4 py-1 border-t border-t-[#FF9F0D]">Checkout</li>
                </Link>
                <Link href="/FAQ">
                  <li className="hover:text-[#FF9F0D] p-4 border-t border-t-[#FF9F0D]">FAQ</li>
                </Link>
              </ul>
            )}
            </div>
            </div>
            <Link href="/About">
              <li className="text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                About
              </li>
            </Link>
            <Link href="/Shop">
              <li className="text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Shop
              </li>
            </Link>
            <Link href="/Contact">
              <li className="text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row gap-2 relative top-5">
          <img
            src="/Handbag.png"
            alt="bag"
            className="w-7 h-6 transition duration-300 ease-in-out transform hover:-rotate-6 hover:scale-90"
          />
          <User className="text-white text-2xl transition duration-300 ease-in-out transform hover:scale-90" onClick={toggleUserDropdown} />
          {isUserDropdownOpen && (
              <ul className="absolute bg-black bg-opacity-20 text-white mt-2 p-2 rounded-md "> 
                <Link href="/Signin">
                  <li className="hover:text-[#FF9F0D] px-4 py-1">Signin</li>
                </Link>
                <Link href="/Signup">
                  <li className="hover:text-[#FF9F0D] px-4 py-1 border-t border-t-[#FF9F0D]">Signup</li>
                </Link>

              </ul>
            )}
          <Search className="text-white text-2xl transition duration-300 ease-in-out transform hover:rotate-6 hover:scale-90" />
        </div>
      </nav>
    </div>
    </div>
  );

}