import React from "react";
import { CardList } from "../component/CardList";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, selectSearch } from "../redux/reducer/searchSlice";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { filteredData, isSearching } = useSelector(selectSearch);

  const handleClearSearch = () => {
    dispatch(clearSearch());
  };

  const determineType = (item) => {
    if ("episodes" in item) {
      return "anime";
    }
    return "manga";
  };

  return (
    <div className="m-auto p-auto w-5/6">
      {/* {isSearching && <button className="text-white" onClick={handleClearSearch}>Clear Search</button>} */}
      <div className="grid grid-cols-4 w-full gap-4">
        {filteredData.map((item) => (
          <CardList
            key={item.mal_id}
            data={[item]}
            type={determineType(item)}
          />
        ))}
      </div>
    </div>
  );
};
