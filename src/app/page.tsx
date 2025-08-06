import About from "@/pages/home/aboutus";
import CarouselSection from "@/pages/home/carouselSection";
import ConnectSection from "@/pages/home/connectSection";
import Header from "@/pages/home/header";
import News from "@/pages/home/news";
import ThirdSection from "@/pages/home/thirdsection";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <ThirdSection />
      <CarouselSection />
      <ConnectSection />
      <News />
    </>
  );
}
