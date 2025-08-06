import carouselsection from "../../utils/jsons/carouselsection/carouselsection.json";
const CarouselSection = () => {
  return (
    <>
      {carouselsection.map((i: any, index: number) => (
        <div
          key={index}
          className="min-h-screen w-full flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat parallax"
          style={{ backgroundImage: `url('${i.img}')` }}
        >
          <div>
            <p className="text-center t-2 text-white pb-8">01</p>
            <div className="md:max-w-4xl max-w-full md:mx-auto text-center pb-[10px]">
              <p className="t-6 text-white">Serene Urban Retreat</p>
            </div>
            <p className="text-center t-2 text-white pb-8">
              Where modern comfort meets peaceful sophistication.
            </p>
            <div className="flex items-center justify-center mx-2">
              <button className="btn t-2 base-gold-text base-white-bg">
                View Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarouselSection;
