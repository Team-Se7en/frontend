import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRoute = ({ children, userTypes }) => {
  const { user } = useAuth();
  if (!userTypes.includes(user?.user_type)) {
    return <Navigate to="/login" />;
  }
  return children;
};