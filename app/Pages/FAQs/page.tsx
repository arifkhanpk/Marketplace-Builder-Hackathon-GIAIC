import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Questions Looks Here</h2>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>

      {/* FAQ Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ Item */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              What types of chairs do you offer?
            </h3>
            <button className="text-gray-500 hover:text-black">+</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestias ipsa totam
            quidem?
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Do your chairs come with a warranty?
            </h3>
            <button className="text-gray-500 hover:text-black">+</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestias ipsa totam
            quidem?
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Can I try a chair before purchasing?
            </h3>
            <button className="text-gray-500 hover:text-black">+</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestias ipsa totam
            quidem?
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              How can we get in touch with you?
            </h3>
            <button className="text-gray-500 hover:text-black">+</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestias ipsa totam
            quidem?
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              What will be delivered? And When?
            </h3>
            <button className="text-gray-500 hover:text-black">+</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestias ipsa totam
            quidem?
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              How do I clean and maintain my Comforty chair?
            </h3>
            <button className="text-gray-500 hover:text-black">+</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestias ipsa totam
            quidem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
