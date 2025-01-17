import Navbar from "../components/navbar"
import MobileNavbar from "../components/mobilenavbar"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
export default function Checkout (){
    return(
        <div>
               <section>
                              <div className="lg:hidden">
                                <MobileNavbar />
                              </div>
                              <div className="hidden lg:block">
                                <Navbar />
                              </div>
                              <img src="/common.png" alt="common" />
                              <div className="relative xl:bottom-16 flex justify-center items-center flex-col">
                              <h1 className="font-bold text-white md:bottom-24 md:text-3xl lg:bottom-32 lg:text-4xl text-2xl relative bg-transparent bottom-16">
                                Checkout Page
                              </h1>
                              <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
                                Home &gt; <span className="text-[#FF9F0D]">Checkout</span>
                              </span>
                              </div>
                              </section>
                    <div className="flex justify-center flex-col w-full items-center ">
                <section className="flex justify-center items-center flex-col">
                    <h1 className="text-5xl text-[#FF9F0D] font-bold">Your Cart is EMPTY</h1>
                  <Link href="/Shop"> <button className="bg-[#FF9F0D] flex flex-row text-white font-bold p-4 mt-4">
                        <MoveLeft className="text-[14px] font-bold text-white" />
                        Go to Shop
                    </button></Link> 
                </section>
                </div>
        </div>
    )
}