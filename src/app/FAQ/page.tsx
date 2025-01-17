import MobileNavbar from "../components/mobilenavbar"
import Navbar from "../components/navbar"
export default function FAQ(){
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
                FAQ Page
              </h1>
              <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
                Home &gt; <span className="text-[#FF9F0D]">faq</span>
              </span>
              </div>
              </section>
        <section className="flex justify-center items-center">
        <img src="/FAQ.png" alt="faq" className="w-3/4 "/>
        </section>
    </div>
    )
}