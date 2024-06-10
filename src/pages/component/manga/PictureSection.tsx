import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ModalButton } from "../../../component/Button";

export const PictureSection = ({ picture }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        {picture.map((img, index) => (
          <div
            key={index}
            className="flex w-52 h-60"
            onClick={() => openModal(img.webp.large_image_url)}
          >
            <img
              src={img.webp.image_url}
              alt="Manga Picture"
              loading="lazy"
              className="w-full h-full cursor-pointer"
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
    </div>
  );
};
