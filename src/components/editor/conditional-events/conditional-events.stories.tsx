import type { Meta, StoryObj } from '@storybook/react';
import { ConditionalEvents } from './conditional-events';
import { IconSVG } from '../../icon/icon';

const meta: Meta<typeof ConditionalEvents> = {
  title: 'Editor/Conditional Events',
  component: ConditionalEvents,
};

export default meta;
type Story = StoryObj<typeof ConditionalEvents>;

export const Default: Story = {
  args: {
    providers: [
      {
        id: 'twitch',
        name: 'Twitch',
        icon: 'twitch-fill',
        color: '#A970FF',
      },
      {
        id: 'kick',
        name: 'Kick',
        color: '#53FC18',
        iconSVG: IconSVG.kick,
        textBlack: true,
      },
    ],
    events: [
      {
        providerId: 'twitch',
        events: [
          { label: 'New follower', value: 'follow' },
          { label: 'New subscriber', value: 'subscription' },
          { label: 'Bits donated', value: 'bits' },
          { label: 'Hype train begin', value: 'hype-train-begin' },
          { label: 'Hype train end', value: 'hype-train-end' },
          {
            label: 'Message contain',
            value: 'message',
            customElement: true,
            customElementLabel: 'Message contains',
          },
        ],
      },
      {
        providerId: 'kick',
        events: [
          { label: 'New follower', value: 'follow' },
          { label: 'New subscriber', value: 'subscription' },
        ],
      },
    ],
    onEventSelected: (providerId, eventId, customElement) => {
      console.log(providerId, eventId, customElement);
    },
  },
};
