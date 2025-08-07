const ConnectSection = () => {
  return (
    <div className="relative h-[300vh] w-full">
      {/* Sticky image with relative wrapper */}
      <div className="sticky top-0 h-screen w-full">
        <div className="relative w-full h-full">
          {/* Background image */}
          <img
            className="w-full h-full object-cover"
            src="/sec6/1.jpeg"
            alt="bg_img"
          />

          {/* This empty space will be filled by the card during scroll */}
          {/* Don't put the card here! */}
        </div>
      </div>

      {/* Card appears in scroll and overlays the image (revealed gradually) */}
      <div className="relative h-[200vh]">
        {/* Scroll trigger: card scrolls up and lands at center of image */}
        <div className="absolute top-[40vh] w-full flex justify-center">
          <div className="md:h-[400px] md:w-[52%] flex items-center justify-center base-white-bg rounded-[8px] mx-4 md:mx-0 px-6 md:px-0 py-[50px] md:py-0 shadow-lg">
            <div className="flex flex-col items-center justify-center text-pretty">
              <p className="t-4 base-gold-text text-center w-[90%] md:w-[70%] pb-5">
                Ready to reimagine your space? Connect with us at Troscán to
                bring your vision to life with our expertise in design and
                decoration.
              </p>
              <button className="btn-2 t-2 base-gold-bg base-white-text">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
