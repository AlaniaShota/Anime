import React from "react";
import { MdErrorOutline } from "react-icons/md";

const TrailerItem = ({ trailer }) => (
  <div className="w-full h-96">
    <iframe
      width="100%"
      height="100%"
      src={trailer.trailer.embed_url}
      title="Trailer"
      frameBorder="0"
      allow="accelerometer; click; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export const Trailer = ({ video }) => {

  function notFoundData() {
    return (
      <div className="flex flex-col w-full my-4 justify-start items-start">
        <div className="flex flex-col w-full my-8 justify-start items-start">
          <h1 className=" font-extralight text-2xl mb-2">Trailer</h1>
          <div className="w-full h-96 bg-black/55 flex justify-center items-center gap-2 ">
            <MdErrorOutline size="55" />
            <div className="flex flex-col items-start justify-start font-extralight text-xl">
              <span>Video unavailable</span>
              <span>This video is not available</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {video?.promo && video?.promo.length > 0 ? (
        <div className="flex flex-col w-full my-4 justify-start items-start">
          <h1 className=" font-extralight text-2xl mb-2">Trailer</h1>
          {video?.promo.slice(0, 1).map((item) => (
            <TrailerItem key={item.trailer.youtube_id} trailer={item} />
          ))}
        </div>
      ) : (
        <>{notFoundData()}</>
      )}
    </>
  );
};
