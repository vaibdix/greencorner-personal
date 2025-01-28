import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/AppRoute';
import AppContext from './components/context/AppContext';
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
