import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    options: {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
    },
    slides: [<p>Slide 1</p>, <p>Slide 2</p>],
  },
};
