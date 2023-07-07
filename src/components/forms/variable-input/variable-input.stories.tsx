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
    data: [
      {
        id: '1',
        display: 'First Name',
      },
      {
        id: '2',
        display: 'Last Name',
      },
      {
        id: '3',
        display: 'Email',
      },
    ],
  },
};
