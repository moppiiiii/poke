import type { Meta, StoryObj } from '@storybook/react';

import PokemonCard from './PokemonCard.organism';

export default {
  title: 'Organisms/PokemonCard',
  component: PokemonCard,
} as Meta<typeof PokemonCard>;

type Story = StoryObj<typeof PokemonCard>;

export const PokemonCardComponent: Story = {
  args: {
    id: 1,
    name: 'bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
};
