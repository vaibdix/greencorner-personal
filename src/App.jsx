import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/AppRoute';
import AppContext from './components/context/AppContext';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const App = () => {
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
