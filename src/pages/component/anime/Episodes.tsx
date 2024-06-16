import React, { useState } from "react";
import { SeeMoreButton } from "../../../component/Button";
import { MdErrorOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectVideoError } from "../../../redux/reducer/anime/videoSlice";
import { ErrorDataFound } from "../../../component/Error";

const AnimationPulseError = ({ sizeW, sizeH }) => (
  <div
    className={`bg-black h-${sizeH} w-${sizeW} flex flex-col flex-wrap justify-center items-center `}
  >
    <MdErrorOutline size="55" className=" animate-pulse" />
  </div>
);

const EpisodeList = ({ video, visibleEpisodes, showMoreEpisodes }) => (
  <>
    <h1 className="font-extralight text-2xl mb-2">Episodes</h1>
    <div className="grid grid-cols-4 items-center gap-2 w-full">
      {video.episodes.slice(0, visibleEpisodes).map((episode) => (
        <EpisodeItem episode={episode} key={episode.mal_id} />
      ))}
    </div>
    {video.episodes.length > visibleEpisodes && (
      <SeeMoreButton showMore={showMoreEpisodes} />
    )}
  </>
);

const EpisodeItem = ({ episode }) => (
  <div
    key={episode.mal_id}
    className="flex flex-col flex-wrap cursor-not-allowed opacity-70 hover:opacity-100 transition duration-700 ease-in-out"
  >
    {episode.images.jpg.image_url ? (
      <img src={episode.images.jpg.image_url} alt={episode.title} />
    ) : (
      <AnimationPulseError sizeW="60" sizeH="60" />
    )}
    <h1>{episode.episode}</h1>
  </div>
);

export const Episodes = ({ video }) => {
  const [visibleEpisodes, setVisibleEpisodes] = useState(12);
  const videoError = useSelector(selectVideoError);

  const showMoreEpisodes = () => {
    setVisibleEpisodes((prevVisibleEpisodes) => prevVisibleEpisodes + 10);
  };

  const notFoundData = () => {
    if (!videoError) return <ErrorDataFound title="episodes" />;
    // return null;
  };

  return (
    <div className="flex flex-col w-full my-4 justify-start items-start">
      {video?.episodes && video.episodes.length > 0 ? (
        <EpisodeList
          video={video}
          visibleEpisodes={visibleEpisodes}
          showMoreEpisodes={showMoreEpisodes}
        />
      ) : (
        <>{notFoundData()}</>
      )}
    </div>
  );
};
