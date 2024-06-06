import React from "react";

export const Button = () => (
  <div className="w-1/2 flex items-center ">
    <button
      className="bg-[#c8144d] opacity-60 cursor-not-allowed rounded-lg"
      disabled
    >
      <p className="py-2 px-4">Start Watching</p>
    </button>
  </div>
);

export const SeeMoreButton = ({  showMore }) => (
  <div className="flex justify-center items-center w-full my-5">
    <button
      className="bg-[#c8144d]  px-4 py-2 cursor-pointer rounded-lg"
      onClick={showMore}
    >
      <span className="text-white text-center text-lg">Show More</span>
    </button>
  </div>
);
