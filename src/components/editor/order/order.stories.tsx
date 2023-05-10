import type { Meta, StoryObj } from '@storybook/react';
import { Order } from './order';

const meta: Meta<typeof Order> = {
  title: 'Order',
  component: Order,
};

export default meta;
type Story = StoryObj<typeof Order>;

export const Default: Story = {
  args: {
    elements: [
      { name: 'First', id: '1' },
      { name: 'Second', id: '2' },
      { name: 'Third', id: '3' },
    ],
  },
};
