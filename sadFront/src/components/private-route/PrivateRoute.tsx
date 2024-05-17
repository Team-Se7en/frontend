import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/authUtils';

const ProtectedRoute = ({ element: Element, userType, ...rest }) => {
  const { isLoggedIn, userInfo } = useAuth();

  return (
    <Route
      {...rest}
    >
        {
            userInfo?.user_type != userType ? (
                <Element />
            ) : (
                <Navigate to="/login" />
            )
        }
    </Route>
  );
};

export default ProtectedRoute;