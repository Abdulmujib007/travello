import { useEffect } from "react";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
import TourPackage from "./TourPackage";
import { tourPackages } from "../../utils/constants";

import toast, { Toaster } from "react-hot-toast";

const User = () => {
  useEffect(() => {
    const alreadyLoaded = JSON.parse(localStorage.getItem("first-loaded"));
    if (!alreadyLoaded) {
      toast("Welcome to Travello User Page");
      localStorage.setItem("first-loaded", JSON.stringify(true));
    }
  }, []);

  const body = () => {
    return (
      <div className=" px-5 laptop:px-28 laptop:mt-10 mt-3 mb-4 ">
        <p className=" font-semibold laptop:font-extrabold laptop:text-[2rem] font-sans laptop:pb-9 pb-3 ">
          My Tickets
        </p>
        <div className="flex items-center justify-center">
          <img className="" src="/img/Frame 97.png" alt="" />
        </div>
        <div className="laptop:pt-28 pt-8 flex justify-between items-center">
          <p className=" font-bold laptop:font-extrabold text-2xl  laptop:text-4xl font-sans text-tr-white">
            Tour Packages
          </p>
          <div className="flex gap-3 ">
            <img
              className="py-4 px-5  bg-[#EFEFEF] rounded-full"
              src="/img/Vector (3).png"
              alt=""
            />
            <img
              className="py-4 px-5 bg-tr-orange rounded-full"
              src="/img/Vector (4).png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 mb-20 laptop:mb-40 grid miniLaptop:grid-cols-4  laptop:gap-10 miniLaptop:gap-5 laptop:grid-cols-2 gap-7 grid-flow-row">
          {tourPackages.map(({ about, date, id, img, people, title }) => (
            <TourPackage
              about={about}
              date={date}
              id={id}
              img={img}
              people={people}
              title={title}
              key={id}
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="containerEl">
      <NavBar2 />
      <main className="flex flex-col flex-grow overflow-auto ">
        {body()}

        <Footer />
      </main>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "#FE8C00",
            color: "#FFFFFF",
            marginTop: "25px",
            padding: "16px",
            fontSize: "16px",
            borderRadius: "10px",
          },
          duration: 2000,
        }}
      />
    </div>
  );
};

export default User;
