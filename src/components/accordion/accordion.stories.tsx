import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Item 1',
        content: 'Content 1',
      },
      {
        title: 'Item 2',
        content: 'Content 2',
      },
    ],
    defaultOpens: ['0'],
  },
};
