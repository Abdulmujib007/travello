import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPgae";
import Login from "./components/Login";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}  ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path='/user' element={<User/>} ></Route>
      </Routes>
    </div>
  );
};
export default App;
