import { useState,useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClickAway } from "use-click-away";

import { useDispatch } from "react-redux";
import { logout } from "../../helper/appSlice";
const NavBar2 = () => {
  const [show, setShow] = useState(false);
  const [showMenu,setShowMenu] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const userProfileWrapperRef = useRef(null)
  const imgRef = useRef(null)
  console.log({userProfileWrapperRef})
  const toggleProfileVisibility = () => {
   if(!show && userProfileWrapperRef.current === null){
    setShow(true)
   } else if (show && userProfileWrapperRef.current){
    setShow(false)
   }

    setShowMenu(false)
  }

  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu)
    if(show) setShow(false)
    
  }
  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("first-loaded", JSON.stringify(false));
    navigate("/home");
  };
  useClickAway(userProfileWrapperRef, (e) => {
      if(imgRef.current && imgRef.current.contains(e.target) ){
        return;
      } 
    setShow(false)
  })
  

  const style = {
    boxShadow: "0px 6px 10px 0px #57575726",
  };
  const NavLinks = () => {
    const { pathname } = useLocation();
    return (
      <>
        <Link
          className={` ${
            pathname === "/about" ? "text-tr-orange" : "text-black"
          } hover:text-tr-orange w-fit`}
          to={"/about"}
        >
          About{" "}
        </Link>
        <Link
          className={` ${
            pathname === "/contact" ? "text-tr-orange" : "text-black"
          } hover:text-tr-orange w-fit `}
          to={"/contact"}
        >
          Contact us
        </Link>
        <Link
          to={"/user"}
          className={`${
            pathname === "/user" || pathname.includes('/tourPackage/') ? "text-tr-orange" : "text-black"
          } hover:text-tr-orange w-fit` }
        >
          Services
        </Link>
      </>
    );
  };

  return (
    <nav className="">
      <div className=" bg-white laptop:px-36 px-5  laptop:py-8  py-4 border-b-[1px] border-[#EFEFEF] flex flex-col  w-screen">
        <main className="flex justify-between items-center ">
          <p className="italic text-tr-orange text-[1.2rem]">TRAVELLO</p>
          <section className="flex gap-5 laptop:gap-16 items-center">
            <div className=" gap-12 font-semibold text-xl hidden laptop:flex ">
              <NavLinks />
            </div>

            <section className="flex  items-center">
              <img
              ref={imgRef}
                onClick={toggleProfileVisibility}
                className="h-10 rounded-full"
                src="/img/me.jpeg"
                alt=""
              />
            </section>
            <section className="block laptop:hidden">
              {!showMenu && (
                <img
                  className="w-7"
                  onClick={toggleMenuVisibility}
                  src="/img/menu-fill.svg"
                />
              )}
              {showMenu && (
                <img
                  className="w-7"
                  onClick={toggleMenuVisibility}
                  src="/img/close-large-line.svg"
                />
              )}
            </section>
          </section>
        </main>
        <div className="flex flex-col laptop:hidden gap-2 ml-2">
          {showMenu && <NavLinks />}
        </div>
      </div>
      <div>
        {show && (
          <section className="w-full  flex justify-end laptop:pr-20">
            <div
              ref={userProfileWrapperRef}
              style={style}
              className=" bg-white  flex flex-col items-start justify-center    border-[1px] border-[#EFEFEF]   text-tr-white rounded-b-3xl w-fit "
            >
              <Link
                to={`${pathname === "/user" ? "/" : "/user"}`}
                className="w-full flex pb-3 border-b-[1px] border-b-[#EFEFEF] items-center pr-7  laptop:pr-14 laptop:pl-[14px] pl-2 pt-2 laptop:pt-[14px] gap-3"
              >
                <img className="h-5" src="/img/icon_ticket.png" alt="" />
                <p className="laptop:text-lg">My Tickets</p>
              </Link>
              <button
                onClick={handleLogout}
                className="flex px-2 laptop:px-[14px] py-2 laptop:py-[14px] gap-3 "
              >
                <img src="/img/clarity_logout-line.png" alt="" />
                <p className="laptop:text-lg">Logout</p>
              </button>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};

export default NavBar2;
