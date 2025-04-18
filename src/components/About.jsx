import Layout from "./Layout";

const About = () => {
    return (
      <Layout>
          <section className="px-[10.4rem] py-[5rem]  flex gap-20 justify-center">
            <img className="w-[30rem] h-[28rem]" src="/img/image1.png" alt="" />
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
                without stress. What are you waiting for, book a bright evening,
                a trip to beautiful Tuscany or a personal tour for you!
              </p>
              <div className="flex justify-between">
                <p className="flex flex-col">
                  <span className="text-3xl text-tr-orange font-bold">20+</span>
                  <span className="text-[#333333]">Years</span>
                  <span className="text-[#333333]">Experience</span>
                </p>
                <p className="flex flex-col">
                  <span className="text-3xl text-tr-orange font-bold">
                    100+
                  </span>
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
          <section className="px-[9rem] advantage flex flex-row justify-between py-10 ">
            <div className="flex flex-col w-60 h-40 justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
              <img className="w-14 h-14" src="/img/icon_map.svg" alt="" />
              <span className="text-center">
                Complete Packages For <br /> All Your Wishes
              </span>
            </div>
            <div className="flex flex-col w-60 h-40 justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
              <img className="w-14 h-14" src="/img/Layer 2.svg" alt="" />
              <span className="text-center">
                Over 30 Years Of <br /> Experience
              </span>
            </div>
            <div className="flex flex-col w-60 h-40 justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
              <img className="w-14 h-14" src="/img/Layer 1.svg" alt="" />
              <span>Expert Guides For You</span>
            </div>
            <div className="flex flex-col w-60 h-40 justify-center gap-1 bg-[#FFFFFF4D] items-center rounded-lg">
              <img className="w-14 h-14" src="/img/Layer 2 (1).svg" alt="" />
              <span className="text-center">
                Guaranteed fun at the <br /> best price!
              </span>
            </div>
          </section>
          <section className=" py-20 mb-4 ">
            <div className="  flex justify-between items-center mb-14 mx-[10rem]">
              <p className=" font-extrabold text-3xl ">Happy Customers Says</p>
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
            <div className="flex justify-center gap-4">
              <main className=" w-[40%] flex flex-col items-center border-[1px] border-[#EFEFEF] px-10 pt-5 pb-7 ">
                <div className="mb-1 flex flex-col gap-2">
                  <img className="w-20 h-20" src="/img/Ellipse 4.png" alt="" />
                  <span className="text-lg text-[#333333]">Loyd Gomez</span>
                </div>
                <div className="flex justify-start w-full ">
                  <img className="h-5 w-5" src="img/Layer 2 (2).svg" alt="" />
                </div>
                <p className="text-lg text-[#333333]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure
                </p>
                <div className="w-full flex justify-end">
                  <img className="h-5 w-5" src="img/Layer 2 (2).svg" alt="" />
                </div>
              </main>
              <main className="mx-0 w-[40%] flex flex-col items-center border-[1px] border-[#EFEFEF] px-10 pt-5 pb-7 ">
                <div className="mb-1 flex flex-col gap-2">
                  <img className="w-20 h-20" src="/img/Ellipse 4.png" alt="" />
                  <span className="text-lg text-[#333333]">Loyd Gomez</span>
                </div>
                <div className="flex justify-start w-full ">
                  <img className="h-5 w-5" src="img/Layer 2 (2).svg" alt="" />
                </div>
                <p className="text-lg text-[#333333]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure
                </p>
                <div className="w-full flex justify-end">
                  <img className="h-5 w-5" src="img/Layer 2 (2).svg" alt="" />
                </div>
              </main>
            </div>
          </section>
          </Layout>
        
    
    );
}
 
export default About;