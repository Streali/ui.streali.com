import type { Meta, StoryObj } from '@storybook/react';
import { MarketplaceCard } from './marketplace-card';

const meta: Meta<typeof MarketplaceCard> = {
  title: 'Layout/Marketplace Card',
  component: MarketplaceCard,
};

export default meta;
type Story = StoryObj<typeof MarketplaceCard>;

export const Default: Story = {
  args: {
    children: <div className="w-full h-full flex items-center justify-center">Card content</div>,
    title: 'Card Title',
    price: 'free',
    isFavorite: true,
  },
};
