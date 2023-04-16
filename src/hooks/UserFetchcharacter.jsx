import { useState, useEffect } from 'react';
import { GetCharacter } from '../helpers';

export const UserFetchcharacter = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const characterData = await GetCharacter();
        const characterJson = JSON.stringify(characterData);
        setCharacters(characterJson);
        setIsLoading(false);
      };
  
      fetchData();
    }, []);
  
    return {
      characters,
      isLoading,
    };
};