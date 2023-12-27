import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, Slide } from './carousel';

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
    children: (
      <>
        <Slide>Slide 1</Slide>
        <Slide>Slide 2</Slide>
        <Slide>Slide 3</Slide>
      </>
    ),
  },
};
