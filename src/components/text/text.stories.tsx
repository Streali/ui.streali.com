import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    type: {
      options: ['content', 'little', 'medium', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Streali is the best streaming tool!',
    type: 'content',
    className: ' ',
  },
};
