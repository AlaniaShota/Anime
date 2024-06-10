import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAnimeData } from "../redux/reducer/anime/slice";
import { selectCharacterData } from "../redux/reducer/characterSlice";
import {
  fetchCharacter,
  fetchReviews,
  fetchVideo,
} from "../redux/reducer/anime/reducer";
import { DetailAboutAnime } from "./component/anime/DetailAboutAnime";
import { selectReviewsData } from "../redux/reducer/anime/reviewsSlice";
import { UserReview } from "./component/UserReview";
import { DetailHeaderSection } from "./component/anime/DetailHeaderSection";
import { DetailAnimeSection } from "./component/anime/DetailAnimeSection";
import { selectTopAnimeData } from "../redux/reducer/anime/topAnimeSlice";
import { selectVideoData } from "../redux/reducer/anime/videoSlice";
import { Anime, TopAnime } from "../redux/reducer/anime/type";

export const DetailAnimePage = () => {
  const { animeTitle, animeId, characterId } = useParams<{
    animeTitle: string;
    characterId: string;
    animeId: string;
  }>();

  const dispatch = useDispatch();
  const animeData = useSelector(selectAnimeData);
  const topAnimeData = useSelector(selectTopAnimeData);
  const characterData = useSelector(selectCharacterData);
  const video = useSelector(selectVideoData);
  const reviews = useSelector(selectReviewsData);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacter(characterId));
      dispatch(fetchVideo(characterId));
      dispatch(fetchReviews(characterId));
    }
  }, [characterId, dispatch]);

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
            characterData={characterData}
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
