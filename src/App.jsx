import React from 'react'
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import StarshipList from './components/StarshipList/StarshipList'
import StarshipCard from './components/StarshipCard/StarshipCard'
import { useState } from 'react'
import { useEffect } from 'react'
import * as starshipService from './services/starshipServices'

const App = () => {
  const [starshipData,setStarshipData]= useState([])
  const [displayStarships,setDisplayStarships]= useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const data = await starshipService.index()
      setStarshipData(data)
    }

    fetchData();
   }, [])
  
const handleDisplayStarship =(formData)=>{
const filterData = starshipData.filter(
  (ship)=>(ship.name.toLowerCase().includes(formData.name.toLowerCase())))
  setDisplayStarships(filterData);
}

const showAllShips =()=>{
  setDisplayStarships([])
}
  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch displayStarships={displayStarships} handleDisplayStarship={handleDisplayStarship}/>
     {displayStarships.length>0 ? (<></>) : (<p>Number of results {displayStarships.length}</p>)}
    {displayStarships.length>0?(<StarshipCard displayStarships={displayStarships} showAllShips={showAllShips} />):(
    <StarshipList starshipData={starshipData} displayStarships={displayStarships}/>
    )}
    </>
  )
}

export default App