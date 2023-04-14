import type { Meta, StoryObj } from '@storybook/react';
import Select from './select';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Select label',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    errorMessage: '',
    isMulti: false,
    placeholder: 'Select placeholder',
    iconLeft: 'home-2-line',
    disabled: false,
  },
};

export const Multi: Story = {
  args: {
    label: 'Select label',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    errorMessage: '',
    isMulti: true,
    placeholder: 'Select placeholder',
    iconLeft: 'home-2-line',
    disabled: false,
  },
};
