import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  selectAnimeData,
  selectAnimeError,
  selectAnimeLoading,
} from "../redux/reducer/slice";
import { fetchAnime, searchAnime } from "../redux/reducer/reducer";
import { Pagination } from "../component/Pagination";
import { CardList } from "../component/CardList";
import { LoadedCardList } from "../component/LoadedCardList";
import { AppDispatch } from "../redux/store/store";
import { SearchBar } from "../component/Search";

export const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const animeData = useSelector(selectAnimeData);
  const loading = useSelector(selectAnimeLoading);
  const error = useSelector(selectAnimeError);
  const searchResults = useSelector((state) => state.search.searchResults);
  const { pageNumber } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
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

  // const handleSearch = (query: string) => {
  //   const filtered = animeData.filter((item) =>
  //     item.title.toLowerCase().includes(query.toLowerCase())
  //   );

  //   setFilteredData(filtered);
  //   setIsSearching(true);
  //   // navigate(`/`);
  // };

  const handleClearSearch = () => {
    setFilteredData([]);
    setIsSearching(false);
  };
  if (loading) return <LoadedCardList />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="m-auto p-auto w-5/6">
      {isSearching && <button onClick={handleClearSearch}>Clear Search</button>}
      <div className="grid grid-cols-4 w-full gap-4">
        <CardList data={animeData ? animeData : searchResults} type="anime" />
      </div>
      {!isSearching && <Pagination handlePageChange={handlePageChange} />}
    </div>
  );
};
