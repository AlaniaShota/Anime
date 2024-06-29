import React, { useState } from "react";
import { ModalButton } from "../../../component/Button";
import { useSelector } from "react-redux";
import { selectPictureMangaError } from "../../../redux/reducer/manga/pictureMangaSlice";
import { ErrorDataFound } from "../../../component/Error";

export const PictureSection = ({ picture }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pictureError = useSelector(selectPictureMangaError);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (pictureError) return <ErrorDataFound title="picture" />;

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2  mt-14">
        {picture.map((img, index) => (
          <div
            key={index}
            className="flex w-48 h-60"
            onClick={() => openModal(img.webp.large_image_url)}
          >
            <img
              src={img.webp.image_url}
              alt="Manga Picture"
              loading="lazy"
              className="w-full h-full cursor-pointer rounded-lg opacity-60 hover:opacity-100 transition duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative ">
            <img
              src={selectedImage}
              alt="Full Screen Manga Picture"
              className="w-auto h-auto max-w-full max-h-full"
            />
            <ModalButton closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};
