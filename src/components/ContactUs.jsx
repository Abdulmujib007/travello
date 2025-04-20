import Layout from "./Layout";

const ContactUs = () => {
  return (
    <Layout>
      <main className=" mt-0 laptop:mt-14 advantage py-8 laptop:py-14   px-8 laptop:px-48 flex laptop:flex-row flex-col justify-between items-start mobile:items-center gap-8 laptop:gap-0  ">
        <section className="flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <p className="font-extrabold text-3xl laptop:text-5xl font-sans">Get In Touch!</p>
            <span className="font-semibold text-lg">
              Fill up the form and our Team will get <br /> back to you within
              24 hours.
            </span>
          </div>
          <div className="flex gap-2 p-4 border-transparent hover:border-[1px] hover:border-[#FA8B02] rounded-lg transition-all duration-200 ease-out w-fit  ">
            <img className="w-6 h-6 " src="/img/ci_location.svg" alt="" />
            <span className="font-semibold laptop:text-lg">
              Piazza Napoleone, Lucca, Tuscany
            </span>
          </div>
          <div className="flex gap-2 p-4 border-transparent hover:border-[1px] hover:border-[#FA8B02] rounded-lg transition-all duration-200 ease-out w-fit laptop:w-full  ">
            <img
              className="w-6 h-6 "
              src="/img/clarity_phone-handset-solid.svg"
              alt=""
            />
            <span className="font-semibold laptop:text-lg">+39 346 368 5708</span>
          </div>
          <div className="flex gap-2 p-4 border-transparent hover:border-[1px] hover:border-[#FA8B02] rounded-lg transition-all duration-200 ease-out w-fit laptop:w-full  ">
            <img
              className="w-6 h-6 "
              src="/img/fluent_mail-16-filled.svg"
              alt=""
            />
            <span className="font-semibold laptop:text-lg">
              {" "}
              italiainlimo@gmail.com
            </span>
          </div>
        </section>
        <form
          className="bg-[#FFFFFF4D] w-fit flex flex-col gap-7 p-7 rounded-2xl "
          action=""
        >
          <div className="flex flex-col gap-1">
            <span className="font-semibold laptop:text-lg">Name and Surname</span>
            <input
              className="px-6 py-[10px] rounded-lg w-[12rem] mobile:w-[20rem] laptop:w-[25rem]  outline-none"
              type="text"
              placeholder="Enter your name and surname"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold laptop:text-lg">Email Address</span>
            <input
              className="px-6 py-[10px] rounded-lg w-[12rem] mobile:w-[20rem] laptop:w-[25rem] outline-none"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold laptop:text-lg">Message</span>
            <textarea
              className="px-6 py-[10px] rounded-lg w-[12rem] mobile:w-[20rem] laptop:w-[25rem] h-[8rem] outline-none"
              placeholder="Enter your Message"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button className="w-fit text-white py-[10px] px-6 font-semibold text-xl rounded-full bg-tr-orange  ">
              Send Message
            </button>
          </div>
        </form>
      </main>
      <div className="map text-tr-orange text-2xl flex justify-center items-center ">
        <p className="italic">TRAVELLO</p>
      </div>
    </Layout>
  );
};

export default ContactUs;
