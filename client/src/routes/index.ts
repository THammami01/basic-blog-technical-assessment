import type { ReactNode } from 'react';

import postsRoutes from './posts';
import otherRoutes from './other';

export type RouteType = {
  element: ReactNode;
  path: string;
  children?: ReactNode;
};

const routes: RouteType[] = [...postsRoutes, ...otherRoutes];

export default routes;
