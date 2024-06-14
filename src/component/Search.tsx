import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <>
      <input
        className="border border-blue-400 rounded-lg p-1  font-medium "
        placeholder="Search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="cursor-pointer text-white" onClick={handleSearch}>
        <Link to="/search">Search</Link>
      </button>
    </>
  );
};
