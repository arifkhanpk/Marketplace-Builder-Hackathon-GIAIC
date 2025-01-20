"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  title: string;
  price: number;
  image: {
    asset: {
      _ref: string;
      _type: string;
    } | null; // Add null type to asset field to handle missing images
  } | null; // Add null type to the whole image field
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await client.fetch(
          `*[_type == "products"]{_id, title, price, image}`
        );
        setProducts(data);
      } catch (error) {
        setError("Error fetching products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1321px] mx-auto px-4 sm:px-6 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover our exceptional collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {/* Check if product.image and product.image.asset exist before rendering */}
                <img
                  src={product.image && product.image.asset 
                    ? urlFor(product.image).url() 
                    : "/fallback-image.jpg"} // Use fallback image if image is null or not found
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 truncate">
                  {product.title}
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                  <Link href={`/Product/${product._id}`}>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium transform hover:-translate-y-0.5 transition-transform duration-200">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
