const Body = () => {
  const style = {
    boxShadow: "0px 4px 12px 0px #00000040",
  };

  const heroSection = () => {
    return (
      <div className="flex justify-center items-center mt-[1rem]  px-20  gap-24">
        <div className="flex flex-col gap-6">
          <p className="text-[3.25rem] font-semibold leading-[3.9rem]">
            Lets Explore <br></br>The Beauty Of <br></br> Dream world
          </p>
          <p className="text-tr-tr-grayWhite text-lg font-normal pl-1">
            We always out customer happy by providing as many chises <br></br>
            as possible we always our customer happy by providing as <br></br>
            many possible by providing as many chises as
          </p>
          <section
            style={style}
            className="flex  rounded-md px-8 py-3 justify-center items-center gap-5 text-[0.75rem] text-tr-grayWhite"
          >
            <div className="flex flex-col gap-3 w-20">
              <p className="flex items-center gap-1">
                <span>Location</span>
                <img className="h-2" src="/img/Vector.png" alt="" />
              </p>
              <p className="text-[0.88rem] font-medium text-black border-r-[1px] border-r-newgray">
                Indonesia
              </p>
            </div>
            <div className="flex flex-col gap-3 w-20">
              <p className="flex items-center gap-1">
                <span>Date</span>
                <img className="h-2" src="/img/Vector.png" alt="" />
              </p>
              <p className="text-[0.88rem] font-medium text-black border-r-[1px] border-r-newgray">
                Tue,10 Nov
              </p>
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="flex items-center gap-1">
                <p className="min-w-max">Average Price</p>
                <img className="h-2" src="/img/Vector.png" alt="" />
              </p>
              <p className="text-[0.88rem] font-medium text-black">$523-$849</p>
            </div>
            <img
              className="rounded-full bg-tr-orange p-3 ml-14"
              src="/img/search.png"
              alt=""
            />
          </section>
        </div>
        <img className="h-[35rem]" src="/img/Image.png" alt="" />
      </div>
    );
  };
  const packageSection = () => {
    return (
      <div className="text-center">
        <p className="text-tr-orange font-normal text-lg">BEST PACKAGE</p>
        <p className="pt-6 font-semibold text-3xl">Our Best Packages For You</p>
        <div className="flex justify-center pt-10 gap-20 text-anotherGray text-xl font-medium">
          <span className="text-tr-orange">Hot Details</span>
          <span>Back Pack</span>
          <span>Asia</span>
          <span>Europe</span>
          <span>More</span>
        </div>
        <section className="pt-8 pb-20 flex gap-6  justify-evenly px-[6rem]">
          <div className=" flex flex-col gap-4">
            <img src="/img/Rectangle 3.png" alt="" />
            <p className="flex justify-between text-base">
              <span className="font-normal">6 days,6 Night</span>
              <span className="font-semibold text-tr-orange">$549/Person</span>
            </p>
            <p className="font-medium text-[1.375rem] text-left">
              Explore the beauty Of Blue lagoon
            </p>
            <div className="flex justify-between">
              <section className="flex items-center gap-2">
                <img className="h-6" src="/img/map-pin.png" alt="" />
                <span className="text-base font-semibold text-tr-grayWhite">
                  London,Ingriis
                </span>
              </section>
              <p className="text-white bg-tr-orange px-3 py-2 rounded-md">
                Explore More
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <img src="/img/Rectangle 4.png" alt="" />
            <p className="flex justify-between text-base">
              <span className="font-normal">2 days,2 Night</span>
              <span className="font-semibold text-tr-orange">$349/Person</span>
            </p>
            <p className="font-medium text-[1.375rem] text-left">
              Explore the beauty Of Petra
            </p>
            <div className="flex justify-between">
              <section className="flex items-center gap-2">
                <img className="h-6" src="/img/map-pin.png" alt="" />
                <span className="text-base font-semibold text-tr-grayWhite">
                  London,Ingriis
                </span>
              </section>
              <p className="text-white bg-tr-orange px-3 py-2 rounded-md">
                Explore More
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <img src="/img/Rectangle 5.png" alt="" />
            <p className="flex justify-between text-base">
              <span className="font-normal">5 days,4 Night</span>
              <span className="font-semibold text-tr-orange">$849/Person</span>
            </p>
            <p className="font-medium text-[1.375rem] text-left">
              Explore the beauty Of Old bagan
            </p>
            <div className="flex justify-between">
              <section className="flex items-center gap-2">
                <img className="h-6" src="/img/map-pin.png" alt="" />
                <span className="text-base font-semibold text-tr-grayWhite">
                  London,Ingriis
                </span>
              </section>
              <p className="text-white bg-tr-orange px-3 py-2 rounded-md">
                Explore More
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  const experinceSection = () => {
    return (
      <div className="bg-tr-pink flex gap-20">
        <div className="py-28 px-16 flex flex-col gap-5">
          <p className="text-tr-orange text-lg font-normal">OUR EXPERIENCE</p>
          <p className="text-[2.7rem] leading-tight font-bold">
            With Our Experience <br></br> We Will Service You{" "}
          </p>
          <p className="text-lg font-normal">
            We always out customer happy by providing as many chises <br></br>{" "}
            as possible we always our customers happy by providing as <br></br>{" "}
            many possible by providing as many chises as
          </p>
          <button className="p-2 w-fit bg-tr-orange text-white rounded-md ">
            Read More
          </button>
          <div className="flex gap-6 pt-5">
            <section className="flex flex-col gap-2">
              <h2 className="text-tr-orange font-bold text-5xl font-mono">
                235
              </h2>
              <span className="text-base font-normal">Happy Customers</span>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="text-tr-orange font-bold text-5xl font-mono">
                544
              </h2>
              <span className="text-base font-normal">Years Experience</span>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="text-tr-orange font-bold text-5xl font-mono">
                123+
              </h2>
              <span className="text-base font-normal">
                Destination Collaboration{" "}
              </span>
            </section>
          </div>
        </div>
        <img className="py-7" src="/img/experience" alt="" />
      </div>
    );
  };
  const destinationSection = () => {
    return (
      <div className="py-[4.5rem] px-16">
        <p className="pt-8 text-lg text-tr-orange pb-4">DESTINATION</p>
        <section className="flex flex-col gap-7">
          <p className="text-5xl font-bold">
            Our Best Destination <br></br> For You
          </p>
          <p className="font-medium text-lg">
            With a world full of exciting destination , choosing the perfect{" "}
            <br></br>
            vocation spot can be challenge. That’s why skyward complied{" "}
            <br></br> list of the best places to vist
          </p>
        </section>
        <section className="flex gap-8">
          <div className="py-8 flex flex-col gap-6">
            <img src="/img/destination1" alt="" />
            <section className="flex flex-col pl-6 gap-3">
              <div className="flex items-center gap-4 ">
                <p className="flex items-center gap-1 px-2 py-1 bg-[#F4F4F4]">
                  <img className="h-4" src="/img/star" alt="" />
                  <span className="text-[0.875]">5.0(7,562 reviews)</span>
                </p>
                <span className="text-[0.875] text-tr-orange">$6,999.000</span>
              </div>
              <p className="font-bold text-xl">
                Enjoy the beauty of a nice <br></br> mountain{" "}
              </p>
              <p className="flex gap-2">
                <img src="/img/map-pin.png" alt="" />
                <span>Bali,Indonesia</span>
              </p>
            </section>
          </div>
          <div className="py-8 flex flex-col gap-6">
            <img src="/img/destinattion" alt="" />
            <section className="flex flex-col pl-6 gap-3">
              <div className="flex items-center gap-4 ">
                <p className="flex items-center gap-1 px-2 py-1 bg-[#F4F4F4]">
                  <img className="h-4" src="/img/star" alt="" />
                  <span className="text-[0.875]">5.0 (7,777 reviews)</span>
                </p>
                <span className="text-[0.875] text-tr-orange">$7,499.000</span>
              </div>
              <p className="font-bold text-xl">
                Enjoy the beauty of a nice <br></br> mountain{" "}
              </p>
              <p className="flex gap-2">
                <img src="/img/map-pin.png" alt="" />
                <span>Lombok,Indonesia</span>
              </p>
            </section>
          </div>
          <div className="py-8 flex flex-col gap-6">
            <img src="/img/destination2" alt="" />
            <section className="flex flex-col pl-6 gap-3">
              <div className="flex items-center gap-4 ">
                <p className="flex items-center gap-1 px-2 py-1 bg-[#F4F4F4]">
                  <img className="h-4" src="/img/star" alt="" />
                  <span className="text-[0.875]">5.0 (7,777 reviews)</span>
                </p>
                <span className="text-[0.875] text-tr-orange">$3,799.000</span>
              </div>
              <p className="font-bold text-xl">
                Enjoy the beauty of a nice <br></br> beach{" "}
              </p>
              <p className="flex gap-2">
                <img src="/img/map-pin.png" alt="" />
                <span>Goa,India</span>
              </p>
            </section>
          </div>
        </section>
      </div>
    );
  };
  const testimonialSection = () => {
    return (
      <div className="py-[4.5rem]">
        <p className="text-tr-orange text-lg text-center pt-8">TESTIMONIAL</p>
        <p className="text-center font-bold text-5xl pt-10">
          What Our Client Say{" "}
        </p>
        <p className="text-center text-lg pt-6">
          Creating a visual identity for your company, and an <br></br> overall
          brand
        </p>
        <div className=" px-20 py-10 flex justify-center gap-5">
          <section className="p-8  border-2 border-tr-gray flex  flex-col gap-8">
            <p>
              A customer testimonial that highlights <br></br> features and
              answers potential <br></br> customer doubts about your product{" "}
              <br></br> or service. Showcase testimonials from <br></br> a
              similar demographic to your <br></br>customers.
            </p>
            <div className="flex gap-4">
              <img src="/img/Avatar Image.png" alt="" />
              <p className="flex flex-col gap-1">
                <span className="text-base font-semibold">Melisa Susanti</span>
                <span
                  className="text-[#A5A5A5]
                text-base"
                >
                  CEO & Founder
                </span>
              </p>
            </div>
            
          </section>
          <section className="p-8   border-2 border-tr-gray flex  flex-col gap-8">
            <p>
              A customer testimonial that highlights <br></br> features and
              answers potential <br></br> customer doubts about your product{" "}
              <br></br> or service. Showcase testimonials from <br></br> a
              similar demographic to your <br></br>customers.
            </p>
            <div className="flex gap-4">
              <img src="/img/Avatar Image2.png" alt="" />
              <p className="flex flex-col gap-1">
                <span className="text-base font-semibold">Sayem Ahemd</span>
                <span
                  className="text-[#A5A5A5]
                text-base"
                >
                  CEO & Founder
                </span>
              </p>
            </div>
          </section>
          <section className="p-8 border-2 border-tr-gray  flex  flex-col gap-8">
            <p>
              A customer testimonial that highlights <br></br> features and
              answers potential <br></br> customer doubts about your product{" "}
              <br></br> or service. Showcase testimonials from <br></br> a
              similar demographic to your <br></br>customers.
            </p>
            <div className="flex gap-5">
              <img src="/img/Avatar Image3.png" alt="" />
              <p className="flex flex-col gap-1">
                <span className="text-base font-semibold">Albert Steveno</span>
                <span
                  className="text-[#A5A5A5]
                text-base"
                >
                  CEO & Founder
                </span>
              </p>
            </div>
            
          </section>
        </div>
        <div className="flex justify-center pt-8">
          <img src="/img/Slider Dots.png" alt="" />
        </div>
        <div className="flex">
          <div className=" bg-white relative w-fit top-[-15rem] left-[9.7rem] rounded-full border-2 border-tr-orange p-3">
            <img className="" src="/img/Arrow left" alt="" />
          </div>
          <div className=" bg-white relative top-[-15rem] left-[69rem] w-fit rounded-full border-2 border-tr-orange p-3">
            <img className="" src="/img/Arrow right" alt="" />
          </div>
        </div>
      </div>
    );
  };
  const offerSection = () => {
    return (
      <div className="px-[4.5rem] pb-8 pt-0">
        <div className="px-64 py-20 bg-tr-orange flex flex-col gap-6 justify-center items-center rounded-md">
          <p className="text-white font-semibold text-5xl text-center">
            Prepare yourself & lets explore <br></br>the beauty of the dream
            world
          </p>
          <p className="text-lg text-white">
            We have many special offer especially for you
          </p>
          <button className=" w-fit text-base py-3 px-6 bg-white text-tr-orange rounded-md ">
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {heroSection()}
      <div className="flex  px-20 items-center justify-evenly ">
        <img src="/img/image 1.png" alt="" />
        <img src="/img/image 4.png" alt="" />
        <img src="/img/image 2.png" alt="" />
        <img src="/img/image 3.png" alt="" />
      </div>
      {packageSection()}
      {experinceSection()}
      {destinationSection()}
      {testimonialSection()}
      {offerSection()}
    </div>
  );
};
export default Body;
