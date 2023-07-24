import type { Meta, StoryObj } from '@storybook/react';
import { CodeEditor } from './code-editor';

const meta: Meta<typeof CodeEditor> = {
  title: 'Editor/Code Editor',
  component: CodeEditor,
};

export default meta;
type Story = StoryObj<typeof CodeEditor>;

export const Default: Story = {
  args: {
    html: `<div>Hello world</div>`,
    css: `div { color: red; }`,
    js: `console.log('Hello world');`,
  },
};
