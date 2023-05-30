import { useState, useContext, useEffect } from 'react';
import "./recomended.css";
import {Card} from './Recommended_cards';
import axios from 'axios';
import { UserContext } from '../../../UserContext';

export const Container = () => {

  const [characters, setCharacters] = useState([]);
  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://apiestructuras-production.up.railway.app/api/user/listarUsuarios', { headers: { 'x-token': userData.token } })
      .then(response => {
        setCharacters(response.data.usuarios); 
        console.log(response.data); // Verify the response data
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error al obtener los personajes:', error);
      });
  }, []);


  const [page, setPage] = useState(0);
  const handleAccept = () => {
    console.log('se agrego a la persona');
  }

  const handleReject = () => {
    console.log('Se rechazó la recomendacion de la persona ');
  }

  const pageSize = 4; // Número de personajes por página

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  const handleNextPage = () => {
    if (endIndex < characters.length) {
      setPage(page + 1);
    }
  }

  return (
    <div className="post-recomended-container">
      <div className="recommended-container">
        <div className='Card-image-container'>
          <button className='Button-card-left' disabled={page === 0} onClick={handlePrevPage}>Anterior</button>
        </div>
        {isLoading ? (
          <p>Loading...</p> // Render a loading message while data is being fetched
        ) : (
          Array.isArray(characters) && characters.slice(startIndex, endIndex).map(character => (
            <Card
              key={character._id}
              // profileImage={character.image}
              username={character.name}
              // origin={character.origin.name}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))
        )}
        <div className='Card-image-container'>
          <button className='Button-card-right' disabled={endIndex >= characters.length} onClick={handleNextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  );
  
}
