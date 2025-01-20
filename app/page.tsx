import OurProducts from "./components/OurProducts";
import HeroImg from "./Images/heroimg.png";
import Logo1 from "./Images/Logo1.png";
import Logo2 from "./Images/Logo2.png";
import Logo3 from "./Images/Logo3.png";
import Logo4 from "./Images/Logo4.png";
import Logo5 from "./Images/Logo5.png";
import Logo6 from "./Images/Logo6.png";
import Logo7 from "./Images/Logo7.png";
import Feature1 from "./Images/FeatureProduct1.png";
import Feature2 from "./Images/FeatureProduct2.png";
import Feature3 from "./Images/FeatureProduct3.png";
import Feature4 from "./Images/FeatureProduct4.png";
import TopCategory1 from "./Images/TopCategory1.png";
import TopCategory2 from "./Images/TopCategory2.png";
import TopCategory3 from "./Images/TopCategory3.png";
import Explore1 from "./Images/Explore1.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/*  */}
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        {/* Main Container */}
        <div className="max-w-[1321px] w-full">
          {/* Header Section */}
          <section className="w-full bg-[#F0F2F3] px-4 sm:px-8 lg:px-20 py-8 sm:py-12 mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Best Furniture Collection{" "}
                  <span className="block mt-2">For Your Interior.</span>
                </h1>

                <p className="text-gray-600 hidden sm:block max-w-xl">
                  Discover our curated selection of premium furniture pieces
                  designed to transform your living space.
                </p>

                <button
                  className="px-6 py-3 bg-[#029FAE] text-white rounded-md 
                       shadow-lg hover:bg-[#37b2bd] transition-all duration-300"
                >
                  Shop Now <span className="ml-1">→</span>
                </button>
              </div>

              {/* Right Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full max-w-[500px]">
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "100%" }}
                  >
                    {" "}
                    {/* Creates a 1:1 aspect ratio container */}
                    <Image
                      src={HeroImg}
                      alt="Furniture Collection"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain rounded-lg" // Changed to object-contain
                      style={{
                        objectFit: "contain", // Ensures the whole image is visible
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Logos Section */}
          <section className="flex flex-wrap items-center justify-between gap-6 m-10">
            <div className="relative w-[85px] h-[87px]">
              <Image
                src={Logo1}
                alt="Brand Logo 1"
                fill
                sizes="85px"
                className="object-contain"
              />
            </div>
            <div className="relative w-[107px] h-[109px]">
              <Image
                src={Logo2}
                alt="Brand Logo 2"
                fill
                sizes="107px"
                className="object-contain"
              />
            </div>
            <div className="relative w-[135px] h-[139px]">
              <Image
                src={Logo3}
                alt="Brand Logo 3"
                fill
                sizes="135px"
                className="object-contain"
              />
            </div>
            <div className="relative w-[63px] h-[65px]">
              <Image
                src={Logo4}
                alt="Brand Logo 4"
                fill
                sizes="63px"
                className="object-contain"
              />
            </div>
            <div className="relative w-[98px] h-[101px]">
              <Image
                src={Logo5}
                alt="Brand Logo 5"
                fill
                sizes="98px"
                className="object-contain"
              />
            </div>
            <div className="relative w-[113px] h-[115px]">
              <Image
                src={Logo6}
                alt="Brand Logo 6"
                fill
                sizes="113px"
                className="object-contain"
              />
            </div>
            <div className="relative w-[84px] h-[87px]">
              <Image
                src={Logo7}
                alt="Brand Logo 7"
                fill
                sizes="84px"
                className="object-contain"
              />
            </div>
          </section>
          {/* Featured Products Section */}
          <section className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="w-full max-w-[312px] mx-auto flex flex-col items-center">
                {/* Product Image */}
                <div className="relative w-full aspect-square rounded-md mb-4">
                  <Image
                    src={Feature1}
                    alt="Library Stool Chair"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover rounded-md"
                  />
                </div>
                {/* Product Info */}
                <div className="w-full text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-gray-500">$20</p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="w-full max-w-[312px] mx-auto flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-md mb-4">
                  <Image
                    src={Feature2}
                    alt="Library Stool Chair"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="w-full text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-gray-500">$20</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="w-full max-w-[312px] mx-auto flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-md mb-4">
                  <Image
                    src={Feature3}
                    alt="Library Stool Chair"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="w-full text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-gray-500">$20</p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="w-full max-w-[312px] mx-auto flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-md mb-4">
                  <Image
                    src={Feature4}
                    alt="Library Stool Chair"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="w-full text-center">
                  <p className="text-lg font-medium text-gray-700">
                    Library Stool Chair
                  </p>
                  <p className="text-gray-500">$20</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <div className="max-w-[1321px] w-full">
          {/* Top Categories Section */}
          <section className="py-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Top Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category Card 1 */}
              <div className="relative rounded-lg w-full max-w-[424px] mx-auto aspect-[1/1.2] sm:aspect-square overflow-hidden">
                <Image
                  src={TopCategory1}
                  alt="Wing Chair Category"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-lg font-medium">Wing Chair</h3>
                  <p className="text-sm">3,584 Products</p>
                </div>
              </div>

              {/* Category Card 2 */}
              <div className="relative rounded-lg w-full max-w-[424px] mx-auto aspect-[1/1.2] sm:aspect-square overflow-hidden">
                <Image
                  src={TopCategory2}
                  alt="Wooden Chair Category"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-lg font-medium">Wooden Chair</h3>
                  <p className="text-sm">157 Products</p>
                </div>
              </div>

              {/* Category Card 3 */}
              <div className="relative rounded-lg w-full max-w-[424px] mx-auto aspect-[1/1.2] sm:aspect-square overflow-hidden">
                <Image
                  src={TopCategory3}
                  alt="Desk Chair Category"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="text-lg font-medium">Desk Chair</h3>
                  <p className="text-sm">154 Products</p>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Styles Section */}
          <section className="py-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Explore New and Popular Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Large Featured Box */}
              <div className="col-span-1 md:col-span-2 relative aspect-square rounded-lg">
                {" "}
                {/* Changed aspect ratio to square */}
                <Image
                  src={Explore1}
                  alt="Featured Style"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Smaller Boxes Grid */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg">
                  <Image
                    src={Feature1}
                    alt="Feature Style 1"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-square rounded-lg">
                  <Image
                    src={Feature2}
                    alt="Feature Style 2"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-square rounded-lg">
                  <Image
                    src={Feature3}
                    alt="Feature Style 3"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative aspect-square rounded-lg">
                  <Image
                    src={Feature4}
                    alt="Feature Style 4"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/*  */}
      <OurProducts />
    </div>
  );
}
