import type { Meta, StoryObj } from '@storybook/react';
import { TitleBar } from './title-bar';

const meta: Meta<typeof TitleBar> = {
  title: 'Editor/Title Bar',
  component: TitleBar,
};

export default meta;
type Story = StoryObj<typeof TitleBar>;

export const Default: Story = {
  args: {
    title: 'Default Title',
    devMode: true,
    devModeChecked: true,
  },
};
