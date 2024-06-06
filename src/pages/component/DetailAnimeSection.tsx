import React from "react";
import { CharactersActors } from "./CharactersActors";

export const DetailAnimeSection = ({ selectedAnime, characterData }) => (
  <div className="flex flex-col justify-start items-start text-white gap-4 w-full">
    <div className="flex flex-col text-white border border-white/75 rounded-md p-4 w-full">
      <h1 className="border-white/50 border-b text-lg">Information</h1>
      <ul className="flex flex-col items-start gap-1  text-sm py-1">
        <li className="gap-2 flex items-center">
          <span>Type</span>
          <span>{selectedAnime.type}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Episodes</span>
          <span>{selectedAnime.episodes}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Status</span>
          <span>{selectedAnime.status}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Aired</span>
          <span>{selectedAnime.aired.from.slice("", 4)}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Premiered</span>
          <span className="capitalize">{selectedAnime.season}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Broadcast</span>
          <span>{selectedAnime.broadcast.string}</span>
        </li>
        {selectedAnime?.producers?.[0]?.name && (
          <li className="gap-2 flex items-center">
            <span>Producers</span>
            <span>{selectedAnime.producers[0].name}</span>
          </li>
        )}
        {selectedAnime?.licensors?.[0]?.name && (
          <li className="gap-2 flex items-center">
            <span>Licensors</span>
            <span>{selectedAnime.licensors[0].name}</span>
          </li>
        )}
        {selectedAnime?.studios?.[0]?.name && (
          <li className="gap-2 flex items-center">
            <span>Studios</span>
            <span>{selectedAnime.studios[0].name}</span>
          </li>
        )}

        <li className="gap-2 flex items-center">
          <span>Source</span>
          <span>{selectedAnime.source}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Genres</span>
          <>
            {selectedAnime.genres.slice("", 3).map((item) => (
              <span key={item.mal_id}>{item.name}</span>
            ))}
          </>
        </li>
        <li className="gap-2 flex items-center">
          <span>Duration</span>
          <span>{selectedAnime.duration.slice("", 7)}</span>
        </li>
      </ul>
    </div>
    <div className="flex flex-col text-white border border-white/75 rounded-md p-4 w-full">
      <h1 className="border-white/50 border-b text-lg">Statistics</h1>
      <ul className="flex flex-col items-start gap-1 text-sm py-1">
        <li className="gap-2 flex items-center">
          <span>Score</span>
          <span className="text-[#ffd700]">{selectedAnime.score}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Ranked</span>
          <span className="text-[#ffd700]">{selectedAnime.rank}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Popularity</span>
          <span className="text-[#ffd700]">{selectedAnime.popularity}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Members</span>
          <span className="text-[#ffd700]">{selectedAnime.members}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Favorites</span>
          <span className="text-[#ffd700]">{selectedAnime.favorites}</span>
        </li>
      </ul>
    </div>
    <div className="w-full my-5">
      <h1 className="font-extralight my-2">Characters & Voice Actors</h1>
      <CharactersActors characterData={characterData} />
    </div>
  </div>
);
