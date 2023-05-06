import type { Meta, StoryObj } from '@storybook/react';
import { InformationBar } from './information-bar';

const meta: Meta<typeof InformationBar> = {
  title: 'Information Bar',
  component: InformationBar,
  argTypes: {
    type: {
      options: ['info', 'warning', 'error'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InformationBar>;

export const Default: Story = {
  args: {
    text: 'This is an information bar',
    type: 'info',
    displayOneTime: false,
  },
};
