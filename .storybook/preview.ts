import type { Preview } from '@storybook/react';
import '../src/index.scss';

const preview: Preview = {
  parameters: {
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
