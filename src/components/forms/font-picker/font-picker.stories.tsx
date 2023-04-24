import type { Meta, StoryObj } from '@storybook/react';
import FontPicker from './font-picker';

const meta: Meta<typeof FontPicker> = {
  title: 'Editor/Font Picker',
  component: FontPicker,
};

export default meta;
type Story = StoryObj<typeof FontPicker>;

export const Default: Story = {
  args: {
    value: 'Open Sans',
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
    onChange: (font) => console.log(font),
  },
};
