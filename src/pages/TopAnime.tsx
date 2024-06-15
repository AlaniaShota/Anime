import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardList } from "../component/CardList";
import { LoadedCardList } from "../component/Loader";
import { fetchTopAnime } from "../redux/reducer/anime/reducer";
import { AppDispatch } from "../redux/store/store";
import {
  selectTopAnimeData,
  selectTopAnimeError,
  selectTopAnimeLoading,
} from "../redux/reducer/anime/topAnimeSlice";

export const TopAnime = () => {
  const topAnimeData = useSelector(selectTopAnimeData);
  const loading = useSelector(selectTopAnimeLoading);
  const error = useSelector(selectTopAnimeError);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopAnime());
  }, [dispatch]);

  if (loading) return <LoadedCardList />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="m-auto p-auto w-3/4 ">
      <div className="grid grid-cols-4 w-full gap-4">
        <CardList data={topAnimeData} type="anime" />
      </div>
    </div>
  );
};
