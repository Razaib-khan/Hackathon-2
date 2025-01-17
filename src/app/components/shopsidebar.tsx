import Foodcategories from "./foodcategories"
import Banner from "./banner"
import { Search } from "lucide-react"
import Shopcards from "./shopcards"
export default function Shopsidebar (){
    return(
        <div>
            <div className="hidden lg:block">
        <div className="flex justify-end items-end flex-col">
             <section className="border border-gray-300 p-4 w-1/6 flex items-center flex-col rounded-lg">
                    <Foodcategories />
                    <Banner/>
                  </section>
                  </div>
        </div>
        <div className="lg:hidden">
        <section>
          <label className="flex flex-row mb-5 justify-center">
                <input type="text" placeholder="Search Product" className="placeholder:pl-3 p-2 w-36 border-none bg-[#FF9F0D] bg-opacity-10" />
               <span> 
                <button className="bg-[#FF9F0D] p-2">
                        <Search className="text-[11px] text-white"/>
               </button>
               </span>
            </label>
            </section>
        </div>
        </div>
    )
}