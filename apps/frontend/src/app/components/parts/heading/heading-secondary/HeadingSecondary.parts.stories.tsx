import type { Meta, StoryObj } from '@storybook/react';

import HeadingSecondary from './HeadingSecondary.parts';

export default {
  title: 'parts/Heading/HeadingSecondary',
  component: HeadingSecondary,
} as Meta<typeof HeadingSecondary>;

type Story = StoryObj<typeof HeadingSecondary>;

export const HeadingPrimaryComponent: Story = {
  render: () => <HeadingSecondary>Heading Secondary</HeadingSecondary>,
};
