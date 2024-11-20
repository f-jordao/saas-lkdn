import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Hero } from '../hero.component';

describe('Hero', () => {
  const Component = () => (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );

  it('should render successfully', () => {
    render(<Component />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('should render CTAs', () => {
    render(<Component />);
    expect(screen.getByTestId('hero-cta-primary')).toBeInTheDocument();
    expect(screen.getByTestId('hero-cta-secondary')).toBeInTheDocument();
  });
});
