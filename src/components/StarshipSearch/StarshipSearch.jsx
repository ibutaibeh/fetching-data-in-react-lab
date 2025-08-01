import React, { useState } from 'react'
import '../StarshipSearch/StarshipSearch.css'
const StarshipSearch = (props) => {
const [formData,setFormData]= useState({
  name:''
})
    const handleChange=(event)=>{
    setFormData({...formData,[event.target.name]:event.target.value});
  }

const handleSubmit = (event)=>{
event.preventDefault()
props.handleDisplayStarship(formData)
setFormData({
    name:''
})
}
  return (
    <>
    <h2>Search</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Search Term:</label>
    <input type="text" name='name' value={formData.name} onChange={handleChange}/>
    <button>search</button>
    </form>
    </>
  )

}
export default StarshipSearch