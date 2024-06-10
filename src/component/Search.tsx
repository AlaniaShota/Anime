import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAnime } from "../redux/reducer/anime/reducer";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(searchAnime(query));
    }
  };

  return (
    < >
      {/* <div> */}
      <input
        className="border border-blue-400 rounded-lg p-1  font-medium "
        placeholder="Search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="cursor-pointer" onClick={handleSearch}>Search</button>
      {/* </div> */}
    </>
  );
};
