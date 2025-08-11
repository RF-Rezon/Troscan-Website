"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
const About_Header = () => {
  return (
    <>
      <div className="min-h-screen mx-auto flex flex-col items-center justify-center max-w-[1284px] mt-[50px] md:mt-[140px] lg:mt-[186px] px-4">
        <div className="w-[65%] pb-[70px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="t-header base-gold-text"
          >
            Crafting Timeless Spaces with Style
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="h-full w-full "
        >
          <img
            src="/about/1.jpeg"
            className="h-full w-full object-cover corner-round"
            alt="about header img"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About_Header;
