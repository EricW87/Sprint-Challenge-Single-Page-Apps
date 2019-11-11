import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(-1);
  const [index, setIndex] = useState(-1);
  const max = 1;
  console.log(total, page, characters);


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {

          setCharacters(response.data.results);
          //setTotal(response.data.info.pages);
          //setPage(page + 1);
      })
      .catch(error => console.log(`Error: ${error}`));

  }, []);

  //if(total === -1 || page < max ) return <h2>Loading...</h2>

  const CharacterSection = styled.section`
    border: solid 2px black;
    padding: 5%;
    h2 {
      text-align: center;
    }
  `;

  function findCharacter(name) {
    setIndex(characters.findIndex( (e) =>
      e.name === name
    ));
  };

  function clearCharacter() {
    setIndex(-1);
  }

  return (
    <CharacterSection>
      <h2>Rick and Morty Characters</h2>
      <SearchForm findCharacter={findCharacter} clearCharacter={clearCharacter}/>
      {index > -1 ? <CharacterCard key={characters[index].id} character={characters[index]}/> : characters.map(character => <CharacterCard key={character.id} character={character}/>)}
    </CharacterSection>
  );
}
