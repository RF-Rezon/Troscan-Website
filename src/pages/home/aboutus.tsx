"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  return (
    <>
      <div
        ref={sectionRef}
        className="min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center max-w-[1284px] my-[100px] md:my-[140px] lg:my-[186px] md:space-x-10 px-4"
      >
        <div className="w-full lg:min-h-screen base-gold-text flex flex-col lg:space-y-[86px] space-y-[20px] md:px-6 lg:px-0">
          <div className="lg:mr-10">
            <p className="flex items-center space-x-1 md:pb-4 pb-1">
              <span className="base-gold-text">&#9679;</span>
              <span className="t-1 text-left">About us</span>
            </p>
            <p className="t-6 text-left">
              Where Spaces Inspire, and Design Comes Alive
            </p>
          </div>
          <div className="lg:mr-10">
            <p className="t-2-light md:pb-5 pb-3 text-left">
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.{" "}
            </p>
            <p className="t-2-light md:pb-6 pb-3 text-left">
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you&apos;re looking to reimagine your
              living room.
            </p>
            <button className="py-[14px] px-[26px] rounded-[5px] t-2 bg-[#8D493A] base-white-text hover:bg-[#a15341] cursor-pointer transition-all duration-300">
              More About us
            </button>
          </div>
        </div>
        <div className="self-start w-full h-[80vh] corner-round mt-6 lg:mt-0">
          <motion.img
            className="w-full h-full corner-round object-cover"
            style={{ scale }}
            src="/sec2/1.jpeg"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default About;
