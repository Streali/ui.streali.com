import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['60', '48', '32', '24', '16'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    username: 'WillTraore',
    url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a1b61958-34f7-4105-9ddc-35317a27815a-profile_image-70x70.png',
    size: '16',
  },
};
