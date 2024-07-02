import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTopMangaData,
  selectTopMangaError,
  selectTopMangaLoading,
} from "../redux/reducer/manga/topManga";
import { AppDispatch } from "../redux/store/store";
import { fetchTopManga } from "../redux/reducer/manga/mangaReducer";
import { LoadedCardList } from "../component/Loader";
import { CardList } from "../component/CardList";
import { ErrorCard } from "../component/Error";

export const TopManga = () => {
  const topMangaData = useSelector(selectTopMangaData);
  const loading = useSelector(selectTopMangaLoading);
  const error = useSelector(selectTopMangaError);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopManga());
  }, [dispatch]);

  if (loading) return <LoadedCardList />;
  if (error) return <ErrorCard />;

  return (
    <div className="m-auto p-auto w-5/6 max-lg:w-11/12">
      <h1 className="text-2xl text-white my-3">Top Manga</h1>
      <CardList data={topMangaData} type="manga" />
    </div>
  );
};
