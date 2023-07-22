import type { Meta, StoryObj } from '@storybook/react';
import { ChatDemoToolbar } from './chat-demo-toolbar';

const meta: Meta<typeof ChatDemoToolbar> = {
  title: 'Chat/Chat Demo Toolbar',
  component: ChatDemoToolbar,
};

export default meta;
type Story = StoryObj<typeof ChatDemoToolbar>;

export const Default: Story = {
  args: {},
};
