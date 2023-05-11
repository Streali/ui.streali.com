import type { Meta, StoryObj } from '@storybook/react';
import { Border } from './border';

const meta: Meta<typeof Border> = {
  title: 'Editor/Border',
  component: Border,
};

export default meta;
type Story = StoryObj<typeof Border>;

export const Default: Story = {
  args: {
    type: 'solid',
    color: '#ff0000',
    onChange: (color: string, type: string) => {
      console.log('color', color);
      console.log('type', type);
    },
    label: 'Border',
  },
};
