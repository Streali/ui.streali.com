import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  argTypes: {
    size: {
      options: ['normal', 'small'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Switch label',
    size: 'normal',
    disabled: false,
  },
};
