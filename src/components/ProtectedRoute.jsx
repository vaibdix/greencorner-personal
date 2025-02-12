import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../store/AppContext';

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(context);

  if (!state.user || state.user.role !== 'admin') {
    return <Navigate to="/admin/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
