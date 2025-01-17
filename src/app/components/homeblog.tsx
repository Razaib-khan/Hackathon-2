export default function Homeblog (){
    return(
        <div>
            <section className="flex flex-col items-center">
                <img src="/BlogPost.png" alt="BlogPost" className="w-[80px]" />
                <h1 className="text-[#FF9F0D] text-2xl font-bold flex flex-row ">
                    La
                    <span className="text-white"> test News & Blog </span>
                </h1>
            </section>
            <section className="flex flex-row justify-center gap-4 mt-8">
                <img src="/BlogCard1.png" alt="Card1" className="w-[200px]" />
                <img src="/BlogCard3.png" alt="Card3" className="w-[200px]" />
                <img src="/BlogCard2.png" alt="Card2" className="w-[200px]" />
            </section>
        </div>
    )
}