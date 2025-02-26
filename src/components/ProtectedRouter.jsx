import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = ({ isAuthenticated }) => {
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/signIn" />}</div>;
};

export default ProtectedRouter;
