import Link from "next/link"
export default function Aboutfoodmenu (){
  return(
    <div className="mt-32">
      <section className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold">Why Choose Us</h1>
        <p className="text-sm mt-4 w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
        </p>
        <img src="/menu.png" alt="pic" className="w-3/4 mt-8 " />
      <Link href="/Menu"><button className="p-2 mt-5 bg-transparent text-sm hover:bg-[#FF9F0D] text-[#FF9F0D] hover:text-white border border-[#FF9F0D]">
        View Menu
        </button>
        </Link>  
      </section>
    </div>
  )
}