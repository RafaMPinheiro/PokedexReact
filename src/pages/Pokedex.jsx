import { useEffect, useState } from 'react';
import axios from 'axios';

import { Grid, Pagination } from '@mui/material';
import { Container } from '@mui/system';

import Cards from '../Components/Cards';
import HeaderBar from '../Components/HeaderBar';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [PokemonsByPage, setPokemonsByPage] = useState([]);
  const [page, setPage] = useState(1);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 1000; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

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

  useEffect(() => {
    getPokemons();
    getPokemonsByPage(page);
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
    getPokemonsByPage(value);
  };

  return (
    <div>
      <header>
        <HeaderBar />
      </header>
      <main>
        <Container fullwidth="true" sx={{ marginTop: '1em' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            direction="row"
            justifyContent="center"
          >
            {PokemonsByPage.map((pokemon, id) => (
              <Grid item xs={2} sm={3} md={3} key={id}>
                <Cards fullwidth="true" pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
          <Pagination count={1000 / 50} onChange={handleChangePage} />
        </Container>
      </main>
    </div>
  );
}
