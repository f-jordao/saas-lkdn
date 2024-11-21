import { RouteObject } from 'react-router-dom';
import { Landing } from './landing.component';
import { getLocalePath } from '@sb/webapp-core/utils';

export const getLandingRoutes = (): RouteObject[] => [
  {
    path: getLocalePath(''),
    element: <Landing />,
  },
];
