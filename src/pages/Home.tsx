import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  selectAnimeData,
  selectAnimeError,
  selectAnimeLoading,
} from "../redux/reducer/anime/slice";
import {
  fetchAnime,
  fetchTopAnime,
  searchAnime,
} from "../redux/reducer/anime/reducer";
import { Pagination } from "../component/Pagination";
import { CardList } from "../component/CardList";
import { LoadedCardList } from "../component/Loader";
import { AppDispatch } from "../redux/store/store";
import { ErrorCard } from "../component/Error";
import {
  selectTopAnimeData,
  selectTopAnimeError,
  selectTopAnimeLoading,
} from "../redux/reducer/anime/topAnimeSlice";
import {
  selectTopMangaData,
  selectTopMangaError,
  selectTopMangaLoading,
} from "../redux/reducer/manga/topManga";
import { fetchTopManga } from "../redux/reducer/manga/mangaReducer";

export const Home = () => {
  const topAnimeData = useSelector(selectTopAnimeData);
  const topAnimeLoading = useSelector(selectTopAnimeLoading);
  const topAnimeError = useSelector(selectTopAnimeError);
  // const dispatch: AppDispatch = useDispatch();
  const topMangaData = useSelector(selectTopMangaData);
  const topMangaLoading = useSelector(selectTopMangaLoading);
  const topMangaError = useSelector(selectTopMangaError);
  const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {

  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTopManga());
    dispatch(fetchTopAnime());
  }, [dispatch]);

  if (topAnimeLoading && topMangaLoading) return <LoadedCardList />;
  if (topAnimeError && topMangaError) return <ErrorCard />;

  return (
    <div className="m-auto p-auto w-5/6 ">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <Link to="/anime">
            <h1 className="text-2xl text-white">Anime</h1>
          </Link>
          <>
            <CardList data={topAnimeData.slice(0, 5)} type="anime" />
          </>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <Link to="/manga">
            <h1 className="text-2xl text-white">Manga</h1>
          </Link>
          <>
            <CardList data={topMangaData.slice(0, 5)} type="manga" />
          </>
        </div>
      </div>
    </div>
  );
};
