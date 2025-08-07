const ConnectSection = () => {
  return (
    <>
      <div
        className="min-h-screen w-full flex items-center justify-center bg-center bg-cover bg-no-repeat relative my-[100px] md:my-[140px] lg:my-[186px] px-4"
        style={{ backgroundImage: "url('/sec6/1.jpeg')" }}
      >
        <div className="absolute md:h-[63%] md:w-[52%] flex items-center justify-center base-white-bg rounded-[8px] mx-4 md:mx-0 px-6 md:px-0 py-[50px] md:py-0">
          <div className="flex flex-col items-center justify-center text-pretty">
            <p className="t-4 base-gold-text text-center w-[90%] md:w-[70%] pb-5">
              Ready to reimagine your space? Connect with us at Troscán to bring
              your vision to life with our expertise in design and decoration.
            </p>
            <button className="btn-2 t-2 base-gold-bg base-white-text ">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectSection;
