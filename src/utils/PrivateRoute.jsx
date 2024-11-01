import {useAuthContext} from "@asgardeo/auth-react";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { state } = useAuthContext();
  const location = useLocation();

  if (!state.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;