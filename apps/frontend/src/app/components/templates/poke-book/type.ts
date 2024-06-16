import type { PokemonDetail } from '../../../graphql/generate/generated';
import type { PokeListComponentProps } from './_organisms/PokeList/types';

export type PokeBookTemplateProps = {
  isLoading: boolean;
  pokeListComponentProps: PokeListComponentProps;
  pokemonDetail?: PokemonDetail;
};
