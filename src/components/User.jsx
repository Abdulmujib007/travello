// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
// import { useState } from "react";
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
      <div className=" px-5 laptop:px-36 laptop:mt-10 mt-3 ">
        <p className=" font-semibold laptop:font-extrabold laptop:text-[2rem] font-sans laptop:pb-9 pb-3 ">My Tickets</p>
        <div className="py-5  border-[1px] border-[#EFEFEF] rounded-3xl flex flex-col">
          <section className=" laptop:mb-10 mb-2 px-3 laptop:px-8 flex gap-10 justify-between text-tr-white pb-5 border-b-[1px] border-[#EFEFEF]">
            <p className="laptop:text-xl  laptop:font-semibold text-sm ">Tour Name</p>
            <div className="flex largerScreen:gap-40 laptop:gap-16 gap-8 ">
              <p className="laptop:text-xl laptop:font-semibold text-sm">Payment Method</p>
              <p className="laptop:text-xl laptop:font-semibold text-sm">Price</p>
              <p className="laptop:text-xl laptop:font-semibold text-sm">Status</p>
            </div>
          </section>
          <section className="px-3 laptop:px-8 flex  w-full justify-between text-tr-white pb-5  border-b-[1px] border-[#EFEFEF] laptop:pt-5 pt-1 items-center  ">
            <div className=" flex gap-2 laptop:gap-5 largerScreen:flex-row flex-col ">
              <img className="laptop:h-[6.5rem] w-32 laptop:w-fit" src="/img/Rectangle 39.png" alt="" />
              <div className="flex flex-col laptop:gap-3 gap-1">
                <p className="laptop:font-bold font-medium text-sm laptop:text-xl">Wine tasting in Tuscany </p>
                <p className="flex gap-2 items-center">
                  <img className="laptop:w-fit w-4" src="/img/system-uicons_calendar-month.png" alt="" />
                  <span className="laptop:font-semibold laptop:text-sm text-xs text-tr-white">
                    FRI,23 DEC 2024
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <img className="laptop:w-fit w-4" src="/img/Group.png" alt="" />
                  <span className="laptop:font-semibold laptop:text-sm text-xs text-tr-white">
                    15:00
                  </span>
                </p>
              </div>
            </div>
            <div className="flex  items-center  gap-5 largerScreen:gap-28 laptop:gap-4">
              <p className="flex laptop:flex-row flex-col gap-1 laptop:gap-2 items-center font-semibold laptop:text-base text-xs laptop:mr-24 mr-10 ">
                <img className="laptop:w-fit w-5" src="/img/PayPal.png" alt="" />
                <span className="text-tr-white font-normal">Paypal</span>
              </p>
              <p className="text-tr-white laptop:text-base text-xs">$86.00</p>
              <p className="flex laptop:gap-2 gap-1 items-center  laptop:flex-row flex-col ">
                <img
                className="w-4 laptop:w-fit"
                  src="/img/material-symbols_event-upcoming-outline.png"
                  alt=""
                />
                <span className="text-xs laptop:text-base">Upcoming</span>
              </p>
            </div>
          </section>
          <section className=" px-3 laptop:px-8 flex justify-between text-tr-white   laptop:pt-5 pt-3 items-center">
            <div className="flex laptop:gap-5 gap-2 largerScreen:flex-row flex-col  ">
              <img className="laptop:h-[6.5rem] laptop:w-fit w-32 " src="/img/Rectangle 39.png" alt="" />
              <div className="flex flex-col laptop:gap-3 gap-1">
                <p className="laptop:font-bold font-medium text-sm laptop:text-xl">Wine tasting in Tuscany </p>
                <p className="flex gap-2 items-center">
                  <img className="laptop:w-fit w-4" src="/img/system-uicons_calendar-month.png" alt="" />
                  <span className="laptop:font-semibold laptop:text-sm text-xs text-tr-white">
                    FRI,23 DEC 2024
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <img className="laptop:w-fit w-4" src="/img/Group.png" alt="" />
                  <span className="laptop:font-semibold laptop:text-sm text-xs text-tr-white">
                    15:00
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center  largerScreen:gap-[8.5rem] laptop:gap-10 gap-10">
              <p className="flex laptop:gap-2 gap-1 flex-col laptop:flex-row items-center laptop:font-semibold laptop:text-base text-xs laptop:mr-10 mr-3 ">
                <img className="laptop:w-fit w-5" src="/img/Visa.png" alt="" />
                <span className="text-tr-white largerScreen:font-semibold font-normal ">Credit Card</span>
              </p>
              <p className="text-tr-white laptop:text-base text-xs">$86.00</p>
              <p className="flex gap-1 laptop:flex-row flex-col laptop:gap-2 items-center">
                <img
                className="laptop:w-fit w-4"
                  src="/img/material-symbols_event-upcoming-outline (1).png"
                  alt=""
                />
                <span className="text-xs laptop:text-base">Ended</span>
              </p>
            </div>
          </section>
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
      </div>
    );
  };
  return (
    <div className="containerEl">
      <NavBar2 />
      <main className="flex flex-col flex-grow overflow-auto">
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
