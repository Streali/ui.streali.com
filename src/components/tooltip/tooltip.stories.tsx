import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';
import { Button } from '../button/button';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <Button>Hover me</Button>,
    content: 'Tooltip content',
  },
};
