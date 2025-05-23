import Layout from "./Layout";
import Testimonial from "./Testimonial";

const About = () => {
    return (
      <Layout>
        <section className="px-[2rem] laptop:px-[10.4rem] py-[2.5rem] laptop:py-[5rem]  flex flex-col mediumScreen:flex-row gap-10 mediumScreen:gap-20 justify-center items-center">
          <img
            className="laptop:w-[30rem] w-[27rem] h-[25rem] laptop:h-[28rem] mx-auto laptop:mx-0 "
            src="/img/image1.png"
            alt=""
          />
          <div className="flex flex-col gap-5 mt-[3rem] text-[#333333] ">
            <p>WELCOME TO OUR SITE!</p>
            <p className="font-extrabold text-3xl">
              We Are The Center Of Lucca To Offer You The Best
            </p>
            <p>
              We are right in the center of Lucca to offer you the real city
              life! With years of experience in practically every tourism
              sector, with us you can find complete packages at the lowest
              price, to travel and learn and have fun all without worries and
              without stress. What are you waiting for, book a bright evening, a
              trip to beautiful Tuscany or a personal tour for you!
            </p>
            <div className="grid grid-cols-2 gap-5 aboutResponsive:grid-cols-4">
              <p className="flex flex-col">
                <span className="text-3xl text-tr-orange font-bold">20+</span>
                <span className="text-[#333333]">Years</span>
                <span className="text-[#333333]">Experience</span>
              </p>
              <p className="flex flex-col">
                <span className="text-3xl text-tr-orange font-bold">100+</span>
                <span className="text-[#333333]">Happy Customer</span>
                <span className="text-[#333333]">Experience</span>
              </p>
              <p className="flex flex-col ">
                <span className="text-3xl text-tr-orange font-bold">15+</span>
                <span className="text-[#333333]">Choice</span>
                <span className="text-[#333333]">of service</span>
              </p>
              <p className="flex flex-col ">
                <span className="text-3xl text-tr-orange font-bold">10+</span>
                <span className="text-[#333333]">Professional</span>
                <span className="text-[#333333]">Guides</span>
              </p>
            </div>
          </div>
        </section>
        <section className="px-[2rem] mediumScreen:px-[9rem] advantage flex laptop:flex-row flex-col items-center gap-4 laptop:gap-0 justify-between py-5 laptop:py-10 ">
          <div className="flex flex-col  mediumScreen:w-60 mediumScreen:h-40 laptop:w-40 h-40 w-60  justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
            <img className="w-14 h-14" src="/img/icon_map.svg" alt="" />
            <span className="text-center">
              Complete Packages For <br /> All Your Wishes
            </span>
          </div>
          <div className="flex flex-col mediumScreen:w-60 mediumScreen:h-40 laptop:w-40 w-60 h-40 justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
            <img className="w-14 h-14" src="/img/Layer 2.svg" alt="" />
            <span className="text-center">
              Over 30 Years Of <br /> Experience
            </span>
          </div>
          <div className="flex flex-col mediumScreen:w-60 mediumScreen:h-40 laptop:w-40 w-60 h-40 justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
            <img className="w-14 h-14" src="/img/Layer 1.svg" alt="" />
            <span>Expert Guides For You</span>
          </div>
          <div className="flex flex-col mediumScreen:w-60 mediumScreen:h-40 laptop:w-40 w-60 h-40 justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
            <img className="w-14 h-14" src="/img/Layer 2 (1).svg" alt="" />
            <span className="text-center">
              Guaranteed fun at the <br /> best price!
            </span>
          </div>
        </section>
        <Testimonial/>
      </Layout>
    );
}
 
export default About;