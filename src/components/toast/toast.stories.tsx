import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider } from './toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <>
        <Story />
        <ToastProvider />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    type: 'default',
    title: 'Toast title',
    message: 'Toast message',
    icon: 'thumb-up-fill',
    buttons: [
      {
        title: 'View information',
        onClick: () => console.log('Button 1 clicked'),
      },
    ],
  },
};
