import type { Meta, StoryObj } from '@storybook/react';

import Loading from './Loading.organism';

export default {
  title: 'Organisms/Loading',
  component: Loading,
} as Meta<typeof Loading>;

type Story = StoryObj<typeof Loading>;

export const LoadingComponent: Story = {
  render: () => <Loading />,
};
