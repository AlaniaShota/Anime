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
  <div className="flex justify-end items-center w-full my-5 max-sm:my-3">
    <button
      className="bg-[#0a66c2] px-4 max-sm:px-3 py-2 max-sm:py-1 cursor-pointer rounded-lg shadowStyle"
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
    className="border border-[#ffd700] rounded-md px-4 py-2  max-sm:px-3 max-sm:py-1 bg-transparent hover:bg-[#ffd700] text-[#ffd700]  hover:text-black transition duration-700 ease-in-out"
  >
    <span className="text-lg font-bold">Back To {title}</span>
  </Link>
);

export const ButtonReadMore = ({ toggle, show }) => (
  <div className="flex justify-center items-center my-2  bg-test-bg w-full h-full ">
    <button
      onClick={toggle}
      className="text-white z-30 flex items-center justify-center max-sm:justify-end  w-full h-full "
    >
      <p className="hover:scale-75 transition duration-700 ease-in-out font-semibold text-lg">
        {show ? "Show less" : "Read more"}
      </p>
    </button>
  </div>
);

export const SwitchButtonSection = ({ selectedTitle, setSelectedTitle }) => (
  <div className="flex flex-row justify-start items-center gap-4 px-1">
    <button
      className={`px-4 py-2 max-sm:px-3 max-sm:py-1 ${
        selectedTitle === "A" ? "rounded-lg active" : "rounded-lg shadowStyle"
      }`}
      onClick={() => setSelectedTitle("A")}
    >
      <h1 className="text-white text-lg ">Score</h1>
    </button>
    <button
      className={`  px-4 py-2 max-sm:px-3 max-sm:py-1 ${
        selectedTitle === "B" ? "rounded-lg active" : "rounded-lg shadowStyle"
      }`}
      onClick={() => setSelectedTitle("B")}
    >
      <h1 className="text-white text-lg ">About</h1>
    </button>
    <button
      className={`px-4 py-2 max-sm:px-3 max-sm:py-1 ${
        selectedTitle === "C" ? "rounded-lg active" : "rounded-lg shadowStyle"
      }`}
      onClick={() => setSelectedTitle("C")}
    >
      <h1 className="text-white text-lg ">Character</h1>
    </button>
  </div>
);

const footerLink = [
  {
    id: 1,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/shota-alania-0a705820b/",
    color: "#0a66c2",
  },
  {
    id: 2,
    title: "GitHub",
    href: "https://github.com/AlaniaShota",
    color: "#fff",
  },
];

export const FooterButton = () => (
  <div className="flex flex-row max-sm:flex-col justify-start items-center max-sm:items-start gap-6 max-sm:gap-3 my-6 max-sm:my-3">
    {footerLink.map((item) => (
      <Link
        target="_blank"
        to={item.href}
        style={{ backgroundColor: item.color }}
        key={item.id}
        className={`text-lg py-2 max-sm:py-1 rounded-3xl ${
          item.id === 1
            ? "px-6 max-sm:px-4 text-white shadowStyle"
            : "px-4 max-sm:px-3 text-black shadowStyle hover:text-white"
        }`}
      >
        {item.title}
      </Link>
    ))}
  </div>
);
