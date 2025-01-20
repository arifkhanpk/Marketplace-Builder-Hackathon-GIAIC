"use client";

import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext)!;
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [orderStatus, setOrderStatus] = useState("");
  const router = useRouter();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePayment = () => {
    setOrderStatus("Processing payment...");
    setTimeout(() => {
      setOrderStatus("Order Placed Successfully!");
      router.push("/thank-you");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-[1321px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Details */}
            <div className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_12px_40px] p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Shipping Information
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={shippingDetails.name}
                  onChange={handleShippingChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
                <input
                  type="text"
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleShippingChange}
                  placeholder="Street Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleShippingChange}
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    value={shippingDetails.zipCode}
                    onChange={handleShippingChange}
                    placeholder="ZIP / Postal Code"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="country"
                  value={shippingDetails.country}
                  onChange={handleShippingChange}
                  placeholder="Country"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                />
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_12px_40px] p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Payment Method
              </h2>
              <div className="mb-6">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-teal-500 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                    className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700">Credit Card</span>
                </label>
              </div>

              {paymentMethod === "creditCard" && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardChange}
                    placeholder="Card Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      value={cardDetails.expiryDate}
                      onChange={handleCardChange}
                      placeholder="MM / YY"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    />
                    <input
                      type="text"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardChange}
                      placeholder="CVV"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_12px_40px] p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-3 border-b border-gray-100"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-900 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-900 pt-3">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className="w-full mt-8 bg-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200"
              >
                Place Order
              </button>

              {orderStatus && (
                <div className="mt-4 text-center text-sm font-medium text-teal-600">
                  {orderStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
