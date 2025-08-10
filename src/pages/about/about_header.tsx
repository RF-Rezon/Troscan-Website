const About_Header = () => {
  return (
    <>
      <div className="min-h-screen mx-auto flex flex-col items-center justify-center max-w-[1284px] mt-[50px] md:mt-[140px] lg:mt-[186px] px-4">
        <div className="w-[65%] pb-[70px] text-center">
          <p className="t-header base-gold-text">
            Crafting Timeless Spaces with Style
          </p>
        </div>
        <div className="h-full w-full ">
          <img
            src="/about/1.jpeg"
            className="h-full w-full object-cover corner-round"
            alt="about header img"
          />
        </div>
      </div>
    </>
  );
};

export default About_Header;
