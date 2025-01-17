import MobileNavbar from "../components/mobilenavbar";
import Navbar from "../components/navbar";
import Homedetail from "../components/homedetail";
export default function Menu() {
  return (
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
        Our Menu
      </h1>
      <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
        Home &gt; <span className="text-[#FF9F0D]">Menu</span>
      </span>
      </div>
      </section>
      <section className="lg:flex lg:items-center hidden gap-24 lg:flex-col">
        <img src="/StarterMenu.png" alt="starters" className="h-[300px] w-7/12" />
        <img src="/maincourse.png" alt="maincourse" className="h-[300px] w-7/12" />
      </section>
      <section className="lg:hidden">
        <div className="flex items-center justify-center w-full">
            <img src="/mstarters.png" alt="mobile1" className=" w-44 h-40" />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="font-bold text-2xl">Starter Menu</h1>
              <img src="/Component49.png" alt="49" className="w-11/12" />
              <img src="/Component50.png" alt="50" className="w-11/12" />
              <img src="/Component51.png" alt="51" className="w-11/12" />
              <img src="/Component52.png" alt="52" className="w-11/12" />
            </div>
            <div className="flex items-center justify-center w-full">
            <img src="/mmaincourse.png" alt="mobile2" className=" w-44 h-40" />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="font-bold text-2xl">Main Course</h1>
              <img src="/Component53.png" alt="53" className="w-11/12" />
              <img src="/Component54.png" alt="54" className="w-11/12" />
              <img src="/Component55.png" alt="55" className="w-11/12" />
              <img src="/Component56.png" alt="56" className="w-11/12" />
            </div>
      </section>
      <div className=" my-14">
              <Homedetail/>
              </div>
              <section className="lg:flex lg:items-center hidden gap-24 lg:flex-col">
        <img src="/deserts.png" alt="deserts" className="h-[300px] w-7/12" />
        <img src="/drinks.png" alt="drinks" className="h-[300px] w-7/12" />
      </section>
      <section className="lg:hidden">
        <div className="flex items-center justify-center w-full">
            <img src="/mdeserts.png" alt="mobile3" className=" w-44 h-40" />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="font-bold text-2xl">Deserts</h1>
              <img src="/Component57.png" alt="49" className="w-11/12" />
              <img src="/Component58.png" alt="50" className="w-11/12" />
              <img src="/Component59.png" alt="51" className="w-11/12" />
              <img src="/Component60.png" alt="52" className="w-11/12" />
            </div>
            <div className="flex items-center justify-center w-full">
            <img src="/mdrinks.png" alt="mobile4" className=" w-44 h-40" />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="font-bold text-2xl">Drinks</h1>
              <img src="/Component61.png" alt="53" className="w-11/12" />
              <img src="/Component62.png" alt="54" className="w-11/12" />
              <img src="/Component63.png" alt="55" className="w-11/12" />
              <img src="/Component64.png" alt="56" className="w-11/12" />
            </div>
      </section>
      <section className="flex justify-center items-center my-20">
        <img src="/Clientsandpartner.png" alt="partners" className=" w-10/12"/>
      </section>
    </div>
  );
}
