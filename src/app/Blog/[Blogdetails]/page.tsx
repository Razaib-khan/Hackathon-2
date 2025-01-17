import BlogList from "@/app/components/Blog";
import Comment from "@/app/components/comment";
import Navbar from "@/app/components/navbar";
import MobileNavbar from "@/app/components/mobilenavbar";
import Blogsidebar from "@/app/components/blogsidebar";
export default function Blogdetails() {
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
                  Blog Details
                </h1>
                <h2 className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
                  Home &gt; <span className="text-[#FF9F0D]">Blog details</span>
                </h2>
              </div>
            </section>
            <div className="flex flex-row">
              <div>
      <BlogList
        imageSrc="/blog2.png"
        date="Feb 14, 2022"
        title="Traditional Soft Pretzels with Sweet Beer Cheese"
        description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        comments={3}
        author="Admin"
      />
      <div className=" flex flex-row gap-4 w-full justify-center items-center">
        <div className="bg-[#FF9F0D] w-3/5 flex justify-center gap-4 items-center py-2">
        <img src="/Quotes.png" alt="quotes" className="filter grayscale-0 brightness-200"/>
        <p className="text-white text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.{" "}
        </p>
      </div>
      </div>
      <Comment/>
    </div>
    
    <div>
      <Blogsidebar/>
    </div>
    </div>
    </div>
  );
}
