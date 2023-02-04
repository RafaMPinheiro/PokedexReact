import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function StarRating({ pokemon }) {
  const [valueHp, setValueHP] = useState(1);
  const [valueAttack, setValueAttack] = useState(1);
  const [valueDefense, setValueDefense] = useState(1);
  const [valueSpeed, setValueSpeed] = useState(1);

  const max = { hp: 255, attack: 181, defense: 230, speed: 200 };

  if (valueHp == 1) {
    //Regra de 3 para calcular o valor do rating
    var hp = ((pokemon.stats.hp * 5) / max.hp).toFixed(1);
    var attack = ((pokemon.stats.attack * 5) / max.attack).toFixed(1);
    var defense = ((pokemon.stats.defense * 5) / max.defense).toFixed(1);
    var speed = ((pokemon.stats.speed * 5) / max.speed).toFixed(1);

    //Setando o valor do rating
    setValueHP(parseFloat(hp));
    setValueAttack(parseFloat(attack));
    setValueDefense(parseFloat(defense));
    setValueSpeed(parseFloat(speed));
  }

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography style={{ marginTop: '2em' }} component="legend">
        HP: {pokemon.stats.hp}
      </Typography>
      <Rating name="read-only" value={valueHp} precision={0.1} readOnly />
      <Typography style={{ marginTop: 0 }} component="legend">
        Attack: {pokemon.stats.attack}
      </Typography>
      <Rating name="read-only" value={valueAttack} precision={0.1} readOnly />
      <Typography style={{ marginTop: 0 }} component="legend">
        Defense: {pokemon.stats.defense}
      </Typography>
      <Rating name="read-only" value={valueDefense} precision={0.1} readOnly />
      <Typography style={{ marginTop: 0 }} component="legend">
        Speed: {pokemon.stats.speed}
      </Typography>
      <Rating name="read-only" value={valueSpeed} precision={0.1} readOnly />
    </Box>
  );
}
