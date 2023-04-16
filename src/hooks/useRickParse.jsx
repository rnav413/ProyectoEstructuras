import React from "react";

export const useRickParse = (props) => {

    const convertCharacterToArray = (characters) => {
        return JSON.parse(characters);
      }

  return {convertCharacterToArray};
}