import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

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

export const SeeMoreButton = ({ showMore }) => (
  <div className="flex justify-end items-center w-full my-5">
    <button
      className="bg-[#7544b2]  px-4 py-2 cursor-pointer rounded-lg"
      onClick={showMore}
    >
      <span className="text-white text-center text-lg">See More</span>
    </button>
  </div>
);

export const ModalButton = ({ closeModal }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      closeModal();
    }}
    className="absolute top-2 right-2 text-black text-2xl border rounded-full bg-white p-2"
  >
    <AiOutlineClose color="black" />
  </button>
);

export const ButtonGoBack = ({ title, src }) => (
  <Link
    to={src}
    className="border border-[#ffd700] rounded-md px-4 py-2 bg-transparent hover:bg-[#ffd700] text-[#ffd700]  hover:text-black transition duration-700 ease-in-out"
  >
    <span className="text-lg font-bold">Back To {title}</span>
  </Link>
);

export const ButtonReadMore = ({ toggle, show }) => (
  <div className="flex justify-center items-center my-2  bg-test-bg w-full h-full ">
    <button onClick={toggle} className="text-white z-30  w-full h-full ">
      <p className="hover:scale-75 transition duration-700 ease-in-out font-semibold text-lg">
        {show ? "Show less" : "Read more"}
      </p>
    </button>
  </div>
);
