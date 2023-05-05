import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { PopoverMenu } from './popover-menu';

const meta: Meta<typeof PopoverMenu> = {
  title: 'Popover Menu',
  component: PopoverMenu,
};

export default meta;
type Story = StoryObj<typeof PopoverMenu>;

export const Default: Story = {
  args: {
    trigger: <Button>Trigger</Button>,
    menu: [
      {
        label: 'Menu Item 1',
        onClick: () => {},
        iconLeft: 'close-circle-line',
      },
      {
        label: 'Menu Item 2',
        onClick: () => {},
        disabled: true,
      },
      {
        label: 'Menu Item 3',
        onClick: () => {},
        className: '!bg-error-500 hover:!bg-error-400',
      },
    ],
  },
};
