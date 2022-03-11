import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import { SearchBox } from './components/SearchBox';
import { ResidentList } from './components/ResidentList';
import { LocationInfo } from './components/LocationInfo';

function App() {

  const [dataRM, setDataRM] = useState({})


  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res =>{
        console.log(res.data)
        setDataRM(res.data)
      })
  }, [])
  

  

  return (
    <div className="App">
      <SearchBox setDataRM={setDataRM}/>
      <div className='all-body'>
        <LocationInfo data={dataRM}/>
        <ResidentList characters={dataRM.residents}/>
      </div>
    </div>
  );
}

export default App;
