export default function Homechefs() {
  return (
    <div className="mt-20">
      <section className="flex items-center flex-col">
        <img src="/Chefs.png" alt="chefs" className="w-[50px] h-[20px]" />
        <h1 className="text-[#FF9F0D] text-2xl font-bold flex flex-row mt-4">
          Me
          <span className="text-white">et Our Chef </span>
        </h1>
      </section>
      <section className="flex flex-col lg:flex-row justify-center mt-6 ml-[70px] md:ml-44 lg:ml-0 gap-3">
        <div className="flex flex-row gap-3">
        <img src="/chef1.png" alt="chef1" className="w-[180px] h-[200px]" />
        <img src="/chef2.png" alt="chef2" className="w-[180px] h-[200px]" />
        </div>
        <div className="flex flex-row gap-3">
        <img src="/chef3.png" alt="chef3" className="w-[180px] h-[200px]" />
        <img src="/chef4.png" alt="chef4" className="w-[180px] h-[200px]" />
        </div>
      </section>
      <section className="flex justify-center mt-4">
        <button className="bg-transparent border active: border-[#FF9F0D] rounded-3xl w-[100px] text-white hover:bg-[#FF9F0D] p-3 text-xs">
          See More
        </button>
      </section>
    </div>
  );
}
