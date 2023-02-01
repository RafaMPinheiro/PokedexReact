import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards(props) {
  const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  var pokemon = {
    name: props.pokemon.data.name,
    id: props.pokemon.data.id,
    image: props.pokemon.data.sprites.other.home.front_default,
    type: props.pokemon.data.types[0].type.name,
    color: colours[props.pokemon.data.types[0].type.name],
  };

  if (props.pokemon.data.types.length > 1) {
    pokemon.type += ` | ${props.pokemon.data.types[1].type.name}`;
  }

  return (
    <Card sx={{ maxWidth: '15em', bgcolor: pokemon.color }}>
      <CardActionArea>
        <CardMedia
          sx={{ width: 160, height: 160, margin: 'auto' }}
          image={props.pokemon.data.sprites.other.home.front_default}
          title={props.pokemon.data.name}
        />
        <CardContent direction="row">
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.id + ' | ' + pokemon.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {pokemon.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
