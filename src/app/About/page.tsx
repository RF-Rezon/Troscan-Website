import About_Header from "@/pages/about/about_header";
import Awards_Recognition from "@/pages/about/awards_recognition";
import Our_Approach from "@/pages/about/our_approach";
import Our_Team from "@/pages/about/our_team";
import Why_Us from "@/pages/about/whyus";
import ConnectSection from "@/pages/home/connectSection";
import ExpertiseSection from "@/pages/home/expertiseSection";
import News from "@/pages/home/news";

const About = () => {
  return (
    <>
      <About_Header />
      <Our_Approach />
      <Our_Team />
      <ExpertiseSection />
      <Why_Us />
      <Awards_Recognition />
      <ConnectSection />
      <News />
    </>
  );
};

export default About;
