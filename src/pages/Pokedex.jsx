import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/system';
import Filter from '../Components/Filter';
import maiuscula from '../helpers/Maiscula';
import TratamentoDasInfo from '../helpers/TratatamentoDasInfo';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [filtredPokemons, setFiltredPokemons] = useState([]);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 300; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      var pokemons = TratamentoDasInfo(res);
      setPokemons(pokemons);
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const searchPokemonsByName = (name) => {
    if (name == '') {
      setFiltredPokemons([]);
      return;
    } else {
      name = maiuscula(name);
      var filtred = [];
      for (var i in pokemons) {
        if (pokemons[i].name.includes(name)) {
          filtred.push(pokemons[i]);
        }
      }
      setFiltredPokemons(filtred);
    }
  };

  const searchPokemonsByType = (props) => {
    var filtred = [];
    for (var i in pokemons) {
      var type1 = pokemons[i].types[0].type.name;
      if (maiuscula(type1) == props) {
        filtred.push(pokemons[i]);
      }

      if (pokemons[i].types[1]) {
        var type2 = pokemons[i].types[1].type.name;
        if (maiuscula(type2) == props) {
          filtred.push(pokemons[i]);
        }
      }
    }
    setFiltredPokemons(filtred);
    //console.log(filtred);
  };

  return (
    <div>
      <main>
        <Filter
          pokemons={pokemons}
          filtredPokemons={filtredPokemons}
          searchPokemonsByName={searchPokemonsByName}
          searchPokemonsByType={searchPokemonsByType}
        />
      </main>
    </div>
  );
}

/*
  const [PokemonsByPage, setPokemonsByPage] = useState([]);
  const [page, setPage] = useState(1);

  const getPokemonsByPage = (page) => {
    var endpoints = [];
    var first = page * 50 - 49;
    var last = page * 50 - 1;
    for (var i = first; i < last; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemonsByPage(res));
  };
  const handleChangePage = (event, value) => {
    setPage(value);
    getPokemonsByPage(value);
  };
  */
