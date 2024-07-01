import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("scroll");
    } else {
      document.body.classList.remove("scroll");
    }

    return () => {
      document.body.classList.remove("scroll");
    };
  }, [menuOpen]);

  return (
    <div className=" sticky flex items-end w-full justify-end p-4 z-50">
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed top-16 inset-0 bg-[#232323] text-white flex flex-col items-center py-10 gap-2 z-50">
          <SearchBar onSearch={handleSearch} device={menuOpen} />
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-start justify-start w-2/3 ml-5"
          >
            {" "}
            <span className="text-lg uppercase font-extralight my-1 ">
              ANISTAR
            </span>
          </Link>
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-col items-start justify-start w-2/3 ml-5"
            >
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
