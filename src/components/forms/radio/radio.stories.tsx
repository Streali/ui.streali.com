import type { Meta, StoryObj } from '@storybook/react';
import Radio from './radio';

const meta: Meta<typeof Radio> = {
  title: 'Forms/Radio',
  component: Radio,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    name: 'radio',
    align: 'horizontal',
  },
};
