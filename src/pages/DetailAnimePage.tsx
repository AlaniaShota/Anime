import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../component/Button";
import { selectAnimeData } from "../redux/reducer/slice";
import { Anime, TopAnime } from "../interfaces";
import { selectTopAnimeData } from "../redux/reducer/topAnimeSlice";
import {
  selectCharacterData,
  selectCharacterError,
  selectCharacterLoading,
} from "../redux/reducer/characterSlice";
import {
  fetchCharacter,
  fetchReviews,
  fetchVideo,
} from "../redux/reducer/reducer";
import { DetailHeaderSection } from "./component/DetailHeaderSection";
import { DetailAnimeSection } from "./component/DetailAnimeSection";
import { DetailAboutAnime } from "./component/DetailAboutAnime";
import { Trailer } from "./component/Trailer";
import { selectReviewsData } from "../redux/reducer/reviewsSlice";
import { UserReview } from "./component/UserReview";
import { selectVideoData } from "../redux/reducer/videoSlice";

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
      {/* <div className="col-span-4 row-span-1"> */}
      <DetailHeaderSection
        selected={selectedAnime}
      />
      {/* </div> */}
      <div className="flex flex-row items-start justify-start gap-8">
        <div className=" my-5 w-3/12">
          <DetailAnimeSection
            selectedAnime={selectedAnime}
            characterData={characterData}
          />
        </div>
        <div className=" my-5 w-4/6">
          <DetailAboutAnime
            selectedAnime={selectedAnime}
            video={video}
            // characterData={characterData}
          />
        </div>
      </div>
      <>
        <UserReview reviews={reviews} />
      </>
    </div>
  );
};
