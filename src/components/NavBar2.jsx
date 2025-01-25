import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../helper/appSlice";
const NavBar2 = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const toggleProfileVisibility = () => setShow(!show);

  const handleLogout = () => {
    dispatch(logout())
    // localStorage.clear();
      navigate("/home");
   
  };

  const style = {
    boxShadow: "0px 6px 10px 0px #57575726",
  };
  return (
    <nav className="">
      <div className="  bg-white px-36 py-8 border-b-[1px] border-[#EFEFEF] flex justify-between  w-screen">
        <p className="italic text-tr-orange text-[1.2rem]">TRAVELLO</p>
        <section className="flex gap-40">
          <div className="flex gap-28 font-semibold text-xl">
            <Link to={"/about"}>About </Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/user"} className="text-tr-orange">
              Services
            </Link>
          </div>

          <section className="flex gap-5 items-center">
            {/* <div className="flex"> */}
            {/* <p className="text-[#333333] font-semibold text-lg">Eng</p> */}
            {/* <img src="/img/Chevron Down.png" alt="" /> */}
            {/* </div> */}
            <img
              onClick={toggleProfileVisibility}
              className="h-10"
              src="/img/Ellipse 8.png"
              alt=""
            />
          </section>
        </section>
      </div>
      <>
        {show && (
          <section className="w-full  flex justify-end pr-20">
            <div
              style={style}
              className=" bg-white  flex flex-col items-start justify-center    border-[1px] border-[#EFEFEF]   text-tr-white rounded-b-3xl w-fit "
            >
              <section className="w-full flex pb-3 border-b-[1px] border-b-[#EFEFEF] pr-14 pl-[14px] pt-[14px] gap-3">
                <img className="h-5" src="/img/icon_ticket.png" alt="" />
                <p className="text-lg">My Tickets</p>
              </section>
              <button
                onClick={handleLogout}
                className="flex px-[14px] py-[14px] gap-3 "
              >
                <img src="/img/clarity_logout-line.png" alt="" />
                <p className="text-lg">Logout</p>
              </button>
            </div>
          </section>
        )}
      </>
    </nav>
  );
};

export default NavBar2;
