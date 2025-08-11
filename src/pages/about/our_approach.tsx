"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Our_Approach = () => {
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
        className="min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center max-w-[1284px] mt-[50px] md:mt-[140px] lg:mt-[186px] lg:mb-[0px] md:space-x-10 px-4"
      >
        <div className="w-full lg:min-h-screen base-gold-text flex flex-col lg:space-y-[86px] space-y-[20px] md:px-6 lg:px-0">
          <div className="lg:mr-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center space-x-1 md:pb-4 pb-1"
            >
              <span className="base-gold-text">&#9679;</span>
              <span className="t-1 text-left">Our Approach</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="t-6 text-left"
            >
              A Vision Shaped by Elegance and Expertise
            </motion.p>
          </div>
          <div className="lg:mr-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="t-2-light md:pb-5 pb-3 text-left"
            >
              We believe every space should tell a story that reflects its
              unique personality and the people who inhabit it.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="t-2-light md:pb-6 pb-3 text-left"
            >
              With a thoughtful and intentional approach, we design spaces that
              exude balance, harmony, and authenticity. Our process is
              collaborative and meticulous, grounded in the philosophy that true
              beauty lies in the subtle details that make a space feel like
              home.
            </motion.p>
          </div>
        </div>
        <div className="self-start w-full h-[80vh] corner-round mt-6 lg:mt-0">
          <motion.img
            className="w-full h-full corner-round object-cover"
            style={{ scale }}
            src="/about/2.jpeg"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Our_Approach;
