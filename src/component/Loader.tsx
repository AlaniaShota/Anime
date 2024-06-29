import React from "react";

const loadedDetail = [1, 2];
const loadedItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const DetailPageLoader = () => (
  <div className="m-auto p-auto w-5/6 ">
    <div className="flex flex-col justify-end my-40">
      {/* {loadedDetail.map((item) => ( */}
      {/* <div key={item}> */}
      <div className="shadow rounded-md w-56 h-72 flex justify-start items-end flex-row gap-4 ">
        <div className="animate-pulse rounded-md flex bg-slate-200  w-full h-full" />
        {/* <div className="animate-pulse rounded-md flex bg-slate-200 w-full h-full" /> */}
      </div>
      {/* </div> */}
      {/* ))} */}
    </div>
  </div>
);

export const LoadedCardList = () => (
  <div className="m-auto p-auto w-5/6 ">
    <div className="grid grid-cols-4 items-center w-full gap-4">
      {loadedItem.map((item) => (
        <div
          key={item}
          className=" shadow rounded-md  w-56 h-72 flex items-centerflex-col"
        >
          <div className="animate-pulse rounded-md  flex bg-slate-200  w-full h-full" />
        </div>
      ))}
    </div>
  </div>
);
