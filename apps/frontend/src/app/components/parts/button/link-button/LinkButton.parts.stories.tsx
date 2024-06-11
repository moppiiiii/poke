import type { Meta, StoryObj } from '@storybook/react';

import LinkButton from './LinkButton.parts';

export default {
  title: 'Parts/LinkButton',
  component: LinkButton,
} as Meta<typeof LinkButton>;

type Story = StoryObj<typeof LinkButton>;

export const LinkButtonComponent: Story = {
  render: () => <LinkButton href="/">Link Button</LinkButton>,
};
