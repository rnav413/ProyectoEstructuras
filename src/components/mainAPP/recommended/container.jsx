import { useState } from 'react';
import "./recomended.css";
import {Card} from './Recommended_cards';
import { UserFetchcharacter, useRickParse} from "../../../hooks";

export const Container = () => {
  const {characters, isLoading} = UserFetchcharacter();
  const {convertCharacterToArray} = useRickParse()

  const [page, setPage] = useState(0);
  const handleAccept = () => {
    console.log('se agrego a la persona');
  }

  const handleReject = () => {
    console.log('Se rechazó la recomendacion de la persona ');
  }

  const pageSize = 4; // Número de personajes por página

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  const handleNextPage = () => {
    if (endIndex < convertCharacterToArray(characters).length) {
      setPage(page + 1);
    }
  }

  return (
    <div className="post-recomended-container">
      <div className="recommended-container">
      <div className='Card-image-container'>
        <button className='Button-card-left' disabled={page === 0} onClick={handlePrevPage}>Anterior</button>
        </div>
        {convertCharacterToArray(characters).slice(startIndex, endIndex).map((character) => (
          <Card
            key={character.id}
            profileImage={character.image}
            username={character.name}
            origin={character.origin.name}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))}
        <div className='Card-image-container'>
          <button className='Button-card-right' disabled={endIndex >= convertCharacterToArray(characters).length} onClick={handleNextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
