import type { Meta, StoryObj } from '@storybook/react';
import { File } from './file';

const meta: Meta<typeof File> = {
  title: 'Forms/File',
  component: File,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof File>;

export const Default: Story = {
  args: {
    maxFiles: 1,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles, fileRejections, event) => {
      console.log(acceptedFiles, fileRejections, event);
    },
    text: 'Drag and drop your files here',
    buttonText: 'Choose a file',
    infos: ['Max 1 file', 'Max 10MB'],
  },
};
