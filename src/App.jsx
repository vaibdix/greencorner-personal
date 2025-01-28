import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoute';
import AppContext from './store/AppContext';
// import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import { ReactLenis, useLenis } from 'lenis/react';

const App = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </ReactLenis>
  );
};

export default App;

// https://github.com/prahulk46a?tab=repositories
