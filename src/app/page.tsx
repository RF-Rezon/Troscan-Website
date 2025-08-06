import About from "@/components/home/aboutus";
import CarouselSection from "@/components/home/carouselSection";
import ConnectSection from "@/components/home/connectSection";
import Header from "@/components/home/header";
import News from "@/components/home/news";
import ThirdSection from "@/components/home/thirdsection";

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
