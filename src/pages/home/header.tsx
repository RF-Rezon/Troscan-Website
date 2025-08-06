const Header = () => {
  return (
    <>
      <div
        className="min-h-screen w-full flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat parallax"
        style={{ backgroundImage: "url('/sec1/1.jpeg')" }}
      >
        <div>
          <div className="md:max-w-4xl max-w-full md:mx-auto text-center pb-6 mx-2">
            <p className="t-header text-white">
              Timeless Comfort & Endless Luxury
            </p>
          </div>
          <div className="space-x-0 lg:space-x-3 space-y-2 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center mx-2">
            <button className="btn t-2 base-gold-text base-white-bg hover:opacity-80 w-full lg:w-[129px]">
              Our Vision
            </button>
            <button className="btn text-[14px] md:text-[16px] font-[600] leading-[21px] bg-transparent text-white hover:bg-white hover:text-[#8D493A] border border-white w-full lg:w-[185px]">
              Explore Expertise
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
