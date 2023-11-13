import { Navigate, Outlet } from '@umijs/max';
import { useAccess, useModel } from '@umijs/max';

export default (props) => {
  const access = useAccess();
  if (access.isLogin()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
