import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAnimeData } from "../redux/reducer/anime/slice";
import { fetchAnime, fetchTopAnime } from "../redux/reducer/anime/reducer";
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
import { fetchManga, fetchTopManga } from "../redux/reducer/manga/mangaReducer";
import { selectMangaData } from "../redux/reducer/manga/slice";

export const Home = () => {
  const animeData = useSelector(selectAnimeData);
  const mangaData = useSelector(selectMangaData);
  const topAnimeData = useSelector(selectTopAnimeData);
  const topAnimeLoading = useSelector(selectTopAnimeLoading);
  const topAnimeError = useSelector(selectTopAnimeError);
  const topMangaData = useSelector(selectTopMangaData);
  const topMangaLoading = useSelector(selectTopMangaLoading);
  const topMangaError = useSelector(selectTopMangaError);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnime({ page: 5, limit: 5 }));
    dispatch(fetchManga({ page: 5, limit: 5 }));
    dispatch(fetchTopManga());
    dispatch(fetchTopAnime());
  }, [dispatch]);

  if (topAnimeLoading && topMangaLoading) return <LoadedCardList />;
  if (topAnimeError && topMangaError) return <ErrorCard />;

  return (
    <div className="m-auto p-auto w-5/6 max-lg:w-11/12">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <Link to="/anime">
            <h1 className="text-2xl text-white cursor-pointer">Anime</h1>
          </Link>
          <CardList data={animeData} type="anime" />
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <Link to="/top-anime">
            <h1 className="text-2xl text-white cursor-pointer">Top Anime</h1>
          </Link>
          <CardList data={topAnimeData.slice(0, 5)} type="anime" />
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <Link to="/manga">
            <h1 className="text-2xl text-white cursor-pointer">Manga</h1>
          </Link>
          <CardList data={mangaData} type="manga" />
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <Link to="/top-manga">
            <h1 className="text-2xl text-white cursor-pointer">Top Manga</h1>
          </Link>
          <CardList data={topMangaData.slice(0, 5)} type="manga" />
        </div>
      </div>
    </div>
  );
};
