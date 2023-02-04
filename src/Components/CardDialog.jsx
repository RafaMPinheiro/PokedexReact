import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Cards from './Cards';
import StarRating from './StarRating';
import Conditions from './Conditions';

export default function CardDialog({ pokemon }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <Cards fullwidth="true" pokemon={pokemon} />
      </Button>
      <Dialog fullWidth={true} open={open} onClose={handleClose}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '40vw',
            padding: '0 1em 0 0',
          }}
        >
          <div
            style={{
              backgroundColor: pokemon.color,
              width: '40%',
              height: '89vh',
            }}
          >
            <img src={pokemon.image} alt={pokemon.name} height={'280vh'} />
          </div>
          <div
            style={{
              margin: '1em 0 0 5em',
            }}
          >
            <h1>{pokemon.name}</h1>
            <h2 style={{ color: pokemon.color, marginBottom: '1em' }}>
              {pokemon.type}
            </h2>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                marginBottom: '0.5em',
              }}
            >
              Altura: {pokemon.height / 10} m
            </h3>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                marginBottom: '0.5em',
              }}
            >
              Peso: {pokemon.weight / 10} kg
            </h3>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
              }}
            >
              Abilities:
              <span
                style={{
                  fontSize: '0.75em',
                }}
              >
                {pokemon.abilities.first} e {pokemon.abilities.second}
              </span>
            </h3>
            <StarRating pokemon={pokemon} />
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

//<DialogActions>
//<Button onClick={handleClose}>Close</Button>
//</DialogActions>
