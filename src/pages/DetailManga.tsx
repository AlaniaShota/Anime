import React, { useEffect, useState } from "react";
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
import { ErrorDetailTitle } from "../component/Error";
import mangaVideo from "../assets/Naruto vs Luffy _ manga animation.mp4";
import { DetailAboutManga } from "./component/manga/DetailAboutManga";
import { CharactersActors } from "./component/CharactersActors";
import { SwitchButtonSection } from "../component/Button";
import { DetailMangaSection } from "./component/manga/DetailMangaSection";

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

  if (!selectedManga) return <ErrorDetailTitle title="Manga" src="/manga" />;

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

  const renderComponent = () => {
    switch (selectedTitle) {
      case "A":
        return <DetailMangaSection selected={selectedManga} />;
      case "B":
        return <DetailAboutManga selectedManga={selectedManga} />;
      case "C":
        return (
          <CharactersActors
            title="Characters Manga"
            characterData={filteredCharacterData}
            characterDataId={characterDataId}
            type="manga"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {" "}
      {isMobile ? (
        <DetailHeaderSection selected={selectedManga} />
      ) : (
        <div className="w-full h-[640px] shadow-2xl relative">
          <video
            src={mangaVideo}
            autoPlay
            loop
            className="w-full h-[640px] object-contain top-0 rounded-b-3xl  shadow-2xl "
          ></video>
          <div className="absolute bottom-0 w-full h-full bg-black rounded-b-3xl  bg-opacity-70">
            <DetailHeaderSection selected={selectedManga} />
          </div>
        </div>
      )}
      <div className="m-auto p-auto w-11/12 flex flex-col">
        <div className="flex flex-row max-sm:flex-col items-start justify-start gap-8 ">
          <div className="my-5  max-sm:my-3 w-1/3 max-sm:w-full">
            <SwitchButtonSection
              selectedTitle={selectedTitle}
              setSelectedTitle={setSelectedTitle}
            />
            {renderComponent()}

            {!isMobile && <UserReview reviews={reviews} />}
          </div>
          <div className=" my-5 max-sm:my-0 w-4/6 max-sm:w-full">
            <PictureSection picture={picture} />
          </div>
          {isMobile && (
            <div className="my-3 w-full">
              <UserReview reviews={reviews} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
