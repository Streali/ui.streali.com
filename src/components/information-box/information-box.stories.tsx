import type { Meta, StoryObj } from '@storybook/react';
import { InformationBox } from './information-box';
import { Button } from '../button/button';

const meta: Meta<typeof InformationBox> = {
  title: 'Information Box',
  component: InformationBox,
  argTypes: {
    type: {
      options: ['info', 'warning', 'error'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InformationBox>;

export const Default: Story = {
  args: {
    text: 'This is an information bar',
    type: 'info',
    title: 'Information',
    icon: 'information-fill',
    buttons: <Button>View the information</Button>,
  },
};

export const Warning: Story = {
  args: {
    text: 'This is an information bar',
    type: 'warning',
    title: 'Information',
    icon: 'information-fill',
    buttons: <Button color="warning">View the information</Button>,
  },
};

export const Error: Story = {
  args: {
    text: 'This is an information bar',
    type: 'error',
    title: 'Information',
    icon: 'information-fill',
    buttons: <Button color="error">View the information</Button>,
  },
};
