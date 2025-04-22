export type Pokemon = {
  number: string;
  name: string;
};

export type PokemonListProps = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: PokemonListProps) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
