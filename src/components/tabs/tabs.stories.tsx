import type { Meta, StoryObj } from '@storybook/react';
import { Tab, Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    list: [
      { title: 'Tab 1', id: 'tab-1' },
      { title: 'Tab 2', id: 'tab-2' },
      { title: 'Tab 3', id: 'tab-3' },
    ],
    children: (
      <>
        <Tab id="tab-1">Tab 1 content</Tab>
        <Tab id="tab-2">Tab 2 content</Tab>
        <Tab id="tab-3">Tab 3 content</Tab>
      </>
    ),
  },
};
