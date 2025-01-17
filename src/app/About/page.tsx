import Aboutfoodmenu from "../components/aboutfoodmenu"
import Aboutwhychoose from "../components/aboutwhychoose"
import BalancedDiet from "../components/balanceddiet"
import Hometestimonial from "../components/hometestimonial"
import Homewhychooseus from "../components/homewhychooseus"
import MobileNavbar from "../components/mobilenavbar"
import Navbar from "../components/navbar"
export default function Aboutus (){
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
                            About Us
                          </h1>
                          <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
                            Home &gt; <span className="text-[#FF9F0D]">About us</span>
                          </span>
                        </div>
                      </section>
                      <section>
                        <BalancedDiet/>
                      </section>
                      <section>
                        <Aboutwhychoose/>
                        <img src="/TeamMember.png" alt="team" className="mt-32" />
                        
                      </section>
                      <section className="mt-20">
                      <Hometestimonial/>
                      </section>
                      <section>
                        <Aboutfoodmenu/>
                      </section>
            </div>
        )
}