import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  //   const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const { isLoggedIn } = useSelector((state) => state.appAuth);
  console.log(isLoggedIn)

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
