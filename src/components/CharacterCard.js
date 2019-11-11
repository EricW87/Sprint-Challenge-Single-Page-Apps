import React from "react";
import styled from "styled-components";

const CharacterCard = (props) => {

  const CardSection = styled.section`
    width: 70%;
    height: 500px;
    margin: 0 auto;
    background-image: url(${props.character.image});
    background-size: cover;

    h3 {
      text-align: center;
    }
  `;
  return (
    <CardSection>
      <h3>{props.character.name}</h3>
    </CardSection>
  );
}

export default CharacterCard;
