import { ReactElement } from 'react';
import { Hero } from './components/hero';

export const Landing = (): ReactElement => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
    </div>
  );
};
