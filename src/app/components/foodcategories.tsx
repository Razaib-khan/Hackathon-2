import { Search } from "lucide-react"
export default function Foodcategories (){
    return(
        <div className="flex justify-end items-end flex-col">
<div className="">
        <section>
          <label className="flex flex-row mb-5">
                <input type="text" placeholder="Search Product" className="placeholder:pl-3 p-2 w-36 border-none bg-[#FF9F0D] bg-opacity-10" />
               <span> 
                <button className="bg-[#FF9F0D] p-2">
                        <Search className="text-[11px] text-white"/>
               </button>
               </span>
            </label>
            </section>
      <h2 className="text-lg font-bold mb-4">Category</h2>
     <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Sandwiches</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Burger</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Chicken Chup</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Drink</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Pizza</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Thi</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Non Veg</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded-md focus:ring-blue-500"
          />
          <span className="ml-2">Uncategorized</span>
        </label>
      </div>
    </div>
</div>
    )
}