import React, { useState } from "react";
import { ModalButton } from "../../component/Button";
import { ImportantCharacter } from "./ImportantCharacter";

const View = ({ selectedImage, closeModal }) => (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
    <div className="relative w-1/4 h-auto ">
      <img
        src={selectedImage}
        alt="Character Picture"
        className="w-full h-full object-contain "
      />
      <ModalButton closeModal={closeModal} />
    </div>
  </div>
);

export const CharactersActors = ({ characterData, title, characterDataId }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (character) => {
    setSelectedImage(character);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!characterData || characterData.length === 0) {
    return <div>No character data available</div>;
  }

  return (
    <div className="w-full my-5">
      <h1 className="font-extralight my-2">{title}</h1>
      <div className="grid grid-cols-3 gap-2">
        <div className="border border-[#ffd700] ">
          <ImportantCharacter characterDataId={characterDataId} />
        </div>
        {characterData.slice(0, 8).map((item) => (
          <div
            key={item.character.mal_id}
            className="flex flex-row items-start justify-start w-full"
          >
            <div className="flex flex-col h-64 w-full opacity-50 hover:opacity-100 transition duration-700 ease-in-out">
              <div
                className="w-full h-52 "
                onClick={() => openModal(item.character.images.webp.image_url)}
              >
                <img
                  src={item.character.images.webp.image_url}
                  alt={item.character.name}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
              <p className="uppercase p-1 text-xs font-mono cursor-default ">
                {item.character.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <View selectedImage={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};
