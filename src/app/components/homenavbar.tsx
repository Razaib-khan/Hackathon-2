// src/app/Components/HomeNavbar.tsx
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

export default function HomeNavbar() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <nav>
      <div
        id="main"
        className="sm:w-auto lg:w-[900px] h-[87px] relative top-[45px] hidden lg:block"
      >
        <div className="hidden md:hidden lg:block">
          <section
            id="logo"
            className="flex justify-center w-[900px]"
          >
            <Image
              src="/Foodtuck.png"
              alt="logo"
              width={80}
              height={25}
              className="relative left-56"
            />
          </section>
        </div>
        <section id="list" className="hidden lg:block">
          <ul className="flex flex-row gap-[15px] relative left-48 top-2">
            <Link href=".">
              <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Home
              </li>
            </Link>
            <Link href="/Menu">
              <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Menu
              </li>
            </Link>
            <Link href="/Blog">
              <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
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
                  <span
                    className={`inline-block ml-1 transition-transform duration-300 ease-in-out ${
                      isPagesDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {isPagesDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </li>
              </div>
              <div>
                {isPagesDropdownOpen && (
                  <ul className="absolute bg-black bg-opacity-20 text-white mt-2 p-2 rounded-md ">
                    <Link href="/OurChefs">
                      <li className="hover:text-[#FF9F0D] px-4 py-1">
                        Our Chefs
                      </li>
                    </Link>
                    <Link href="/404Error">
                      <li className="hover:text-[#FF9F0D] px-4 py-1 border-t border-t-[#FF9F0D]">
                        404 Error
                      </li>
                    </Link>
                    <Link href="/Checkout">
                      <li className="hover:text-[#FF9F0D] px-4 py-1 border-t border-t-[#FF9F0D]">
                        Checkout
                      </li>
                    </Link>
                    <Link href="/FAQ">
                      <li className="hover:text-[#FF9F0D] p-4 border-t border-t-[#FF9F0D]">
                        FAQ
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
            </div>
            <Link href="/About">
              <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                About
              </li>
            </Link>
            <Link href="/Shop">
              <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Shop
              </li>
            </Link>
            <Link href="/Contact">
              <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                Contact
              </li>
            </Link>
          </ul>
        </section>
        <section>
          <input
            type="text"
            placeholder="Search..."
            className="w-[270px] h-11 rounded-[27px] border 
            border-[#FF9F0D] bg-transparent text-white placeholder:text-white placeholder:pl-[25px]
            p-2 focus:outline-none focus:border-[#FF9F0D] focus:ring-0 focus:bg-transparent relative 
           lg:left-[800px] left-[100px] top-[-15px]"
          />{" "}
          <Search className="text-white relative top-[-47px] left-[320px] lg:left-[1020px]  " />{" "}
          <Image
            src="/Handbag.png"
            alt="handbag"
            width={0}
            height={0}
            className="w-6 h-6 relative top-[-75px] left-[380px] lg:left-[1080px] "
          />
        </section>
      </div>
    </nav>
  );
}