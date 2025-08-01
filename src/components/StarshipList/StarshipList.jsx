import React from 'react'
import '../StarshipList/StarshipList.css'
import StarshipCard from '../StarshipCard/StarshipCard'

const StarshipList = (props) => {

  return (
    <>
    <h2>StarshipList</h2>
    <ul>
    {props.starshipData.map((ship,idx)=>(<li key={idx}>   
     
  <h3>{ship.name} </h3>
  <p>Class: {ship.starship_class} </p> 
  <p>Manufacturer: {ship.manufacturer}</p>
  <p>Model: {ship.model}</p>
    </li>))}
    </ul>
    </>
  )
}

export default StarshipList