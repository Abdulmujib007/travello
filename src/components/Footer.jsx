const Footer = () => {
  return (
    <div className="pt-[4.5rem]  ">
      <div className="bg-tr-orange pb-8">
        <div className="flex justify-center pt-[5.5rem] pb-8 text-white text-base gap-8">
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Github</span>
          <span>LinkedIn</span>
        </div>
        <div className="mx-20  border-[1px] border-white"></div>
        <div className="px-20 flex justify-between pt-8 text-white text-sm">
          <p>2024,All right reserved</p>
          <section className="flex gap-6">
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
