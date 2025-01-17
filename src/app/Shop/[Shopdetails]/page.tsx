import Shopdetailsname from "@/app/components/shopdetailsname";
import MobileNavbar from "../../components/mobilenavbar";
import { MoveLeft, MoveRight } from "lucide-react";
import Navbar from "../../components/navbar";
import Shopdetailprice from "@/app/components/shopdetailsprice";
import Incbutton from "@/app/components/incbutton";
import { ShoppingBag } from "lucide-react";
import Shopdetailsother from "@/app/components/shopdetailotherdata";
import Link from "next/link";

const images = [
  { url: "/Freshlime.png", id: 1, fname1: "Fresh Lime" },
  { url: "/shopcard2.png", id: 2, fname2: "Chocolate Muffin" },
  { url: "/shopcard3.png", id: 3, fname3: "Burger" },
  { url: "/shopcard4.png", id: 4, fname4: "Country Burger" },
  { url: "/shopcard5.png", id: 5, fname5: "Drink" },
];
const isClient = typeof window !== "undefined";
const curl = isClient ? window.location.href : "";
let message = "";
if (curl.includes("/Shop/1")) {
  message = "Fresh Lime";
} else if (curl.includes("/Shop/2")) {
  message = "Chocolate Muffin";
} else if (curl.includes("/Shop/3")) {
  message = "Burger";
} else if (curl.includes("/Shop/4")) {
  message = "Country Burger";
} else if (curl.includes("/Shop/5")) {
  message = "Drink";
} 
export default function Shopdetails() {
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
            Shop Details
          </h1>
          <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
            Home &gt; <span className="text-[#FF9F0D]">Shop details</span>
          </span>
        </div>
      </section>
      <div className="flex flex-row gap-10">
        <section className="w-1/3 lg:ml-32">
          <div className="flex flex-row">
            <div className=" hidden lg:block">
              <img
                src="/homecard2.png"
                alt="1"
                className="w-[75px] mb-[28px] "
              />
              <img
                src="/homecard5.png"
                alt="1"
                className="w-[75px] h-auto mb-[28px] "
              />
              <img
                src="/homecard4.png"
                alt="1"
                className="w-[75px] h-auto mb-[28px] "
              />
              <img
                src="/homecard3.png"
                alt="1"
                className="w-[75px] h-auto mb-[28px] "
              />
            </div>
            <div className="ml-[22px]">
              <img src="/homecard7.png" alt="2" className="w-[250px] lg:w-80 h-[330px]" />
            </div>
          </div>
        </section>
        <section className="w-3/4">
          <div className="flex flex-row justify-between">
            <div>
              <button className="bg-[#FF9F0D] text-white rounded-md px-2">
                In stock
              </button>
            </div>
            <div>
              <div className="flex flex-row gap-5 w-[500px]">
                <button className="bg-transparent border-none text-slate-400 flex flex-row hover:text-[#FF9F0D]">
                  <MoveLeft className="text-slate-400 hover:text-[#FF9F0D]" />{" "}
                  Prev
                </button>
                <button className="bg-transparent border-none text-slate-400 flex flex-row hover:text-[#FF9F0D]">
                  <MoveRight className="text-slate-400 hover:text-[#FF9F0D]" />{" "}
                  Next
                </button>
              </div>
            </div>
          </div>
          <Shopdetailsname />
          <p className="lg:w-[500px] w-auto md:w-[500px] text-sm mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>
          <Shopdetailprice />
          <img src="/Rating.png" alt="rating" className="w-60 mt-3" />
          <p className="text-sm mt-2">Dictum/cursus/Risus</p>
          <div className="flex flex-row gap-6">
            <Incbutton />
          <Link href="/ShoppingCart">  <button className="p-2 bg-[#FF9F0D] text-white flex flex-row gap-3 px-4">
              <ShoppingBag className="text-white" />
              Add to Cart
            </button> </Link>
          </div>
          <Shopdetailsother />
        </section>
      </div>
      <section className="ml-36 gap-5">
        <div className="flex flex-row gap-1 mb-5">
          <button className="p-3 px-6 hover:bg-[#FF9F0D] hover:text-white focus:bg-[#FF9F0D] focus:text-white">
            Description
          </button>
          <button className="p-3 px-6 focus:bg-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white focus:text-white">
            Reviews
          </button>
        </div>
        <div className="w-full">
        <p className="w-9/12 mb-2 text-slate-500">
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
          sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </p>
        <p className="w-9/12 text-slate-500">
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
          blandit justo urna, id porttitor est dignissim nec. Pellentesque
          scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan
          et sagittis massa. Aliquam aliquam accumsan lectus quis auctor.
          Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula
          fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor
          sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>
        <span className="text-2xl text-slate-600 mt-6">Key Benefits</span>
        <ul className="list-disc pl-5 mt-4">
          <li className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="text-slate-500">Maecenas ullamcorper est et massa mattis condimentum.
          </li>
          <li className="text-slate-500">Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
          <li className="text-slate-500">Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li className="text-slate-500">Mauris eget diam magna, in blandit turpis.</li>
        </ul>
        </div>
      </section>
    </div>
  );
}
