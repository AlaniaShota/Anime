import React, { useState } from "react";
import { ButtonReadMore } from "../../../component/Button";
const MAX_WORDS = 35;

export const DetailAboutManga = ({ selectedManga }) => {
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
    ? selectedManga?.synopsis
    : truncateText(selectedManga?.synopsis, MAX_WORDS);

  const backgroundText = showFullBackground
    ? selectedManga?.background
    : truncateText(selectedManga?.background, MAX_WORDS);

  return (
    <div className="w-full text-white my-1 p-2 gap-y-2 flex flex-col justify-start items-start">
      {selectedManga?.synopsis && (
        <>
          <h1 className="font-extralight px-2 text-lg">Synopsis</h1>
          <div className="font-extralight  p-2 shadowStyle rounded-lg">
            <p>{synopsisText}</p>
            {selectedManga?.synopsis.split(" ").length > MAX_WORDS && (
              <ButtonReadMore toggle={toggleSynopsis} show={showFullSynopsis} />
            )}
          </div>
        </>
      )}
      {selectedManga?.background && (
        <>
          <h1 className="font-extralight px-2 text-lg">Background</h1>
          <div className="pt-5 font-extralight p-2  shadowStyle rounded-lg">
            <p>{backgroundText}</p>
            {selectedManga?.background.split(" ").length > MAX_WORDS && (
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
