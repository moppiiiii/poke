import type { Meta, StoryObj } from '@storybook/react';

import NotFound from './NotFound.template';

export default {
  title: 'Templates/NotFound',
  component: NotFound,
} as Meta<typeof NotFound>;

type Story = StoryObj<typeof NotFound>;

export const LoadingComponent: Story = {
  render: () => <NotFound />,
};
