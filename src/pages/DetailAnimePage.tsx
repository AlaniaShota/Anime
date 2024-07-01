import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectAnimeData,
  selectAnimeError,
  selectAnimeLoading,
} from "../redux/reducer/anime/slice";
import {
  selectCharacterData,
  selectCharacterError,
  selectCharacterLoading,
} from "../redux/reducer/characterSlice";
import {
  fetchCharacter,
  fetchCharacterId,
  fetchReviews,
  fetchVideo,
} from "../redux/reducer/anime/reducer";
import { DetailAboutAnime } from "./component/anime/DetailAboutAnime";
import { selectReviewsData } from "../redux/reducer/anime/reviewsSlice";
import { UserReview } from "./component/UserReview";
import { DetailHeaderSection } from "./component/anime/DetailHeaderSection";
import { DetailAnimeSection } from "./component/anime/DetailAnimeSection";
import {
  selectTopAnimeData,
  selectTopAnimeError,
  selectTopAnimeLoading,
} from "../redux/reducer/anime/topAnimeSlice";
import {
  selectVideoData,
  selectVideoError,
  selectVideoLoading,
} from "../redux/reducer/anime/videoSlice";
import { Anime, TopAnime } from "../redux/reducer/anime/type";
import {
  selectCharacterIdData,
  selectCharacterIdError,
  selectCharacterIdLoading,
} from "../redux/reducer/characterIdSlice";
import { DetailPageLoader } from "../component/Loader";
import { useAppDispatch } from "../redux/store/store";
import { ErrorDataFound, ErrorDetailTitle } from "../component/Error";
import animeVideo from "../assets/videoAnime.mp4";
import { SwitchButtonSection } from "../component/Button";
import { CharactersActors } from "./component/CharactersActors";
import { Trailer } from "./component/anime/Trailer";
import { Episodes } from "./component/anime/Episodes";

export const DetailAnimePage: React.FC = () => {
  const { animeTitle, characterId } = useParams<{
    animeTitle: string;
    characterId: string;
  }>();

  const dispatch = useAppDispatch();
  const animeData = useSelector(selectAnimeData);
  const topAnimeData = useSelector(selectTopAnimeData);
  const characterData = useSelector(selectCharacterData);
  const characterDataId = useSelector(selectCharacterIdData);
  const video = useSelector(selectVideoData);
  const reviews = useSelector(selectReviewsData);
  const animeDataLoader = useSelector(selectAnimeLoading);
  const topAnimeDataLoader = useSelector(selectTopAnimeLoading);
  const characterDataLoader = useSelector(selectCharacterLoading);
  const characterDataIdLoader = useSelector(selectCharacterIdLoading);
  const videoLoader = useSelector(selectVideoLoading);
  const reviewsLoader = useSelector(selectVideoLoading);
  const [selectedTitle, setSelectedTitle] = useState<string>("A");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 530);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacter(characterId));
      dispatch(fetchCharacterId(characterId));
      dispatch(fetchVideo(characterId));
      dispatch(fetchReviews(characterId));
    }
  }, [characterId, dispatch]);

  if (
    animeDataLoader ||
    topAnimeDataLoader ||
    characterDataLoader ||
    characterDataIdLoader ||
    videoLoader ||
    reviewsLoader
  ) {
    return <DetailPageLoader />;
  }

  const getSelectedAnime = () => {
    switch (true) {
      case !!animeData.find((item: Anime) => item?.title === animeTitle):
        return animeData.find((item: Anime) => item?.title === animeTitle);
      case !!topAnimeData.find((item: TopAnime) => item?.title === animeTitle):
        return topAnimeData.find(
          (item: TopAnime) => item?.title === animeTitle
        );
      default:
        return null;
    }
  };

  const selectedAnime = getSelectedAnime();

  const filteredCharacterData = Array.isArray(characterData)
    ? characterData.filter(
        (character) => character.character.mal_id !== characterDataId[0]?.mal_id
      )
    : [];

  if (!selectedAnime) return <ErrorDetailTitle title="Anime" src="/" />;

  const renderComponent = () => {
    switch (selectedTitle) {
      case "A":
        return <DetailAnimeSection selected={selectedAnime} />;
      case "B":
        return <DetailAboutAnime selectedAnime={selectedAnime} video={video} />;
      case "C":
        return (
          <CharactersActors
            title="Characters Anime"
            characterData={filteredCharacterData}
            characterDataId={characterDataId}
            type="anime"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isMobile ? (
        <DetailHeaderSection selected={selectedAnime} />
      ) : (
        <div className="w-full h-[640px] shadow-2xl relative">
          <video
            src={animeVideo}
            autoPlay
            loop
            className="w-full h-[640px] object-contain top-0 rounded-b-3xl  shadow-2xl "
          ></video>
          <div className="absolute bottom-0 w-full h-full bg-black rounded-b-3xl  bg-opacity-70">
            <DetailHeaderSection selected={selectedAnime} />
          </div>
        </div>
      )}
      <div className="m-auto p-auto w-11/12 flex flex-col ">
        <div className="flex flex-row max-sm:flex-col items-start justify-start gap-8">
          <div className=" my-5 max-sm:my-3 w-1/3 max-sm:w-full">
            <SwitchButtonSection
              selectedTitle={selectedTitle}
              setSelectedTitle={setSelectedTitle}
            />
            {renderComponent()}
            {!isMobile && <UserReview reviews={reviews} />}
          </div>
          <div className=" my-5 max-sm:my-3 w-4/6 max-sm:w-full">
            <div className="flex flex-col justify-center items-center w-full ">
              <Trailer video={video} />
              <Episodes video={video} />
            </div>
            {isMobile && <UserReview reviews={reviews} />}
          </div>
        </div>
      </div>
    </>
  );
};
