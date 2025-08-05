const About = () => {
  return (
    <>
      <div className="min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center max-w-[1250px] py-[100px] md:py-[140px] lg:py-[186px]  md:space-x-10 px-4">
        <div className="w-full lg:min-h-screen base-gold-text flex flex-col lg:space-y-[86px] space-y-[20px] md:px-6 lg:px-0">
          <div className="lg:mr-10">
            <p className="flex items-center space-x-1 md:pb-4 pb-1">
              <span className="base-gold-text">&#9679;</span>
              <span className="t-1 text-left">About us</span>
            </p>
            <p className="t-6 text-left">
              Where Spaces Inspire, and Design Comes Alive
            </p>
          </div>
          <div className="lg:mr-10">
            <p className="t-2-light md:pb-5 pb-3 text-left">
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.{" "}
            </p>
            <p className="t-2-light md:pb-6 pb-3 text-left">
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you're looking to reimagine your living
              room.
            </p>
            <button className="py-[16px] px-[28px] rounded-[5px] t-2 base-gold-bg base-white-text hover:opacity-80">
              More About Us
            </button>
          </div>
        </div>
        <div
          className="self-start w-full min-h-[80vh] bg-center bg-cover bg-no-repeat corner-round mt-6 lg:mt-0"
          style={{ backgroundImage: "url('/sec2/1.jpeg') " }}
        ></div>
      </div>
    </>
  );
};

export default About;
