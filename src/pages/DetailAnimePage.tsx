import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectAnimeData,
  selectAnimeLoading,
} from "../redux/reducer/anime/slice";
import {
  selectCharacterData,
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
  selectTopAnimeLoading,
} from "../redux/reducer/anime/topAnimeSlice";
import {
  selectVideoData,
  selectVideoLoading,
} from "../redux/reducer/anime/videoSlice";
import { Anime, TopAnime } from "../redux/reducer/anime/type";
import {
  selectCharacterIdData,
  selectCharacterIdLoading,
} from "../redux/reducer/characterIdSlice";
import { DetailPageLoader } from "../component/Loader";
import { useAppDispatch } from "../redux/store/store";

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
  console.log(characterDataId);

  const selectedAnime = getSelectedAnime();

  const filteredCharacterData = Array.isArray(characterData)
    ? characterData.filter(
        (character) => character.character.mal_id !== characterDataId[0]?.mal_id
      )
    : [];
    
  if (!selectedAnime) {
    return <div className="text-white">Anime not found</div>;
  }

  return (
    <div className="m-auto p-auto w-5/6 flex flex-col">
      <DetailHeaderSection selected={selectedAnime} />
      <div className="flex flex-row items-start justify-start gap-8">
        <div className=" my-5 w-3/12">
          <DetailAnimeSection
            selected={selectedAnime}
            characterData={filteredCharacterData}
            characterDataId={characterDataId}
          />
        </div>
        <div className=" my-5 w-4/6">
          <DetailAboutAnime selectedAnime={selectedAnime} video={video} />
        </div>
      </div>
      <>
        <UserReview reviews={reviews} />
      </>
    </div>
  );
};
