import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectMangaData,
  selectMangaLoading,
} from "../redux/reducer/manga/slice";
import { fetchManga } from "../redux/reducer/manga/mangaReducer";
import { CardList } from "../component/CardList";
import { LoadedCardList } from "../component/LoadedCardList";

import { AppDispatch } from "../redux/store/store";
import { Pagination } from "../component/Pagination";

export const Manga = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const mangaData = useSelector(selectMangaData);
  const loading = useSelector(selectMangaLoading);
  // const error = useSelector(selectAnimeError);
  // const searchResults = useSelector((state) => state.search.searchResults);
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);
  // const [filteredData, setFilteredData] = useState([]);
  // const [isSearching, setIsSearching] = useState(false);
  // console.log(searchResults);

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

  // const handleSearch = (query: string) => {
  //   const filtered = animeData.filter((item) =>
  //     item.title.toLowerCase().includes(query.toLowerCase())
  //   );

  //   setFilteredData(filtered);
  //   setIsSearching(true);
  //   // navigate(`/`);
  // };

  // const handleClearSearch = () => {
  //   setFilteredData([]);
  //   setIsSearching(false);
  // };
  if (loading) return <LoadedCardList />;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="m-auto p-auto w-5/6">
      {/* {isSearching && <button onClick={handleClearSearch}>Clear Search</button>} */}
      <div className="grid grid-cols-4 w-full gap-4">
        <CardList data={mangaData} type="manga" />
      </div>
      <Pagination handlePageChange={handlePageChange} />
    </div>
  );
};
