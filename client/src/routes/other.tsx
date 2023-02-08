import { Navigate } from 'react-router-dom';

import { NotFound } from '@/components/pages/other';

import type { RouteType } from '.';

const routes: RouteType[] = [
  {
    element: <Navigate to="/posts/" />,
    path: '/',
  },
  { element: <NotFound />, path: '*' },
];

export default routes;
