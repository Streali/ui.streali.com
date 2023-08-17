import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar } from './toolbar';

const meta: Meta<typeof Toolbar> = {
  title: 'Editor/Toolbar',
  component: Toolbar,
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  args: {
    className: 'w-24',
    tools: [
      {
        title: 'Text',
        icon: 'text',
        onClick: () => console.log('text'),
      },
      {
        title: 'Image',
        icon: 'image-2-line',
        onClick: () => console.log('image'),
      },
      {
        title: 'Audio',
        icon: 'music-2-fill',
        onClick: () => console.log('audio'),
      },
      {
        title: 'Video',
        icon: 'vidicon-line',
        onClick: () => console.log('video'),
      },
    ],
  },
};
