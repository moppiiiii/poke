import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header.organism';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const HeaderComponent: Story = {
  render: () => <Header />,
};
