import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user");
  };
  return (
    <div className="flex  justify-center gap-36  h-screen w-screen py-7">
      <div className="h-full">
        <img className="h-[35rem]" src="/img/Login image.png" alt="" />
      </div>
      <div className="flex flex-col gap-1  ">
        <p className="text-tr-orange pb-12 text-center text-3xl font-light italic">
          TRAVELLO
        </p>
        <p className="text-center text-[2.5rem] leading-10 pb-5">
          Don't just imagine paradise, <br></br> Experience it!
        </p>
        <p className="text-center font-light text-lg pb-3">
          We'll help you plan your dream escape
        </p>
        <div className="flex justify-center">
          <span className="border-[1px] border-newgray w-10 text"></span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
          <div className="border-b-[1px] border-[#A7A6A6] p-1 pl-3 mb-12">
            <input
              className=" text-base w-full outline-none "
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className=" flex justify-between border-b-[1px] border-[#A7A6A6] p-1 pl-3 mb-6">
            <input
              className=" text-base w-[90%] outline-none "
              type="password"
              placeholder="Password"
              required
            />
            <img src="/img/blind 1.png" alt="" />
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
          <button className="bg-tr-orange text-white text-xl font-medium py-2 rounded-[5px] mt-8">
            Login
          </button>
          <p className="text-center pt-6">
            <span className="text-sm font-normal">Don't have an account?</span>
            <span className="text-sm font-bold text-tr-orange ">Sign up!</span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
