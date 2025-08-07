import News_cards from "@/utils/cards/news/news_cards";

const News = () => {
  return (
    <>
      <div className="min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center max-w-[1284px] my-[100px] md:my-[140px] lg:mt-[186px] lg:mb-[140px] md:space-x-10 px-4">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
            <div className="base-gold-text self-start">
              <p className="flex items-center space-x-1 md:pb-4 pb-1">
                <span className="base-gold-text">&#9679;</span>
                <span className="t-1 text-left">News</span>
              </p>
              <p className="t-6 text-left pb-3 md:pb-0">
                Stay Inspired with <br /> Interior Trends
              </p>
            </div>
            <div className="md:self-end self-start">
              <button className="btn-2 t-2 base-gold-bg base-white-text">
                View All News
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-x-2.5">
              <News_cards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
