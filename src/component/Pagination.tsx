import React from "react";
const btnPagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Pagination = ({ handlePageChange }) => (
  <div className="flex justify-center items-center flex-row flex-wrap py-5 max-sm:py-3 gap-4 max-sm:gap-2">
    {btnPagination.map((item) => (
      <button
        key={item}
        className="border-black border rounded-full  bg-white"
        onClick={() => handlePageChange(item)}
      >
        <span className="p-2 color-black">{item}</span>
      </button>
    ))}
  </div>
);
