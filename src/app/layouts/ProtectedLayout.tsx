import { Navigate, Outlet } from "react-router-dom";
import {
  useIsAuthenticated,
  useSetUserProfile,
} from "../store/auth/auth.store";
import { LOGIN_PATH } from "../route/path";
import { useEffect } from "react";
import { useGetSelf } from "@/features/auth";

const ProtectedLayout = () => {
  const isAuthenticated = useIsAuthenticated();
  const { data, isLoading, isError, isSuccess } = useGetSelf();
  const setUserProfile = useSetUserProfile();

  useEffect(() => {
    if (isSuccess && data) {
      setUserProfile(data);
    }
  }, [isSuccess, data, setUserProfile]);

  if (isLoading) return <div>Loading...</div>;

  if (!isLoading && isError) {
    return <Navigate to={LOGIN_PATH} replace />;
  }

  if (!isLoading && !isAuthenticated && !isSuccess) {
    return <Navigate to={LOGIN_PATH} replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
