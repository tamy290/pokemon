import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState(null)
  const [see, setSee] = useState(false);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0')
      .then(response => { setPokemons(response.data.results); })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const fetchPokemons = () => {
    setSee(!see);
  };

  return (
    <div>
      <h1>Lista de Pokemon</h1>
      <button onClick={fetchPokemons}>Fetch Pokemon</button>
      <ul>
        {see && pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))} ;
      </ul>
    </div>
  );
};

export default App;
