import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    width: 225,
    height: 294,
  },
};
