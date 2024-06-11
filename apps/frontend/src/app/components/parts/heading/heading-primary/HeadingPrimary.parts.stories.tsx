import type { Meta, StoryObj } from '@storybook/react';

import HeadingPrimary from './HeadingPrimary.parts';

export default {
  title: 'parts/Heading/HeadingPrimary',
  component: HeadingPrimary,
} as Meta<typeof HeadingPrimary>;

type Story = StoryObj<typeof HeadingPrimary>;

export const HeadingPrimaryComponent: Story = {
  render: () => <HeadingPrimary>Heading Primary</HeadingPrimary>,
};
