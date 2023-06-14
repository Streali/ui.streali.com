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
    onChange: (border) => {
      console.log(border);
    },
    label: 'Border',
  },
};
