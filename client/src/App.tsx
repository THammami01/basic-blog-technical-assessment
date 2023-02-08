import type { FC } from 'react';
import { useEffect } from 'react';

import { Preload } from '@/components/pages/other';
import { setIsPreloadState } from '@/store/actions/action-creators';

import { useAppDispatch, useAppSelector } from './hooks';
import Router from './router';

interface AppProps {}

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();
  const isPreloadState = useAppSelector((store) => store.global.isPreloadState);

  useEffect(() => {
    // setTimeout(() => {
    dispatch(setIsPreloadState(false));
    // }, 1000);
  }, []);

  if (isPreloadState) return <Preload />;

  return <Router />;
};

export default App;
