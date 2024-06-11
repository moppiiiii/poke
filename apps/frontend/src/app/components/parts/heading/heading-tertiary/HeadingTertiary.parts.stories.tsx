import type { Meta, StoryObj } from '@storybook/react';

import HeadingTertiary from './HeadingTertiary.parts';

export default {
  title: 'parts/Heading/HeadingTertiary',
  component: HeadingTertiary,
} as Meta<typeof HeadingTertiary>;

type Story = StoryObj<typeof HeadingTertiary>;

export const HeadingPrimaryComponent: Story = {
  render: () => <HeadingTertiary>Heading Tertiary</HeadingTertiary>,
};
