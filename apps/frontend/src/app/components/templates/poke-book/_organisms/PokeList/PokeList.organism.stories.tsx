import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { POKEMONS } from '../../_data/pokemons.data';
import PokeList from './PokeList.organism';

export default {
  title: 'Templates/PokeBook/Organisms/PokeList',
  component: PokeList,
} as Meta<typeof PokeList>;

type Story = StoryObj<typeof PokeList>;

export const PokeListComponent: Story = {
  args: {
    pokemons: POKEMONS,
    onClickPokemon: action('clicked pokemon!!!'),
  },
};
