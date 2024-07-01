import React, { useState } from "react";
import { ButtonReadMore } from "../../../component/Button";

const MAX_WORDS = 35;

export const DetailAboutAnime = ({ selectedAnime }) => {
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
    <div className="w-full text-white my-1 p-2 max-sm:p-1 gap-y-2 max-sm:gap-y-1 flex flex-col justify-start items-start">
      {selectedAnime?.synopsis && (
        <>
          <h1 className="font-extralight px-2 text-lg">Synopsis</h1>
          <div className="font-extralight  p-2 shadowStyle rounded-lg">
            <p>{synopsisText}</p>
            {selectedAnime?.synopsis.split(" ").length > MAX_WORDS && (
              <ButtonReadMore toggle={toggleSynopsis} show={showFullSynopsis} />
            )}
          </div>
        </>
      )}
      {selectedAnime?.background && (
        <>
          <h1 className="font-extralight px-2 text-lg">Background</h1>
          <div className=" font-extralight p-2 shadowStyle rounded-lg">
            <p>{backgroundText}</p>
            {selectedAnime?.background.split(" ").length > MAX_WORDS && (
              <ButtonReadMore
                toggle={toggleBackground}
                show={showFullBackground}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
