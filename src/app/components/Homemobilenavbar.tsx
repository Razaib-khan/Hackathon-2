import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
export default function Homemobilenavbar(){
    return(
      <nav>
        <div className="lg:hidden flex relative right-36 md:w-56 flex-row-reverse w-full">
          <Image src="/Foodtuck.png" alt="logo" width={200} height={100} className="lg:hidden flex justify-start"/>
            <Sheet>
                <SheetTrigger>
                    <Menu className="text-white w-20 flex justify-start"/>
                </SheetTrigger>
                <SheetContent className="bg-black">
                    <SheetHeader>
                        <SheetDescription className="bg-black">
          <ul className="flex flex-col gap-[15px] items-center justify-center">
          <Link href=".">
                            <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                                Home
                            </li></Link>
                            <Link href="/Menu">
                            <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                                Menu
                            </li></Link>
                            <Link href="/Blog">
                            <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                                Blog
                            </li></Link>
                            <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                                Pages
                            <Link href="/Pages"/>
                            </li>
                         <Link href="/About">
                          <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                                About
                            </li>
                            </Link>
                         <Link href="/Shop"><li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                                Shop
                            </li></Link> 
                          <Link href="/Contact">
                          <li className="active:bg-[#FF9F0D] text-white font-bold hover:text-[#FF9F0D] focus:text-[#FF9F0D]">
                                Contact
                            </li></Link>
          </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
        </nav>
    )
}