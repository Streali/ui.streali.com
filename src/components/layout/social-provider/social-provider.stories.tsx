import type { Meta, StoryObj } from '@storybook/react';
import { SocialProvider } from './social-provider';
import { Input } from '../../forms/input/input';

const meta: Meta<typeof SocialProvider> = {
  title: 'Layout/Social Provider',
  component: SocialProvider,
};

export default meta;
type Story = StoryObj<typeof SocialProvider>;

export const Default: Story = {
  args: {
    icon: 'spotify-fill',
    name: 'spotify',
    username: 'willtraore',
    children: (
      <>
        <Input label="Client ID" disabled containerClassName="mb-3" />
        <Input label="Client secret" disabled />
      </>
    ),
  },
};
