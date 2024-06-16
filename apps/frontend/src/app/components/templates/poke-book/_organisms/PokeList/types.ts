import type { Pokemon } from '@/app/graphql/generate/generated';

export type PokeListComponentProps = {
  pokemons?: Pokemon[];
  onClickPokemon: (id: number) => void;
};
