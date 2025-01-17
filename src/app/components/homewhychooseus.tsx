import Image from "next/image";

export default function Homewhychooseus() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center gap-[50px] mt-20">
      <section className="w-[220px] h-[220px] hidden lg:block lg:w-[420px] lg:h-[420px]">
        <div className="lg:flex  lg:flex-row gap-2">
          <img
            src="/homecard5.png"
            alt="card5"
            className="w-[196px] h-[196px]"
          />
          <img
            src="/homecard6.png"
            alt="card5"
            className="w-[196px] h-[147px] relative top-[48px]"
          />
        </div>
        <div className="flex flex-row gap-2 mt-2">
          <img
            src="/homecard7.png"
            alt="card5"
            className="w-[147px] h-[165px]"
          />
          <img
            src="/homecard8.png"
            alt="card5"
            className="w-[127px] h-[123px]"
          />
          <div className="flex flex-col gap-2">
            <img
              src="/homecard9.png"
              alt="card5"
              className="w-[110px] h-[92px]"
            />
            <img
              src="/homecard10.png"
              alt="card5"
              className="w-[110px] h-[92px]"
            />
          </div>
        </div>
      </section>
      <section className="mt-6">
        <Image
          src="/whychooseus.png"
          alt="whychooseus"
          width={120}
          height={30}
          className="mb-2"
        />
        <h1 className="text-[#FF9F0D] text-2xl font-bold flex flex-row">
          Ex
          <span className="text-white">
            tra ordinary taste{" "}
            <span className="relative right-6">And Experienced</span>
          </span>
        </h1>
        <p className="text-white w-[450px] text-sm mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex flex-row gap-5 mt-4">
          <div className="flex flex-col">
        <div className="w-[60px] h-[60px] bg-[#FF9F0D] flex justify-center rounded-sm">
        <img src="/Hamburger.png" alt="hamburger" className="w-[30px] h-[30px] mt-3"/>
        </div>
        <h2 className="text-white text-xs relative left-[5px] mt-1">Fast Food</h2>
        </div>
        <div className="flex flex-col">
        <div className="w-[60px] h-[60px] bg-[#FF9F0D] flex justify-center rounded-sm">
        <img src="/Cookie.png" alt="cookie" className="w-[30px] h-[30px] mt-3"/>
        </div>
        <h2 className="text-white text-xs relative left-[14px] mt-1">Lunch</h2>
        </div>
        <div className="flex flex-col">
        <div className="w-[60px] h-[60px] bg-[#FF9F0D] flex justify-center rounded-sm">
        <img src="/Wine.png" alt="wine" className="w-[30px] h-[30px] mt-3"/>
        </div>
        <h2 className="text-white text-xs relative left-[12px] mt-1">Dinner</h2>
        </div>
        </div>
        <img src="/Yearsexp.png" alt="experiece" className="w-[220px] mt-4"/>
      </section> 
    </div>
  );
}
