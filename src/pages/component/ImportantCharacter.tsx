import React, { useState } from "react";
import { ModalButton } from "../../component/Button";

const ViewModal = ({ importantCharacter, closeModal }) => (
  <div className="fixed inset-0 z-50 flex flex-row gap-4 justify-center items-center bg-black">
    <div className="relative w-1/4 h-full ">
      <img
        src={importantCharacter?.images.webp.image_url}
        alt="Character Picture"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="text-white w-1/2 flex h-full flex-col items-start justify-center">
      <h1 className="text-2xl font-bold">{importantCharacter.name}</h1>
      <h2 className=" font-extralight">{importantCharacter.name_kanji}</h2>
      <span className=" font-extralight">
        Favorites: {importantCharacter.favorites}
      </span>
      <p className=" overflow-y-auto h-96 font-light mt-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
        {importantCharacter.about}
      </p>
    </div>
    <ModalButton closeModal={closeModal} />
  </div>
);

export const ImportantCharacter = ({ characterDataId }) => {
  const [importantCharacter, setImportantCharacter] = useState(null);

  const openModal = (character) => {
    setImportantCharacter(character);
  };

  const closeModal = () => {
    setImportantCharacter(null);
  };

  return (
    <div
      className="w-auto h-52 opacity-75 hover:opacity-100 transition duration-700 ease-in-out"
      onClick={() => openModal(characterDataId)}
    >
      <img
        src={characterDataId?.images?.webp.image_url}
        alt={characterDataId.name}
        className="w-full h-full object-cover cursor-pointer"
      />
      <p className="uppercase p-1 text-xs font-mono cursor-default ">
        {characterDataId.name}
      </p>
      {importantCharacter && (
        <ViewModal
          importantCharacter={importantCharacter}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
