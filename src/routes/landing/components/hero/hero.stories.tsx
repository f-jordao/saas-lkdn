import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Hero } from '../hero/hero.component';

const meta: Meta<typeof Hero> = {
  title: 'Routes/Landing/Components/Hero',
  component: Hero,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {};
