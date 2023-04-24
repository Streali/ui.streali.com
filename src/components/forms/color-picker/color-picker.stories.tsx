import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './color-picker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Forms/Color Picker',
  component: ColorPicker,
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    value: '#ffffff',
    haveInput: true,
    errorMessage: 'Error message',
  },
};
