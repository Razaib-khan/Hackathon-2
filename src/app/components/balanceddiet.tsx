export default function BalancedDiet() {
    return (
      <div className="bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/blog1.png"
              alt="Tacos"
              className="rounded-lg object-cover shadow-md"
            />
            <img
              src="/blog2.png"
              alt="Salad"
              className="rounded-lg object-cover shadow-md -mb-20"
            />
          </div>
  
          {/* Text Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Food is an important part of a balanced diet
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam lorem, interdum eu posuere nec, consectetur eu eros.
            </p>
            <div className="flex space-x-4">
              {/* Buttons */}
              <button className="px-4 py-2 bg-[#FF9F0D] text-white rounded-lg shadow hover:bg-orange-600 transition">
                Show More
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }