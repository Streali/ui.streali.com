import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessageEditor } from './chat-message-editor';

const meta: Meta<typeof ChatMessageEditor> = {
  title: 'Chat/Chat Message Editor',
  component: ChatMessageEditor,
};

export default meta;
type Story = StoryObj<typeof ChatMessageEditor>;

export const Default: Story = {
  args: {
    settings: {
      global: {
        spaceBetweenMessages: 24,
        alignment: 'left',
        layout: 'stack',
        order: [
          { id: 'name', name: 'Name' },
          { id: 'message', name: 'Message' },
        ],
        animation: 'fade-in-left',
        developer_mode: false,
      },
      container: {
        fullWidth: false,
        backgroundProviderColor: false,
        background: '#ffffff00',
        shadow: {
          color: '#000000',
          x: 0,
          y: 0,
          blur: 0,
        },
        border: {
          type: 'solid',
          color: '#000000',
          size: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
          },
        },
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        radius: {
          topLeft: 0,
          topRight: 0,
          bottomRight: 0,
          bottomLeft: 0,
        },
        alignment: 'left',
      },
      name: {
        fullWidth: false,
        textProviderColor: false,
        text: {
          fontFamily: 'Rubik',
          fontSize: 16,
          fontWeight: '700',
          color: '#000000',
          textAlign: 'left',
          textDecoration: 'none',
          fontStyle: 'normal',
          letterSpacing: 0,
          lineHeight: 100,
          textShadow: { x: 0, y: 0, blur: 0, color: '#000000' },
        },
        backgroundProviderColor: false,
        background: '#ffffff',
        shadow: {
          color: '#000000',
          x: 0,
          y: 0,
          blur: 0,
        },
        border: {
          type: 'solid',
          color: '#000000',
          size: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        margin: {
          top: 0,
          right: 0,
          bottom: 8,
          left: 0,
        },
        padding: {
          top: 6,
          right: 6,
          bottom: 6,
          left: 6,
        },
        radius: {
          topLeft: 4,
          topRight: 4,
          bottomRight: 4,
          bottomLeft: 4,
        },
        badges: {
          enabled: true,
          position: 'left',
          style: 'twitch',
          size: 12,
          space: 8,
          spaceBetween: 4,
        },
      },
      message: {
        fullWidth: false,
        textProviderColor: false,
        text: {
          fontFamily: 'Rubik',
          fontSize: 16,
          fontWeight: '400',
          color: '#000000',
          textAlign: 'left',
          textDecoration: 'none',
          fontStyle: 'normal',
          letterSpacing: 0,
          lineHeight: 100,
          textShadow: { x: 0, y: 0, blur: 0, color: '#000000' },
        },
        backgroundProviderColor: false,
        background: '#ffffff',
        shadow: {
          color: '#000000',
          x: 0,
          y: 0,
          blur: 0,
        },
        border: {
          type: 'solid',
          color: '#000000',
          size: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        padding: {
          top: 6,
          right: 6,
          bottom: 6,
          left: 6,
        },
        radius: {
          topLeft: 4,
          topRight: 4,
          bottomRight: 4,
          bottomLeft: 4,
        },
      },
    },
    onElementClick: (element) => console.log(element),
  },
};
