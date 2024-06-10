import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMangaData } from "../redux/reducer/manga/slice";
import { selectTopMangaData } from "../redux/reducer/manga/topManga";
import { Manga, TopManga } from "../redux/reducer/manga/type";
import { selectCharacterMangaData } from "../redux/reducer/manga/characterMangaSlice";
import {
  fetchCharacterManga,
  fetchPictureManga,
  fetchReviewsManga,
} from "../redux/reducer/manga/mangaReducer";
import { DetailAnimeSection } from "./component/manga/DetailAnimeSection";
import { selectReviewsMangaData } from "../redux/reducer/manga/mangareviewsSlice";
import { UserReview } from "./component/UserReview";
import { selectPictureMangaData } from "../redux/reducer/manga/pictureMangaSlice";
import { DetailHeaderSection } from "./component/manga/DetailHeaderSection";
import { PictureSection } from "./component/manga/PictureSection";

export const DetailManga = () => {
  const { mangaTitle, characterId } = useParams<{
    mangaTitle: string;
    characterId: string;
    animeId: string;
  }>();

  const dispatch = useDispatch();
  const mangaData = useSelector(selectMangaData);
  const topMangaData = useSelector(selectTopMangaData);
  const characterData = useSelector(selectCharacterMangaData);
  const picture = useSelector(selectPictureMangaData);
  const reviews = useSelector(selectReviewsMangaData);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacterManga(characterId));
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

  if (!selectedManga) {
    return <div className="text-white">Manga not found</div>;
  }

  return (
    <div className="m-auto p-auto w-5/6 flex flex-col">
      <DetailHeaderSection selected={selectedManga} />

      <div className="flex flex-row items-start justify-start gap-8">
        <div className=" my-5 w-3/12">
          <DetailAnimeSection
            selected={selectedManga}
            characterData={characterData}
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
