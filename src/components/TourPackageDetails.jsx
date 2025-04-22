import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { packageDetails } from "../../utils/constants";
import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function TourPackageDetails() {
  const [date,setDate] = useState(new Date())
  const navigate = useNavigate()
  const { id } = useParams();
  const packageDetail = packageDetails.find((item) => item.id === Number(id));
  console.log(date);
  return (
    <Layout>
      <div
        onClick={() => navigate(-1)}
        className="my-10 miniLaptop:mx-40 aboutResponsive:mx-20 mx-[1rem] flex gap-2 font-semibold cursor-pointer w-fit"
      >
        <img src="/img/Vector (1).svg" alt="" />
        <span>back</span>
      </div>
      <div className=" aboutResponsive:mx-20 miniLaptop:mx-40 mx-[1rem] ">
        <section className="flex flex-col largerScreen:flex-row gap-10 w-full">
          <div className="miniLaptop:w-[50%]  w-[100%] largerScreen:w-[40%] flex flex-col justify-center gap-5">
            <img className="" src={packageDetail.tourImage.img1} alt="" />
            <div className="flex justify-between">
              <img
                className=" w-[32%] largerScreen:h-[9rem] "
                src={packageDetail.tourImage.img2}
                alt=""
              />
              <img
                className=" w-[32%] "
                src={packageDetail.tourImage.img3}
                alt=""
              />
              <img
                className=" w-[32%] "
                src={packageDetail.tourImage.img4}
                alt=""
              />
            </div>
          </div>
          <div className=" largerScreen:w-[50%] w-[100%] flex flex-col gap-1">
            <p className="font-extrabold text-4xl ">{packageDetail.title}</p>
            <p className="font-semibold text-xl">
              from{" "}
              <span className="font-extrabold text-xl text-tr-orange">
                34 $
              </span>{" "}
            </p>
            <p className="text-[#333333]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <div className="flex flex-col">
              <span className="font-semibold text-lg  text-[#333333]">
                Select a date
              </span>
              <div className="h-[18rem] w-[15.5rem]">
                <Calendar
                  value={date}
                  onChange={setDate}
                  className="flex gap-0 flex-col border-[1px] border-[#33333333]  text-sm w-fit"
                  calendarType="gregory"
                />
              </div>
            </div>
            <div className="mt-1">
              <p className="font-semibold text-lg text-[#333333] ">Time</p>
              <main className="flex pl-6 pr-5 py-3 border-[1px] border-[#33333333] rounded-lg w-fit gap-3">
                <input
                  className="outline-none"
                  placeholder="Select the time"
                  type="text"
                />
                <img className="w-4" src="/img/Group.svg" alt="" />
              </main>
            </div>
            <button className="bg-tr-orange rounded-full w-fit text-white py-[10px] px-[5.5rem]  ">
              Buy Now
            </button>
          </div>
        </section>
        <section className="largerScreen:w-[50%] laptop:w-[90%] w-[100%] my-20 flex flex-col gap-6">
          <header className="font-extrabold text-3xl">Details</header>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <main className="flex flex-col gap-5">
            <div className="w-fit flex gap-3 items-center">
              <img src="/img/Layer 1 (3).svg" alt="" />
              <p className="font-bold text-lg">
                Number of group:{" "}
                <span className="font-medium text-lg">15-30</span>
              </p>
            </div>
            <div className="w-fit flex gap-3 items-center">
              <img src="/img/Layer 2 (3).svg" alt="" />
              <p className="font-bold text-lg">
                Duration:{" "}
                <span className="font-medium text-lg">
                  15 hours and 45 minutes
                </span>
              </p>
            </div>
            <div className="w-fit flex gap-3 items-center">
              <img src="/img/ci_location.svg" alt="" />
              <p className="font-bold text-lg">
                Departuring and arriving areas:{" "}
                <span className="font-medium text-lg">Lucca</span>
              </p>
            </div>
            <div className="w-fit flex gap-3 items-center">
              <img src="/img/Layer 1 (4).svg" alt="" />
              <p className="font-bold text-lg">
                Guide Service:{" "}
                <span className="font-medium text-lg">Included</span>
              </p>
            </div>
            <div className="w-fit flex gap-3 items-center">
              <img src="/img/Layer 2 (4).svg" alt="" />
              <p className="font-bold text-lg">
                Language:{" "}
                <span className="font-medium text-lg">English,Italian</span>
              </p>
            </div>
            <div className="w-fit flex gap-3 items-center">
              <img src="/img/Layer 1 (5).svg" alt="" />
              <p className="font-bold text-lg">
                Entry fees:{" "}
                <span className="font-medium text-lg">Lorem ipsum</span>
              </p>
            </div>
            <div className="w-fit flex gap-3 items-center">
              <img src="/img/Layer 1 (2).svg" alt="" />
              <p className="font-bold text-lg">
                Transportation: <span className="font-medium text-lg">Bus</span>
              </p>
            </div>
          </main>
        </section>
        <section>
          <div className="  flex justify-between items-center mb-10 laptop:mb-14">
            <p className=" font-extrabold text-xl laptop:text-3xl ">Gallery</p>
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
          <div className="flex flex-col laptop:flex-row w-full gap-5 ">
            <img
              className=" w-[100%] laptop:w-[45%]"
              src={packageDetail.gallery.img1}
              alt=""
            />
            <div className="w-[100%] laptop:w-[25%] flex justify-between flex-row laptop:flex-col laptop:gap-0 gap-3  ">
              <img
                className="laptop:w-full w-[49%]"
                src={packageDetail.gallery.img2}
                alt=""
              />
              <img
                className="laptop:w-full w-[49%]"
                src={packageDetail.gallery.img3}
                alt=""
              />
            </div>
            <img
              className="laptop:w-[25%] w-[100%] "
              src={packageDetail.gallery.img4}
              alt=""
            />
          </div>
        </section>
      </div>
      <Testimonial />
    </Layout>
  );
}

export default TourPackageDetails;
