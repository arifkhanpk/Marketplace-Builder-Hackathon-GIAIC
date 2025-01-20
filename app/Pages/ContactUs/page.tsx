import React from "react";
import Address from "../../Images/Address.png";
import Phone from "../../Images/Phone.png";
import Work from "../../Images/work.png";
const ContactSection = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-12">
      {/* Header */}
      <h2 className="text-center text-3xl font-bold mb-4">
        Get In Touch With Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        For More Information About Our Product & Services, Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 ">
              <img className="w-full h-full" src={Address.src} alt="" />
            </div>
            <div>
              <h3 className="font-bold">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 ">
              <img className="w-full h-full" src={Phone.src} alt="" />
            </div>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 ">
              <img className="w-full h-full" src={Work.src} alt="" />
            </div>
            <div>
              <h3 className="font-bold">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Abc"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Abc@def.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="This is an optional"
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
