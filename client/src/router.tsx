import type { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import routes from '@/routes';

interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <Routes>
      {routes.map(({ element, path, children }, idx) => (
        <Route key={idx} element={element} path={path}>
          {children}
        </Route>
      ))}
    </Routes>
  );
};

export default Router;
