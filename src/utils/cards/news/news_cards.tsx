import newscards from "../../jsons/news/newscards.json";
const News_cards = () => {
  return (
    <>
      {newscards.map((i, index) => (
        <div key={index} className="mb-5 md:mb-8">
          <div className="w-[100%] h-[300px] md:h-[349px] mb-2.5 md:mb-4">
            <img
              className="w-full h-full object-cover rounded-[8px]"
              src={i.img}
              alt={i.alt}
            />
          </div>
          <div className="base-gold-text space-y-1.5 md:space-y-2.5 w-[100%] md:w-[80%]">
            <p className="flex items-center space-x-1">
              <span className="base-gold-text">&#9679;</span>
              <span className="t-1 text-left">{i.date}</span>
            </p>
            <p className="t-3">{i.title}</p>
            <p className="t-1">{i.description}</p>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default News_cards;
