import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TourPackage = ({id,img,date,people,about,title}) => {
  return (
    <div className="flex flex-col gap-4">
      <img className="" src={img} alt="" />
      <p className="font-bold text-2xl ml-[10px]">{title}</p>
      <section className="flex justify-between ml-[10px]">
        <div className="flex gap-1 items-center">
          <img src="/img/system-uicons_calendar-month.svg" alt="" />
          <span className="font-semibold text-tr-orange">{date}</span>
        </div>
        <div className="flex gap-1 items-center">
          <img src="/img/icon_private tours.svg" alt="" />
          <span className="font-semibold text-tr-orange">{people}</span>
        </div>
      </section>
      <p className="ml-[10px] text-lg">
        {about}
      </p>
      <Link 
        to={`/tourPackage/${id}`}
        className="flex gap-2 w-fit ml-[10px] items-center">
        <span className="text-lg text-tr-orange">Read More</span>
        <img className="w-5" src="img/Vector.svg" alt="" />
      </Link>
    </div>
  );
};
export default TourPackage;
