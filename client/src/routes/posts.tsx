import { Navigate, Route } from 'react-router-dom';

import { PostsLayout } from '@/components/layouts';
import { Post, PostForm, Posts } from '@/components/pages/posts';

import type { RouteType } from '.';

const navigation = [
  { element: <Posts />, path: '' },
  { element: <PostForm />, path: 'new' },
  { element: <Post />, path: ':id' },
];

const routes: RouteType[] = [
  {
    children: (
      <>
        {navigation.map(({ element, path }, idx) => (
          <Route key={idx} element={element} path={path} />
        ))}
      </>
    ),
    element: <PostsLayout />,
    path: 'posts',
  },
];

export default routes;
