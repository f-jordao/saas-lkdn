import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Landing } from '../landing.component';

describe('Landing', () => {
  const Component = () => (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );

  it('should render successfully', () => {
    render(<Component />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });
});
