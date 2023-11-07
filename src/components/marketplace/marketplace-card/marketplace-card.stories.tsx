import type { Meta, StoryObj } from '@storybook/react';
import { MarketplaceCard } from './marketplace-card';

const meta: Meta<typeof MarketplaceCard> = {
  title: 'Marketplace/Marketplace Card',
  component: MarketplaceCard,
};

export default meta;
type Story = StoryObj<typeof MarketplaceCard>;

export const Default: Story = {
  args: {
    children: <div className="w-full h-full flex items-center justify-center">Card content</div>,
    title: 'Card Title',
    price: 10.99,
    priceFormatted: '10.99€',
    link: 'https://google.com',
    isOwned: true,
    isOwnedLabel: 'Owned',
    coverUrl:
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
};
