import { useState, useEffect } from 'react'
import MyCard from './MyCard'

const Search = () => {
  const [personajes, setPersonajes] = useState([])
  const [search, setSearch] = useState('')

  const url = 'https://dragonball-api.com/api/characters?limit=58'

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPersonajes(data.items)
  }
  useEffect(() => {
    getData()
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value) // Cambia el estado inmediatamente al escribir
  }

  let results = []
  if (!search) {
    results = personajes // Si no se está buscando, muestra todos los personajes
  } else {
    results = personajes.filter((personaje) =>
      personaje.name?.toLowerCase().includes(search.toLowerCase()) ||
            personaje.gender?.toLowerCase().includes(search.toLowerCase()) ||
            personaje.race?.toLowerCase().includes(search.toLowerCase())
    )
  }

  return (
    <>
      <input
        type='text'
        className='form-control'
        onChange={handleSearch}
      />
      <div className='container'>
        {results.map((personaje) => (
          <MyCard
            key={personaje.id}
            image={personaje.image}
            title={personaje.name}
            genero={personaje.gender}
            raza={personaje.race}
            grupo={personaje.affiliation}
          />
        ))}
      </div>
    </>
  )
}

export default Search
