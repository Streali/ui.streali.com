import type { Meta, StoryObj } from '@storybook/react';
import Slider from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    label: 'Slider label',
    haveInput: true,
    inputSuffix: 'px',
  },
};
