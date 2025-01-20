"use client";
import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import Link from "next/link";

const Cart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext is not available");
  }

  const { cart, updateQuantity, removeFromCart } = context;

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-8 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl  overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_12px_40px] "
              >
                <div className="p-6 flex items-center gap-6">
                  {/* Product Image */}
                  <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-6">
                      {/* Quantity Input */}
                      <div className="flex items-center">
                        <label
                          htmlFor={`quantity-${item.id}`}
                          className="text-sm font-medium text-gray-700 mr-2"
                        >
                          Qty:
                        </label>
                        <input
                          id={`quantity-${item.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16 py-1.5 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        />
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Price:</span>
                        <span className="text-lg font-semibold text-gray-900">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                    aria-label="Remove item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142C18.098 20.403 17.11 21 16.052 21H7.948c-1.058 0-2.046-.597-2.081-1.858L5 7m2 0l1-3h8l1 3m-6 5v6m4-6v6M9 7h6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_12px_40px] p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">
                    $
                    {cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      $
                      {cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <Link href="../../Checkout">
                <button className="w-full mt-8 bg-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-200">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
