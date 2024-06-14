import React from "react";
import { Link } from "react-router-dom";
import { Anime, TopAnime } from "../redux/reducer/anime/type";
import { Manga, TopManga } from "../redux/reducer/manga/type";

interface CardListProps {
  data: (Anime | TopAnime | Manga | TopManga)[];
  type: "anime" | "manga";
}

export const CardList: React.FC<CardListProps> = ({ data, type }) => (
  <>
    {data?.map((item) => (
      <Link
        to={`/${type}/${item.title}/character/${item.mal_id}`}
        key={item.mal_id}
        className="flex justify-between items-start flex-col bg-[#1D1340] rounded-md"
      >
        <div className="relative w-full h-96">
          <img
            src={item?.images?.webp.large_image_url}
            alt={item?.title}
            className={`${
              type === "anime" ? "  rounded-t-md" : "rounded-t-md"
            } w-full h-full `}
          />
          <div className="absolute top-0 right-0 bg-[#c8144d] bg-opacity-75  px-2 py-1 m-3 text-sm rounded-lg ">
            <span className="text-white">Type: {item?.type}</span>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start m-2 w-auto ">
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
        </div>
      </Link>
    ))}
  </>
);
