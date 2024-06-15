import React from "react";

const loadedDetail = [1, 2];
const loadedItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const DetailPageLoader = () => (
  <div className="m-auto p-auto w-3/4">
    <div className="flex flex-col justify-start gap-10">
      {loadedDetail.map((item) => (
        <div key={item}>
          <div className="shadow rounded-md w-full h-[314px] flex justify-start flex-row gap-4 ">
            <div className="animate-pulse rounded-md flex bg-slate-200  w-1/3 h-full" />
            <div className="animate-pulse rounded-md flex bg-slate-200 w-full h-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const LoadedCardList = () => (
  <div className="m-auto p-auto w-3/4">
    <div className="grid grid-cols-4 w-full gap-4">
      {loadedItem.map((item) => (
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
