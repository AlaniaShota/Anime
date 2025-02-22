import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Anime, TopAnime } from "../redux/reducer/anime/type";
import { Manga, TopManga } from "../redux/reducer/manga/type";
import { TiStar } from "react-icons/ti";
import { useMobile } from "./Mobile";

interface CardListProps {
  data: (Anime | TopAnime | Manga | TopManga)[];
  type: "anime" | "manga";
}

export const CardList: React.FC<CardListProps> = ({ data, type }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isMobile = useMobile();
  return (
    <div className="flex flex-row flex-wrap justify-center max-sm:justify-center max-lg:justify-start items-center gap-6 max-lg:gap-3">
      {data?.map((item) => (
        <Link
          to={`/${type}/${item.title}/character/${item.mal_id}`}
          key={item.mal_id}
        >
          <div
            className="relative w-56 max-sm:w-[309px] h-72 max-sm:h-[450px] rounded-lg overflow-hidden shadow-xl"
            onMouseEnter={() => setHoveredId(item.mal_id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={item?.images?.webp.large_image_url}
              alt={item?.title}
              className="w-full h-full transition duration-700 ease-in-out transform hover:scale-110"
            />
            <div
              className={`absolute top-0 right-0 ${
                item.score > 7.5 ? "bg-[#3ba100c2]" : "bg-[#38383879]"
              } bg-opacity-75  px-2 py-1 m-3 text-sm rounded-lg z-40`}
            >
              <div className="flex flex-row justify-center items-center">
                <TiStar size="24" color="white" />
                <span className="text-white">{item?.score}</span>
              </div>
            </div>
            {isMobile ? (
              <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-55 p-2">
                <h1 className="text-lg text-center font-bold text-white ">
                  {item.title}
                </h1>
              </div>
            ) : (
              <>
                {" "}
                {hoveredId === item.mal_id && (
                  <div
                    style={{ pointerEvents: "none" }}
                    className="absolute bottom-0  bg-black opacity-85 flex flex-col justify-around items-start text-white p-4 w-auto h-full"
                  >
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm ">{item.synopsis.slice(0, 175)}...</p>
                  </div>
                )}
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
