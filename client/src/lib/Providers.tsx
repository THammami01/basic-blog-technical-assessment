import type { FC, ReactNode } from 'react';

// import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import ErrorBoundaryFallback from '@/pages/ErrorBoundaryFallback';
// import Preload from '@/pages/Preload';
import store from '../store';
import ToastContainer from './ToastContainer';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode | ReactNode[];
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    // <Suspense fallback={<Preload />}>
    <BrowserRouter>
      <ReduxStoreProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {/* <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}> */}
          {children}
          <ToastContainer />
          {/* </ErrorBoundary> */}
        </QueryClientProvider>
      </ReduxStoreProvider>
    </BrowserRouter>
    // </Suspense>
  );
};

export default Providers;
