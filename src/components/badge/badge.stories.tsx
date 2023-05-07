import type { Meta, StoryObj } from '@storybook/react';
import Badge from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    type: 'primary',
    text: 'Pro',
  },
};
