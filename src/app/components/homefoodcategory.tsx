import Image from "next/image"
export default function Homefoodcategory (){
    return(
        <div className="mt-20">
            <section className="flex justify-center flex-col">
                <div className="h-5 flex justify-center">
                <Image src="/FoodCategory.png" alt="foodcategory" width={100} height={2}/>
                </div>
                <div className="flex flex-row text-xl justify-center">
                <h1 className="text-[#FF9F0D] font-bold flex flex-row">Ch<span className="text-white">oose Food Items</span></h1>
                </div>
            </section>
            <section className="flex flex-row gap-5 lg:gap-20 justify-center mt-6">
                <div>
                <Image src="/homecard1.png" alt="card1" width={200} height={300}/>
                </div>
                <div>
                <Image src="/homecard2.png" alt="card1" width={200} height={300}/>
                </div>
                <div>
                <Image src="/homecard3.png" alt="card1" width={200} height={300}/>
                </div>
                <div>
                <Image src="/homecard4.png" alt="card1" width={200} height={300}/>
                </div>
            </section>
        </div>
    )
}