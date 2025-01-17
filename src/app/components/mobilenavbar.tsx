"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, User, ChevronDown, ChevronUp } from "lucide-react";
import { 
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"; 

export default function MobileNavbar() {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <nav className="bg-black flex flex-row-reverse justify-end gap-4 lg:hidden">
      <div className="gap-20 md:gap-80 flex flex-row ">
        <Image src="/Foodtuck.png" alt="logo" width={150} height={50} className="flex justify-start" />
        <div className="flex flex-row">
          <Image src="/Handbag.png" alt="bag" width={25} height={5} />
          <User className="text-white text-2xl" />
          <Search className="text-white text-2xl" />
        </div>
      </div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-2xl font-bold text-white" />
        </SheetTrigger>
        <SheetContent className="bg-black">
          <SheetHeader>
            <SheetDescription>
              <ul className="flex p-5 text-white items-center flex-col justify-center gap-5">
                <Link href=".">
                  <li className="active:bg-[#FF9F0D]">Home</li>
                </Link>
                <Link href="/Menu">
                  <li className="active:bg-[#FF9F0D]">Menu</li>
                </Link>
                <Link href="/Blog">
                  <li className="active:bg-[#FF9F0D]">Blog</li>
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
                      <ul className="absolute bg-black bg-opacity-20 text-white mt-2 p-2 rounded-md"> 
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
                  <li className="active:bg-[#FF9F0D]">About</li>
                </Link>
                <Link href="/Shop">
                  <li className="active:bg-[#FF9F0D]">Shop</li>
                </Link>
                <Link href="/Contact">
                  <li className="active:bg-[#FF9F0D]">Contact</li>
                </Link>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}