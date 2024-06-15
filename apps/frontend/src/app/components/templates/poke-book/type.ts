import type { Pokemon, PokemonDetail } from '../../../graphql/generate/generated';

export type PokeBookTemplateProps = {
  isLoading: boolean;
  pokemons?: Pokemon[];
  pokemonDetail?: PokemonDetail;
  onClickPokemon: (id: number) => void;
};
