import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailAnimePage } from "../pages/DetailAnimePage";
import { TopAnime } from "../pages/TopAnime";
import { Layout } from "../component/Layout";
import { ScrollToTop } from "../component/ScrollToTop";

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
      { path: "/search", element: <Home /> },
      {
        path: "/page/:pageNumber",
        element: <Home />,
      },
      { path: "/top-anime", element: <TopAnime /> },
      {
        path: "/anime/:animeTitle/character/:characterId",
        element: <DetailAnimePage />,
      },
    ],
  },
]);
