// import React from "react";
// import { Trailer } from "./Trailer";
// import { Episodes } from "./Episodes";

// export const DetailAboutAnime = ({ selectedAnime, video }) => (
//   <div className="w-full text-white my-1 p-2 flex flex-col justify-start items-start">
//     {selectedAnime?.synopsis && (
//       <div className="font-extralight">
//         <h1 className=" font-extralight text-lg">Synopsis</h1>
//         <p className="">{selectedAnime.synopsis}</p>
//       </div>
//     )}
//     {selectedAnime?.background && (
//       <div className="pt-5 font-extralight">
//         <h1>Background</h1>
//         <p>{selectedAnime.background}</p>
//       </div>
//     )}
//     {/* <div className="flex flex-col justify-center items-center w-full my-5">
//       <Trailer video={video} />
//       <Episodes video={video} />
//     </div> */}
//   </div>
// );

import React, { useState } from "react";
import { ButtonReadMore } from "../../../component/Button";

const MAX_WORDS = 35;

export const DetailAboutAnime = ({ selectedAnime, video }) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [showFullBackground, setShowFullBackground] = useState(false);

  const toggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };

  const toggleBackground = () => {
    setShowFullBackground(!showFullBackground);
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const synopsisText = showFullSynopsis
    ? selectedAnime?.synopsis
    : truncateText(selectedAnime?.synopsis, MAX_WORDS);

  const backgroundText = showFullBackground
    ? selectedAnime?.background
    : truncateText(selectedAnime?.background, MAX_WORDS);

  return (
    <div className="w-full text-white my-1 p-2 flex flex-col justify-start items-start">
      {selectedAnime?.synopsis && (
        <div className="font-extralight">
          <h1 className="font-extralight text-lg">Synopsis</h1>
          <p>{synopsisText}</p>
          {selectedAnime?.synopsis.split(" ").length > MAX_WORDS && (
            <ButtonReadMore toggle={toggleSynopsis} show={showFullSynopsis} />
          )}
        </div>
      )}
      {selectedAnime?.background && (
        <div className="pt-5 font-extralight">
          <h1>Background</h1>
          <p>{backgroundText}</p>
          {selectedAnime?.background.split(" ").length > MAX_WORDS && (
            <ButtonReadMore
              toggle={toggleBackground}
              show={showFullBackground}
            />
          )}
        </div>
      )}
    </div>
  );
};
