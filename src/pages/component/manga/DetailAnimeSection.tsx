import React from "react";
import { CharactersActors } from "../CharactersActors";

export const DetailAnimeSection = ({ selected, characterData }) => {
  return (
    <div className="flex flex-col justify-start items-start text-white gap-4 w-full">
      <div className="flex flex-col text-white border border-white/75 rounded-md p-4 w-full">
        <h1 className="border-white/50 border-b text-lg">Information</h1>
        <ul className="flex flex-col items-start gap-1  text-sm py-1">
          <li className="gap-2 flex items-center">
            <span>Type</span>
            <span>{selected.type}</span>
          </li>
          <li className="gap-2 flex items-center">
            <span>Status</span>
            <span>{selected.status}</span>
          </li>
          <li className="gap-2 flex items-center">
            <span>Published</span>
            <span>{selected.published.from.slice("", 4)}</span>
          </li>
          <li className="gap-2 flex items-center flex-wrap">
            <span>Genres</span>
            {selected.genres.map((item) => (
              <span key={item.mal_id} className="capitalize">
                {item.name}
              </span>
            ))}
          </li>
          <li className="gap-2 flex items-center flex-wrap">
            <span>Themes</span>
            {selected.themes.map((item) => (
              <span key={item.mal_id} className="capitalize">
                {item.name}
              </span>
            ))}
          </li>

          <li className="gap-2 flex items-center">
            <span>Authors</span>
            {selected.authors.map((item) => (
              <span key={item.mal_id}>{item.name}</span>
            ))}
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-white border border-white/75 rounded-md p-4 w-full">
        <h1 className="border-white/50 border-b text-lg">Statistics</h1>
        <ul className="flex flex-col items-start gap-1 text-sm py-1">
          <li className="gap-2 flex items-center">
            <span>Score</span>
            <span className="text-[#ffd700]">{selected.score}</span>
          </li>
          <li className="gap-2 flex items-center">
            <span>Ranked</span>
            <span className="text-[#ffd700]">{selected.rank}</span>
          </li>
          <li className="gap-2 flex items-center">
            <span>Popularity</span>
            <span className="text-[#ffd700]">{selected.popularity}</span>
          </li>
          <li className="gap-2 flex items-center">
            <span>Members</span>
            <span className="text-[#ffd700]">{selected.members}</span>
          </li>
          <li className="gap-2 flex items-center">
            <span>Favorites</span>
            <span className="text-[#ffd700]">{selected.favorites}</span>
          </li>
        </ul>
      </div>
      <>
        <CharactersActors characterData={characterData} title="Characters" />
      </>
    </div>
  );
};
