import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CharacterInfo.css'

export const CharacterInfo = ({cLink}) => {

    const [cInfo, setCInfo] = useState({})
    
    useEffect(() => {
        axios.get(cLink)
            .then(res => setCInfo(res.data))
    }, [cLink])
    

  return (
    <div className='card'>
        <img src={cInfo.image}></img>
        <h5>{cInfo.name}</h5>
        <p>{cInfo.status}</p>
        <p>{cInfo.species}</p>
        <p>{cInfo.origin?.name}</p>
        <p>{cInfo.episode?.length}</p>
    </div>
  )
}
