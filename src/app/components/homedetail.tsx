export default function Homedetail (){
    return(
        <div className="bg-[url('/detailbg.png')] z-50">
        <div className="flex flex-col items-center gap-6 lg:gap-32 lg:flex-row justify-center my-3 py-3 bg-cover w-full bg-opacity-60 bg-black">
            <div className="flex gap-6 lg:gap-32 lg:flex-row brightness-100">
            <img src="/Chef.png" alt="chef" className="w-[100px] h-[120px]" />
            <img src="/Itemoffood.png" alt="food" className="w-[100px] h-[120px]" />
            </div>
            <div className="flex gap-6 lg:gap-32 lg:flex-row brightness-100">
            <img src="/Yearsofexp.png" alt="exp" className="w-[100px] h-[120px]" />
            <img src="/Happycustomers.png" alt="customers" className="w-[100px] h-[120px]" />
            </div>
        </div>
        </div>
    )
} 