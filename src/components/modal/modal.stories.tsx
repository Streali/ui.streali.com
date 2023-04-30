import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { Button } from '../button/button';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div className="w-screen h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    trigger: <Button>Open modal</Button>,
    children: <p>Modal content</p>,
    title: 'Modal title',
    open: false,
  },
};
