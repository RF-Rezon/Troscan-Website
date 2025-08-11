"use client";
import { motion } from "framer-motion";
import whyus from "../../utils/jsons/whyus/whyus.json";
import { useRef } from "react";

const Why_Us = () => {
  const sectionRef = useRef(null);
  return (
    <div
      ref={sectionRef}
      className="min-h-screen mx-auto flex flex-col items-center justify-center max-w-[1284px] mt-[100px] md:mt-[140px] lg:mt-[80px] px-4"
    >
      <div className="text-center base-gold-text w-full md:w-[65%] mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center space-x-1 md:pb-4 pb-1 justify-center"
        >
          <span>&#9679;</span>
          <span className="t-1 text-left">Why Us?</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="t-6"
        >
          Elevate Your Space with <br /> Expertise & Elegance
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-start">
        {whyus.map((i, index) => (
          <motion.div
            key={i.alt}
            className="flex items-center justify-center flex-col p-8 md:p-12 bg-white h-full corner-round"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="w-[45px] h-[45px] base-white-bg corner-round">
              <img
                src={i.img}
                className="h-full w-full object-cover"
                alt={i.alt}
              />
            </div>
            <div className="text-center base-gold-text">
              <p className="t-3 md:pt-7 pt-4 md:pb-3 pb-2.5">{i.title}</p>
              <p className="t-1">{i.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Why_Us;
