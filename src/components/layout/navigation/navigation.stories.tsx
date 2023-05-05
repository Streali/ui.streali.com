import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './navigation';
import { BrowserRouter } from 'react-router-dom';
import { Logo } from '../../logo/logo';

const meta: Meta<typeof Navigation> = {
  title: 'Layout/Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    logo: <Logo />,
    user: {
      username: 'Willtraore',
      avatarUrl:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/a1b61958-34f7-4105-9ddc-35317a27815a-profile_image-70x70.png',
      menu: [
        { label: 'Profile' },
        { label: 'Streali Pro' },
        { label: 'Logout', onClick: () => console.log('logout') },
      ],
    },
    navigation: [
      { label: 'Dashboard', link: '/dashboard', icon: 'dashboard-line' },
      { label: 'Chat', link: '/chat', icon: 'message-3-line' },
      { label: 'Settings', link: '/settings', icon: 'settings-3-line' },
    ],
    bottomNavigation: [
      { label: 'About', link: '/', external: false },
      { label: 'Help', link: '/', external: false },
      { label: 'Terms', link: '/', external: false },
    ],
    version: 'v1.0.0',
  },
};
