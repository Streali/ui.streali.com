import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'error', 'transparent', 'warning', 'success', 'stroke'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    iconLeft: '',
    iconRight: '',
    disabled: false,
  },
};
