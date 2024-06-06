import React from "react";
import { Button } from "../../component/Button";

export const DetailHeaderSection = ({ selectedAnime, characterData }) => (
  <div className="flex flex-row w-full justify-start gap-8 ">
    <div className="w-3/12 h-auto rounded-md ">
      <img
        src={selectedAnime.images?.webp.large_image_url}
        alt={selectedAnime.title}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="text-white flex flex-col justify-center items-start px-2 py-4 w-4/6">
      <h1 className="text-4xl">{selectedAnime.titles?.[0].title}</h1>
      <h4 className="mt-1">{selectedAnime.title_japanese}</h4>
      <ul className="flex flex-col justify-start items-start list-none">
        <li className="text-sm opacity-60 flex flex-row">
          <p>
            {selectedAnime.aired.from.slice("", 4)}
            <span className="mx-1">|</span>
          </p>
          <p>
            {selectedAnime.rating.slice("", 2)} <span className="mx-1">|</span>
          </p>
          {selectedAnime.licensors.type ? (
            <p>
              {selectedAnime.licensors.type} <span className="mx-1">|</span>
            </p>
          ) : (
            <p>
              ANIME<span className="mx-1">|</span>
            </p>
          )}

          <p> {selectedAnime.type}</p>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-start my-1 gap-2">
        <span className="text-sm opacity-60 my-1">Rating</span>
        <span className="text-[#ffd700] text-lg">
          {" "}
          {selectedAnime.score}/10
        </span>
        <span className="text-sm opacity-60"> Studio</span>
        <h4 className="text-[#ffd700] text-lg">
          {selectedAnime.studios[0].name}
        </h4>
      </div>
      <p className="text-base font-extralight my-2 w-1/2">
        {selectedAnime.synopsis.slice("", 170)}...
      </p>
      <Button />
    </div>
  </div>
);
