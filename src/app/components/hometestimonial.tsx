export default function Hometestimonial() {
  return (
    <div className="my-10 ">
      <section className="flex w-[400px] flex-col h-auto relative lg:left-[150px]">
        <img
          src="/testimonial.png"
          alt="testimonial"
          className="w-[100px] h-[30px]"
        />
        <h1 className="text-white font-bold text-2xl">
          What our Clients are Saying
        </h1>
      </section>
      <div className="flex justify-center ">
        <section className="bg-white flex flex-col my-28 lg:my-8 justify-center w-8/12 lg:w-7/12 h-[350px] shadow-lg shadow-white">
        <div className="relative top-[67px]">
        <div className="flex items-center flex-col">
        <img
            src="/reviewer.png"
            alt="reviewer"
            className="w-[100px] h-[100px] relative top-18"
          />
          <img 
            src="/Quotes.png"
            alt="quotes"
            className=" w-[60px]"
          />
          </div>
          <div className="flex justify-center flex-col gap-3">
            <div className="flex justify-center">
            <p className="lg:w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            </div>
            <div className="flex items-center flex-col gap-3">
            <img
              src="/star.png"
              alt="star"
              className="w-[150px]"
            />
            <h2 className="font-bold text-xl">
              Alamin Hasan
            </h2>
            <h3 className="text-[12px] text-gray-500  ">
              Food Specialist
            </h3>
            </div>
            </div>
            </div>
          <div className="flex justify-end">
            <img
              src="/reviewstyle.png"
              alt="reviewstyle"
              className="w-[250px] h-[250px] relative bottom-4 left-6"
            />
          </div>
          
        </section>
      </div>
    </div>
  );
}
