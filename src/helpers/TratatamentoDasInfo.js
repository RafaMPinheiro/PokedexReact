import maiuscula from './Maiscula';

export default function TratamentoDasInfo(props) {
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

  const pokemons = [];
  for (let i in props) {
    const pokemon = {
      name: maiuscula(props[i].data.name),
      id: props[i].data.id,
      image: props[i].data.sprites.other.home.front_default,
      types: props[i].data.types,
      type: maiuscula(props[i].data.types[0].type.name),
      color: colours[props[i].data.types[0].type.name],
      stats: {
        hp: props[i].data.stats[0].base_stat,
        attack: props[i].data.stats[1].base_stat,
        defense: props[i].data.stats[2].base_stat,
        speed: props[i].data.stats[5].base_stat,
      },
      abilities: {
        first: maiuscula(props[i].data.abilities[0].ability.name),
        second: '',
      },
      height: props[i].data.height,
      weight: props[i].data.weight,
    };

    if (props[i].data.types.length > 1) {
      pokemon.type += ` | ${maiuscula(props[i].data.types[1].type.name)}`;
    }
    if (props[i].data.abilities[1]) {
      pokemon.abilities.second = maiuscula(
        props[i].data.abilities[1].ability.name
      );
    }
    pokemons.push(pokemon);
  }
  return pokemons;
}
