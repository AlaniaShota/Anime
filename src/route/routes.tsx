import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailAnimePage } from "../pages/DetailAnimePage";
import { TopAnime } from "../pages/TopAnime";
import { Layout } from "../component/Layout";
import { ScrollToTop } from "../component/ScrollToTop";
import { Manga } from "../pages/Manga";
import { TopManga } from "../pages/TopManga";
import { DetailManga } from "../pages/DetailManga";
import { SearchBar } from "../component/Search";
import { SearchPage } from "../pages/SearchPage";
import { Anime } from "../pages/Anime";
import { Error } from "../pages/Error";
import { MobileProvider } from "../component/Mobile";

export const routes = createBrowserRouter([
  {
    element: (
      <MobileProvider>
        <Layout />
        <ScrollToTop />
      </MobileProvider>
    ),
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/anime", element: <Anime /> },
      {
        path: "/anime/page/:pageNumberAnime",
        element: <Anime />,
      },
      { path: "/top-anime", element: <TopAnime /> },
      {
        path: "/anime/:animeTitle/character/:characterId",
        element: <DetailAnimePage />,
      },
      { path: "/manga", element: <Manga /> },
      {
        path: "/manga/page/:pageNumberManga",
        element: <Manga />,
      },
      { path: "/top-manga", element: <TopManga /> },
      {
        path: "/manga/:mangaTitle/character/:characterId",
        element: <DetailManga />,
      },
      { path: "/search", element: <SearchPage /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
