import React from 'react'

const StarshipCard = (props) => {
  return (
    <>
    <p>Number of results {props.displayStarships.length}</p>
    {props.displayStarships.length>0 ?(<button onClick={props.showAllShips}>show all ships</button>):(<></>)}
    <ul>
{props.displayStarships.map((ship,idx)=>(<li key={idx}> 
  <h3>{ship.name} </h3>
  <p>Class: {ship.starship_class} </p> 
  <p>Manufacturer: {ship.manufacturer}</p>
  <p>Model: {ship.model}</p>
  
     
  </li>))}

    </ul>
    </>
  )
}

export default StarshipCard