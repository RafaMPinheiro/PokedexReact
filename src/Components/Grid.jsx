import { Grid, Skeleton } from '@mui/material';
import React from 'react';
import CardDialog from './CardDialog';

function GridsCards({ pokemons, filtredPokemons }) {
  var skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (pokemons.length && filtredPokemons.length == 0) {
    return pokemons.map((pokemon, id) => (
      <Grid item xs={2} sm={3} md={3} key={id}>
        <CardDialog pokemon={pokemon} />
      </Grid>
    ));
  } else if (filtredPokemons.length > 0) {
    return filtredPokemons.map((pokemon, id) => (
      <Grid item xs={2} sm={3} md={3} key={id}>
        <CardDialog pokemon={pokemon} />
      </Grid>
    ));
  } else {
    return skeleton.map((id) => (
      <Grid item xs={2} sm={3} md={3} key={id}>
        <Skeleton variant="rounded" width={240} height={260} />
      </Grid>
    ));
  }
}

export default function Grids({ pokemons, filtredPokemons }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 6, md: 12 }}
      direction="row"
      justifyContent="center"
    >
      <GridsCards pokemons={pokemons} filtredPokemons={filtredPokemons} />
    </Grid>
  );
}
