import AppContext from './components/context/AppContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/AppRoute'

const App = () => {
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>

  )
}

export default App