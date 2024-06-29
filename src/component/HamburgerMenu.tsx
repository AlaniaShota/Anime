import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SearchBar } from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { selectAnimeData } from "../redux/reducer/anime/slice";
import {
  setFilteredData,
  setIsSearching,
  setSearchQuery,
} from "../redux/reducer/searchSlice";
import { selectMangaData } from "../redux/reducer/manga/slice";

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

export const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const animeData = useSelector(selectAnimeData);
  const mangaData = useSelector(selectMangaData);

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
    <div className="top-2 right-2 p-4 m-auto z-100 fixed">
      <div className="lg:hidden flex items-center ml-auto">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className=" top-16 left-0 w-full h-full fixed bg-[#232323] text-white flex flex-col items-center z-100">
          <SearchBar onSearch={handleSearch} device={menuOpen} />

          {links.map((link) => (
            <div key={link.id} className="flex flex-col items-center w-full">
              <Link to={link.url} onClick={() => setMenuOpen(false)}>
                <span className="text-lg uppercase font-extralight my-1">
                  {link.title}
                </span>
              </Link>
              <div className="flex flex-col items-center">
                {link.src.map((sublink) => (
                  <Link
                    to={sublink.url}
                    key={sublink.id}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-white text-lg uppercase font-extralight">
                      {sublink.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
