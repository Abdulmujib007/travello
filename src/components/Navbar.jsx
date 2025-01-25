import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link to={'/home'} className="text-tr-orange">Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/user'} className="flex gap-1">
        <span>Services</span>
        {/* <img className="h-6" src="/img/Chevron Down.png" alt="" /> */}
      </Link>
      <Link to={'/pricing'} className="flex gap-1">
        <span>Pricing</span>
        {/* <img className="h-6" src="/img/Chevron Down.png" alt="" /> */}
      </Link>
    </>
  );
};

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="w-screen flex  px-16 py-4 justify-between items-center bg-white">
      <p className="font-medium text-base italic text-tr-orange">TRAVELLO</p>
      <div className="flex items-center gap-8 font-normal text-base text-graay">
        <NavLinks />
        <div className="flex gap-4 ">
          <Link
            to={"/login"}
            className="border-solid border-2 border-tr-orange text-tr-orange py-1 px-4 rounded"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="bg-tr-orange p-1 px-4 rounded text-white"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
