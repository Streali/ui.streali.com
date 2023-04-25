import type { Meta, StoryObj } from '@storybook/react';
import { Spacing } from './spacing';

const meta: Meta<typeof Spacing> = {
  title: 'Editor/Spacing',
  component: Spacing,
};

export default meta;
type Story = StoryObj<typeof Spacing>;

export const Default: Story = {
  args: {
    border: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
};
