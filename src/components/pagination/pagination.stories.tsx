import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  decorators: [
    (Story) => {
      const [currentPage, setCurrentPage] = useState(1);

      return (
        <Pagination numberOfPages={15} currentPage={currentPage} onPageChange={setCurrentPage} />
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};
