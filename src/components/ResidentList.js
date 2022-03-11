import React from 'react'
import { ResidentInfo } from './ResidentInfo'
import './ResidentList.css'

export const ResidentList = ({characters}) => {

    console.log(characters)
  return (
    <div className='card-box'>
        {characters?.map((character) =>(
                <ResidentInfo key={character} cLink={character}/>
        ))}
    </div>
  )
}
