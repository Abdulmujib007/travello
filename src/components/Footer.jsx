const Footer = () => {
  return (
    <div className="bg-[#333333] py-10 px-4 largerScreen:px-[17rem]">
      <header className="font-normal laptop:font-medium text-base italic text-tr-orange">
        TRAVELLO
      </header>
      <main className=" border-y-[1px] border-y-gray-500 my-4 laptop:my-8 py-4 laptop:py-8 text-white flex flex-col laptop:flex-row justify-between   ">
        <section className="">
          <h1 className="font-sans font-semibold laptop:font-bold text-xl">Services</h1>
          <div className="flex flex-col font-thin gap-1 text-sm mt-2">
            <span>Bike and Rickshaw rental</span>
            <span>Guided Tours of Lucca</span>
            <span>Guided Bike Tour of Lucca</span>
            <span>Trip In The Tuscan Hills</span>
            <span>Transportation With Luxury Cars</span>
            <span>Wine Tours By Bus With Guide</span>
          </div>
        </section>
        <section>
          <h1 className="font-sans font-bold text-xl">Home</h1>
          <div className="flex flex-col font-thin gap-1 text-sm mt-2">
            <span>Home</span>
            <span>About Us</span>
            <span>Tour Packages</span>
          </div>
        </section>
        <section>
          <h1 className="font-sans font-bold text-xl">Help</h1>
          <div className="flex flex-col font-thin gap-1 text-sm mt-2">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </section>
        <section>
          <h1 className="font-sans font-bold text-xl">Contact</h1>
          <div className="flex flex-col font-thin gap-1 text-sm mt-2">
            <p className="flex gap-2 items-center">
              <img src="/img/ci_location.svg" alt="" className="w-4 h-4" />
              <span>Piazza Napoleone, Lucca, Tuscany</span>
            </p>
            <p className="flex gap-2 items-center">
              <img
                src="/img/clarity_phone-handset-solid.svg"
                alt=""
                className="w-4 h-4"
              />
              <span> +39 346 368 5708</span>
            </p>
            <p className="flex gap-2 items-center">
              <img
                src="/img/fluent_mail-16-filled.svg"
                alt=""
                className="w-4 h-4"
              />
              <span> italiainlimo@gmail.com</span>
            </p>
          </div>
        </section>
        <section>
          <h1 className="font-sans font-bold text-xl">Social Media</h1>
          <div className="flex gap-3 font-thin mt-2">
            <img
              src="/img/ant-design_twitter-circle-filled.svg"
              className="w-10 h-10"
              alt=""
            />
            <img
              src="/img/entypo-social_facebook-with-circle.svg"
              className="w-10 h-10"
              alt=""
            />
            <img
              src="/img/ant-design_twitter-circle-filled (1).svg"
              className="w-10 h-10"
              alt=""
            />
          </div>
        </section>
      </main>
      <p className="text-center text-[#fff] text-sm">
        Copyright <span>&#169;</span> 2024. All rights reserved.
      </p>
    </div>
  );
}
 
export default Footer;