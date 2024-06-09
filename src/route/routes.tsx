import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailAnimePage } from "../pages/DetailAnimePage";
import { TopAnime } from "../pages/TopAnime";
import { Layout } from "../component/Layout";
import { ScrollToTop } from "../component/ScrollToTop";
import { Manga } from "../pages/Manga";
import { TopManga } from "../pages/TopManga";
import { DetailManga } from "../pages/component/manga/DetailManga";

export const routes = createBrowserRouter([
  {
    element: (
      <>
        <Layout />
        <ScrollToTop />
      </>
    ),
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/manga", element: <Manga /> },
      { path: "/search", element: <Home /> },
      {
        path: "/page/:pageNumberAnime",
        element: <Home />,
      },
      {
        path: "/manga/page/:pageNumberManga",
        element: <Manga />,
      },
      { path: "/top-anime", element: <TopAnime /> },
      {
        path: "/anime/:animeTitle/character/:characterId",
        element: <DetailAnimePage />,
      },
      {
        path: "/manga/:mangaTitle/character/:characterId",
        element: <DetailManga />,
      },
      { path: "/top-manga", element: <TopManga /> },
    ],
  },
]);
