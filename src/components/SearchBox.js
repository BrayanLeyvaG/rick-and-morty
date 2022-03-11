import React, { useState } from 'react'
import axios from 'axios';
import './SearchBox.css'
import logo from '../img/rnmlogo.webp'

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
    <div className='all-search'>
      <div className='search-container'>
        <img src={logo}></img>
        <input min='1' max='126' onChange={(e) => setSearch(e.target.value)} value={search} type='number' placeholder='Type a location id (1 to 126)'></input>
        <button onClick={searchID}>Search</button>
      </div>
    </div>
  )
}
