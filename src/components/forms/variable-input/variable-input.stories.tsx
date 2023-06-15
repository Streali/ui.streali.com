import type { Meta, StoryObj } from '@storybook/react';
import { VariableInput } from './variable-input';

const meta: Meta<typeof VariableInput> = {
  title: 'Forms/Variable Input',
  component: VariableInput,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof VariableInput>;

export const Default: Story = {
  args: {
    label: 'Variable Textarea',
    errorMessage: '',
  },
};
