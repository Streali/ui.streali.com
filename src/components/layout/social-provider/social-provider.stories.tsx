import type { Meta, StoryObj } from '@storybook/react';
import { SocialProvider } from './social-provider';

const meta: Meta<typeof SocialProvider> = {
  title: 'Layout/Social Provider',
  component: SocialProvider,
};

export default meta;
type Story = StoryObj<typeof SocialProvider>;

export const Default: Story = {
  args: {
    icon: 'twitch-fill',
    provider: 'twitch',
    isConnected: false,
    isConnectedContent: '@willtraore',
    connectWithInput: false,
  },
};
