import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPgae";
import Login from "./components/Login";
import User from "./components/User";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const { isLoggedIn } = useSelector((state) => state.appAuth);
  console.log(isLoggedIn);
  
  return (
    <div className="">
      <Routes>
        {/* unauthorized route */}
        {!isLoggedIn && (
          <>
            <Route path={"/home"} element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<LandingPage />} />
          </>
        )}

        {/* protected route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to={"/user"} />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/user" : "/home"} />}
        />
      </Routes>
    </div>
  );
};
export default App;
