import React from 'react'
import { CharacterInfo } from './CharacterInfo'

export const List = ({characters}) => {

    console.log(characters)
  return (
    <div>
        {characters?.map((character) =>(
                <CharacterInfo key={character} cLink={character}/>
        ))}
    </div>
  )
}
