import React from "react";

export const CharactersActors = ({ characterData }) => {
  if (!characterData || characterData.length === 0) {
    return <div>No character data available</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {characterData
        .slice(0, 9)
        .map(({ character, role, favorites, voice_actors }) => (
          <div
            key={character.mal_id}
            className="flex flex-row items-start justify-start w-full"
          >
            <div className="flex flex-col w-full">
              <div className="w-auto h-52">
                <img
                  src={character.images.webp.image_url}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col my-1">
                <a
                  href={character.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm font-light"
                >
                  {character.name.slice()}
                </a>
                {/* <span className="my-1 text-sm">Role {role}</span>
                <span className=" text-sm">Favorites: {favorites}</span> */}
              </div>
            </div>
            {/* <div className="voice-actors">
            {voice_actors.map((actor) => (
              <div key={actor.mal_id} className="voice-actor">
                <img
                  src={actor.person.images.jpg.image_url}
                  alt={actor.name}
                  className="voice-actor-image"
                />
                <div className="voice-actor-details">
                  <span className="voice-actor-name">{actor.person.name}</span>
                  <span className="voice-actor-language">{actor.language}</span>
                </div>
              </div>
            ))}
          </div> */}
          </div>
        ))}
    </div>
  );
};
