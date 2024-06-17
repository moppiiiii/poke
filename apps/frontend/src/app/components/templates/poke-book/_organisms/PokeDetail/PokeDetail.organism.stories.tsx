import type { Meta, StoryObj } from '@storybook/react';

import { POKEMON_DETAIL } from '../../_data/pokemon-detail.data';
import PokeDetail from './PokeDetail.organism';

export default {
  title: 'Templates/PokeBook/Organisms/PokeDetail',
  component: PokeDetail,
} as Meta<typeof PokeDetail>;

type Story = StoryObj<typeof PokeDetail>;

export const PokeListComponent: Story = {
  args: {
    pokemonDetail: POKEMON_DETAIL,
  },
};
