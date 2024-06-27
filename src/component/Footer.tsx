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
    <div className="w-full h-54 flex flex-col justify-start items-start text-white bg-black/40 p-10">
      <h1 className="text-xl font-extralight">
        Watch anime on {``}
        <Link to="/">
          <span className="active:text-[#c8144d]">Anistar</span>
        </Link>
      </h1>
      <FooterButton />
      <div className="flex flex-row items-center justify-start gap-2 text-lg font-extralight">
        {footerText.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </div>
  );
};
