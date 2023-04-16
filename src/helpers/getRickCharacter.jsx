import React from "react"


export const GetCharacter = async() => {
    const url = 'https://rickandmortyapi.com/api/character'
    const resp = await fetch(url)
    const data = await resp.json()
    const character = data.results.map((chr =>{
        return{
            id: chr.id,
            name: chr.name,
            origin: chr.origin,
            image: chr.image,
            json: JSON.stringify(chr)
        };
    }));

    
    return character;
}