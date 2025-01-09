import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className="w-screen flex  px-16 py-4 justify-between items-center bg-white">
      <p className="font-medium text-base italic text-tr-orange">TRAVELLO</p>
      <div className="flex items-center gap-8 font-normal text-base text-graay">
        <p className="text-tr-orange">Home</p>
        <p>About</p>
        <p className="flex gap-1">
          <span>Services</span>
          <img className="h-6" src="/img/Chevron Down.png" alt="" />
        </p>
        <p className="flex gap-1">
          <span>Pricing</span>
          <img className="h-6" src="/img/Chevron Down.png" alt="" />
        </p>
        <div className="flex gap-4 ">
          <button className="border-solid border-2 border-tr-orange text-tr-orange py-1 px-4 rounded" onClick={() => navigate('/login')}>Login</button>
          <button className="bg-tr-orange p-1 px-4 rounded text-white">Sign up</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
