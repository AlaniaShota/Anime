import React from "react";
import { Link } from "react-router-dom";
import { FooterButton } from "./Button";

const footerText = [
  "About Us",
  "Community Rules",
  "Copyright Holders",
  "Privacy Policy",
];

export const Footer = () => {
  return (
    <div className="w-full h-54 flex flex-col justify-start items-start text-white bg-black/40 py-10 px-32 max-sm:p-6">
      <h1 className="text-xl font-extralight">
        Watch anime on {``}
        <Link to="/">
          <span className="active:text-[#c8144d]">Anistar</span>
        </Link>
      </h1>
      <FooterButton />
      <div className="flex flex-row max-sm:flex-col items-center max-sm:items-start justify-start gap-2 max-sm:gap-1 text-lg font-extralight ">
        {footerText.map((item, index) => (
          <h1 key={index} className="cursor-not-allowed  hover:opacity-40">
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};
