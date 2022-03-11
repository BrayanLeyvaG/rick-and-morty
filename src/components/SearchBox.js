import React, { useState } from 'react'
import axios from 'axios';

export const SearchBox = ({setDataRM}) => {
    const [search, setSearch] = useState('')

    function searchID() {
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
            .then(res => {
                console.log(res.data)
                setDataRM(res.data)
            })
        
    }

  return (
    <div>
        <input onChange={(e) => setSearch(e.target.value)} value={search} type='text'></input>
        <button onClick={searchID}>Search</button>
    </div>
  )
}
