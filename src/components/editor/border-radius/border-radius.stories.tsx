import type { Meta, StoryObj } from '@storybook/react';
import BorderRadius from './border-radius';

const meta: Meta<typeof BorderRadius> = {
  title: 'Editor/Border Radius',
  component: BorderRadius,
};

export default meta;
type Story = StoryObj<typeof BorderRadius>;

export const Default: Story = {
  args: {
    label: 'Border radius',
    value: {
      topLeft: 23,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0,
    },
    onChange: (value) => console.log(value),
  },
};
