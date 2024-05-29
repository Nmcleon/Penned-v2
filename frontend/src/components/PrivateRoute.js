import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStatus } from '../customHook/useAuthStatus';

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return null;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
}
