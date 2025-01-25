// import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
// import { useState } from "react";



const User = () => {
  const body = () => {
    return (
      <div className="px-36 mt-10">
        <p className="font-extrabold text-[2rem] font-sans pb-9">My Tickets</p>
        <div className=" py-5 border-[1px] border-[#EFEFEF] rounded-3xl flex flex-col">
          <section className=" mb-10 px-8 flex justify-between text-tr-white pb-5 border-b-[1px] border-[#EFEFEF]">
            <p className="text-xl font-semibold">Tour Name</p>
            <div className="flex gap-40">
              <p className="text-xl font-semibold">Payment Method</p>
              <p className="text-xl font-semibold">Price</p>
              <p className="text-xl font-semibold">Status</p>
            </div>
          </section>
          <section className="px-8 flex justify-between text-tr-white pb-5  border-b-[1px] border-[#EFEFEF] pt-5 items-center">
            <div className="flex gap-5">
              <img className="h-[6.5rem]" src="/img/Rectangle 39.png" alt="" />
              <div className="flex flex-col gap-3">
                <p className="font-bold text-xl">Wine tasting in Tuscany </p>
                <p className="flex gap-2 items-center">
                  <img src="/img/system-uicons_calendar-month.png" alt="" />
                  <span className="font-semibold text-sm text-tr-white">
                    FRI,23 DEC 2024
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <img src="/img/Group.png" alt="" />
                  <span className="font-semibold text-sm text-tr-white">
                    15:00
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-28">
              <p className="flex gap-2 items-center font-semibold text-base  mr-20">
                <img src="/img/PayPal.png" alt="" />
                <span className="text-tr-white">Paypal</span>
              </p>
              <p className="text-tr-white">$86.00</p>
              <p className="flex gap-2 items-center">
                <img
                  src="/img/material-symbols_event-upcoming-outline.png"
                  alt=""
                />
                <span>Upcoming</span>
              </p>
            </div>
          </section>
          <section className="px-8 flex justify-between text-tr-white   pt-5 items-center">
            <div className="flex gap-5">
              <img className="h-[6.5rem]" src="/img/Rectangle 39.png" alt="" />
              <div className="flex flex-col gap-3">
                <p className="font-bold text-xl">Wine tasting in Tuscany </p>
                <p className="flex gap-2 items-center">
                  <img src="/img/system-uicons_calendar-month.png" alt="" />
                  <span className="font-semibold text-sm text-tr-white">
                    FRI,23 DEC 2024
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <img src="/img/Group.png" alt="" />
                  <span className="font-semibold text-sm text-tr-white">
                    15:00
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-[8.5rem]">
              <p className="flex gap-2 items-center font-semibold text-base mr-10 ">
                <img src="/img/Visa.png" alt="" />
                <span className="text-tr-white">Credit Card</span>
              </p>
              <p className="text-tr-white">$86.00</p>
              <p className="flex gap-2 items-center">
                <img
                  src="/img/material-symbols_event-upcoming-outline (1).png"
                  alt=""
                />
                <span>Ended</span>
              </p>
            </div>
          </section>
        </div>
        <div className="pt-28 flex justify-between items-center">
          <p className="font-extrabold text-4xl font-sans text-tr-white">
            Tour Packages
          </p>
          <div className="flex gap-3 ">
            <img
              className="py-4 px-5 bg-[#EFEFEF] rounded-full"
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
    <div className="containerEl ">
      <NavBar2/>
      <main className="flex flex-col flex-grow overflow-auto">
        {body()}
        <Footer />
      </main>
    </div>
  );
};
export default User;
