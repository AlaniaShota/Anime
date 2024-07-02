import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  selectAnimeData,
  selectAnimeError,
  selectAnimeLoading,
} from "../redux/reducer/anime/slice";
import { fetchAnime, searchAnime } from "../redux/reducer/anime/reducer";
import { Pagination } from "../component/Pagination";
import { CardList } from "../component/CardList";
import { LoadedCardList } from "../component/Loader";
import { AppDispatch } from "../redux/store/store";
import { ErrorCard } from "../component/Error";

export const Anime = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const animeData = useSelector(selectAnimeData);
  const loading = useSelector(selectAnimeLoading);
  const error = useSelector(selectAnimeError);
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);

  useEffect(() => {
    setCurrentPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  useEffect(() => {
    dispatch(fetchAnime({ page: currentPage, limit: 20 }));
  }, [dispatch, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`/anime/page/${pageNumber}`);
  };

  if (loading) return <LoadedCardList />;
  if (error) return <ErrorCard />;

  return (
    <div className="m-auto p-auto w-5/6 max-lg:w-11/12">
      <h1 className="text-2xl text-white my-3">Anime</h1>
      <CardList data={animeData} type="anime" />
      <Pagination handlePageChange={handlePageChange} />
    </div>
  );
};
