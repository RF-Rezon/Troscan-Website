import whyus from "../../utils/jsons/whyus/whyus.json";

const Why_Us = () => {
  return (
    <div className="min-h-screen mx-auto flex flex-col items-center justify-center max-w-[1284px] mt-[100px] md:mt-[140px] lg:mt-[80px] px-4">
      <div className="text-center base-gold-text w-full md:w-[65%] mb-12">
        <p className="flex items-center space-x-1 md:pb-4 pb-1 justify-center">
          <span>&#9679;</span>
          <span className="t-1 text-left">Why Us?</span>
        </p>
        <p className="t-6">
          Elevate Your Space with <br /> Expertise & Elegance
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-start">
        {whyus.map((i) => (
          <div
            key={i.alt}
            className="flex items-center justify-center flex-col p-8 md:p-12 bg-white h-full corner-round"
          >
            <div className="w-[45px] h-[45px] base-white-bg corner-round">
              <img src={i.img} className="h-full w-full object-cover" />
            </div>
            <div className="text-center base-gold-text">
              <p className="t-3 md:pt-7 pt-4 md:pb-3 pb-2.5">{i.title}</p>
              <p className="t-1">{i.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why_Us;
