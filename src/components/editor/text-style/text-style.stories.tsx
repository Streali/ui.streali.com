import type { Meta, StoryObj } from '@storybook/react';
import { TextStyle } from './text-style';

const meta: Meta<typeof TextStyle> = {
  title: 'Editor/Text Style',
  component: TextStyle,
};

export default meta;
type Story = StoryObj<typeof TextStyle>;

export const Default: Story = {
  args: {
    settings: {
      fontFamily: 'Open Sans',
      fontSize: 16,
      color: '#000000',
      fontWeight: '400',
      textDecoration: 'none',
      fontStyle: 'italic',
      textAlign: 'left',
      letterSpacing: 0,
      lineHeight: 1.5,
      textShadow: {
        color: '#000000',
        x: 0,
        y: 0,
        blur: 0,
      },
    },
    fonts: [
      {
        family: 'Open Sans',
        variants: [{ weight: 400, file: 'OpenSans-Regular.ttf' }],
        from: 'google',
      },
      {
        family: 'Montserrat',
        variants: [{ weight: 400, file: 'OpenSans-Regular.ttf' }],
        from: 'google',
      },
      {
        family: 'Roboto',
        variants: [{ weight: 400, file: 'OpenSans-Regular.ttf' }],
        from: 'fontshare',
      },
    ],
  },
};
