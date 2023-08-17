import type { Meta, StoryObj } from '@storybook/react';
import { Alignment } from './alignment';

const meta: Meta<typeof Alignment> = {
  title: 'Editor/Alignment',
  component: Alignment,
};

export default meta;
type Story = StoryObj<typeof Alignment>;

export const Default: Story = {
  args: {
    label: 'Alignment',
  },
};
