import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectMangaData,
  selectMangaError,
  selectMangaLoading,
} from "../redux/reducer/manga/slice";
import { fetchManga } from "../redux/reducer/manga/mangaReducer";
import { CardList } from "../component/CardList";
import { LoadedCardList } from "../component/Loader";

import { AppDispatch } from "../redux/store/store";
import { Pagination } from "../component/Pagination";
import { ErrorCard } from "../component/Error";

export const Manga = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const mangaData = useSelector(selectMangaData);
  const loading = useSelector(selectMangaLoading);
  const error = useSelector(selectMangaError);
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);

  useEffect(() => {
    setCurrentPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  useEffect(() => {
    dispatch(fetchManga({ page: currentPage, limit: 20 }));
  }, [dispatch, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`/manga/page/${pageNumber}`);
  };

  if (loading) return <LoadedCardList />;
  if (error) return <ErrorCard />;

  return (
    <div className="m-auto p-auto w-5/6 max-lg:w-11/12">
      <h1 className="text-2xl text-white my-3">Manga</h1>
      <CardList data={mangaData} type="manga" />
      <Pagination handlePageChange={handlePageChange} />
    </div>
  );
};
