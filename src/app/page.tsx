import About from "@/components/home/aboutus";
import CarouselSection from "@/components/home/carouselSection";
import Header from "@/components/home/header";
import ThirdSection from "@/components/home/thirdsection";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <ThirdSection />
      <CarouselSection />
    </>
  );
}
