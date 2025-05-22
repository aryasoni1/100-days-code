import React from "react";

function TailwindCard() {
  return (
    <div className="max-w-sm rounded-lg shadow-lg p-6 bg-white border border-gray-200">
      <h2 className="text-xl font-bold mb-2">Card Title</h2>
      <p className="text-gray-600 mb-4">
        This is a basic card using Tailwind CSS.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
        Learn More
      </button>
    </div>
  );
}
export default TailwindCard;
