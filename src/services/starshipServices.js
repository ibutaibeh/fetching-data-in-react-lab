const BASE_URL='https://swapi.info/api/starships'
const index =async ()=>{

    try {
        const res = await fetch(`${BASE_URL}`)
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }

}

export {index};