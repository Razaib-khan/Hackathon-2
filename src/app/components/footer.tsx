import { Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="main" className="mt-5 md:mt-10 lg:mt-20 bg-black pt-1">
      <footer className="h-auto mt-20 relative  lg:left-0">
        <section className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between pb-12 border-b border-b-[#FF9F0D]">
            <div className="flex flex-col">
              <h1 className="flex relative top-2 flex-row text-lg md:text-[25px] font-bold text-[#FF9F0D]">
                St
                <span className="text-lg md:text-[25px] font-bold text-white">
                  ill You Need Our Support?
                </span>
              </h1>
              <h2 className="text-sm md:text-[12.5px] mt-3 text-white">
                Don&apos;t wait make a smart & logical quote here. It&apos;s pretty easy.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row mt-5 md:mt-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="placeholder:pl-5 w-full md:w-[306px] h-10 md:h-14 bg-[#FF9F0D] rounded-sm placeholder:text-white"
              />
              <button className="text-[#FF9F0D] rounded-sm bg-white h-10 md:h-14 w-full md:w-[163px] mt-2 md:mt-0 ">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 md:gap-16 mt-10  w-4/5">
          <section className="w-full md:w-1/2 lg:w-1/4">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white mb-4">About Us</h1>
            <p className="text-sm md:text-base text-white">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex flex-col md:flex-row mt-5">
              <Clock className="bg-[#FF9F0D] text-white w-[40px] md:w-[50px] h-[36px] md:h-[44px]" />
              <div className="flex flex-col leading-none ml-2">
                <span className="text-sm md:text-base">Opening hours</span>
                <p className="font-extralight text-xs md:text-sm">
                  Mon - Sat (8.00 - 6.00) <br /> Sunday - Closed
                </p>
              </div>
            </div>
          </section>
          <section className="w-full md:w-1/2 lg:w-1/4">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white mb-5">Useful Links</h1>
            <ul className="flex flex-col  gap-4">
              <li className="text-white cursor-pointer">About</li>
              <li className="text-white cursor-pointer">News</li>
              <li className="text-white cursor-pointer">Partners</li>
              <li className="text-white cursor-pointer">Team</li>
              <li className="text-white cursor-pointer">Menu</li>
              <li className="text-white cursor-pointer">Contacts</li>
            </ul>
          </section>
          <section className="w-full md:w-1/2 lg:w-1/4">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white mb-5">Help?</h1>
            <ul className="flex flex-col gap-4">
              <li className="text-white cursor-pointer">FAQ</li>
              <li className="text-white cursor-pointer">Terms and Conditions</li>
              <li className="text-white cursor-pointer">Reporting</li>
              <li className="text-white cursor-pointer">Documentation</li>
              <li className="text-white cursor-pointer">Support Policy</li>
              <li className="text-white cursor-pointer">Privacy</li>
            </ul>
          </section>
          <section className="w-full md:w-1/2 lg:w-1/4">
            <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white mb-5">Recent Post</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row md:flex-row">
                <Image src="/MaskGroup.png" alt="card1" width={50} height={45} />
                <div className="flex flex-col ml-3 md:ml-5">
                  <h2 className="text-sm md:text-base text-white opacity-50">20 Feb 2022</h2>
                  <h3 className="text-sm md:text-base text-white">Keep Your Business</h3>
                </div>
              </div>
              <div className="flex flex-row">
                <Image src="/MaskGroup2.png" alt="card2" width={50} height={45} />
                <div className="flex flex-col ml-3">
                  <h2 className="text-sm text-white opacity-50">20 Feb 2022</h2>
                  <h3 className="text-sm text-white">Keep Your Business</h3>
                </div>
              </div>
              <div className="flex flex-row">
                <Image src="/MaskGroup3.png" alt="card3" width={50} height={45} />
                <div className="flex flex-col ml-3">
                  <h2 className="text-sm text-white opacity-50">20 Feb 2022</h2>
                  <h3 className="text-sm text-white">Keep Your Business</h3>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="h-20 w-full bg-[#4F4F4F] mt-10">
          <div className="h-10 w-full flex flex-col md:flex-row justify-between items-center px-5 md:px-[118px]">
            <h1 className="text-white text-center md:text-left">
              Copyright &copy; 2022 by Ayeman. All Rights Reserved.
            </h1>
            <Image src="/Socialicon.png" alt="icons" width={200} height={100} />
          </div>
          
        </section>
        </div>
      </footer>
    </div>
    
  );
}