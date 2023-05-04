import { Toaster } from 'react-hot-toast';
import type { Preview } from '@storybook/react';
import '../src/index.scss';
import streali from './streali';

const preview: Preview = {
  parameters: {
    docs: {
      theme: streali,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#101016',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
  },
};

export default preview;
