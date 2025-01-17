
import Navbar from "../components/navbar"
import MobileNavbar from "../components/mobilenavbar"
export default function Signin(){
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
                                          Sign In Page
                                          </h1>
                                          <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
                                            Home &gt; <span className="text-[#FF9F0D]">Signin</span>
                                          </span>
                                          </div>
                                          </section>
            <div className="flex justify-center items-center">
            <form className="flex flex-col gap-4 border w-full lg:w-1/4 p-10 border-slate-300 rounded-sm shadow-sm shadow-slate-300">
            <h1 className="text-2xl font-semibold">Sign In</h1>
                <input type="text" placeholder="Name" className="p-2 w-11/12 placeholder:ml-4 border border-slate-400 hover:border-[#FF9F0D] focus:border-[#FF9F0D]" />
                <input type="email" placeholder="Email" className="p-2 w-11/12 placeholder:ml-4 border border-slate-400 hover:border-[#FF9F0D] focus:border-[#FF9F0D]" />
                <input type="password"  placeholder="Password" className="p-2 w-11/12 placeholder:ml-4 border border-slate-400 hover:border-[#FF9F0D] focus:border-[#FF9F0D]"/>
               <div className="flex flex-row gap-2"><input type="checkbox" className="w-5 h-5 border-gray-300 rounded-md focus:bg-[#FF9F0D]"/><h3>Remember me?</h3></div>
                <button type="submit" className="w-11/12 p-2 text-white font-semibold bg-[#FF9F0D] hover:bg-orange-500">Sign Up</button>
               <h2 className="text-sm text-slate-500 text-right -mt-2">Forget password?</h2>
               <img src="/or.png" alt="kas" />
            </form>
            </div>
            
        </div>
        )
}