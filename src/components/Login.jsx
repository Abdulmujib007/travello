import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../../request";
import { useDispatch } from "react-redux";
import { login } from "../../helper/appSlice";
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [password, setShowPassword] = useState(true);
  const [isLoading,setIsLoading] = useState(false)
  const [loginValue, setLoginValues] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const emailChange = (e) =>
    setLoginValues({ ...loginValue, email: e.target.value });
  const passwordChange = (e) =>
    setLoginValues({ ...loginValue, password: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    setIsLoading(true)
    try {
      const data = await userLogin(loginValue);
      if (data) {
        dispatch(login());
    
        navigate("/user");
      }
    } catch (err) {
      setMessage(err.response.data.message)
      console.log(err,);
    } finally{
      setTimeout(() => {
        setMessage('')
      },3000)
    }
    setLoginValues({email:'',password:''})
    setIsLoading(false)
  };

  return (
    <div className="flex  justify-center gap-36  h-screen w-screen py-7">
      <div className="h-full hidden laptop:block">
        <img className="h-[35rem]" src="/img/Login image.png" alt="" />
      </div>
      <div className="flex flex-col gap-1 px-5 laptop:px-0 ">
        <p className="m-auto text-tr-gray" >{message}</p>
        <p className="text-tr-orange pb-12 text-center text-3xl font-light italic">
          TRAVELLO
        </p>
        <p className="text-center text-[2rem]  laptop:text-[2.5rem] leading-10 pb-5">
          Dont just imagine paradise, <br></br> Experience it!
        </p>
        <p className="text-center font-light text-lg pb-3">
          Well help you plan your dream escape
        </p>
        <div className="flex justify-center">
          <span className="border-[1px] border-newgray w-10 text"></span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
          <div className="border-b-[1px] border-[#A7A6A6] p-1 pl-3 mb-12">
            <input
              className=" text-base w-full outline-none "
              type="email"
              value={loginValue.email}
              onChange={emailChange}
              placeholder="Email"
              required
            />
          </div>
          <div className=" flex justify-between border-b-[1px] border-[#A7A6A6] p-1 pl-3 mb-6">
            <input
              className=" text-base w-[90%] outline-none "
              type={password ? "password" : "text"}
              value={loginValue.password}
              onChange={passwordChange}
              placeholder="Password"
              required
            />
            {password ? (
              <img
                onClick={togglePasswordVisibility}
                src="/img/blind 1.png"
                alt=""
              />
            ) : (
              <img
                className="w-5"
                onClick={togglePasswordVisibility}
                src="/img/eye-line.svg"
                alt=""
              />
            )}
          </div>
          <section className="flex justify-between items-center text-xs">
            <div className="flex gap-2 items-center">
              <label className="switch">
                <input className="slide" type="checkbox" />
                <span className="slider round"></span>
              </label>
              <span>Remember Me</span>
            </div>
            <p className="text-xs">Forgot Password?</p>
          </section>
          <button className="bg-tr-orange text-white text-xl font-medium py-2 rounded-[5px] mt-8 hover:bg-orange-500 ">
            {
              isLoading ? 'Loading...' : 'Login'
            }
          </button>
          <p className="text-center pt-6">
            <span className="text-sm font-normal">Dont have an account?</span>
            <Link to={"/signup"} className="text-sm font-bold text-tr-orange ">
              Sign up!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
