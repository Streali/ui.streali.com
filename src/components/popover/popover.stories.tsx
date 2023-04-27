import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './popover';
import Button from '../button/button';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button>Trigger</Button>,
    children: <div>Popover content</div>,
  },
};
