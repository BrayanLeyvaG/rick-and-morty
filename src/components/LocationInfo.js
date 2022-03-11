import React from 'react'
import './LocationInfo.css'

export const LocationInfo = ({data}) => {
  return (
    <div className='all-localinfo'>
        <h3>{data.name}</h3>
        <div className='sub-info'>
            <p><b>Type: </b>{data.type}</p>
            <p><b>Dimension: </b>{data.dimension}</p>
            <p><b>Population: </b>{data.residents?.length}</p>
        </div>
    </div>
  )
}
