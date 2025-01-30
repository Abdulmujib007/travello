import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNewUser } from "../../request";

const Signup = () => {
  const [password, setShowPassword] = useState(true);
  const [signupValue, setSignupValues] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const navigate = useNavigate();

  // signup function 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked button')
    try {
      const data = await addNewUser({
        ...signupValue,
        firstName: "random",
        lastName: "randomly",
      });
      if (data) {
        setMessage("Account Created,Will be redirected to login page in sec");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      if(err.response.data) setMessage(err.response.data.message)
      console.log(err, err.message);
    } finally {
      setTimeout(() => {
        setMessage('')
      },3000)
      setSignupValues({ email: "", password: "" });
    }
  };
  const emailChange = (e) =>
    setSignupValues({ ...signupValue, email: e.target.value });
  const passwordChange = (e) =>
    setSignupValues({ ...signupValue, password: e.target.value });

  return (
    <div className="flex  justify-center gap-36  h-screen w-screen py-7">
      <div className="h-full hidden laptop:block  " >
        <img className="h-[35rem]" src="/img/Login image.png" alt="" />
      </div>
      <div className="flex flex-col gap-1 px-5 laptop:px-0  ">
        <p className="m-auto text-tr-orange">{message}</p>

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
              value={signupValue.email}
              onChange={emailChange}
              placeholder="Email"
              required
            />
          </div>
          <div className=" flex justify-between border-b-[1px] border-[#A7A6A6] p-1 pl-3 mb-6">
            <input
              className=" text-base w-[90%] outline-none "
              type={password ? "password" : "text"}
              value={signupValue.password}
              onChange={passwordChange}
              //   hidden={password}
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
          <button className="bg-tr-orange text-white text-xl font-medium py-2 rounded-[5px] mt-8">
            Signup
          </button>
          <p className="text-center pt-6">
            <span className="text-sm font-normal">
              Have an Account Already?
            </span>
            <Link to={"/login"} className="text-sm font-bold text-tr-orange ">
              Login!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
