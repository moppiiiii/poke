import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { POKEMON_DETAIL } from './_data/pokemon-detail.data';
import { POKEMONS } from './_data/pokemons.data';
import PokeBook from './PokeBook.template';

export default {
  title: 'Templates/PokeBook/PokeBookTemplate',
  component: PokeBook,
} as Meta<typeof PokeBook>;

type Story = StoryObj<typeof PokeBook>;

export const PokeBookTemplate: Story = {
  args: {
    isLoading: false,
    pokeListComponentProps: {
      pokemons: POKEMONS,
      onClickPokemon: action('clicked pokemon!!!'),
    },
    pokeDetailComponentProps: {
      pokemonDetail: POKEMON_DETAIL,
    },
  },
};
