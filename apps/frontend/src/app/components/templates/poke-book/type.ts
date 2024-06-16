import type { PokeDetailComponentProps } from './_organisms/PokeDetail/types';
import type { PokeListComponentProps } from './_organisms/PokeList/types';

export type PokeBookTemplateProps = {
  isLoading: boolean;
  pokeListComponentProps: PokeListComponentProps;
  pokeDetailComponentProps: PokeDetailComponentProps;
};
