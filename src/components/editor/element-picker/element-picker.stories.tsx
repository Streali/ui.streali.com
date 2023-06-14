import type { Meta, StoryObj } from '@storybook/react';
import { ElementPicker } from './element-picker';
import { IconSVG } from '../../icon/icon';

const meta: Meta<typeof ElementPicker> = {
  title: 'Editor/Element Picker',
  component: ElementPicker,
};

export default meta;
type Story = StoryObj<typeof ElementPicker>;

export const Default: Story = {
  args: {
    label: 'Layout',
    elements: [
      {
        id: '1',
        name: 'Stack',
        iconSvg: IconSVG.stack,
      },
      {
        id: '2',
        name: 'Inline',
        iconSvg: IconSVG.inline,
      },
      {
        id: '3',
        name: 'Fluid',
        iconSvg: IconSVG.flex,
      },
    ],
  },
};
