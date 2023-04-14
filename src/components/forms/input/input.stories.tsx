import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['normal', 'small', 'large'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Input label',
    placeholder: 'Input placeholder',
    iconLeft: 'home-2-line',
    suffix: 'px',
    disabled: false,
    defaultValue: 'Input value',
    type: 'normal',
  },
};
