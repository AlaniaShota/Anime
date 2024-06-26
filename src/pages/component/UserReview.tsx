import React, { useState } from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiSurprise } from "react-icons/bs";

import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs";
import { SeeMoreButton } from "../../component/Button";
import { useSelector } from "react-redux";
import { selectReviewsError } from "../../redux/reducer/anime/reviewsSlice";
import { ErrorDataFound } from "../../component/Error";
import {
  selectReviewsMangaError,
  selectReviewsMangaLoading,
} from "../../redux/reducer/manga/mangareviewsSlice";

export const UserReview = ({ reviews }) => {
  const [userReview, setUserReview] = useState(3);
  const reviewsError = useSelector(selectReviewsError);
  const reviewMangaError = useSelector(selectReviewsMangaError);
  const reviewLoader = useSelector(selectReviewsMangaLoading);

  const showMoreReview = () => {
    setUserReview((review) => review + 5);
  };

  if (reviewsError || reviewMangaError)
    return <ErrorDataFound title="reviews" />;

  return (
    <>
      <>
        {reviews.slice(0, userReview).map((item) => (
          <div
            key={item.mal_id}
            className="flex flex-col justify-start items-start text-white my-4 bg-[#3d3d3dc0] p-4 rounded-md shadow-lg"
          >
            <div className="flex flex-col  items-start">
              <div className="flex flex-row  items-center gap-2">
                <img
                  src={item.user.images.webp.image_url}
                  alt={item.user.username}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <h1>{item.user.username}</h1>
              </div>
              <div className="ml-14">
                <p>{item.review.slice("", 75)}...</p>
                <div className="flex flex-row justify-end items-center gap-2 pt-5">
                  <div className="flex flex-col items-center">
                    <BsEmojiFrown className="w-5 h-5" />
                    <span>{item.reactions.confusing}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BsEmojiSurprise className="w-5 h-5" />
                    <span>{item.reactions.creative}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BsEmojiHeartEyes className="w-5 h-5" />
                    <span>{item.reactions.funny}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BsEmojiSmile className="w-5 h-5" />
                    <span>{item.reactions.informative}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BsEmojiLaughing className="w-5 h-5" />
                    <span>{item.reactions.love_it}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BsEmojiSunglasses className="w-5 h-5" />
                    <span>{item.reactions.nice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
      {reviews.length > userReview && (
        <SeeMoreButton showMore={showMoreReview} />
      )}
    </>
  );
};
