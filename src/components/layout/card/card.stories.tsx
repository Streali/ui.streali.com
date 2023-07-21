import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <div className="w-full h-full flex items-center justify-center">Card content</div>,
    title: 'Card Title',
  },
};
