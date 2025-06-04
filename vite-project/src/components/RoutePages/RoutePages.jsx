import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../AutToken/AutToken";


const RoutePages = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RoutePages;
