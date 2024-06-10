import { Outlet } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading, login } = useKindeAuth();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!isLoading && !isAuthenticated) {
    return (
      <div className="text-center text-rose-600">
        <p>Protected content.</p>
        <p>Log in to get the access to the protected content.</p>
      </div>
    );
  }
  if (!isLoading && isAuthenticated) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
};

export default ProtectedRoutes;
