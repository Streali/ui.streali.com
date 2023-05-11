import type { Meta, StoryObj } from '@storybook/react';
import Size from './size';

const meta: Meta<typeof Size> = {
  title: 'Editor/Size',
  component: Size,
  argTypes: {
    type: {
      options: ['border', 'radius'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Size>;

export const Default: Story = {
  args: {
    type: 'border',
  },
};
