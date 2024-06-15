import type { Pokemon } from '../../../graphql/generate/generated';

export type PokeBookTemplateProps = {
  isLoading: boolean;
  pokemons?: Pokemon[];
};
