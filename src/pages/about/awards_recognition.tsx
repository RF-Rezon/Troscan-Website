"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
const Awards_Recognition = () => {
  const sectionRef = useRef(null);
  const info = [
    {
      award: "Best Interior Design Agency",
      reason: "Awarded for outstanding innovation in interior design concepts",
      date: "2025",
    },
    {
      award: "Excellence in Custom Furniture",
      reason: "Recognized for creating bespoke, high-quality furniture pieces",
      date: "2024",
    },
    {
      award: "Outstanding Room Makeover",
      reason: "Honored for transforming spaces with impeccable style",
      date: "2023",
    },
    {
      award: "Top Emerging Design Studio",
      reason: "Celebrated for redefining modern interior aesthetics",
      date: "2022",
    },
    {
      award: "Client Choice Award",
      reason: "Voted for exceptional customer service and design expertise",
      date: "2021",
    },
  ];
  return (
    <>
      <div
        ref={sectionRef}
        className="min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center max-w-[1284px] my-[100px] md:my-[140px] md:mb-[180px] px-4"
      >
        <div className="w-full">
          <div className="mb-8 md:mb-12">
            <div className="base-gold-text self-start">
              <p className="flex items-center space-x-1 md:pb-4 pb-1">
                <span className="base-gold-text">&#9679;</span>
                <span className="t-1 text-left">Awards & Recognition</span>
              </p>
              <p className="t-6 text-left pb-3 md:pb-0">
                Our Achievements: <br /> Celebrating Excellence <br />
                in Design
              </p>
            </div>
          </div>
          <div>
            {info.map((i, index) => (
              <motion.div
                key={index}
                className="w-full border-b-[1.5px] border-b-[#8D493A] flex items-center justify-between t-3 base-gold-text py-4 flex-col md:flex-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <p className="md:w-[20%] w-[100%]">{i.award}</p>
                <p className="md:w-[30%] w-[100%]">{i.reason}</p>
                <p className="w-full md:w-min">{i.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards_Recognition;
