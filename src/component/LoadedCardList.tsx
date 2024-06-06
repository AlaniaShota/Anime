import React from "react";

const loaded = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const LoadedCardList = () => (
  <div className="m-auto p-auto w-3/4">
    <div className="grid grid-cols-4 w-full gap-4">
      {loaded.map((item) => (
        <div
          key={item}
          className=" shadow rounded-md w-auto h-[514px] flex justify-between flex-col"
        >
          <div className="animate-pulse rounded-md  flex bg-slate-200  w-full h-[400px]" />
          <div className="animate-pulse rounded-md  flex bg-slate-200 w-full h-[100px]" />
        </div>
      ))}
    </div>
  </div>
);
