import React from 'react'
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import StarshipList from './components/StarshipList/StarshipList'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [starshipData,setStarshipData]= useState([])
  const [displayStarships,setDisplayStarships]= useState([])

  return (
    <>
    <h1>Starship App</h1>
    <StarshipSearch/>
    <StarshipList/>
    </>
  )
}

export default App