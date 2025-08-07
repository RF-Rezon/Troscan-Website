import carouselsection from "../../utils/jsons/carouselsection/carouselsection.json";
const CarouselSection = () => {
  return (
    <>
      <div>
        {carouselsection.map((i: any, index: number) => (
          <div
            key={index}
            className="min-h-screen w-full flex items-center justify-center bg-center bg-cover bg-no-repeat sticky top-0 parallax"
            style={{ backgroundImage: `url('${i.img}')` }}
          >
            <div className="w-[90%]">
              <p className="text-center t-2 text-white pb-8">{i.number}</p>
              <div className="md:max-w-4xl max-w-full md:mx-auto text-center pb-[10px]">
                <p className="t-6 text-white">{i.title}</p>
              </div>
              <p className="text-center t-2 text-white pb-8">{i.description}</p>
              <div className="flex items-center justify-center mx-2">
                <button className="btn t-2 base-gold-text base-white-bg hover:opacity-80 shadow">
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselSection;
