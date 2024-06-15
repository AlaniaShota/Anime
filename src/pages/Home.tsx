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

export const Home = () => {
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
    navigate(`/page/${pageNumber}`);
  };

  if (loading) return <LoadedCardList />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="m-auto p-auto w-5/6">
      <div className="grid grid-cols-4 w-full gap-4">
        <CardList data={animeData} type="anime" />
      </div>
      <Pagination handlePageChange={handlePageChange} />
    </div>
  );
};
