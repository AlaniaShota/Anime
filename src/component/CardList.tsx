import React from "react";
import { Link } from "react-router-dom";
import { Anime, TopAnime } from "../redux/reducer/anime/type";
import { Manga, TopManga } from "../redux/reducer/manga/type";

interface CardListProps {
  data: (Anime | TopAnime | Manga | TopManga)[];
  type: "anime" | "manga";
}

export const CardList: React.FC<CardListProps> = ({ data, type }) => (
  <div className="flex flex-row flex-wrap justify-center items-center  gap-2">
    {data?.map((item) => (
      <Link
        to={`/${type}/${item.title}/character/${item.mal_id}`}
        key={item.mal_id}
        // className="flex justify-between items-start flex-col bg-[#1D1340] rounded-md"
      >
        <div className="relative w-56 h-72 rounded-md">
          <img
            src={item?.images?.webp.large_image_url}
            alt={item?.title}
            className="w-full h-full  rounded-md"
          />
          <div className="absolute top-0 right-0 bg-[#c8144d] bg-opacity-75  px-2 py-1 m-3 text-sm rounded-lg ">
            <span className="text-white"> {item?.score}</span>
          </div>
        </div>

        {/* <div className="flex flex-col justify-start items-start m-2 w-auto ">
          <h1 className="text-lg text-white">{item?.titles[0].title}</h1>
          {type === "anime" && (
            <>
              <span className="my-4 text-[#ffd700]">
                {" "}
                Episode {item?.episodes}
              </span>
              <span className="text-white opacity-75">SUB | DUB</span>
            </>
          )}
        </div> */}
      </Link>
    ))}
  </div>
);
