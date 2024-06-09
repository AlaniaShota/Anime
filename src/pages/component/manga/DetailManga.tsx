import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMangaData } from "../../../redux/reducer/manga/slice";
import { selectTopMangaData } from "../../../redux/reducer/manga/topManga";
import { fetchCharacter } from "../../../redux/reducer/reducer";
import { Manga, TopManga } from "../../../redux/reducer/manga/type";
import { selectCharacterData } from "../../../redux/reducer/characterSlice";
import { selectCharacterMangaData } from "../../../redux/reducer/manga/characterMangaSlice";
import { fetchCharacterManga } from "../../../redux/reducer/manga/mangaReducer";
import { DetailAnimeSection } from "./component/DetailAnimeSection";
import { DetailHeaderSection } from "./component/DetailHeaderSection";

export const DetailManga = () => {
  const { mangaTitle, animeId, characterId } = useParams<{
    mangaTitle: string;
    characterId: string;
    animeId: string;
  }>();
  console.log("mangaTitle", mangaTitle);

  const dispatch = useDispatch();
  const mangaData = useSelector(selectMangaData);
  const topMangaData = useSelector(selectTopMangaData);
  const characterData = useSelector(selectCharacterMangaData);
  //   const video = useSelector(selectVideoData);
  //   const reviews = useSelector(selectReviewsData);

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacterManga(characterId));
      //   dispatch(fetchVideo(characterId));
      //   dispatch(fetchReviews(characterId));
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
      {/* <div className="col-span-4 row-span-1"> */}
      <DetailHeaderSection selected={selectedManga} />
      {/* </div> */}
      <div className="flex flex-row items-start justify-start gap-8">
        <div className=" my-5 w-3/12">
          <DetailAnimeSection
            selected={selectedManga}
            characterData={characterData}
          />
        </div>
        {/* <div className=" my-5 w-4/6">
            <DetailAboutAnime
              selectedAnime={selectedAnime}
              video={video}
              // characterData={characterData}
            />
          </div> */}
      </div>
      <>{/* <UserReview reviews={reviews} /> */}</>
    </div>
  );
};
