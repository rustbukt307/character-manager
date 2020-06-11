import React from 'react'

export default function ShowCharacters(props) {
  const { characters } = props;
  return (
    <>
    <hr />
      <h3>Characters</h3>
      {
        characters.map(character => (
          <p key={character.id}>{character.name}</p>
        ))
      }
    </>
  )
}
