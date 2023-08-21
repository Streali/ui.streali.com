import type { Meta, StoryObj } from '@storybook/react';
import { TitleRotate } from './title-rotate';
import { Icon, IconSVG } from '../../icon/icon';

const meta: Meta<typeof TitleRotate> = {
  title: 'Layout/Title Rotate',
  component: TitleRotate,
  decorators: [
    (Story) => (
      <div>
        <h1 className="text-4xl">
          The best platform for <Story /> streamer.
        </h1>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TitleRotate>;

export const Default: Story = {
  args: {
    elements: [
      <>
        <Icon name="twitch-fill" className="text-social-twitch" />
        <p className="text-social-twitch">twitch</p>
      </>,
      <>
        <Icon svg={IconSVG.kick} className="text-social-kick" />
        <p className="text-social-kick">kick</p>
      </>,
    ],
  },
};
