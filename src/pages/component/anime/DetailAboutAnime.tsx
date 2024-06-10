import React from "react";
import { Trailer } from "./Trailer";
import { Episodes } from "./Episodes";

export const DetailAboutAnime = ({ selectedAnime, video }) => (
  <div className="w-full text-white my-1 p-2 flex flex-col justify-start items-start">
    {selectedAnime?.synopsis && (
      <div className="font-extralight">
        <h1 className=" font-extralight text-lg">Synopsis</h1>
        <p className="">{selectedAnime.synopsis}</p>
      </div>
    )}
    {selectedAnime?.background && (
      <div className="pt-5 font-extralight">
        <h1>Background</h1>
        <p>{selectedAnime.background}</p>
      </div>
    )}
    <div className="flex flex-col justify-center items-center w-full my-5">
      <Trailer video={video} />
      <Episodes video={video} />
    </div>
  </div>
);
