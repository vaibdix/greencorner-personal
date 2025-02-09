import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoute';
import AppContext from './store/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/fonts.css';
import barScale from './assets/svg/bars-scale.svg';

import { ReactLenis, useLenis } from 'lenis/react';

const LoadingSkeleton = () => (
  <div className="flex min-h-screen items-center justify-center">
    <img src={barScale} alt="Loading..." className="h-8 w-8" />
  </div>
);

const App = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ErrorBoundary>
      <ReactLenis root>
        <AppContext>
          <Suspense fallback={<LoadingSkeleton />}>
            <RouterProvider router={router} />
          </Suspense>
        </AppContext>
      </ReactLenis>
    </ErrorBoundary>
  );
};

export default App;
