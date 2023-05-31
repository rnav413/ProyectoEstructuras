import { useState, useContext, useEffect } from 'react';
import "./recomended.css";
import { Card } from './Recommended_cards';
import axios from 'axios';
import { UserContext } from '../../../UserContext';

export const Container = () => {
  const [characters, setCharacters] = useState([]);
  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState([]);
  const [friends, setFriends] = useState([])

  useEffect(() => {


    axios.get('https://apiestructuras-production.up.railway.app/api/user/listarUsuarios', {headers: { 'x-token': userData.token }})
      .then(response => {
        setCharacters(response.data.usuarios);
        setIsLoading(false);
        setVisibleCards(response.data.usuarios.map(character => character._id));
      }).catch(error => {
        console.error('Error al obtener los personajes:', error);
      });
  }, []);


  useEffect(() => {
   
    axios.post('https://apiestructuras-production.up.railway.app/api/social/getFriends',null, {headers: { 'x-token': userData.token }})
      .then(response => {
        setFriends(response.data.friends);
        console.log('amigos', response.data.friends); // Verificar los datos de respuesta
        setIsLoading(false);
      }).catch(error => {
        console.error('Error al obtener los personajes:', error);
        console.error('Request', error.config)
      });
  }, []);
  const filteredVisibleCards = friends.map(({ friend }) => friend._id);
  const [page, setPage] = useState(0);

  const handleAccept = (key) => {
    console.log('Se agregó a la persona:', key);
    axios.post('https://apiestructuras-production.up.railway.app/api/social/addFriend', {'id': key}, {headers: { 'x-token': userData.token }})
    setFriends(prevFriends => prevFriends.filter(({ friend }) => friend._id !== key));
    setVisibleCards(prevVisibleCards => prevVisibleCards.filter(cardId => cardId !== key));
  }

  const handleReject = (key) => {
    console.log('Se rechazó la recomendación de la persona:', key);
     setFriends(prevFriends => prevFriends.filter(({ friend }) => friend._id !== key))
     setVisibleCards(prevVisibleCards => prevVisibleCards.filter(cardId => cardId !== key));
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
  const visibleCharacters = characters.filter(character => !filteredVisibleCards.includes(character._id));

  const visibleCardsPerPage = visibleCharacters.slice(startIndex, endIndex);

  return (
    <div className="post-recomended-container">
      <div className="recommended-container">
        <div className='Card-image-container'>
          <button className='Button-card-left' disabled={page === 0} onClick={handlePrevPage}>Anterior</button>
        </div>
        {isLoading ? (
          <p>Loading...</p> // Render a loading message while data is being fetched
        ) : (
          visibleCardsPerPage.map(character => {
            if (!filteredVisibleCards.some(friendId => friendId === character._id)) {
              return (
                <Card
                  key={character._id}
                  // profileImage={character.image}
                  username={character.name}
                  // origin={character.origin.name}
                  onAccept={() => handleAccept(character._id)}
                  onReject={() => handleReject(character._id)}
                />
              );
            }
            return null;
          })
        )}
        <div className='Card-image-container'>
          <button className='Button-card-right' disabled={endIndex >= characters.length} onClick={handleNextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
