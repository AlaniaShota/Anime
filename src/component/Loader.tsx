import React from "react";

const loadedItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const DetailPageLoader = () => (
  <div className="m-auto p-auto w-5/6 ">
    <div className="flex flex-col justify-end my-40">
      <div className="shadow rounded-md w-56 h-72 flex justify-start items-end flex-row gap-4 ">
        <div className="animate-pulse rounded-md flex bg-slate-200  w-full h-full" />
      </div>
    </div>
  </div>
);

export const LoadedCardList = () => (
  <div className="m-auto p-auto w-5/6">
    <div className="flex flex-row flex-wrap justify-center items-center w-full gap-4">
      {loadedItem.map((item) => (
        <div
          key={item}
          className="shadow rounded-md w-56 h-72 flex items-center justify-center flex-col"
        >
          <div className="animate-pulse rounded-md  flex bg-slate-200  w-full h-full" />
        </div>
      ))}
    </div>
  </div>
);
