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

export const TopManga = () => {
  const topAnimeData = useSelector(selectTopMangaData);
  const loading = useSelector(selectTopMangaLoading);
  const error = useSelector(selectTopMangaError);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopManga());
  }, [dispatch]);

  if (loading) return <LoadedCardList />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="m-auto p-auto w-3/4 ">
      <div className="grid grid-cols-4 w-full gap-4">
        <CardList data={topAnimeData} type="manga"/>
      </div>
    </div>
  );
};
