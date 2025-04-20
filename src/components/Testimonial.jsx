
function Testimonial() {
  return (
      <div className=" laptop:py-20 py-10 mb-4 ">
        <div className="  flex justify-between items-center mb-10 laptop:mb-14 mx-[1rem]  laptop:mx-[10rem] ">
          <p className=" font-extrabold text-xl laptop:text-3xl ">
            Happy Customers Says
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
        <div className="flex flex-col laptop:flex-row items-center justify-center gap-4">
          <main className=" w-[90%] laptop:w-[40%] flex flex-col items-center border-[1px] border-[#EFEFEF] px-10 pt-5 pb-7 ">
            <div className="mb-1 flex flex-col gap-2">
              <img className="w-20 h-20" src="/img/Ellipse 4.png" alt="" />
              <span className="text-lg text-[#333333]">Loyd Gomez</span>
            </div>
            <div className="flex justify-start w-full ">
              <img className="h-5 w-5" src="/img/Layer 2 (2).svg" alt="" />
            </div>
            <p className="text-lg text-[#333333]">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure
            </p>
            <div className="w-full flex justify-end">
              <img className="h-5 w-5" src="/img/Layer 2 (2).svg" alt="" />
            </div>
          </main>
          <main className=" w-[90%] laptop:w-[40%] flex flex-col items-center border-[1px] border-[#EFEFEF] px-10 pt-5 pb-7 ">
            <div className="mb-1 flex flex-col gap-2">
              <img className="w-20 h-20" src="/img/Ellipse 4.png" alt="" />
              <span className="text-lg text-[#333333]">Loyd Gomez</span>
            </div>
            <div className="flex justify-start w-full ">
              <img className="h-5 w-5" src="/img/Layer 2 (2).svg" alt="" />
            </div>
            <p className="text-lg text-[#333333]">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure
            </p>
            <div className="w-full flex justify-end">
              <img className="h-5 w-5" src="/img/Layer 2 (2).svg" alt="" />
            </div>
          </main>
        </div>
      </div>
  );
}

export default Testimonial