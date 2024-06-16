import React from "react";
import { CharactersActors } from "../CharactersActors";

export const DetailAnimeSection = ({
  selected,
  characterData,
  characterDataId,
  type
}) => (
  <div className="flex flex-col justify-start items-start text-white gap-4 w-full">
    <div className="flex flex-col text-white border border-white/75 rounded-md p-4 w-full">
      <h1 className="border-white/50 border-b text-lg">Information</h1>
      <ul className="flex flex-col items-start gap-1  text-sm py-1">
        <li className="gap-2 flex items-center">
          <span>Type</span>
          <span>{selected.type}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Episodes</span>
          <span>{selected.episodes}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Status</span>
          <span>{selected.status}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Aired</span>
          <span>{selected.aired.from.slice("", 4)}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Premiered</span>
          <span className="capitalize">{selected.season}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Broadcast</span>
          <span>{selected.broadcast.string}</span>
        </li>
        {selected?.producers?.[0]?.name && (
          <li className="gap-2 flex items-center">
            <span>Producers</span>
            <span>{selected.producers[0].name}</span>
          </li>
        )}
        {selected?.licensors?.[0]?.name && (
          <li className="gap-2 flex items-center">
            <span>Licensors</span>
            <span>{selected.licensors[0].name}</span>
          </li>
        )}
        {selected?.studios?.[0]?.name && (
          <li className="gap-2 flex items-center">
            <span>Studios</span>
            <span>{selected.studios[0].name}</span>
          </li>
        )}

        <li className="gap-2 flex items-center">
          <span>Source</span>
          <span>{selected.source}</span>
        </li>
        <li className="gap-2 flex items-center">
          <span>Genres</span>
          <>
            {selected.genres.slice("", 3).map((item) => (
              <span key={item.mal_id}>{item.name}</span>
            ))}
          </>
        </li>
        <li className="gap-2 flex items-center">
          <span>Duration</span>
          <span>{selected.duration.slice("", 7)}</span>
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
      <CharactersActors
        characterData={characterData}
        characterDataId={characterDataId}
        title="Characters & Voice Actors"
        type={type}
      />
    </>
  </div>
);
