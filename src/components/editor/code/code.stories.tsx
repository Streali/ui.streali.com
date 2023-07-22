import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './code';

const meta: Meta<typeof Code> = {
  title: 'Editor/Code',
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    initialValue: '<p>Coucou</p>',
    className: 'h-[500px]',
    language: 'html',
  },
};
