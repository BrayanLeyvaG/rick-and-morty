import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ResidentInfo.css'

export const ResidentInfo = ({cLink}) => {

    const [cInfo, setCInfo] = useState({})
    
    useEffect(() => {
        axios.get(cLink)
            .then(res => setCInfo(res.data))
    }, [cLink])
    

  return (
    <div className='card'>
        <div>
          <p><i className='fas fa-circle' style={cInfo.status==='Alive'? {color:'green'} : cInfo.status==='Dead'? {color: 'red'}: {color: 'yellow'}}></i> {cInfo.status}</p>
        </div>
        <img src={cInfo.image}></img>
        <h5>{cInfo.name}</h5>
        <div>
          <p><b>Species: </b>{cInfo.species}</p>
          <p><b>Origin: </b>{cInfo.origin?.name}</p>
          <p><b>Episodes: </b>{cInfo.episode?.length}</p>
        </div>
    </div>
  )
}
