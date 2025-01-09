import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPgae";
import Login from "./components/Login";
import User from "./components/User";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage/>}  />
        <Route path="/login" element={<Login/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </div>
  );
};
export default App;
