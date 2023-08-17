import type { Meta, StoryObj } from '@storybook/react';
import { MinWidthWindow } from './min-width-window';

const meta: Meta<typeof MinWidthWindow> = {
  title: 'Layout/Min Width Window',
  component: MinWidthWindow,
};

export default meta;
type Story = StoryObj<typeof MinWidthWindow>;

export const Default: Story = {
  args: {
    minWidth: 5000,
    content: 'Oh nooo! Your window size is too little!',
  },
};
