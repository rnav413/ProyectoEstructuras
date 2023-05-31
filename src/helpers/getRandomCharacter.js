import React, { useEffect, useState } from "react";

export const GetCharacter = async () => {
  const url = 'https://rickandmortyapi.com/api/character';
  const resp = await fetch(url);
  const data = await resp.json();
  const characters = data.results;
  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex].image;

  return randomCharacter;
};

function RandomCharacterComponent() {
  const [randomCharacter, setRandomCharacter] = useState("");

  useEffect(() => {
    const fetchRandomCharacter = async () => {
      const character = await GetCharacter();
      setRandomCharacter(character);
    };

    fetchRandomCharacter();
  }, []);

  return (
    <div>
      <img className="post-profile-image" src={randomCharacter} alt="Imagen del personaje" />
    </div>
  );
}

export default RandomCharacterComponent;
