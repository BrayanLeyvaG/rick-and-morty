import React from 'react'
import { CharacterInfo } from './CharacterInfo'
import './List.css'

export const List = ({characters}) => {

    console.log(characters)
  return (
    <div className='card-box'>
        {characters?.map((character) =>(
                <CharacterInfo key={character} cLink={character}/>
        ))}
    </div>
  )
}
