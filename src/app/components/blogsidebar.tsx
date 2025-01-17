import React from 'react';

import { Bird, Tag, Star } from 'lucide-react'; 

const Blogsidebar = () => {
  return (
    <div>
    <div className="hidden lg:block left-4 top-4 bg-white p-4 rounded-lg shadow-md max-w-xs"> 
      <div className="flex items-center mb-4 flex-col justify-center">
        <img 
          src="/profile.png" // Replace with actual image path
          alt="Profile Image" 
          className="w-20  w-4/50 rounded-full mr-4" 
        />
        <div className='flex justify-center items-center flex-col'>
          <h2 className="text-lg font-bold">Prince Miyako</h2>
          <p className="text-gray-500">Blogger, Photographer</p>
          <div className="flex mt-2">
            <Star className="text-[#FF9F0D] w-4 h-4" />
            <Star className="text-[#FF9F0D] w-4 h-4 ml-1" />
            <Star className="text-[#FF9F0D] w-4 h-4 ml-1" />
            <Star className="text-[#FF9F0D] w-4 h-4 ml-1" />
            <Star className="text-[#FF9F0D] w-4 h-4 ml-1" />
          </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur
adipisicing elit.Veritatis distinctio, odio
eligendi suscipit reprehenderit atque</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#FF9F0D] mt-4 mb-2">Recent Posts</h3>

      <div className="flex flex-col">
        <div>
          <img 
            src="/post1.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
        </div>
        {/* ... other posts */}
      </div>
      <div>
          <img 
            src="/post1.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
        </div>
        <div>
          <img 
            src="/post1.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
        </div>
        <div>
          <img 
            src="/post1.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
        </div>
<div>
      <h3 className="text-lg font-semibold text-[#FF9F0D] mt-4 mb-2">Filter By Menu</h3>
      <div className='mt-6'>
      <img 
            src="/Chicken.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
                <img 
            src="/Chicken1.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
                <img 
            src="/Chicken2.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
                <img 
            src="/Chicken3.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
                <img 
            src="/Chicken4.png" // Replace with actual image path
            alt="Post 1" 
            className=" w-4/5 mb-2" 
          />
          </div>
</div>
      <h3 className="text-lg font-semibold text-[#FF9F0D] mt-4 mb-2">Popular Tags</h3>

      <div className="flex flex-wrap gap-2">
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Sandwich
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Tikka
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Bbq
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Restaurant
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Chicken Shawarma
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Health
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Fast Food
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Food
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Pizza
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Pizza
        </button>
        <button className="hover:brightness-50er:text-[#FF9F0D] text-slate-500 p-2 border border-slate-500 hover:brightness-50er:border-[#FF9F0D]">
            Chicken
        </button>
      </div>

      <h3 className="text-lg font-semibold text-[#FF9F0D] mt-4 mb-2 w-3/4 ">Photo Gallery</h3>
      <div className='flex justify-center items-center flex-col gap-3'>
        <div className='flex flex-row gap-3'>
        <img src="/photo1.png" alt="photo" className='w-3/12 hover:brightness-50' />
        <img src="/photo2.png" alt="photo" className='w-3/12 hover:brightness-50' />
        <img src="/photo3.png" alt="photo" className='w-3/12 hover:brightness-50' />
        </div>
        <div className='flex flex-row gap-3'>
        <img src="/photo4.png" alt="photo" className='w-3/12 hover:brightness-50' />
        <img src="/photo5.png" alt="photo" className='w-3/12 hover:brightness-50' />
        <img src="/photo6.png" alt="photo" className='w-3/12 hover:brightness-50' />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[#FF9F0D] mt-4 mb-2">Follow Us</h3>
      <div className='flex justify-center items-center'>
        <img 
          src="/Socialicon.png" // Replace with actual image path
          alt="Post 1" 
          className=" w-3/4 mb-2" 
          />
      </div>

    </div>

    <div className="block lg:hidden">
      <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-200 rounded" />
    </div>
    </div>
  );
};

export default Blogsidebar;