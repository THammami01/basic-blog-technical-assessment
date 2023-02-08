import type { FC } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import { logo } from '@/assets/images';

import styles from './PostsLayout.module.scss';

interface PostsLayoutProps {}

const PostsLayout: FC<PostsLayoutProps> = () => {
  const location = useLocation();

  return (
    <div className={styles.pageContainer}>
      <nav>
        <Link to="/posts/">
          <img src={logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <Link
              to="/posts"
              className={
                location.pathname.endsWith('/posts') ||
                location.pathname.endsWith('/posts/')
                  ? styles.selected
                  : ''
              }
            >
              Posts
            </Link>
          </li>

          <li>
            <Link
              to="/posts/new"
              className={
                location.pathname.endsWith('/posts/new') ||
                location.pathname.endsWith('/posts/new/')
                  ? styles.selected
                  : ''
              }
            >
              New Post
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PostsLayout;
