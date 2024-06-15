import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectMangaData,
  selectMangaLoading,
} from "../redux/reducer/manga/slice";
import {
  selectTopMangaData,
  selectTopMangaLoading,
} from "../redux/reducer/manga/topManga";
import { Manga, TopManga } from "../redux/reducer/manga/type";
import { selectCharacterMangaData } from "../redux/reducer/manga/characterMangaSlice";
import {
  fetchCharacterManga,
  fetchPictureManga,
  fetchReviewsManga,
} from "../redux/reducer/manga/mangaReducer";
import { DetailAnimeSection } from "./component/manga/DetailAnimeSection";
import {
  selectReviewsMangaData,
  selectReviewsMangaLoading,
} from "../redux/reducer/manga/mangareviewsSlice";
import { UserReview } from "./component/UserReview";
import {
  selectPictureMangaData,
  selectPictureMangaLoading,
} from "../redux/reducer/manga/pictureMangaSlice";
import { DetailHeaderSection } from "./component/manga/DetailHeaderSection";
import { PictureSection } from "./component/manga/PictureSection";
import {
  selectCharacterIdData,
  selectCharacterIdLoading,
} from "../redux/reducer/characterIdSlice";
import { fetchCharacterId } from "../redux/reducer/anime/reducer";
import { DetailPageLoader } from "../component/Loader";
import { selectReviewsError } from "../redux/reducer/anime/reviewsSlice";
import { useAppDispatch } from "../redux/store/store";

export const DetailManga: React.FC = () => {
  const { mangaTitle, characterId } = useParams<{
    mangaTitle: string;
    characterId: string;
    animeId: string;
  }>();

  const dispatch = useAppDispatch();
  const mangaData = useSelector(selectMangaData);
  const topMangaData = useSelector(selectTopMangaData);
  const characterData = useSelector(selectCharacterMangaData);
  const characterDataId = useSelector(selectCharacterIdData);
  const picture = useSelector(selectPictureMangaData);
  const reviews = useSelector(selectReviewsMangaData);
  const mangaDataLoader = useSelector(selectMangaLoading);
  const topMangaDataLoader = useSelector(selectTopMangaLoading);
  const characterDataLoader = useSelector(selectReviewsMangaLoading);
  const characterDataIdLoader = useSelector(selectCharacterIdLoading);
  const pictureLoader = useSelector(selectPictureMangaLoading);
  const reviewsLoader = useSelector(selectReviewsMangaLoading);
  const reviewsError = useSelector(selectReviewsError);
  //უნდა ვიმუშაო error
  console.log(reviewsError);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacterManga(characterId));
      dispatch(fetchCharacterId(characterId));
      dispatch(fetchPictureManga(characterId));
      dispatch(fetchReviewsManga(characterId));
    }
  }, [characterId, dispatch]);

  const getSelectedManga = () => {
    let selectedManga = topMangaData.find(
      (item: TopManga) => item?.title === mangaTitle
    );
    if (!selectedManga) {
      selectedManga = mangaData.find(
        (item: Manga) => item?.title === mangaTitle
      );
    }
    return selectedManga;
  };

  const selectedManga = getSelectedManga();

  const filteredCharacterData = Array.isArray(characterData)
    ? characterData.filter(
        (character) => character.character.mal_id !== characterDataId[0]?.mal_id
      )
    : [];

  if (!selectedManga) {
    return <div className="text-white">Manga not found</div>;
  }

  if (
    mangaDataLoader ||
    topMangaDataLoader ||
    characterDataLoader ||
    characterDataIdLoader ||
    pictureLoader ||
    reviewsLoader
  ) {
    return <DetailPageLoader />;
  }

  return (
    <div className="m-auto p-auto w-5/6 flex flex-col">
      <DetailHeaderSection selected={selectedManga} />

      <div className="flex flex-row items-start justify-start gap-8">
        <div className=" my-5 w-3/12">
          <DetailAnimeSection
            selected={selectedManga}
            characterData={filteredCharacterData}
            characterDataId={characterDataId}
          />
        </div>
        <div className=" my-5 w-4/6">
          <PictureSection picture={picture} />
        </div>
      </div>
      <>
        <UserReview reviews={reviews} />
      </>
    </div>
  );
};
