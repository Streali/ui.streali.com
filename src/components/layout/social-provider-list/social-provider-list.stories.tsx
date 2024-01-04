import type { Meta, StoryObj } from '@storybook/react';
import { SocialProviderList } from './social-provider-list';
import { Input } from '../../forms/input/input';

const meta: Meta<typeof SocialProviderList> = {
  title: 'Layout/Social Provider List',
  component: SocialProviderList,
};

export default meta;
type Story = StoryObj<typeof SocialProviderList>;

export const Default: Story = {
  args: {
    title: 'Connect your social accounts',
    text: 'Connect your social accounts to get the most out of your experience.',
    disabledProviders: [],
    providers: [
      {
        name: 'Twitch',
        icon: 'twitch-fill',
        link: '#',
        iconClassName: 'text-social-twitch',
        category: 'stream',
      },
      {
        name: 'Spotify',
        icon: 'spotify-fill',
        link: '#',
        iconClassName: 'text-green-500',
        category: 'music',
        modal: {
          title: 'Connect Spotify',
          content: <Input label="Client ID" />,
        },
      },
    ],
  },
};
