import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

import { Link } from "react-router-dom";

interface SearchBarProps {
  device: boolean;
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, device }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="flex flex-row justify-end max-lg:justify-center items-center w-full gap-4">
      <input
        className="border border-blue-400 rounded-lg p-1 font-medium text-black"
        placeholder="Search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="cursor-pointer text-white" onClick={handleSearch}>
        <Link to="/search">
          {device ? <IoMdSearch size={30} color="white" /> : "Search"}
        </Link>
      </button>
    </div>
  );
};
