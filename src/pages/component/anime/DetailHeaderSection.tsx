import React from "react";
import { Button } from "../../../component/Button";

export const DetailHeaderSection = ({ selected }) => (
  <div className="flex flex-row w-full h-full justify-center items-end gap-8 pr-40 pb-20">
    <div className="w-54 h-62 rounded-md ">
      <img
        src={selected.images?.webp.image_url}
        alt={selected.title}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="text-white flex flex-col justify-center items-start px-2 py-4 w-4/6">
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
      <div className="flex flex-row items-center justify-start mb-14 gap-2">
        <span className="text-sm opacity-60 my-1">Rating</span>
        <span className="text-[#ffd700] text-lg"> {selected.score}/10</span>
        <span className="text-sm opacity-60"> Studio</span>
        <h4 className="text-[#ffd700] text-lg">{selected.studios[0].name}</h4>
      </div>
      {/* <p className="text-base font-extralight my-2 w-1/2">
        {selected.synopsis.slice("", 170)}...
      </p> */}
      <Button />
    </div>
  </div>
);
