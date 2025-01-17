import Navbar from "../components/navbar"
import MobileNavbar from "../components/mobilenavbar"
import Link from "next/link"
export default function Error(){
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
                    404 Error
                  </h1>
                  <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
                    Home &gt; <span className="text-[#FF9F0D]">404</span>
                  </span>
                  </div>
                  </section>
                  <section className="flex justify-center items-center flex-col">
                    <h1 className="text-4xl text-[#FF9F0D] font-bold">404</h1>
                    <h2 className="mt-3 text-bold">Oops! Look likes something going wrong</h2>
                    <p className="text-sm flex text-center flex-col text-slate-400 w-[480px]">Page Cannot be found! we&apos;ll have it figured out in no time.
                  <span> Menwhile, cheek out these fresh ideas:</span></p>
                  <Link href="."><button className="bg-[#FF9F0D] mt-4 hover:bg-orange-600 text-white font-bold p-2 text-sm rounded-md">Go to Home</button>
                 </Link>
                  </section>
        </div>
    )
}