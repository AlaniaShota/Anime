import React, { useState } from "react";
import { SeeMoreButton } from "../../../component/Button";
import { MdErrorOutline } from "react-icons/md";

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
    <div className="grid grid-cols-4 items-center gap-2">
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
  <>
    <div key={episode.mal_id} className="flex flex-col flex-wrap">
      {episode.images.jpg.image_url ? (
        <img src={episode.images.jpg.image_url} alt={episode.title} />
      ) : (
        <AnimationPulseError sizeW="48" sizeH="48" />
      )}
      <h1>{episode.episode}</h1>
    </div>
  </>
);

export const Episodes = ({ video }) => {
  const [visibleEpisodes, setVisibleEpisodes] = useState(12);

  const showMoreEpisodes = () => {
    setVisibleEpisodes((prevVisibleEpisodes) => prevVisibleEpisodes + 10);
  };

  function notFoundData() {
    return (
      <div className="flex flex-col w-full my-4 justify-start items-start">
        <h1 className="font-extralight text-2xl mb-2">Something went wrong</h1>
        <div className="grid grid-cols-3 w-full gap-4 items-center ">
          <AnimationPulseError sizeW="64" sizeH="64" />
          <AnimationPulseError sizeW="64" sizeH="64" />
          <AnimationPulseError sizeW="64" sizeH="64" />
          <AnimationPulseError sizeW="64" sizeH="64" />
          <AnimationPulseError sizeW="64" sizeH="64" />
          <AnimationPulseError sizeW="64" sizeH="64" />
        </div>
      </div>
    );
  }

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
