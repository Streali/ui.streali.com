import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconSVG } from './icon';
import { Text } from '../text/text';

const iconNames = Object.keys(IconSVG).filter((key) => isNaN(Number(key)));

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
        <div className="grid grid-cols-3 w-1/2 gap-4 items-center mt-10">
          {iconNames.map((iconName) => (
            <div
              key={iconName}
              className="border border-grey-400 rounded p-5 justify-center items-center flex-col flex gap-5">
              <Icon svg={iconName as IconSVG} />
              <Text type="medium" className="text-grey-100">
                {iconName}
              </Text>
            </div>
          ))}
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
