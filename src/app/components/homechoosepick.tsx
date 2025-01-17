export default function Homechoosepick (){
    return(
        <div className="h-[500px] flex justify-center">
            <section className="flex items-center flex-col">
            <img src="/choosepick.png" alt="choosepick" className="w-[110px] h-[30px]"/>
            <h1 className="text-[#FF9F0D] text-2xl font-bold flex flex-row mt-4">
          Fr
          <span className="text-white">
            om Our Menu{" "}
          </span>
        </h1>
        <ul className="flex flex-row justify-center gap-4 lg:gap-24 mt-12">
            <li className="text-[#FF9F0D] active:text-[#FF9F0D] hover:text-[#FF9F0D] mb-5 cursor-pointer">Breakfast</li>
            <li className="text-white mb-5 active:text-[#FF9F0D] hover:text-[#FF9F0D] cursor-pointer">Lunch</li>
            <li className="text-white mb-5 active:text-[#FF9F0D] hover:text-[#FF9F0D] cursor-pointer">Dinner</li>
            <li className="text-white mb-5 active:text-[#FF9F0D] hover:text-[#FF9F0D] cursor-pointer">Dessert</li>
            <li className="text-white mb-5 active:text-[#FF9F0D] hover:text-[#FF9F0D] cursor-pointer">Drink</li>
            <li className="text-white mb-5 active:text-[#FF9F0D] hover:text-[#FF9F0D] cursor-pointer">Snack</li>
            <li className="text-white mb-5 active:text-[#FF9F0D] hover:text-[#FF9F0D] cursor-pointer">Soup</li>
        </ul>
        <div className="flex flex-row">
            <div className="mt-6 hidden md:hidden lg:block">
            <img src="/cpleaf.png" alt="leaves" className="w-[150px] h-[150px] lg:w-[400px] lg:h-[300px]" />
            <img src="/cpplate.png" alt="plate" className="w-[100px] h-[100px] relative bottom-[120px] lg:w-[300px] lg:h-[300px] lg:relative lg:bottom-[300px] lg:left-12 md:w-[300px] md:h-[300px] md:relative md:bottom-[300px] md:left-12" />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mt-6">
            <div>
                <img src="/LettuceLeaf.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px] lg:mb-5" />
                <img src="/freshbreakfast.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px] lg:mb-5" />
                <img src="/mildbutter.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px] lg:mb-5" />
                <img src="/freshbread.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px]" />
            </div>
            <div>
            <img src="/glowcheese.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px] lg:mb-5" />
            <img src="/italianpizza.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px] lg:mb-5" />
            <img src="/slicedbeef.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px] lg:mb-5" />
            <img src="/mushroompizza.png" alt="lettuce" className="lg:w-[220px] h-[40px] w-[260px] lg:h-[50px]" />
            </div>
            </div>
        </div>
            </section>
        </div>
    )
}