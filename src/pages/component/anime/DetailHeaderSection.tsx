import React from "react";
import { Button } from "../../../component/Button";

export const DetailHeaderSection = ({ selected }) => (
  <div className="flex flex-row max-sm:flex-col w-full h-full justify-center items-end max-sm:items-start gap-8 pr-40 pb-20 max-sm:p-4">
    <div className="w-54 max-sm:w-full h-62 max-sm:h-full rounded-md ">
      <img
        src={selected.images?.webp.image_url}
        alt={selected.title}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="text-white flex flex-col justify-center items-start px-2 py-4 max-sm:p-0 w-4/6 max-sm:w-full">
      <h1 className="text-4xl">{selected.titles?.[0].title}</h1>
      <h4 className="mt-1">{selected.title_japanese}</h4>
      <ul className="flex flex-col justify-start items-start list-none">
        <li className="text-sm opacity-60 flex flex-row">
          <p>
            {selected.aired.from.slice("", 4)}
            <span className="mx-1">|</span>
          </p>
          <p>
            {selected.rating.slice("", 2)} <span className="mx-1">|</span>
          </p>
          {selected.licensors.type ? (
            <p>
              {selected.licensors.type} <span className="mx-1">|</span>
            </p>
          ) : (
            <p>
              ANIME<span className="mx-1">|</span>
            </p>
          )}
          <p> {selected.type}</p>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start mb-14 max-sm:mb-4 gap-2">
        <span className="text-sm opacity-60 my-1">Rating</span>
        <span className="text-[#ffd700] text-lg"> {selected.score}/10</span>
        <span className="text-sm opacity-60"> Studio</span>
        <h4 className="text-[#ffd700] text-lg">{selected.studios[0].name}</h4>
      </div>
      <Button />
    </div>
  </div>
);
