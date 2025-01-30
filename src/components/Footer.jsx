const Footer = () => {
  return (
    <div className="laptop:pt-[4.5rem] pt-[2rem] ">
      <div className="bg-tr-orange pb-8">
        <div className=" px-4 laptop:px-0 justify-center flex laptop:gap-20 gap-10 laptop:pt-[5.5rem] pt-[3rem] pb-8 text-white text-base">
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Github</span>
          <span>LinkedIn</span>
        </div>
        <div className="laptop:mx-20 mx-5  border-[1px] border-white"></div>
        <div className="laptop:px-20 px-5 flex justify-between pt-8 text-white text-sm">
          <p>2024,All right reserved</p>
          <section className="flex gap-3 laptop:gap-6">
            <span className="border-b-[1px] border-white">Privacy Policy</span>
            <span className="border-b-[1px] border-white">Terms of Service</span>
            <span className="border-b-[1px] border-white">Cookies Settings</span>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Footer;
