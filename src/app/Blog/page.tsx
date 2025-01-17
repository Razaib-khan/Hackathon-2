import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobilenavbar";
import BlogList from "../components/Blog";
import Link from "next/link";
import Blogsidebar from "../components/blogsidebar";
export default function Blog() {
    let blogd =[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
    ]
    let ids = blogd.map(item => item.id)
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
            Blog List
          </h1>
          <span className="text-xs relative bottom-[70px] md:bottom-[90px] lg:bottom-[120px] text-white">
            Home &gt; <span className="text-[#FF9F0D]">Blog List</span>
          </span>
        </div>
      </section>
      <div className="flex flex-row justify-evenly">
      <section>
        <Link href={`Blog/${blogd[0].id}`}>
      <BlogList
        imageSrc="/blog1.png"
        date="Feb 14, 2022"
        title="10 Reasons To Do A Digital Detox Challenge"
        description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        comments={3}
        author="Admin"
      /></Link>
          <Link href={`Blog/${blogd[0].id}`}>
                  <BlogList
        imageSrc="/blog4.png"
        date="Feb 14, 2022"
        title="My Favorite Easy Black Pizza Toast Recipe"
        description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        comments={3}
        author="Admin"
      />
      </Link>
      <Link href={`Blog/${blogd[0].id}`}>
                  <BlogList
        imageSrc="/blog3.png"
        date="Feb 14, 2022"
        title="The Ultimate Hangover Burger: Egg in a Hole Burger"
        description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        comments={3}
        author="Admin"
      />
      </Link>
      <Link href={`Blog/${blogd[0].id}`}>
                  <BlogList
        imageSrc="/blog2.png"
        date="Feb 14, 2022"
        title="Traditional Soft Pretzels with Sweet Beer Cheese"
        description="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        comments={3}
        author="Admin"
      />
      </Link>
      </section>
      <section>
      <Blogsidebar/>
      </section>
      </div>
    </div>
  );
}
