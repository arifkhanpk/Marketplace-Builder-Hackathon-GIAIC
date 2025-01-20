import MainImg from "../../Images/FeatureProduct2.png";
import Product1 from "../../Images/Feature7.png";
import Product2 from "../../Images/FeatureProduct1.png";
import Product3 from "../../Images/TopCategory3.png";
import Product4 from "../../Images/Explore1.png";
export default function Home() {
  return (
    <div className="max-w-[1321px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-[400px] h-[400px]  flex items-center justify-center">
            <img className="w-full h-full" src={MainImg.src} alt="" />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Library Stool Chair
          </h1>
          <p className="text-2xl font-bold text-teal-500 mb-6">$20.00 USD</p>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur lacinia mauris eu mi tincidunt, eu
            tincidunt purus tincidunt.
          </p>
          <button className="px-8 py-3 bg-teal-500 text-white text-lg rounded-md hover:bg-teal-600 transition">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <a href="#" className="text-teal-500 hover:underline">
            View all
          </a>
        </div>

        {/* Product Container*/}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {/* Product Box 1*/}
          <div className="w-[270px] h-[305px] flex flex-col justify-between p-4">
            {/* Product Image */}
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <img
                src={Product1.src}
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          {/* Product Box 2*/}
          <div className="w-[270px] h-[305px] flex flex-col justify-between p-4">
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <img
                src={Product2.src}
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          {/* Product Box 3*/}
          <div className="w-[270px] h-[305px] flex flex-col justify-between p-4">
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <img
                src={Product3.src}
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          {/* Product Box 4*/}
          <div className="w-[270px] h-[305px] flex flex-col justify-between p-4">
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <img
                src={Product4.src}
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mt-4">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
