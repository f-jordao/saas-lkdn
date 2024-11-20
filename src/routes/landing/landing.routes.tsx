import { RouteObject } from 'react-router-dom';
import { Landing } from './landing.component';

export const getLandingRoutes = (): RouteObject[] => [
  {
    path: '/',
    element: <Landing />,
  },
];
