import { useState, useEffect } from 'react';
import MyCard from './MyCard';

const Search = () => {
    const [personajes, setPersonajes] = useState([]);
    const [search, setSearch] = useState("");

    const url = "https://dragonball-api.com/api/characters?limit=58";

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPersonajes(data.items);
    };
    useEffect(() => {
        getData();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);  // Actualiza el estado del campo de búsqueda
    };

    // Filtrado de datos
    let results = [];
    if (!search) {
        results = personajes;
    } else {
        results = personajes.filter((personaje) =>
            personaje.name?.toLowerCase().includes(search.toLowerCase()) ||
            personaje.age?.toString().toLowerCase().includes(search.toLowerCase()) ||
            personaje.gender?.toLowerCase().includes(search.toLowerCase()) ||
            personaje.race?.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Render a la vista
    return (
        <>
            <input
                type="text"
                className="form-control"
                onChange={handleSearch}
            />
            <div className="container">
                {results.map((personaje) => (
                    <MyCard
                        key={personaje.id}
                        image={personaje.image} // Usa 'img' para la imagen
                        title={personaje.name}
                        genero={personaje.gender}
                        raza={personaje.race}
                        grupo={personaje.affiliation}
                    />
                ))}
            </div>
        </>
    );
};

export default Search;
