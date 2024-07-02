import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { selectAnimeData } from "../redux/reducer/anime/slice";
import { selectMangaData } from "../redux/reducer/manga/slice";
import {
  setFilteredData,
  setIsSearching,
  setSearchQuery,
} from "../redux/reducer/searchSlice";

const links = [
  {
    id: 1,
    title: "Anime",
    url: "/anime",
    src: [{ id: 2, title: "Top Anime", url: "/top-anime" }],
  },
  {
    id: 2,
    title: "Manga",
    url: "/manga",
    src: [{ id: 2, title: "Top Manga", url: "/top-manga" }],
  },
];

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const animeData = useSelector(selectAnimeData);
  const mangaData = useSelector(selectMangaData);

  const handleLinkClick = (title: string, url: string) => {
    setActiveLink(title === activeLink ? null : title);
    navigate(url);
  };

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
    const filteredAnime = animeData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    const filteredManga = mangaData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setFilteredData([...filteredAnime, ...filteredManga]));
    dispatch(setIsSearching(true));
  };

  return (
    <div className="flex flex-row justify-start items-start gap-8 py-4 mx-auto px-32  w-full z-50 fixed rounded-b-xl backdrop-blur-3xl">
      <Link
        className="flex flex-row justify-start items-start w-auto gap-4"
        to="/"
      >
        <span className="active:text-[#c8144d] text-lg uppercase font-extralight text-white cursor-pointer w-[100px]">
          Anistar
        </span>
      </Link>
      {links.map((link) => (
        <div key={link.id} className="w-[150px]">
          <span
            className="text-white text-lg uppercase font-extralight cursor-pointer"
            onClick={() => handleLinkClick(link.title, link.url)}
          >
            {link.title}
          </span>
          {activeLink === link.title && (
            <div className="flex flex-col items-start">
              {link.src.map((sublink) => (
                <Link to={sublink.url} key={sublink.id}>
                  <span className="text-white  font-extralight">
                    {sublink.title}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      <SearchBar onSearch={handleSearch} device="" />
    </div>
  );
};
