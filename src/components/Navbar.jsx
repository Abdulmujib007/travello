import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link to={"/home"} className="text-tr-orange">
        Home
      </Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/user"} className="flex gap-1">
        <span>Services</span>
        {/* <img className="h-6" src="/img/Chevron Down.png" alt="" /> */}
      </Link>
      <Link to={"/pricing"} className="flex gap-1">
        <span>Pricing</span>
        {/* <img className="h-6" src="/img/Chevron Down.png" alt="" /> */}
      </Link>
    </>
  );
};

const Navbar = () => {
  const [visibility, setVisibility] = useState(false);
  // const location = useLocation();
  // console.log(location);
  const toggleVisibility = () => setVisibility(!visibility);
  return (
    <main className="flex flex-col">
      <div className="w-screen flex px-6  laptop:px-16 laptop:py-4 pb-1 pt-4 justify-between items-center bg-white">
        <p className="font-normal laptop:font-medium text-base italic text-tr-orange">
          TRAVELLO
        </p>
        <div className="flex items-center laptop:gap-8 gap-3 font-normal text-base text-graay">
          <div className="hidden laptop:flex gap-8 ">
            <NavLinks />
          </div>
          <div className="flex gap-4 ">
            <Link
              to={"/login"}
              className="border-solid border-2 border-tr-orange text-tr-orange py-1 laptop:px-4 px-2 rounded laptop:text-base text-sm "
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="bg-tr-orange p-1 laptop:px-4 px-2 text-sm laptop:text-base rounded text-white"
            >
              Sign up
            </Link>
          </div>
          <section className="block laptop:hidden">
            {!visibility && (
              <img
                className="w-5"
                onClick={toggleVisibility}
                src="/img/menu-fill.svg"
                alt=""
              />
            )}
            {visibility && (
              <img
                className="w-5"
                onClick={toggleVisibility}
                src="/img/close-large-line.svg"
              />
            )}
          </section>
        </div>
      </div>
      <div className="laptop:hidden py-2 ">{visibility && (
          <div className="flex flex-col pl-8 gap-2 w-fit" >
            <NavLinks/>
          </div>
      )}</div>
    </main>
  );
};
export default Navbar;
