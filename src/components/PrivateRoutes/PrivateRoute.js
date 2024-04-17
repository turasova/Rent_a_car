import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuthSelector } from "store/selectors";

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
    const isLoggedIn = useSelector(isAuthSelector);
    return <>
        {isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>;
}

export const RegistrationRoute = ({ children, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(isAuthSelector);
  return <>{!isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>;
}