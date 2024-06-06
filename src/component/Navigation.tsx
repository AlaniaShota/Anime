import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const links = [
  {
    id: 1,
    title: "Anime",
    url: "/",
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
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleLinkClick = (id: number, url: string) => {
    setActiveLink(id === activeLink ? null : id);
    navigate(url);
  };

  return (
    <div className="flex flex-row justify-start items-start gap-8 my-8 mx-auto p-auto w-3/4 ">
      {links.map((link) => (
        <div key={link.id} className="p-2 w-[110px]">
          <span
            className="text-white text-lg uppercase font-extralight cursor-pointer"
            onClick={() => handleLinkClick(link.id, link.url)}
          >
            {link.title}
          </span>
          {activeLink === link.id && (
            <div className="flex flex-col items-start">
              {link.src.map((sublink) => (
                <a href={sublink.url} key={sublink.id}>
                  <span className="text-white text-lg">{sublink.title}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
