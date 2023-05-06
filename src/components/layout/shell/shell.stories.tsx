import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Logo } from '../../logo/logo';
import { Shell } from './shell';

const meta: Meta<typeof Shell> = {
  title: 'Layout/Shell',
  component: Shell,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Shell>;

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
    children: <div className="p-4">Page content</div>,
  },
};
