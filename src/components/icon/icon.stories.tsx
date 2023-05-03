import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';
import { Text } from '../text/text';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div>
          <Text type="medium" className="text-grey-200">
            We use Remixicon for our icons, you need to pass the icon name on the props "name"
          </Text>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'home-2-line',
    spin: false,
    className: '',
  },
};
